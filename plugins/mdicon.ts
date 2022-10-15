import mdiVue from 'mdi-vue/v3'
import {
    mdiVuejs,
    mdiLanguageCss3,
    mdiLanguageJavascript,
    mdiLanguageTypescript,
    mdiReact,
    mdiGit,
    mdiLanguageHtml5,
    mdiDocker,
    mdiSass,
    mdiLanguagePhp,
    mdiLanguagePython,
    mdiLaravel,
    mdiGitlab,
    mdiCentos,
    mdiDebian,
    mdiWordpress,
    mdiFedora,
    mdiNuxt,
    mdiChevronLeft,
    mdiChevronRight,
    mdiCloseCircleOutline,
    mdiGithub
} from '@mdi/js'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(mdiVue, {
        icons: {
            mdiVuejs,
            mdiLanguageCss3,
            mdiLanguageJavascript,
            mdiLanguageTypescript,
            mdiReact,
            mdiGit,
            mdiLanguageHtml5,
            mdiDocker,
            mdiSass,
            mdiLanguagePhp,
            mdiLanguagePython,
            mdiLaravel,
            mdiGitlab,
            mdiCentos,
            mdiDebian,
            mdiWordpress,
            mdiFedora,
            mdiNuxt,
            mdiChevronLeft,
            mdiChevronRight,
            mdiCloseCircleOutline,
            mdiGithub
        }
    })
})
