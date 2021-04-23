importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBMYqwh6rsV-I3xhe0iFZfdBdUkfJBYNDU",
    authDomain: "notification-test-48ea4.firebaseapp.com",
    projectId: "notification-test-48ea4",
    storageBucket: "notification-test-48ea4.appspot.com",
    messagingSenderId: "553402261734",
    appId: "1:553402261734:web:1a463ac6c0ec24b2d39b27",
    measurementId: "G-QR4P202KE5"
});
const messaging = firebase.messaging();