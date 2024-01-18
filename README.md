Partimos del repositorio de fundamentos React, de la rama creada `redux`

```sh
git clone -b redux https://github.com/KeepCodingWeb15/twitter-react.git
```

Arranco Sparrest

```sh
➜  cd '/Volumes/G-DRIVE with Thunderbolt/BOODCAMP/sparrest.js'
➜  sparrest git:(main) ✗ npm start                                            

> sparrest@1.0.0 start
> node index.js

JSON Server is running on port 8001
```

Arranco la aplicación

```js
npm start

Compiled successfully!

You can now view twitter-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.112:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

# Redux

Redux es una biblioteca popular de JavaScript para la gestión del **estado** en aplicaciones web, y es comúnmente utilizada junto con bibliotecas o frameworks como React.

> en el desarrollo de aplicaciones web y móviles, el "estado" es un concepto fundamental que se refiere a la información o los datos que una aplicación mantiene en un momento dado. El estado puede cambiar a lo largo del tiempo en respuesta a las acciones del usuario o a otros eventos.
> 
> **Características del Estado en una Aplicación**
> 
> * **Dinámico**: El estado puede cambiar a lo largo del tiempo. Por ejemplo, el estado de una aplicación puede cambiar cuando un usuario llena un formulario, cuando se reciben datos de una API, o cuando el usuario interactúa con la interfaz.
> * **Local o Global**: El estado puede ser local (limitado a un componente o parte específica de la aplicación) o global (disponible en toda la aplicación). En el contexto de React, por ejemplo, un estado local se maneja generalmente dentro de un componente, mientras que un estado global puede ser manejado por contextos o bibliotecas como Redux.
> * **Persistente o Efímero**: Algunos estados son persistentes, lo que significa que se guardan y se mantienen incluso después de cerrar la aplicación, como los datos de usuario guardados en una base de datos o almacenamiento local. Otros estados son efímeros y solo existen mientras la aplicación está activa, como el estado de un formulario antes de enviarlo.
>
>**Ejemplos de Estado en una Aplicación**
>
> * **Estado de la Interfaz de Usuario**: Por ejemplo, si un menú está abierto o cerrado, si un modal está activo, el valor actual de un campo de texto, etc.
> * **Datos del Usuario**: Información sobre el usuario actual, como sus preferencias, configuración, o estado de autenticación.
>
> * **Datos de la Aplicación**: Cualquier dato que la aplicación necesita para funcionar, como los resultados de una llamada a una API, una lista de elementos de un carrito de compras, etc.
>
>Gestión del Estado
>La gestión del estado es un aspecto crucial del desarrollo de aplicaciones, ya que determina cómo se comporta una aplicación en respuesta a diversas entradas y eventos. Las aplicaciones modernas utilizan varios enfoques y herramientas para manejar el estado de manera eficiente y efectiva, tales como useState en React, Vuex en Vue.js, o NgRx en Angular.


**¿Qué es Redux?**

Redux proporciona una forma de centralizar el estado y la lógica de una aplicación, lo que facilita el rastreo y la manipulación del estado a lo largo de toda la aplicación. En una aplicación de React sin Redux, el estado se gestiona típicamente en los componentes individuales, lo que puede llevar a una gestión del estado dispersa y complicada, especialmente en aplicaciones grandes y complejas.

¿Qué aporta Redux en proyectos de React?

1. **Gestión del Estado Predecible**: Redux ayuda a mantener el estado de tu aplicación en un solo lugar (el "store") y controla cómo ese estado se actualiza a lo largo del tiempo, haciendo que el estado de tu aplicación sea más predecible.
2. **Mantenibilidad Mejorada**: Al centralizar el estado y la lógica de la aplicación, Redux hace que el código sea más fácil de mantener. Los desarrolladores saben dónde encontrar y cómo modificar el estado de la aplicación.
3. **Depuración Más Fácil**: Redux ofrece herramientas poderosas para la depuración, como la habilidad de rastrear cada cambio en el estado a través de "acciones" y "reducers". Esto hace que sea más fácil entender cómo y cuándo cambió el estado.
4. **Persistencia del Estado y SSR**: Facilita la implementación de funcionalidades como la persistencia del estado (guardar el estado en el almacenamiento local del navegador) y el renderizado del lado del servidor (Server-Side Rendering, SSR), lo que puede ser complejo de manejar en aplicaciones grandes.
5. **Desacoplamiento de la Lógica de Estado**: Permite separar la lógica del estado y la UI, lo que puede llevar a un diseño de aplicación más claro y a una mejor separación de preocupaciones.
6. **Ecosistema y Comunidad**: Redux tiene un gran ecosistema y comunidad, con muchas bibliotecas y herramientas complementarias que pueden ayudar a resolver problemas comunes de manera eficiente.
7. **Facilita la Colaboración**: Al tener un enfoque estandarizado para manejar el estado, facilita la colaboración entre desarrolladores en un proyecto.

Consideraciones

* **Complejidad Adicional**: Para proyectos pequeños o simples, Redux puede ser excesivo y añadir una complejidad innecesaria.
* **Curva de Aprendizaje**: Aprender Redux lleva tiempo, especialmente para entender conceptos como reducers, middleware, store, acciones, etc.
* **Alternativas**: Con las recientes actualizaciones en React (como Context API y Hooks), algunas aplicaciones pueden no necesitar Redux para una gestión eficiente del estado. Sin embargo, Redux sigue siendo una opción sólida para aplicaciones complejas y de gran escala.


Instalemos esta extension en el navegador:

https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

INstalamos Redus

```sh
npm install redux --save
```

Creo carpeta `scr/store/index.js`

```js
import { createStore } from 'redux';         // nos permite crear un almacenredux

