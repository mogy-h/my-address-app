import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEE3CCW-kYiy0efYE5bXRRJwS2PfIxZPk",
  authDomain: "my-address-pj-90316.firebaseapp.com",
  projectId: "my-address-pj-90316",
  storageBucket: "my-address-pj-90316.appspot.com",
  messagingSenderId: "500836310741",
  appId: "1:500836310741:web:a8fcc388c84b7187660c5c",
  measurementId: "G-PSWB7KRGKM",
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
