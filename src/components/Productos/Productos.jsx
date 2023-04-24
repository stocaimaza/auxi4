import React, { useEffect, useState } from 'react'
//Importamos los Hooks que vamos a utilizar. 

import { getDocs, collection, query, where } from 'firebase/firestore'
//Importamos las funciones que vamos a utilizar: 
//En FireSTore las collecciones tienen documentos en su interior. 
//collection me permite obtener una colección. 
//getDocs me permite obtener los documentos de una colección. 
//query la uso cuando quiero generar una consulta. 
//where la uso para agregar filtros a mis consultas. 

import { db } from '../../services/firebase/config'
//Importamos el objeto db que tiene mi configuración para conectarme a mi base de datos. 

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = collection(db, "productos");
        //en misProductos guardo la collección. 
        getDocs(misProductos)
        //getDocs me retorna una promesa. 
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            //Creo un nuevo array que contenga los datos del producto y además el id. 
    }, []); 
    //Obtengo los datos cuando se monta el componente. 

   /*  useEffect(() => {
        const misProductos = query(collection(db, "productos"), where("precio", "<", 200));
        getDocs(misProductos)
            .then((respuesta) => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, []); */

    return (
        <div>Productos
            {productos.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                    <button>Agregar al Carrillo</button>
                </div>
            ))}
        </div>
    )
}

export default Productos