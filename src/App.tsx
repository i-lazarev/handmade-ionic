import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bed, headset, home, rose } from 'ionicons/icons';



import Home from './pages/Home';
import Bedroom from './pages/Bedroom';
import LivingRoom from './pages/LivingRoom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Decor from './pages/Decor';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/bedroom" component={Bedroom} exact={true} />
          <Route path="/living-room" component={LivingRoom} />
          <Route path="/decor" component={Decor} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="bedroom" href="/bedroom">
            <IonIcon icon={bed} />
            <IonLabel>Bedroom</IonLabel>
          </IonTabButton>
          <IonTabButton tab="living-room" href="/living-room">
            <IonIcon  icon={headset} />
            <IonLabel>Living Room</IonLabel>
          </IonTabButton>
          <IonTabButton tab="decor" href="/decor">
            <IonIcon  icon={rose} />
            <IonLabel>Decor</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
