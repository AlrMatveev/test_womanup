import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCljm6SNGK9IPSw6TemZJVcEyBSO9AXxZw",
  authDomain: "test-womanup.firebaseapp.com",
  databaseURL: "https://test-womanup-default-rtdb.firebaseio.com",
  projectId: "test-womanup",
  storageBucket: "test-womanup.appspot.com",
  messagingSenderId: "858640839112",
  appId: "1:858640839112:web:06dffa505040cb20c1d0fd",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
