const VueI18NExtract = require("vue-i18n-extract").default;
const vuefiles = VueI18NExtract.parseVueFiles("./src/**/*.vue");

// const localefiles = VueI18NExtract.parseLanguageFiles("./src/locales/*.json");
// const log = VueI18NExtract.extractI18NReport(vuefiles, localefiles);
const report = {};
vuefiles.forEach(key => (report[key.path] = key.path));
VueI18NExtract.writeReportToFile(report, "testExtract.json");
