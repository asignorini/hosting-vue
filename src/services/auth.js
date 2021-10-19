import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth'

const auth = getAuth();

let userData = {
    email: null,
    displayName: null
}

onAuthStateChanged(auth, user => {
    if(user) {
        userData = {
            email: user.email,
            displayName: user.displayName,
        };
    } else {
        userData = {
            email: null,
            displayName: null,
        };
    }
    notifyAll();
});

let observers = [];

export function authStateSubscribe(observerCallback) {
    observers.push(observerCallback);
    notify(observerCallback);
    console.log("Observer agregado, stack actual: ", observers);
    return () => {
        observers = observers.filter(callback => callback !== observerCallback);
    }
}

function notify(callback) {
    callback({...userData});
}

function notifyAll() {
    observers.forEach(obs => notify(obs));
}

//register user  

export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        console.log("Usuario registrado", userCredential);
    })
    .catch((error) => {
      console.error("Error al registrar el usuario", error);
    });
}

//Login user
export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log("Usuario logueado ", userCredential);
        })
        .catch(err => {
            console.error("Error al intentar loguear al usuario: ", err);
        });
}

//Logout user
export function logout() {
    return signOut(auth);
}

//Update user
export function updateUserProfile(newData) {
    return updateProfile(auth.currentUser, newData)
        .then(() => {
            userData.displayName = newData.displayName;
            notifyAll();
        })
        .catch(err => {
            console.error("Error al actualizar el perfil: ", err);
        });
}