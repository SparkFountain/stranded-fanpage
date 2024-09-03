import { useEffect, useRef } from 'react';
import './Background.scss';
import {
  ArcRotateCamera,
  CubeTexture,
  Engine,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
  Vector3,
} from '@babylonjs/core';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

    /**
     * Create a basic scene
     */
    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    camera.position = new Vector3(0, 5, 100);
    camera.minZ = 0.1;
    camera.maxZ = 1000;
    camera.attachControl(canvasRef.current, true);

    const light = new HemisphericLight('light1', new Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    /**
     * Create a skybox
     */
    const skybox = MeshBuilder.CreateBox('skyBox', { size: 100.0 }, scene);
    const skyboxMaterial = new StandardMaterial('skyBox', scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;
    skyboxMaterial.disableLighting = true;
    skyboxMaterial.reflectionTexture = new CubeTexture(
      '/assets/babylonjs/skybox/TropicalSunnyDay',
      scene
    );
    skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
    skybox.material = skyboxMaterial;

    /**
     * Create a terrain
     */
    const terrain = MeshBuilder.CreateGroundFromHeightMap(
      'gdhm',
      '/assets/babylonjs/heightmap/heightmap.png',
      { width: 500, height: 500, subdivisions: 100, maxHeight: 10 },
      scene
    );
    // const terrainTexture = new Texture(
    //   '/assets/babylonjs/textures/desert.jpg',
    //   scene
    // );
    // terrain.diffuseTexture = terrainTexture;

    engine.runRenderLoop(() => {
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
  }, []);

  return (
    <canvas
      className="background"
      ref={canvasRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};
