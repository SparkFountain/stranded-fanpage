import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

import './Toolbar.scss';

export const Toolbar = ({
  logo,
  breadcrumbs,
}: {
  logo?: boolean;
  breadcrumbs: Breadcrumb[];
}) => {
  return (
    <div className="toolbar">
      <div className="toolbar-visual">
        <div className="top-row">
          <div className="corner"></div>
          <div className="border-horizontal"></div>
          <div className="corner"></div>
        </div>
        <div className="middle-row">
          <div className="border-vertical"></div>
          <div className="border-vertical"></div>
        </div>
        <div className="bottom-row">
          <div className="corner"></div>
          <div className="border-horizontal"></div>
          <div className="corner"></div>
        </div>
      </div>

      <div className="toolbar-content">
        <div className="content-group">
          {logo && (
            <Link to="/">
              <div className="icon home"></div>
            </Link>
          )}

          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        <div className="toolbar-icons">
          <div className="icon s1"></div>
          <div className="icon s2"></div>
          <div className="icon s3"></div>
          <div className="icon search"></div>
          <div className="icon map"></div>
        </div>
      </div>
    </div>
  );
};
