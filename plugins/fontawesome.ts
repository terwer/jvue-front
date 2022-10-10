import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faSms, faHome, faBolt, faBook, faJar,faUser,faGear} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)
library.add(faFacebook)
library.add(faSms)
library.add(faHome)
library.add(faBook)
library.add(faBolt)
library.add(faJar)
library.add(faUser)
library.add(faGear)

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})