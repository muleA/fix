/* eslint-disable no-undef */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';


i18n
  .use(initReactI18next)
  // .use(i18nextPlugin) // passes i18n down to react-i18next
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`./translations/${language}/${language}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    defaultNS: 'common',
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // translationStats: {
    //   // optional options, if not provided it will guess based on your i18next config
    //   queryStringParam: 'showtranslations',
    //   sourceLng: 'en',
    //   targetLngs: ['en', 'am'],
    //   preserveEmptyStrings: false,
    // },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
