import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCBWkxnVqP3ER_3OPfud0JNUIsVYAqINIk",
    authDomain: "imagenes-e3ddd.firebaseapp.com",
    databaseURL: "https://imagenes-e3ddd.firebaseio.com",
    projectId: "imagenes-e3ddd",
    storageBucket: "imagenes-e3ddd.appspot.com",
    messagingSenderId: "1015352553680"
};

export default firebase.initializeApp(config)