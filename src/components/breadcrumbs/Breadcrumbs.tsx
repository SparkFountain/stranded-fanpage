import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';
import './Breadcrumbs.scss';

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
        <>
          {breadcrumb.link ? (
            <Link to={breadcrumb.link}>
              <div className="breadcrumb">{breadcrumb.key}</div>
            </Link>
          ) : (
            <div className="breadcrumb">{breadcrumb.key}</div>
          )}

          {index < breadcrumbs.length - 1 && <div className="arrow"></div>}
        </>
      ))}
    </div>
  );
};
