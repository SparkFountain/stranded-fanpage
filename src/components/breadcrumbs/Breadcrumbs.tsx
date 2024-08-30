import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';
import './Breadcrumbs.scss';

// TODO: later, words must be replaced by pairs of key and link value
export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
        <>
          <Link to={breadcrumb.link}>
            <div className="breadcrumb">{breadcrumb.key}</div>
          </Link>
          {index < breadcrumbs.length - 1 && <div className="arrow"></div>}
        </>
      ))}
    </div>
  );
};
