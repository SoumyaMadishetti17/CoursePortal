
const firebaseConfig = {
  apiKey: "OJqlU6q8ny1K65EW2iC",
  authDomain: "courses-1987e.firebaseapp.com",
  databaseURL: "https://courses-1987e-default-rtdb.firebaseio.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export default db;
