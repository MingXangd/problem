import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './modules/en.json'
import zh from './modules/zh.json'
import zh_tw from './modules/zh-CHT.json'
import ko from './modules/ko.json'
import indonesia from './modules/id.json'
import jp from './modules/ja.json'
import Deutsch from './modules/de.json'
import French from './modules/fr.json'
import Russian from './modules/ru.json'
import Portugal from './modules/pt.json'
import ar from './modules/ar.json'
import fa from './modules/fa.json'
import tl from './modules/tl.json'
import vi from './modules/vi.json'

Vue.use(VueI18n)

const locale = localStorage.getItem('language') || 'en'

export default new VueI18n({
  locale: locale, // 默认选择的语言
  messages: {
    en,
    zh,
    zh_tw,
    ko,
    indonesia,
    jp,
    Deutsch,
    French,
    Russian,
    Portugal,
    vi,
    tl
    // ar,
    // fa
  },
  // 这个是后面加的！
  silentTranslationWarn: true
})
