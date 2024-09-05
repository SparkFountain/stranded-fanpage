import {
  AbstractMesh,
  ISceneLoaderAsyncResult,
  Mesh,
  Scene,
  SceneLoader,
  Vector3,
} from '@babylonjs/core';

export const addPalmTrees = (path: string, amount: number, scene: Scene) => {
  SceneLoader.ImportMeshAsync(null, '/assets/babylonjs/models/', path, scene)
    .then((result: ISceneLoaderAsyncResult) => {
      const baseMeshes = result.meshes.slice(1) as Mesh[];

      for (let i = 0; i < amount; i++) {
        // random position
        const randomPosition: Vector3 = new Vector3(
          Math.random() * 150,
          5,
          Math.random() * 150
        );

        baseMeshes.forEach((mesh: Mesh, index: number) => {
          mesh.isVisible = false;
          const instance = mesh.createInstance(`${path}-${index}`);

          // Set instance position or other properties
          instance.position = randomPosition;
          instance.scaling = new Vector3(0.4, 0.4, 0.4);
          instance.rotation = new Vector3(Math.PI / 2, 0, 0);
        });
      }
    })
    .catch((error) => {
      console.error('>>> Failed to load model', error);
    });
};

export const movePalm = (scene: Scene) => {
  // find all palm meshes
  const palmMeshes: AbstractMesh[] = scene.meshes.filter(
    (mesh: AbstractMesh) => {
      return mesh.name.startsWith('palm');
    }
  );

  palmMeshes.forEach((palm) => {
    const sin = Math.sin(Date.now() / 3000);
    const rotation = (Math.PI * sin) / 25;

    palm.rotation = new Vector3(Math.PI / 2 + rotation, 0, rotation);
  });
};
