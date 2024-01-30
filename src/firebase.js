import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAVZdN1Dmv2yo8kqdTS-ZmYl8kP1B6IOsE",
    authDomain: "fir-react-781a9.firebaseapp.com",
    projectId: "fir-react-781a9",
    storageBucket: "fir-react-781a9.appspot.com",
    messagingSenderId: "134121457437",
    appId: "1:134121457437:web:0d458ecd6284a3e2c503f4"   
}
firebase.initializeApp(config);
export default firebase;

