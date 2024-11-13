import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCqS7URPBamxPUfrPEZ_6uYTSN7jSuw7pU",
    authDomain: "dashboard-firebase-database.firebaseapp.com",
    projectId: "dashboard-firebase-database",
    storageBucket: "dashboard-firebase-database.firebasestorage.app",
    messagingSenderId: "90976082752",
    appId: "1:90976082752:web:dcdb8cce38c3354b4938a5",
    measurementId: "G-8ZL821MZ1Z"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services for use in other parts of the app
export const db = getFirestore(app);
export const auth = getAuth(app);

export default App;