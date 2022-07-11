import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar';


const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {
      
    } 
});
myApp.mount('#app')