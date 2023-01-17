/*
 * @Description: demo
 * @Date: 2022-6-10 15:54:48
 * @Author: wddzzz
 * @LastEditors: wddzzz
 * @LastEditTime: 2022-6-10 15:54:48
 */
const { configSet, setI18nLang, setI18nTranslate } = require('./i18n-translate')
// 有道翻译api
const YD_APPKEY = '31f676884633269a'
const YD_KEY = 'VqGC21g9P9gb2uhGQlFkqIrNqrDyu6r9'

/** 有道支持翻译语种列表参考
 * URL:https://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/API%E6%96%87%E6%A1%A3/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-API%E6%96%87%E6%A1%A3.html#section-10
 * 简体中文：zh-CHS
 * 繁体中文：zh-CHT
 * 英文：en
 * 日文：ja
 * 韩文：ko
 * 法文：fr
 * 西班牙文：es
 * 葡萄牙文：pt
 * 意大利文：it
 * 俄文：ru
 * 越南文：vi
 * 德文：de
 * 土耳其语：tr
 * ...
 */

/**
 * @description: 将中文json文件翻译写入其他语言json文件
 * @param {String} dir/语言文件目录
 * @param {String} zh/中文语言文件路径
 * @param {String} other/其他语言文件路径
 * @param {String} lang/语言种类，默认英文
 * @param {String} type/翻译类型，默认全部翻译 all/全部翻译 new/新增翻译
 * @return {type}
 */
const translate = async (dir, zh, en, fromLang, toLang, type) => {
  configSet({ YD_APPKEY, YD_KEY })
  await setI18nLang(dir, zh)
  await setI18nTranslate(zh, en, fromLang, toLang, type)
}
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/zh-CHT.json', 'zh', 'zh-CHT', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/en.json', 'zh', 'en', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/ko.json', 'zh', 'ko', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/id.json', 'zh', 'id', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/ja.json', 'zh', 'ja', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/de.json', 'zh', 'de', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/fr.json', 'zh', 'fr', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/ru.json', 'zh', 'ru', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/pt.json', 'zh', 'pt', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/tl.json', 'zh', 'tl', 'new')
translate('src/i18n/modules', 'src/i18n/modules/zh.json', 'src/i18n/modules/vi.json', 'zh', 'vi', 'new')
