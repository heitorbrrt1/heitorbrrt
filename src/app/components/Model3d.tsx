import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface Model3DProps {
  onLoaded?: () => void;
}

function PlanetModel({ onLoaded }: { onLoaded?: () => void }) {
  const planetRef = useRef<THREE.Group | null>(null)

  const { scene, animations } = useGLTF('/world.glb')

  const { actions, names } = useAnimations(animations, scene)

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]]
      if (action) {
        action.reset().play()
      }
    }

    if (scene) {
        (scene as unknown as THREE.Scene).background = null;
      
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.side = THREE.DoubleSide;
            child.frustumCulled = false;
          }
        });
      }

    if (onLoaded) {
      onLoaded()
    }

    return () => {
      actions[names[0]]?.stop()
    }
  }, [actions, names, onLoaded, scene])

  useFrame((_state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.x += delta * 0.3
      planetRef.current.rotation.y += delta * -0.3
      planetRef.current.rotation.z += delta * 0.3
    }
  })

  return <primitive 
    ref={planetRef} 
    object={scene} 
    scale={3.5} 
    position={[0, -1, 0]}
  />
}

export default function Model3D({ onLoaded }: Model3DProps) {
  return (
    <Canvas 
      camera={{ 
        position: [0, 0, 10], 
        fov: 45, 
        near: 0.1, 
        far: 1000 
      }} 
      style={{ background: 'black', marginTop: '2rem' }}
      gl={{ alpha: true, antialias: true }}
    >
      <color attach='background' args={['transparent']} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <PlanetModel onLoaded={onLoaded} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  )
} 