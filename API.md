 API Reference

* [GroupCaptcha](#GroupCaptcha)
* [GroupCaptchaRTJ](#GroupCaptchaRTJ)

<a name="GroupCaptcha"></a>

### GroupCaptcha
Captcha for open groups.

**Kind**: global class  

* [GroupCaptcha](#GroupCaptcha)
    * [new GroupCaptcha(token, [telegram_options], [options])](#new_GroupCaptcha)
    * _instance_
        * [.generateCaptcha(msg)](#GroupCaptcha+generateCaptcha)
        * [.clickKeyboard(query)](#GroupCaptcha+clickKeyboard)
### new GroupCaptcha(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | Bot Token |
| [telegram_options] | <code>Object</code> |  |  |
| [telegram_options.polling] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable polling or set options.  If a WebHook has been set, it will be deleted automatically. |
| [telegram_options.polling.timeout] | <code>String</code> \| <code>Number</code> | <code>10</code> | *Deprecated. Use `options.polling.params` instead*.  Timeout in seconds for long polling. |
| [telegram_options.testEnvironment] | <code>Boolean</code> | <code>false</code> | Set true to  work with test enviroment. When working with the test environment, you may use HTTP links without TLS to test your Web App. |
| [telegram_options.polling.interval] | <code>String</code> \| <code>Number</code> | <code>300</code> | Interval between requests in miliseconds |
| [telegram_options.polling.autoStart] | <code>Boolean</code> | <code>true</code> | Start polling immediately |
| [telegram_options.polling.params] | <code>Object</code> |  | Parameters to be used in polling API requests.  See https://core.telegram.org/bots/api#getupdates for more information. |
| [telegram_options.polling.params.timeout] | <code>Number</code> | <code>10</code> | Timeout in seconds for long polling. |
| [telegram_options.webHook] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable WebHook or set options |
| [telegram_options.webHook.host] | <code>String</code> | <code>&quot;0.0.0.0&quot;</code> | Host to bind to |
| [telegram_options.webHook.port] | <code>Number</code> | <code>8443</code> | Port to bind to |
| [telegram_options.webHook.key] | <code>String</code> |  | Path to file with PEM private key for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.cert] | <code>String</code> |  | Path to file with PEM certificate (public) for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.pfx] | <code>String</code> |  | Path to file with PFX private key and certificate chain for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.autoOpen] | <code>Boolean</code> | <code>true</code> | Open webHook immediately |
| [telegram_options.webHook.https] | <code>Object</code> |  | Options to be passed to `https.createServer()`.  Note that `options.webHook.key`, `options.webHook.cert` and `options.webHook.pfx`, if provided, will be  used to override `key`, `cert` and `pfx` in this object, respectively.  See https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener for more information. |
| [telegram_options.webHook.healthEndpoint] | <code>String</code> | <code>&quot;/healthz&quot;</code> | An endpoint for health checks that always responds with 200 OK |
| [telegram_options.onlyFirstMatch] | <code>Boolean</code> | <code>false</code> | Set to true to stop after first match. Otherwise, all regexps are executed |
| [telegram_options.request] | <code>Object</code> |  | Options which will be added for all requests to telegram api.  See https://github.com/request/request#requestoptions-callback for more information. |
| [telegram_options.baseApiUrl] | <code>String</code> | <code>&quot;https://api.telegram.org&quot;</code> | API Base URl; useful for proxying and testing |
| [telegram_options.filepath] | <code>Boolean</code> | <code>true</code> | Allow passing file-paths as arguments when sending files,  such as photos using `TelegramBot#sendPhoto()`. See [usage information][usage-sending-files-performance]  for more information on this option and its consequences. |
| [telegram_options.badRejection] | <code>Boolean</code> | <code>false</code> | Set to `true`  **if and only if** the Node.js version you're using terminates the  process on unhandled rejections. This option is only for  *forward-compatibility purposes*. |
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
    * [new GroupCaptchaRTJ(token, [telegram_options], [options])](#new_GroupCaptchaRTJ)
    * _instance_
        * [.generateCaptcha(cjr)](#GroupCaptchaRTJ+generateCaptcha)
        * [.clickKeyboard(query)](#GroupCaptchaRTJ+clickKeyboard)
### new GroupCaptchaRTJ(bot, [options])
| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | Bot Token |
| [telegram_options] | <code>Object</code> |  |  |
| [telegram_options.polling] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable polling or set options.  If a WebHook has been set, it will be deleted automatically. |
| [telegram_options.polling.timeout] | <code>String</code> \| <code>Number</code> | <code>10</code> | *Deprecated. Use `options.polling.params` instead*.  Timeout in seconds for long polling. |
| [telegram_options.testEnvironment] | <code>Boolean</code> | <code>false</code> | Set true to  work with test enviroment. When working with the test environment, you may use HTTP links without TLS to test your Web App. |
| [telegram_options.polling.interval] | <code>String</code> \| <code>Number</code> | <code>300</code> | Interval between requests in miliseconds |
| [telegram_options.polling.autoStart] | <code>Boolean</code> | <code>true</code> | Start polling immediately |
| [telegram_options.polling.params] | <code>Object</code> |  | Parameters to be used in polling API requests.  See https://core.telegram.org/bots/api#getupdates for more information. |
| [telegram_options.polling.params.timeout] | <code>Number</code> | <code>10</code> | Timeout in seconds for long polling. |
| [telegram_options.webHook] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | Set true to enable WebHook or set options |
| [telegram_options.webHook.host] | <code>String</code> | <code>&quot;0.0.0.0&quot;</code> | Host to bind to |
| [telegram_options.webHook.port] | <code>Number</code> | <code>8443</code> | Port to bind to |
| [telegram_options.webHook.key] | <code>String</code> |  | Path to file with PEM private key for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.cert] | <code>String</code> |  | Path to file with PEM certificate (public) for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.pfx] | <code>String</code> |  | Path to file with PFX private key and certificate chain for webHook server.  The file is read **synchronously**! |
| [telegram_options.webHook.autoOpen] | <code>Boolean</code> | <code>true</code> | Open webHook immediately |
| [telegram_options.webHook.https] | <code>Object</code> |  | Options to be passed to `https.createServer()`.  Note that `options.webHook.key`, `options.webHook.cert` and `options.webHook.pfx`, if provided, will be  used to override `key`, `cert` and `pfx` in this object, respectively.  See https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener for more information. |
| [telegram_options.webHook.healthEndpoint] | <code>String</code> | <code>&quot;/healthz&quot;</code> | An endpoint for health checks that always responds with 200 OK |
| [telegram_options.onlyFirstMatch] | <code>Boolean</code> | <code>false</code> | Set to true to stop after first match. Otherwise, all regexps are executed |
| [telegram_options.request] | <code>Object</code> |  | Options which will be added for all requests to telegram api.  See https://github.com/request/request#requestoptions-callback for more information. |
| [telegram_options.baseApiUrl] | <code>String</code> | <code>&quot;https://api.telegram.org&quot;</code> | API Base URl; useful for proxying and testing |
| [telegram_options.filepath] | <code>Boolean</code> | <code>true</code> | Allow passing file-paths as arguments when sending files,  such as photos using `TelegramBot#sendPhoto()`. See [usage information][usage-sending-files-performance]  for more information on this option and its consequences. |
| [telegram_options.badRejection] | <code>Boolean</code> | <code>false</code> | Set to `true`  **if and only if** the Node.js version you're using terminates the  process on unhandled rejections. This option is only for  *forward-compatibility purposes*. |
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
