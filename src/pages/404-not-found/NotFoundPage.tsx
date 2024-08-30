import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const NotFoundPage = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Diese Seite gibt es nicht',
    },
  ];

  return <App toolbar breadcrumbs={breadcrumbs}></App>;
};
