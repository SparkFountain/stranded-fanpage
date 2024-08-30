import { ReactNode } from 'react';
import { Toolbar } from '../toolbar/Toolbar';
import { Background } from '../background/Background';

export const App = ({
  toolbar,
  children,
}: {
  toolbar: boolean;
  children?: ReactNode;
}) => {
  return (
    <div id="app">
      <Background>
        {toolbar && (
          <Toolbar
            breadcrumbs={[
              {
                key: 'Stranded II',
                link: '/',
              },
              {
                key: 'Flora und Fauna',
                link: '/',
              },
              {
                key: 'Löwe',
                link: '/',
              },
            ]}
          />
        )}
      </Background>

      {/* {children} */}
    </div>
  );
};
