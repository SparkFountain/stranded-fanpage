import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const Stranded1Page = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Stranded I',
      link: '/stranded-1',
    },
  ];

  return <App breadcrumbs={breadcrumbs}>Welcome to Stranded I!</App>;
};
