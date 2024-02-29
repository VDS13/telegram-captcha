<h1 align="center">🛡️telegram-captcha🛡️</h1>

<div align="center">

Protect telegram groups from automated bots.

[![Bot API](https://img.shields.io/badge/Bot%20API-v.6.3-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![npm package](https://img.shields.io/npm/v/telegram-captcha?logo=npm&style=flat-square)](https://www.npmjs.org/package/telegram-captcha)
[![npm download](https://img.shields.io/npm/dt/telegram-captcha)](https://www.npmjs.org/package/telegram-captcha)

</div>

## 📙 Description

After joining/request to join a telegram group, the user is sent a captcha message, which must be completed within 5 minutes. Otherwise, the user will be banned from the group for a day.

<div align="center">
<img src="https://github.com/VDS13/telegram-captcha/blob/main/img/demo1.gif" width="300"/>
<img src="https://github.com/VDS13/telegram-captcha/blob/main/img/demo2.gif" width="300"/>
</div>

Supported languages:
* English
* French
* Russian
* Spanish
* Italian
* German

Supported Telegram bot libraries:
* [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)

## 📦 Install
```sh
npm i telegram-captcha
```

## [🎚️ Changelog](https://github.com/VDS13/telegram-captcha/blob/main/CHANGELOG.md)

## [🗺 API](https://github.com/VDS13/telegram-captcha/blob/main/API.md)

## 🚀 Usage

### node-telegram-bot-api

#### Open group
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import { GroupCaptcha } from 'telegram-captcha';

const captcha = new GroupCaptcha(TOKEN, {polling: true}, {
    size: 6,
    language: 'de',
    time_for_enter: 3
});

captcha.bot.on("new_chat_members", (msg) => captcha.generateCaptcha(msg));
captcha.bot.on("callback_query", (query) => captcha.clickKeyboard(query));
```

#### Group with requests to join
```js
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';

import { GroupCaptchaRTJ } from 'telegram-captcha';

const captcha = new GroupCaptchaRTJ(TOKEN, {polling: true}, {
    size: 5,
    language: 'es',
    time_for_enter: 7
});

captcha.bot.on("chat_join_request", (cjr) => captcha.generateCaptcha(cjr));
captcha.bot.on("callback_query", (query) => captcha.clickKeyboard(query));
```

## ⚙️ Default options 

### GroupCaptcha/GroupCaptchaRTJ
```javascript
{
    size: 4,                     //Captcha length < 9 (number of characters)
    language: 'en',              //Language (en/es/de/es/fr/it)
    time_for_enter: 5            //Time for enter captcha (in minutes)
}
```

## ☑️ Todo:
- [x] Captcha for an open group
- [x] Captcha for a group with requests to join
- [x] Option `"size"`
- [ ] Option `"ban time"`
- [x] Option `"time for enter captcha"`
- [ ] reCaptcha
- [ ] Other types of captcha

## License

**The MIT License (MIT)**

Copyright © 2023-2024 Dmitry Vyazin