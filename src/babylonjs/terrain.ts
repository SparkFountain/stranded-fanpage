import {
  Color3,
  MeshBuilder,
  Scene,
  StandardMaterial,
  Texture,
} from '@babylonjs/core';

export const loadTerrain = (
  heightmapPath: string,
  texturePath: string,
  scene: Scene
) => {
  const terrain = MeshBuilder.CreateGroundFromHeightMap(
    'gdhm',
    `/assets/babylonjs/heightmap/${heightmapPath}`,
    { width: 500, height: 500, subdivisions: 100, maxHeight: 18 },
    scene
  );
  const terrainMaterial = new StandardMaterial('groundMaterial', scene);
  const terrainTexture = new Texture(
    `/assets/babylonjs/textures/${texturePath}`,
    scene
  );
  terrainTexture.uScale = 20; // Repeat the texture 5 times along the horizontal (U) axis
  terrainTexture.vScale = 20; // Repeat the texture 5 times along the vertical (V) axis
  terrainMaterial.diffuseTexture = terrainTexture;
  terrainMaterial.diffuseColor = new Color3(0.5, 1, 0.5);
  terrain.material = terrainMaterial;

  return terrain;
};
