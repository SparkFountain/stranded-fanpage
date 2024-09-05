import { Engine, Scene, FreeCamera, Vector3 } from '@babylonjs/core';
import '@babylonjs/loaders/glTF';
import { MutableRefObject, useEffect, useRef } from 'react';
import { loadSkyBox } from '../babylonjs/skybox';
import { loadTerrain } from '../babylonjs/terrain';
import { createAmbientLight } from '../babylonjs/light';
import { addPalmTrees, movePalm } from '../babylonjs/environment';

export const useBabylonScene = (
  canvasRef: MutableRefObject<HTMLCanvasElement | null>,
  engineRef: MutableRefObject<Engine | null>,
  sceneRef: MutableRefObject<Scene | null>
) => {
  useEffect(() => {
    if (!canvasRef.current || !engineRef) return;

    console.log('>>> Engine initialized');

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    // Assign engine and scene to refs
    engineRef.current = engine;
    sceneRef.current = scene;

    /**
     * Create a basic scene
     */
    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    camera.position = new Vector3(70, 50, -50);
    camera.rotation = new Vector3(Math.PI / 10, 0, 0);
    camera.minZ = 0.1;
    camera.maxZ = 1000;
    camera.attachControl(canvasRef.current, true);

    // WASD controls
    camera.keysUp.push(87); // W key
    camera.keysDown.push(83); // S key
    camera.keysLeft.push(65); // A key
    camera.keysRight.push(68); // D key

    /**
     * Create ambient light
     */
    createAmbientLight(scene);

    /**
     * Create a skybox
     */
    loadSkyBox('TropicalSunnyDay', scene);

    /**
     * Create a terrain
     */
    loadTerrain('heightmap.png', 'desert.jpg', scene);

    /**
     * Create a scene loader and add some models
     */
    for (let i = 1; i <= 5; i++) {
      addPalmTrees(`palm-0${i}.gltf`, 5, scene);
    }

    engine.runRenderLoop(() => {
      movePalm(scene);
      scene.render();
    });

    const handleResize = () => {
      engine.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      engine.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);
};
