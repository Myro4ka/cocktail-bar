import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { firebaseConfig } from '../firebase-conf';
import { getAuth } from 'firebase/auth';
// инициализация приложения
const app = initializeApp(firebaseConfig);
// создаем новую базу данных
const COCTAILS_KEY = 'coctails';
const INGRID_KEY = 'ingrid';
const db = getDatabase();
export const getUserId = () => {
  const auth = getAuth();
  console.log(auth);
  return auth.currentUser.uid;
};
// Принимает обьект и пушить необходимые данные
export const sendData = (data = {}) => {
  try {
    // Сохраняем данные
    push(ref(db, 'userdata'), data);
  } catch (error) {
    console.log(error);
  }
};
// Получение данных
export const getData = () => {
  return get(ref(db, `${getUserId()}/${COCTAILS_KEY}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};
export const getIngrid = () => {
  return get(ref(db, `${getUserId()}/${INGRID_KEY}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};
export const setCoctails = id => {
  return push(ref(db, `${getUserId()}/${COCTAILS_KEY}`), id)
    .then(() => {
      // Data saved successfully!
    })
    .catch(error => {
      // The write failed...
    });
};
export const setIngrid = id => {
  return push(ref(db, `${getUserId()}/${INGRID_KEY}`), id)
    .then(() => {
      // Data saved successfully!
    })
    .catch(error => {
      // The write failed...
    });
};

export const deleteIngrid = id => {
  getIngrid().then(response => {
    Object.entries(response).forEach(([key, value]) => {
      if (value === id) {
        remove(ref(db, `${getUserId()}/${INGRID_KEY}/${key}`));
      }
    });
    console.log(response);
  });
};
