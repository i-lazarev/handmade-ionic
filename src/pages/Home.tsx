import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import { person, call } from "ionicons/icons";

import "./Home.css";
import Table1 from "../Images/table1.jpg";
import Decor1 from "../Images/decor1.jpg";

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>!handmade</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonRow>
              <IonCol size="9">
                <IonTitle size="large">!handmade</IonTitle>
              </IonCol>
              <IonCol size="1">
                <IonModal isOpen={showModal} cssClass="my-custom-class">
                  <div
                    style={{
                      marginTop: "10%",
                      color: "black",
                      display: "flex",
                     justifyContent:"center",
                      flexDirection: "column",
                    }}
                  >
                    <IonRow>
                      <IonCol >
                        <h1>Vasile Lazarev:</h1>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="1">
                        <IonIcon  icon={call}/>
                      </IonCol>
                      <IonCol size="9">
                        <h3>+373 79787776</h3>
                      </IonCol>
                    </IonRow>
                  </div>
                  <IonButton onClick={() => setShowModal(false)}>
                    Close
                  </IonButton>
                </IonModal>
                <IonButton onClick={() => setShowModal(true)}>
                  <IonIcon icon={person} />
                </IonButton>
              </IonCol>
            </IonRow>
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
            {/* <svg
              className="image image1"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="m71.784 161.454c0-47.454 36.608-86.054 81.605-86.054s81.6 38.606 81.6 86.059a6 6 0 0 0 12 0c0-54.07-41.99-98.059-93.6-98.059-51.442 0-93.32 43.7-93.6 97.521-.01.139-.021.278-.021.419v275.27h-37.768a6 6 0 0 0 0 12h93.75a6 6 0 0 0 0-12h-43.98v-274.866c.004-.097.014-.192.014-.29z" />
              <path d="m242.088 228.568a9.941 9.941 0 0 0 8.282-4.691h-16.565a9.941 9.941 0 0 0 8.283 4.691z" />
              <path d="m281.867 208.5a40.875 40.875 0 0 0 -81.75 0v3.375h81.75zm-50.511-19.4a40.9 40.9 0 0 0 -10.656 11.077 6 6 0 1 1 -10.051-6.557 52.855 52.855 0 0 1 13.765-14.306 6 6 0 0 1 6.939 9.79z" />
              <path d="m467.663 304.2a13.275 13.275 0 0 0 -13.451-13.06h-109.794a13.3 13.3 0 0 0 -9.5 3.9 13.616 13.616 0 0 0 -3.906 9.764l-.012 70.181 118.485.033v-2.35a28.838 28.838 0 0 1 18.181-26.642z" />
              <path d="m201.713 374.949 117.281.032-.027-70.782a13.275 13.275 0 0 0 -13.451-13.062h-110.416a13.276 13.276 0 0 0 -13.452 13.06v41.144a28.884 28.884 0 0 1 20.065 27.327z" />
              <path d="m478.741 355.876a17.05 17.05 0 0 0 -17.259 16.792v63.937h34.518v-63.937a17.049 17.049 0 0 0 -17.259-16.792z" />
              <path d="m324.998 386.983h-.002-.001-.002l-123.28-.034v35.663l247.769.076v-35.67l-124.481-.035z" />
              <path d="m172.454 355.876a17.051 17.051 0 0 0 -17.26 16.792v63.937h34.519v-63.937a17.049 17.049 0 0 0 -17.259-16.792z" />
            </svg> */}
            <img className="image image1" src={Table1} alt="" />
          </div>
          <div className="imgDiv2 div2 animate__animated animate__fadeIn">
            {/* <svg
              className="image image2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <g>
                <path d="M81.425,80.928V54.836a4.58,4.58,0,0,0-1.472-8.921H72.59a4.584,4.584,0,0,0-1.619,8.876,7.1,7.1,0,0,1-6.939,5.645H24.2a7.1,7.1,0,0,1-6.938-5.646,4.584,4.584,0,0,0-1.62-8.875H8.283a4.58,4.58,0,0,0-1.471,8.921V80.928A7.758,7.758,0,0,0,0,88.616v27.738a1.751,1.751,0,0,0,1.75,1.75H8.556a1.751,1.751,0,0,0,1.75-1.75,7.1,7.1,0,0,1,7.087-7.087H70.844a7.094,7.094,0,0,1,7.086,7.087,1.751,1.751,0,0,0,1.75,1.75h6.806a1.75,1.75,0,0,0,1.75-1.75V88.616A7.758,7.758,0,0,0,81.425,80.928ZM72.59,49.415h7.363a1.093,1.093,0,1,1,0,2.185H72.59a1.093,1.093,0,0,1,0-2.185ZM24.2,63.936H64.032A10.6,10.6,0,0,0,74.474,55.1h3.451V80.866H73.858V78.42a9.761,9.761,0,0,0-9.75-9.75H52.118a9.742,9.742,0,0,0-8,4.192,9.741,9.741,0,0,0-8-4.192H24.128a9.761,9.761,0,0,0-9.75,9.75v2.446H10.311V55.1h3.451A10.6,10.6,0,0,0,24.2,63.936Zm-6.326,16.93V78.42a6.257,6.257,0,0,1,6.25-6.25h11.99a6.257,6.257,0,0,1,6.25,6.25v2.446Zm27.99-2.446a6.257,6.257,0,0,1,6.25-6.25h11.99a6.257,6.257,0,0,1,6.25,6.25v2.446H45.868ZM8.283,49.415h7.363a1.093,1.093,0,1,1,0,2.185H8.283a1.093,1.093,0,1,1,0-2.185ZM3.5,88.616a4.255,4.255,0,0,1,4.25-4.25H80.486a4.255,4.255,0,0,1,4.25,4.25v6.94H3.5ZM84.736,114.6h-3.45a10.6,10.6,0,0,0-10.442-8.837H17.393A10.6,10.6,0,0,0,6.951,114.6H3.5V99.056H84.736Z" />
                <path d="M126.25,80.866H112.656v-6.1h6.814a1.75,1.75,0,0,0,1.712-2.111l-3-14.25a1.75,1.75,0,0,0-1.713-1.389H105.345a1.749,1.749,0,0,0-1.712,1.389l-3,14.25a1.751,1.751,0,0,0,1.713,2.111h6.813v6.1H95.563a1.749,1.749,0,0,0-1.75,1.75v33.738a1.75,1.75,0,0,0,1.75,1.75H103.5a1.751,1.751,0,0,0,1.75-1.75V101.672h11.312v14.682a1.751,1.751,0,0,0,1.75,1.75h7.938a1.751,1.751,0,0,0,1.75-1.75V82.616A1.75,1.75,0,0,0,126.25,80.866ZM106.765,60.518h8.282l2.265,10.75H104.5ZM97.313,84.366H124.5V98.172H97.313ZM101.75,114.6H97.313V101.672h4.437Zm22.75,0h-4.438V101.672H124.5Z" />
                <path d="M107.469,93.019h6.875a1.75,1.75,0,0,0,0-3.5h-6.875a1.75,1.75,0,0,0,0,3.5Z" />
                <path d="M44.118,39.271A14.688,14.688,0,1,0,29.431,24.583,14.7,14.7,0,0,0,44.118,39.271Zm0-25.875A11.188,11.188,0,1,1,32.931,24.583,11.2,11.2,0,0,1,44.118,13.4Z" />
                <path d="M46.357,29.3a1.75,1.75,0,0,0,2.475-2.474l-2.964-2.964V19.646a1.75,1.75,0,0,0-3.5,0v4.937a1.752,1.752,0,0,0,.513,1.238Z" />
              </g>
            </svg> */}

            <img className="image image2" src={Decor1} alt="" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
