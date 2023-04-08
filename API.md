 API Reference

* [GroupCaptcha](#GroupCaptcha)
* [GroupCaptchaRTJ](#GroupCaptchaRTJ)

<a name="GroupCaptcha"></a>

### GroupCaptcha
Captcha for open groups.

**Kind**: global class  

* [GroupCaptcha](#GroupCaptcha)
    * [new GroupCaptcha(bot, [options])](#new_GroupCaptcha)
    * _instance_
        * [.generateCaptcha(msg)](#GroupCaptcha+generateCaptcha)
        * [.clickKeyboard(query)](#GroupCaptcha+clickKeyboard)
### new GroupCaptcha(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bot | <code>TelegramBot</code> | <code>false</code> | TelegramBot class instance (node-telegram-bot-api) |
| [options] | <code>Object</code> |  |  |
| [options.language] | <code>String</code> | <code>"en"</code> | Language. |
| [options.size] | <code>Number</code> | <code>4</code> | Captcha length < 9 (number of characters). |
| [options.time_for_enter] | <code>Number</code> | <code>5</code> | Time for enter captcha (in minutes). |

<a name="GroupCaptcha+generateCaptcha"></a>

### captcha.generateCaptcha(msg)
Generating and sending a calendar to the user. Sets the current month and year.

**Kind**: instance method of [<code>GroupCaptcha</code>](#GroupCaptcha)  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>Object</code> | https://core.telegram.org/bots/api#message |

<a name="GroupCaptcha+clickKeyboard"></a>

### captcha.clickKeyboard(query)
Generating and sending a time selector to the user.

**Kind**: instance method of [<code>GroupCaptcha</code>](#GroupCaptcha)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | https://core.telegram.org/bots/api#callbackquery |

<a name="GroupCaptchaRTJ"></a>

### GroupCaptchaRTJ
Captcha for groups with requests to join.

**Kind**: global class  

* [GroupCaptchaRTJ](#GroupCaptchaRTJ)
    * [new GroupCaptchaRTJ(bot, [options])](#new_GroupCaptchaRTJ)
    * _instance_
        * [.generateCaptcha(cjr)](#GroupCaptchaRTJ+generateCaptcha)
        * [.clickKeyboard(query)](#GroupCaptchaRTJ+clickKeyboard)
### new GroupCaptchaRTJ(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bot | <code>TelegramBot</code> | <code>false</code> | TelegramBot class instance (node-telegram-bot-api) |
| [options] | <code>Object</code> |  |  |
| [options.language] | <code>String</code> | <code>"en"</code> | Language. |
| [options.size] | <code>Number</code> | <code>4</code> | Captcha length < 9 (number of characters). |
| [options.time_for_enter] | <code>Number</code> | <code>5</code> | Time for enter captcha (in minutes). |

<a name="GroupCaptchaRTJ+generateCaptcha"></a>

### captcha.generateCaptcha(cjr)
Generating and sending a calendar to the user. Sets the current month and year.

**Kind**: instance method of [<code>GroupCaptchaRTJ</code>](#GroupCaptchaRTJ)  

| Param | Type | Description |
| --- | --- | --- |
| cjr | <code>Object</code> | https://core.telegram.org/bots/api#chatjoinrequest |

<a name="GroupCaptchaRTJ+clickKeyboard"></a>

### captcha.clickKeyboard(query)
Generating and sending a time selector to the user.

**Kind**: instance method of [<code>GroupCaptchaRTJ</code>](#GroupCaptchaRTJ)  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>Object</code> | https://core.telegram.org/bots/api#callbackquery |
