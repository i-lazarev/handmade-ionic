import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
 
  IonImg,
  
} from "@ionic/react";

import "./Bedroom.css";
import Image1 from "../Images/Bedroom/architect_steel_bed_frame-anthracite-metallic-only-overstock.png";
import Image2 from "../Images/Bedroom/canopy.jpg";
import Image3 from "../Images/Bedroom/Contemporary-Modern-Metal-Bed.jpg";
import Image4 from "../Images/Bedroom/d13steelglassendtable-1.jpg";
import Image5 from "../Images/Bedroom/P16.jpg";
import Image6 from "../Images/Bedroom/rgb-boltz2-3850-s_2.jpg";

const Bedroom: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bedroom</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bedroom</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image1} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image2} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image3} />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image4} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image5} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image6} />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Bedroom;
