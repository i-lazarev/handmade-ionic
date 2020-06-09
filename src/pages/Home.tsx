import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';
import Table1 from "../Images/table1.jpg";
import Decor1 from "../Images/decor1.jpg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>!handmade</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="textContainer">
        <h1 id="texth1" className="animate__animated animate__slideInRight">
          Are you ready
          <br /> to see your home in completely new colors?
        </h1>
        <p id="textp" className="animate__animated animate__slideInLeft">
          We will help you to think differently
          <br /> about your space
        </p>
      </div>
      <div id="imageContainer">
        <div className="imgDiv div1 animate__animated animate__fadeIn">
          <img className="image image1" src={Table1} alt="" />
        </div>
        <div className="imgDiv2 div2 animate__animated animate__fadeIn">
          <img className="image image2" src={Decor1} alt="" />
        </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
