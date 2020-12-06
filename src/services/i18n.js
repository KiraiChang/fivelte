import {
    dictionary,
    locale,
    _
} from 'svelte-i18n';
function setupI18n({
                       withLocale: _locale
                   } = {
    withLocale: 'en'
}) {
    dictionary.set({
        en: {
            "login": {
                "title": "Login Fivelte",
                "account": "Account/Email",
                "password": "Password",
                "login": "Login",
            },
            "header": {
                "home": "Home",
                "contact": "Contact Us",
                "about": "About"
            }
        }
    });
    locale.set(_locale);
}
export {
    _,
    setupI18n
};
