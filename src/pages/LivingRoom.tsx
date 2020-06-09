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

import "./LivingRoom.css";
import Image1 from "../Images/Living/living1.jpg";
import Image2 from "../Images/Living/living2.jpg";
import Image3 from "../Images/Living/living3.jpg";
import Image4 from "../Images/Living/living4.jpg";
import Image5 from "../Images/Living/living5.jpg";
import Image6 from "../Images/Living/living6.jpg";
import Image7 from "../Images/Living/living7.jpg";
import Image8 from "../Images/Living/living8.jpg";

const LivingRoom: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LivingRoom</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LivingRoom</IonTitle>
          </IonToolbar>
        </IonHeader>
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
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image7} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonImg src={Image8} />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LivingRoom;
