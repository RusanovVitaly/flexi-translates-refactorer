import {appendItem,updateItem} from "./api.js";

const translationsConfig = {
    "en": {
        "translation": {
            "login": "Login",
            "password": "Password",
            "password_need_to_be": "Password need to be at least 8 characters, contain one number and one uppercase letter",
            "repeat_password": "Repeat password",
            "pass_not_same": "Passwords don't match",
            "token_expired": "Token expired",
            "check_email": "An email with a link to recover your password was sent to your email address",
            "user_not_found": "No user with this email was found",
            "password_success": "Password successfully saved",
            "remember": "Remember me",
            "signin": "Sign in",
            "restore": "Forgot password?",
            "needfill": "This field is required",
            "select": "Select user",
            "auth_error": "Authorization error, incorrect login and\/or password, please try again",
            "page_not_found": "Requested page was not found",
            "send": "Send",
            "another_account": "Another account",
            "select_user": "Select user",
            "exit": "Exit",
            "get_back": "Come back",
            "error": "An error"
        }
    },
    "es": {
        "translation": {
            "login": null,
            "password": null,
            "password_need_to_be": null,
            "repeat_password": null,
            "pass_not_same": null,
            "token_expired": null,
            "check_email": null,
            "user_not_found": null,
            "password_success": null,
            "remember": null,
            "signin": null,
            "restore": null,
            "needfill": null,
            "select": null,
            "auth_error": null,
            "page_not_found": null,
            "send": null,
            "another_account": null,
            "select_user": null,
            "exit": null,
            "get_back": null,
            "error": null
        }
    },
    "de": {
        "translation": {
            "login": "Login",
            "password": "Passwort",
            "password_need_to_be": "Das Passwort muss aus mindestens 8 Zeichen und einem Großbuchstaben bestehen",
            "repeat_password": "Wiederholen Sie das Passwort",
            "pass_not_same": "Passwörter stimmen nicht überein",
            "token_expired": "Das Wiederherstellungs-Token ist veraltet",
            "check_email": "Eine E-Mail mit einem Link zur Wiederherstellung Ihres Passworts wurde an Ihre E-Mail-Adresse gesendet.",
            "user_not_found": "Es wurde kein Benutzer mit dieser E-Mail gefunden",
            "password_success": "Passwort erfolgreich gespeichert",
            "remember": "Erinnere dich an mich",
            "signin": "Anmelden",
            "restore": "Passwort vergessen?",
            "needfill": "Dieses Feld ist erforderlich",
            "select": "Sonstiges Konto",
            "auth_error": "Autorisierungsfehler, falsches Login und\/oder Passwort, bitte versuchen Sie es erneut",
            "page_not_found": "Die angeforderte Seite wurde nicht gefunden.",
            "send": "Senden Sie",
            "another_account": "Sonstiges Konto",
            "select_user": "Benutzer auswählen",
            "exit": "Gehe zu",
            "get_back": "Zurückgehen",
            "error": "An error"
        }
    },
    "it": {
        "translation": {
            "login": "User name",
            "password": "Password",
            "password_need_to_be": "Password need to be at least 8 characters, contain one number and one uppercase letter",
            "repeat_password": "Password",
            "pass_not_same": "Passwords don't match",
            "token_expired": "Token expired",
            "check_email": "An email with a link to recover your password was sent to your email address",
            "user_not_found": "No user with this email was found",
            "password_success": "Password successfully saved",
            "remember": "Ricordami",
            "signin": "Accedi",
            "restore": "Password dimenticata?",
            "needfill": "Campo obbligatorio",
            "select": "Campo obbligatorio",
            "auth_error": "Errore di autorizzazione, login e\/o password errati, riprovare",
            "page_not_found": "La pagina richiesta non è stata trovata.",
            "send": "Send",
            "another_account": "Altro conto",
            "select_user": "Select user",
            "exit": "Exit",
            "get_back": "Come back",
            "error": "An error"
        }
    },
    "ru": {
        "translation": {
            "login": "Логин",
            "password": "Пароль",
            "password_need_to_be": "Пароль должен быть как минимум 8 симоволов и одну заглавную букву",
            "repeat_password": "Повторите пароль",
            "pass_not_same": "Пароли не совпадают",
            "token_expired": "Токен восстановления устарел",
            "check_email": "Письмо с ссылкой на восстановление вашего пароля было отправлено на ваш email",
            "user_not_found": "Пользователь с таким email не найден",
            "password_success": "Пароль успешно сохранён",
            "remember": "Запомнить меня",
            "signin": "Войти",
            "restore": "Забыли пароль?",
            "needfill": "Поле обязательно для заполнения",
            "select": "Другой аккаунт",
            "auth_error": "Ошибка авторизации, неправильно введён логин и\/или пароль, попробуйте ещё раз!",
            "page_not_found": "Запрашиваемая страница не найдена",
            "send": "Отправить",
            "another_account": "Другой аккаунт",
            "select_user": "Выбрать пользователя",
            "exit": "Выйти",
            "get_back": "Вернуться",
            "error": "Ошибка"
        }
    }
}
//translates - сам объект с переводами
//keys - ключи которые будут служить алиасами f.e. Object.keys(translates.en.translation);

const getI18ForBack = (translates,aliases) => {
  const new_translates = [];
  aliases.map(alias=>{
      new_translates.push({
          alias,
          ru_translation:translates?.ru?.translation[alias]??"",
          en_translation:translates?.en?.translation[alias]??"",
          de_translation:translates?.de?.translation[alias]??"",
          it_translation:translates?.it?.translation[alias]??"",
          es_translation:translates?.es?.translation[alias]??"",
      })
  })
    return new_translates;
}
const saveI18 = (translates,tag) => {
    translates.map(async item=>{
        await appendItem(item.alias)
                .then( res=>{
                    updateItem(res.id,item.ru_translation,item.en_translation,item.de_translation,item.es_translation,item.it_translation,[tag])
                })
    })
}



saveI18(getI18ForBack(translationsConfig,Object.keys(translationsConfig.en.translation)),2);


