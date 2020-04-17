export const fallbackLanguage = "en";

export const languages = ["en", "nl"];

export const validateLanguage = lang => {
  return languages.includes(lang) ? lang : fallbackLanguage;
};

export const getLanguage = lang => {
  let language = lang.match(/[a-zA-Z\-]{2,10}/g)[0];
  language = language.split("-")[0];

  return validateLanguage(language);
};

export const configureLanguage = ctx => {
  const { req } = ctx;

  const language = req
    ? req.headers["accept-language"]
    : window.navigator.language;

  let lang = getLanguage(language, ctx);

  return lang;
};
