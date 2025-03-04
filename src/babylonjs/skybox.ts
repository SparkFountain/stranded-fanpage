import {
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Texture,
} from '@babylonjs/core';

export const loadSkyBox = (path: string, scene: any) => {
  const skybox = MeshBuilder.CreateBox('skyBox', { size: 1000.0 }, scene);
  const skyboxMaterial = new StandardMaterial('skyBox', scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;
  skybox.infiniteDistance = true;
  skyboxMaterial.disableLighting = true;
  skyboxMaterial.reflectionTexture = new CubeTexture(
    `/assets/babylonjs/skybox/${path}`,
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  skybox.material = skyboxMaterial;

  return skybox;
};
