import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { firebaseConfig } from '../firebase-conf';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);

const COCKTAIL_KEY = 'coctails';
const INGRID_KEY = 'ingrid';
const ISADULT = 'isadult';
const db = getDatabase();
// console.log(getDatabase());
export const getUserId = () => {
  const auth = getAuth();

  return auth.currentUser.uid;
};
export const getUsersId = () => {
  return get(ref(db)).then(snapshot => {
    if (snapshot.exists()) {
      // console.log(snapshot.val());

      return snapshot.val();
    }
  });
};

// getUsersId();
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
      console.log(db);
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
export const setAdult = isAdult => {
  return push(ref(db, `${getUserId()}/${ISADULT}`), isAdult)
    .then(() => {
      // Data saved successfully!
    })
    .catch(error => {
      console.error(error);
    });
};
export const getAdult = () => {
  return get(ref(db, `${getUserId()}/${ISADULT}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
        // console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
};
