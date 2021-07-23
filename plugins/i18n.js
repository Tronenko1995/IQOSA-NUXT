export default function ({ app }) {
    // beforeLanguageSwitch called right before setting a new locale
    app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
      console.log(oldLocale, newLocale, isInitialSetup)
    }
    // onLanguageSwitched called right after a new locale has been set
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
      // console.log(oldLocale, newLocale)
      if (process.client) {
        const DATE = new Date();
        DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000);
        document.cookie = 'i18n_redirected=' + newLocale + '; path=/; expires=' + DATE.toUTCString();
        console.log('смена локали')
      }
    }
  }