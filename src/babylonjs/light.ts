import {
  HemisphericLight,
  PointLight,
  Scene,
  ShadowGenerator,
  SpotLight,
  Vector3,
} from '@babylonjs/core';

export const createAmbientLight = (scene: Scene) => {
  const light = new HemisphericLight(
    'ambientLight',
    new Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
};

export const createSunLight = (scene: Scene): ShadowGenerator => {
  const sunLight = new PointLight('sun', new Vector3(0, 100, 0), scene);
  // const sunLight = new SpotLight(
  //   'sun',
  //   new Vector3(0, 100, 0),
  //   new Vector3(0, 0, 0),
  //   0,
  //   1,
  //   scene
  // );

  // create shadows
  scene.shadowsEnabled = true;
  const shadowGenerator = new ShadowGenerator(1024, sunLight);
  shadowGenerator.useBlurExponentialShadowMap = true;
  shadowGenerator.useKernelBlur = true;
  shadowGenerator.blurKernel = 64;
  shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_HIGH;

  return shadowGenerator;
};
