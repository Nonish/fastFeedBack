import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '@/utils/constant';

if (!firebase.apps?.length) {
   firebase.initializeApp(firebaseConfig);
}

export default firebase;