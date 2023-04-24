import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
//Importamos dos funciones de la librería Firebase que instalamos por consola. 
//initializeApp = se usa para inicializar una instancia Firebase en la app. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 

// Creamos un objeto con toda nuestra información de nuestra cuenta en Firebase. 
const firebaseConfig = {
    apiKey: "AIzaSyDf0I0tP2OLE2_HhEmvhCyjUnemRx62fE8",
    authDomain: "coder-productos.firebaseapp.com",
    projectId: "coder-productos",
    storageBucket: "coder-productos.appspot.com",
    messagingSenderId: "370253421023",
    appId: "1:370253421023:web:ad0f036e4837e279a4cc6a"
};

// Inicializamos Firebase y se pasa la configuración como argumento/ parámetro. Esto devuelve una instancia de Firebase. 
const app = initializeApp(firebaseConfig);


//Uso esa instancia de Firebase para obtener una instancia de FireStore.
export const db = getFirestore(app);

//Exporto la referencia a Firestore "db" para que este disponible en toda mi APP. 

