import { Link } from 'react-router-dom';
import { App } from '../../components/app/App';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

import './LandingPage.scss';
import { Trans } from '@lingui/macro';

export const LandingPage = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: <Trans>welcome</Trans>,
    },
  ];

  return (
    <App toolbar logo={false} breadcrumbs={breadcrumbs}>
      <div className="landing-container">
        <div className="logo"></div>
        <div className="enter"></div>
      </div>

      <div className="info">
        <Trans>enter</Trans>
      </div>

      <div className="disclaimer-container">
        <Link to="/imprint">
          <Trans>imprint</Trans>
        </Link>
        <Link to="/privacy-policy">
          <Trans>privacy-policy</Trans>
        </Link>
      </div>
    </App>
  );
};
