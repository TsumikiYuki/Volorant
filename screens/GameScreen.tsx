import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

interface GameScreenProps {
  onExit: () => void;
}

const MAX_AMMO = 10;
const RELOAD_TIME = 1500; // in ms

const GameScreen: React.FC<GameScreenProps> = ({ onExit }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<PointerLockControls | null>(null);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [ammo, setAmmo] = useState(MAX_AMMO);
  const [isReloading, setIsReloading] = useState(false);

  // Refs for animation values to avoid re-renders in game loop
  const recoilVelocity = useRef(new THREE.Vector3());

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111827);
    scene.fog = new THREE.Fog(0x111827, 0, 100);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.y = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode.appendChild(renderer.domElement);

    // Weapon Model
    const gun = new THREE.Group();
    const gunMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.3, metalness: 0.6 });
    const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.6), gunMaterial);
    barrel.position.z = -0.2;
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.15), gunMaterial);
    handle.position.y = -0.15;
    handle.position.z = 0.2;
    handle.rotation.x = -0.2;
    gun.add(barrel, handle);
    
    // Muzzle flash
    const muzzleFlash = new THREE.PointLight(0xffaa33, 50, 2, 2);
    muzzleFlash.position.set(0, 0.05, -0.5);
    muzzleFlash.visible = false;
    gun.add(muzzleFlash);
    
    const baseGunPosition = new THREE.Vector3(0.4, -0.3, -0.8);
    gun.position.copy(baseGunPosition);
    gun.rotation.y = -0.1;
    camera.add(gun);
    scene.add(camera);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5).normalize();
    scene.add(directionalLight);

    // Controls
    const controls = new PointerLockControls(camera, renderer.domElement);
    controlsRef.current = controls;
    const onPointerLockChange = () => setIsPaused(!controls.isLocked);
    const onPointerLockError = () => console.error('PointerLockControls: Unable to lock pointer.');
    document.addEventListener('pointerlockchange', onPointerLockChange);
    document.addEventListener('pointerlockerror', onPointerLockError);
    
    // Floor
    const floorGeometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x374151 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = - Math.PI / 2;
    scene.add(floor);

    // Targets
    const targets: THREE.Group[] = [];
    const loader = new GLTFLoader();

    loader.load(
      'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/anime-girl/model.glb',
      (gltf) => {
        const baseModel = gltf.scene;
        
        // Calculate scale to make model 1.7 units tall (avg human height)
        const box = new THREE.Box3().setFromObject(baseModel);
        const size = box.getSize(new THREE.Vector3());
        const desiredHeight = 1.7;
        const scale = desiredHeight / size.y;
        baseModel.scale.set(scale, scale, scale);
        
        const modelHeight = size.y * scale;

        baseModel.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                child.castShadow = true;
            }
        });

        for (let i = 0; i < 10; i++) {
          const newTarget = baseModel.clone();
          newTarget.position.set(
            (Math.random() - 0.5) * 50,
            modelHeight / 2, // Position model on the floor (origin is center)
            (Math.random() - 0.5) * 50
          );
          newTarget.rotation.y = Math.random() * Math.PI * 2; // Randomize rotation
          scene.add(newTarget);
          targets.push(newTarget);
        }
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the model:', error);
      }
    );
    
    // Player state
    const moveState = { forward: 0, right: 0 };
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();

    const reload = () => {
        if (isReloading || ammo === MAX_AMMO) return;
        setIsReloading(true);
        setTimeout(() => {
            setAmmo(MAX_AMMO);
            setIsReloading(false);
        }, RELOAD_TIME);
    }

    // Event listeners for movement
    const onKeyDown = (event: KeyboardEvent) => {
        switch (event.code) {
            case 'KeyW': moveState.forward = 1; break;
            case 'KeyS': moveState.forward = -1; break;
            case 'KeyA': moveState.right = -1; break;
            case 'KeyD': moveState.right = 1; break;
            case 'KeyR': reload(); break;
        }
    };
    const onKeyUp = (event: KeyboardEvent) => {
        switch (event.code) {
            case 'KeyW': if(moveState.forward === 1) moveState.forward = 0; break;
            case 'KeyS': if(moveState.forward === -1) moveState.forward = 0; break;
            case 'KeyA': if(moveState.right === -1) moveState.right = 0; break;
            case 'KeyD': if(moveState.right === 1) moveState.right = 0; break;
        }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // Shooting
    const raycaster = new THREE.Raycaster();
    const onMouseDown = (event: MouseEvent) => {
        if (controls.isLocked && event.button === 0) {
            if (isReloading || ammo <= 0) return;
            
            setAmmo(a => a - 1);
            
            // Recoil
            recoilVelocity.current.z += 0.2; // Push gun back
            
            // Muzzle flash
            muzzleFlash.visible = true;
            setTimeout(() => { muzzleFlash.visible = false; }, 60);

            raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
            const intersects = raycaster.intersectObjects(targets, true);

            if (intersects.length > 0) {
                let hitObject = intersects[0].object;
                
                let targetGroup: THREE.Group | null = null;
                let current: THREE.Object3D | null = hitObject;
                while(current) {
                    if(targets.includes(current as THREE.Group)) {
                        targetGroup = current as THREE.Group;
                        break;
                    }
                    current = current.parent;
                }
            
                if (targetGroup) {
                    targetGroup.position.set(
                        (Math.random() - 0.5) * 50,
                        targetGroup.position.y, // Keep original height
                        (Math.random() - 0.5) * 50
                    );
                    targetGroup.rotation.y = Math.random() * Math.PI * 2;
                    setScore(s => s + 10);
                }
            }
        }
    };
    document.addEventListener('mousedown', onMouseDown);

    // Game loop
    let lastTime = performance.now();
    const animate = () => {
        requestAnimationFrame(animate);

        const time = performance.now();
        const delta = (time - lastTime) / 1000;

        if (controls.isLocked) {
            velocity.x -= velocity.x * 10.0 * delta;
            velocity.z -= velocity.z * 10.0 * delta;

            direction.z = moveState.forward;
            direction.x = moveState.right;
            direction.normalize();

            if (moveState.forward !== 0) velocity.z -= direction.z * 40.0 * delta;
            if (moveState.right !== 0) velocity.x -= direction.x * 40.0 * delta;
            
            controls.moveRight(-velocity.x * delta);
            controls.moveForward(-velocity.z * delta);
        }
        
        // Gun animation
        gun.position.z += recoilVelocity.current.z;
        recoilVelocity.current.lerp(new THREE.Vector3(0,0,0), 0.2); // Smoothly dampen recoil
        gun.position.lerp(baseGunPosition, 0.1); // Return to base position

        // Target animation
        targets.forEach(target => {
            target.rotation.y += 0.005;
        });

        renderer.render(scene, camera);
        lastTime = time;
    };
    animate();

    // Handle window resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('pointerlockchange', onPointerLockChange);
        document.removeEventListener('pointerlockerror', onPointerLockError);
        if (controlsRef.current?.isLocked) controlsRef.current.unlock();
        if (mountNode && renderer.domElement.parentNode === mountNode) {
          mountNode.removeChild(renderer.domElement);
        }
        scene.clear();
        renderer.dispose();
    };
  }, []); 

  const handleCanvasClick = () => {
      controlsRef.current?.lock();
  };

  return (
    <div className="relative w-full h-screen cursor-pointer" onClick={isPaused ? handleCanvasClick : undefined}>
      <div ref={mountRef} className="w-full h-full" />
      
      {/* HUD */}
      <div className="absolute inset-0 pointer-events-none text-white">
        {/* Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400 text-3xl opacity-70">+</div>
        
        {/* Score */}
        <div className="absolute top-8 left-8">
            <p className="text-sm uppercase tracking-widest text-cyan-400">Score</p>
            <p className="text-5xl font-black">{score}</p>
        </div>
        
        {/* Ammo Counter */}
        <div className="absolute bottom-8 right-8 text-right">
            <p className="text-5xl font-black tracking-tighter">
                {isReloading ? <span className="text-xl text-yellow-400">RECARREGANDO...</span> : ammo}
                <span className="text-3xl text-gray-400 align-baseline"> / {MAX_AMMO}</span>
            </p>
        </div>

        {/* Exit Button */}
        <button 
            onClick={onExit}
            className="absolute top-8 right-8 z-50 flex items-center gap-2 text-white uppercase text-lg font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity pointer-events-auto"
        >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z" clipRule="evenodd" />
            </svg>
            Sair do Jogo
        </button>

        {isPaused && (
            <div className="absolute inset-0 bg-gray-900/80 flex flex-col items-center justify-center text-center backdrop-blur-sm">
                <h2 className="text-6xl font-black uppercase text-white tracking-widest">Jogo Pausado</h2>
                <p className="mt-4 text-2xl text-cyan-400">Clique para jogar</p>
                <div className="mt-8 font-sans text-gray-300 max-w-md">
                    <p className="font-bold text-lg text-white mb-2">Controles:</p>
                    <p><span className="font-bold text-cyan-400">W, A, S, D:</span> Mover</p>
                    <p><span className="font-bold text-cyan-400">Mouse:</span> Olhar</p>
                    <p><span className="font-bold text-cyan-400">Clique Esquerdo:</span> Atirar</p>
                    <p><span className="font-bold text-cyan-400">R:</span> Recarregar</p>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;