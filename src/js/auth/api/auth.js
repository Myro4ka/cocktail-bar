import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from '../firebase-conf';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { setAdult } from '.';
import { getUsersId } from '.';
import { Report } from 'notiflix/build/notiflix-report-aio';
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();
Confirm.init({
  className: 'notiflix-confirm',
  width: '600px',
  zindex: 4003,
  position: 'center',
  distance: '10px',
  backgroundColor: '#f8f8f8',
  borderRadius: '4px',
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  rtl: false,
  fontFamily: 'Roboto',
  fontWeight: 400,
  cssAnimation: true,
  cssAnimationDuration: 300,
  cssAnimationStyle: 'fade',
  plainText: true,
  titleColor: '#FD5103',
  titleFontSize: '18px',
  titleMaxLength: 34,
  messageColor: '#1e1e1e',
  messageFontSize: '20px',
  messageMaxLength: 110,
  buttonsFontSize: '15px',
  buttonsMaxLength: 34,
  okButtonColor: '#f8f8f8',
  okButtonBackground: '#FD5103',
  cancelButtonColor: '#202025',
  cancelButtonBackground: '#a9a9a9',
});
Report.init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#f8f8f8',
  borderRadius: '4px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  backOverlayClickToClose: false,
  fontFamily: 'Roboto',
  svgSize: '110px',
  plainText: true,
  titleFontSize: '18px',
  titleMaxLength: 34,
  messageFontSize: '20px',
  messageMaxLength: 400,
  buttonFontSize: '14px',
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: 'fade',
  success: {
    svgColor: '#32c682',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#32c682',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },
  failure: {
    svgColor: '#ff5549',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#ff5549',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },
  warning: {
    svgColor: '#eebf31',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#eebf31',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
  info: {
    svgColor: '#FE7031',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#FE7031',
    buttonColor: '#fff',
    backOverlayColor: 'rgba(32, 32, 37, 0.2)',
  },
});
export const oNsignInWithPopup = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      onAuthStateChanged(auth, user => {
        console.log(user.uid);
        getUsersId().then(response => {
          const arrayUserId = [];
          Object.entries(response).forEach(([key, value]) => {
            arrayUserId.push(key);
          });
          if (arrayUserId.includes(user.uid)) {
            return;
          }
          Confirm.show(
            'Coctails Bar age verification',
            `Hello, ${user.displayName}. Can you confirm that you are 18 years of age or older?`,
            'Yes',
            'No',
            () => {
              setAdult(true);
            },
            () => {
              Report.info(
                'Notification',
                `${user.displayName},You can only order non-alcoholic cocktails`,
                'Okay'
              );
              setAdult(false);
            },
            {}
          );
        });
      });
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      // console.log(auth);
    })
    .catch(error => {
      // An error happened.
    });
};
onAuthStateChanged(auth, user => {
  if (!user) {
    return;
  }
  console.log('user :>> ', user.uid);
});
