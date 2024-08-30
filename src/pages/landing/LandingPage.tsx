import { Link } from 'react-router-dom';
import { App } from '../../components/app/App';

import './LandingPage.scss';
import { Breadcrumb } from '../../definitions/interfaces/breadcrumb.interface';

export const LandingPage = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      key: 'Willkommen auf der Stranded Fanpage!',
    },
  ];

  return (
    <App toolbar logo={false} breadcrumbs={breadcrumbs}>
      <div className="landing-container">
        <div className="logo"></div>
        <div className="enter"></div>
      </div>

      <div className="info">
        Klicke auf den Rettungsring, wenn du bereit bist.
      </div>

      <div className="disclaimer-container">
        <Link to="/imprint">Impressum</Link>
        <Link to="/privacy-policy">Datenschutz</Link>
      </div>
    </App>
  );
};
