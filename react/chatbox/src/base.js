import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLx4Klx1KLjGBUGNQSbgv7TsaUQq1wn1A",
  authDomain: "chatbox-react-e1a47.firebaseapp.com",
  databaseURL: "https://chatbox-react-e1a47.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export {firebaseApp};
export default base;
