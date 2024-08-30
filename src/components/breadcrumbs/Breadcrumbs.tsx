import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';
import './Breadcrumbs.scss';
import React from 'react';

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb: Breadcrumb, index: number) => (
        <React.Fragment key={index}>
          {breadcrumb.link ? (
            <Link to={breadcrumb.link}>
              <div className="breadcrumb">{breadcrumb.key}</div>
            </Link>
          ) : (
            <div className="breadcrumb">{breadcrumb.key}</div>
          )}

          {index < breadcrumbs.length - 1 && <div className="arrow"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};
