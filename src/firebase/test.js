import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('cJcOzLLuBl4rrSSzO61N').collection('cartItems').doc('97MdZ3br7k3w9fDe8CUW');
firestore.doc('/users/cJcOzLLuBl4rrSSzO61N/cartItems/97MdZ3br7k3w9fDe8CUW');
firestore.collection('users/cJcOzLLuBl4rrSSzO61N/cartItems');