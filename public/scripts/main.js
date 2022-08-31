// import { initializeApp, auth } from 'firebase/app';

const quotes = document.getElementById('quotes');
const error = document.getElementById('error');

const firebaseConfig = {
  apiKey: 'AIzaSyBHBlNZquONOcOWTC7N53UC0c7SrFMvAUU',
  authDomain: 'i-live-alone.firebaseapp.com',
  projectId: 'i-live-alone',
  storageBucket: 'i-live-alone.appspot.com',
  messagingSenderId: '194928878617',
  appId: '1:194928878617:web:acb203b656c9c0e22af688',
  measurementId: 'G-NJV2WH47XD',
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

const displayQuotes = (allQuotes) => {
  let html = '';
  for (const quote of allQuotes) {
    html += `<blockquote class='wp-block-quote'>
      <p>${quote.quote}.</p><cite>${quote.character}</cite>
    </blockquote>`;
  }
  return html;
};
