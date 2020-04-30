import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbKJKIB3ihGduB8FZ1ieDnmifqjdj6fNE",
  authDomain: "recettes-7085f.firebaseapp.com",
  databaseURL:  "https://recettes-7085f.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
