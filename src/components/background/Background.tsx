import { useRef } from 'react';
import './Background.scss';
import { useBabylonScene } from '../../custom-hooks/use-babylon-scene';

export const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useBabylonScene(canvasRef);

  return (
    <canvas
      className="background"
      ref={canvasRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};
