import { useEffect, useRef } from 'react';
import './Background.scss';
import {
  ArcRotateCamera,
  CubeTexture,
  Engine,
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

    // Create a basic js scene
    const camera = new ArcRotateCamera(
      'camera1',
      Math.PI / 2,
      Math.PI / 4,
      4,
      Vector3.Zero(),
      scene
    );
    camera.position = new Vector3(0, 5, 10);
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
     * Create a sphere
     */
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, scene);
    // sphere.position.y = 1;

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
