import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        'Password':'Password',
        'PasswordRepeat':'PasswordRepeat',
        'Display Name':'Display Name',
        'Username':'Username',
        'Sign Up':'Sign Up',
        'Password mismatch' :'Password mismatch',
        'Login':'Login',
        'Logout':'Logout'

      },
    },
    tr: {
      translations: {
        'Display Name':'Görünecek Ad',
        'Password':'Şifre',
        'PasswordRepeat':'Şifreyi Tekrarla',
        'Username':'Kullanıcı Adı',
        'Sign Up':'Kayıt Ol',
        'Password mismatch':'Aynı şifreyi giriniz.',
        'Login':'Giriş Yap',
        'Logout':'Çıkış Yap'
      },
    },
  },
  fallbackLng:'en',
  ns:['translations'],
  defaultNS:'translations',
  keySeparator:false,
  interpolation:{
        escapeValue:false,
        formatSeparator:'',


  },
  react:{

    wait: true
  }
});
export default i18next;