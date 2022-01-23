import * as THREE from 'three';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { MeshLine, MeshLineMaterial } from './MeshLine';
import { Scene } from './Scene';
import { MeshLine, MeshLineMaterial, MeshLineRaycast } from './MeshLine';

extend({ MeshLine, MeshLineMaterial, MeshLineRaycast, OrbitControls });

export function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl, size, camera }) => {
          if (size.width < 600) {
            camera.position.z = 45;
          }
          gl.setClearColor(new THREE.Color('#020207'));
        }}>
        <Scene />
      </Canvas>
    </div>
  );
}