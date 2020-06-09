import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid,
    IonRow,
    IonCol,
    IonItem,
   
    IonImg, } from '@ionic/react';
 
import './Decor.css';
import Image1 from "../Images/Decor/8c3e0a7b5ad80bb9ea4dd40527e19b95.jpg";
import Image2 from "../Images/Decor/9.jpg";
import Image3 from "../Images/Decor/9c46539d216c174e231bea42df98cfb6.jpg";
import Image4 from "../Images/Decor/black-metal-wood-round-wall-shelf_MM27422.jpg";
import Image5 from "../Images/Decor/decor1.jpg";
import Image6 from "../Images/Decor/233445.jpg";

const Decor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Decor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Decor</IonTitle>
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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Decor;
