import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const Stranded2Page = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Stranded II',
      link: '/stranded-2',
    },
  ];

  return <App breadcrumbs={breadcrumbs}>Welcome to Stranded II!</App>;
};
