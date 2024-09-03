import { HemisphericLight, Scene, Vector3 } from '@babylonjs/core';

export const createAmbientLight = (scene: Scene) => {
  const light = new HemisphericLight(
    'ambientLight',
    new Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
};
