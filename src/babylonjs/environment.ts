import {
  AbstractMesh,
  Mesh,
  Scene,
  SceneLoader,
  Vector3,
} from '@babylonjs/core';

export const addPalmTrees = (path: string, amount: number, scene: Scene) => {
  SceneLoader.ImportMesh(
    '',
    '/assets/babylonjs/models/',
    path,
    scene,
    (newMeshes: AbstractMesh[]) => {
      console.log('>>> model loaded', newMeshes);

      const baseMesh = newMeshes[0] as Mesh;
      baseMesh.isVisible = false;

      for (let i = 0; i < amount; i++) {
        const instance = baseMesh.createInstance(`palm${i}`);

        // Set instance position or other properties
        instance.position = new Vector3(
          Math.random() * 10,
          0,
          Math.random() * 10
        );
        instance.scaling = new Vector3(1, 1, 1);
      }
    }
  );
};
