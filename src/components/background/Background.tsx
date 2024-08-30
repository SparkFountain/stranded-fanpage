import { ReactNode } from 'react';
import './Background.scss';

export const Background = ({ children }: { children?: ReactNode }) => {
  return <div className="background">{children}</div>;
};
