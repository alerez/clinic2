import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { createI18n } from 'vue-i18n'
// import messages from '@intlify/vite-plugin-vue-i18n/messages'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

// import ru from './locales/ru.json'
// import he from './locales/he.json'
//
// const messages = [
//   ru,
//   he
// ]

// const i18n = VueI18n.createI18n({
//   locale: 'ru', // set locale
//   fallbackLocale: 'he', // set fallback locale
//   messages, // set locale messages
//   // If you need to specify other options, you can set other options
//   // ...
// })

app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
