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
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const oNsignInWithPopup = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
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
            'Coctail bar age check',
            `Hello, ${user.displayName} Can you confirm that you are 18 years of age or older?`,
            'Yes',
            'No',
            () => {
              // alert('Thank you.');
              setAdult(true);
            },
            () => {
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
