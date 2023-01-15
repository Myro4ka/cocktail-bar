import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { firebaseConfig } from '../firebase-conf';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const COCKTAIL_KEY = 'coctails';
const INGRID_KEY = 'ingrid';
const db = getDatabase();

export const getUserId = () => {
  const auth = getAuth();
  // console.log(auth);
  console.log(auth.currentUser.displayName);

  return auth.currentUser.uid;
};

// Получение коктейля
export const getCocktails = () => {
  return get(ref(db, `${getUserId()}/${COCKTAIL_KEY}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        // console.log(snapshot);
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

// Получение ингрид
export const getIngrids = () => {
  return get(ref(db, `${getUserId()}/${INGRID_KEY}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};

// Добавление Коктейля
export const setCoctail = id => {
  return push(ref(db, `${getUserId()}/${COCKTAIL_KEY}`), id)
    .then(() => {
      // Data saved successfully!
    })
    .catch(error => {
      console.error(error);
    });
};
// Добавление Ингридиента
export const setIngrid = id => {
  return push(ref(db, `${getUserId()}/${INGRID_KEY}`), id)
    .then(() => {
      // Data saved successfully!
    })
    .catch(error => {
      console.error(error);
    });
};
// Удаление
export const deleteCocktail = id => {
  // console.log(id);
  getCocktails().then(response => {
    Object.entries(response).forEach(([key, value]) => {
      if (value === id) {
        remove(ref(db, `${getUserId()}/${COCKTAIL_KEY}/${key}`));
      }
    });
    console.log(response);
  });
};

export const deleteIngrid = id => {
  getIngrid().then(response => {
    Object.entries(response).forEach(([key, value]) => {
      if (value === id) {
        remove(ref(db, `${getUserId()}/${INGRID_KEY}/${key}`));
      }
    });
    // console.log(response);
  });
};
