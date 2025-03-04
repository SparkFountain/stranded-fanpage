import { MutableRefObject, useRef } from 'react';
import './Background.scss';
import { useBabylonScene } from '../../custom-hooks/use-babylon-scene';
import { Engine, Scene } from '@babylonjs/core';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Create engine and scene refs to be used by other hooks
  let engineRef: MutableRefObject<Engine | null> = useRef<Engine | null>(null);
  let sceneRef: MutableRefObject<Scene | null> = useRef<Scene | null>(null);

  useBabylonScene(canvasRef, engineRef, sceneRef);

  return (
    <canvas
      className="background"
      ref={canvasRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};
