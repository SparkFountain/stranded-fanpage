import { ReactNode } from 'react';
import { Toolbar } from '../toolbar/Toolbar';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const App = ({
  toolbar,
  logo,
  breadcrumbs,
  children,
}: {
  toolbar?: boolean;
  logo?: boolean;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}) => {
  // set default parameters
  if (toolbar === undefined) {
    toolbar = true;
  }
  if (logo === undefined) {
    logo = true;
  }
  if (breadcrumbs === undefined) {
    breadcrumbs = [];
  }
  if (children === undefined) {
    children = null;
  }

  return (
    <div id="app">
      {toolbar && <Toolbar logo={logo} breadcrumbs={breadcrumbs!} />}
      {children}
    </div>
  );
};
