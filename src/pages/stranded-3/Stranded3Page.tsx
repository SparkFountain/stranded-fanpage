import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const Stranded3Page = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Stranded III',
      link: '/stranded-3',
    },
  ];

  return <App breadcrumbs={breadcrumbs}>Welcome to Stranded II!</App>;
};
