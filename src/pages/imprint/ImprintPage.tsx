import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const ImprintPage = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Impressum',
    },
  ];

  return <App breadcrumbs={breadcrumbs}>Imprint</App>;
};