const reducer = (state = 0, action) => {     // función q decide como aplicar los cambios de estado
  // implement state logic                   // recibo valor del estado y la acción
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);           // nos creamos el almacen

console.log({store}); // vamos a ver que tiene
```

Voy al `index.js` y lo importo `import './store'; `

Por consola la aplicacoin nos enseña que es `store`

```sh
store: 
    @@observable: ƒ observable()
    dispatch:ƒ dispatch(action)
    getState: ƒ getState()
    replaceReducer: ƒ replaceReducer(nextReducer)
    subscribe: ƒ subscribe(listener)
    [[Prototype]]: Object
    [[Prototype]]: Object
```

Es un objeto con tres métodos `getState()` , `subscribe(listener)` , `dispatch(action)`

```js
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  // implement state logic
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

// cada vez que se produzco un cambio deribado de una accion ejecuta esta función
const callback = () => console.log('state', store.getState());
store.subscribe(callback); // me suscribo "acuerdate de llamarme cuando tengas un cambio"
callback();                // lanzo callback para ver mi estado por consola 'state 0'

store.dispatch({ type: 'increment' }); // ejecuto accion de incremento state 1
store.dispatch({ type: 'decrement' }); // ejecuto accion de decremento state 0
```

## Creando nuestro propio **createStore**

Es una funcion que devuelve tres métodos `getState()` , `subscribe(listener)` , `dispatch(action)`

```js
// import { createStore } from 'redux';

function createStore(reducer) {
  let state;                        // almacenamos el estado
  let listeners = [];               // cada vez que se suscriban guardamos

  function getState() {             // simplememntodevuelve el valor del estado
    return state;
  }

  function dispatch(action) {       
    state = reducer(state, action); // la logica está en reducer, sabe qué hacer con state y la accion
    listeners.forEach(l => l());    // por cada elemento lo ejecuta l()
  }

  function subscribe(listener) {    
    listeners.push(listener);       // almacenamos en el array

    return function () {            // filtra todos los listeners menos el que te he enviado
      listeners = listeners.filter(l => !listener);
    };
  }

  dispatch({ type: 'initialization' }); // ará que se ejecuten las funciones

  return {
    getState,
    subscribe,
    dispatch,
  };
}


const reducer = (state = 0, action) => {
  // implement state logic
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const callback = () => console.log('state', store.getState());
const unsubscribe = store.subscribe(callback);
callback();

store.dispatch({ type: 'increment' });

unsubscribe();
store.dispatch({ type: 'decrement' });
console.log(store.getState());
```


