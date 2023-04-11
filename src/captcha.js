import svg from 'svg-captcha';
import canvas from "canvas";
import { DOMParser } from 'xmldom';
import fetch from 'node-fetch'
import { Canvg, presets } from 'canvg';
import color from 'randomcolor';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import humanizeDuration from 'humanize-duration';
import { createMenu, banChannel, createInlineKeyboard, clickKeyboard, clickDelete, clickUpdate } from './func.js';
import TelegramBot from 'node-telegram-bot-api';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class GroupCaptcha {
    constructor(token, telegram_options = {}, options = {}) {
        this.bot = new TelegramBot(token, telegram_options);
        this.check = {};
        this.options = options;
        this.options.size = (typeof options.size === 'undefined' || options.size > 8) ? 4 : options.size;
        this.options.time_for_enter = (typeof options.time_for_enter === 'undefined') ? 5 : options.time_for_enter;
        this.options.ignoreChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        this.options.noise = 40;
        this.options.width = 300;
        this.options.height = 150;
        this.options.fontSize = 72;
        this.options.color = '';
        this.options.background = '';
        this.preset = presets.node({
            DOMParser,
            canvas,
            fetch
        });
        this.language = (typeof options.language === 'undefined') ? 'en' : options.language;
        this.libraryInitialization();
        process.env["NTBA_FIX_350"] = 1;
        process.env["NTBA_FIX_319"] = 1;
    }
    async libraryInitialization() {
        this.createMenu = createMenu;
        this.banChannel = banChannel;
        this.createInlineKeyboard = createInlineKeyboard;
        this.clickKeyboard = clickKeyboard;
        this.clickDelete = clickDelete;
        this.clickUpdate = clickUpdate;
        this.lang = JSON.parse(
            await readFile(
                new URL('./language.json', import.meta.url)
            )
        );
        this.lang.captcha_channel[this.language] = this.lang.captcha_channel[this.language].replace('%time_for_enter%', humanizeDuration(60000 * this.options.time_for_enter, { language: this.language }));
    }
    async generateCaptcha(msg) {
        svg.loadFont(path.join(__dirname, '/font/sofiaregularcaptcha.otf'));
        svg.createMathExpr({mathMin: 1, mathMax: 8, mathOperator: '+-'})
        this.options.color = color();
        this.options.background = color();
        var captcha = svg.create(this.options);
        const canvas = this.preset.createCanvas(350, 150);
        const ctx = canvas.getContext('2d');
        const v = Canvg.fromString(ctx, captcha.data, this.preset);
        await v.render();
        const png = canvas.toBuffer();
        this.check[msg.from.id] = {};
        this.check[msg.from.id].captcha_text = captcha.text;
        this.check[msg.from.id].captcha_input = '';
        this.check[msg.from.id].captcha_count = 0;
        this.check[msg.from.id].chat_id = msg.chat.id;
        this.check[msg.from.id].keyboard = {};
        this.bot.sendPhoto(msg.chat.id, png, this.createMenu(msg.from.id), {filename: 'captcha.png', contentType: 'image/png'}).then((msg_promise) => {
            this.check[msg.from.id].message_id = msg_promise.message_id;
            this.check[msg.from.id].captcha = setTimeout(this.banChannel.bind(this), this.options.time_for_enter * 60000, msg.chat.id, msg.from.id);
        });
    }
    clickNumber(query, num) {
        this.check[query.from.id].captcha_input += num;
        this.check[query.from.id].captcha_count++;
        this.bot.editMessageCaption(
            this.lang.captcha_channel[this.language] + '\n<b>' + this.lang.result[this.language] + this.check[query.from.id].captcha_input + '</b>',
            {
                message_id: query.message.message_id,
                chat_id: query.message.chat.id,
                reply_markup: this.check[query.from.id].keyboard,
                parse_mode: "HTML"
            }).then(() => {
                if (this.check[query.from.id].captcha_count == this.options.size) {
                    if (this.check[query.from.id].captcha_text == this.check[query.from.id].captcha_input) {
                        this.bot.deleteMessage(query.message.chat.id, query.message.message_id);
                        delete this.check[query.from.id];
                    }
                }
            });
    }
}

export class GroupCaptchaRTJ {
    constructor(token, telegram_options = {}, options = {}) {
        this.bot = new TelegramBot(token, telegram_options);
        this.check = {};
        this.options = options;
        this.options.size = (typeof options.size === 'undefined' || options.size > 8) ? 4 : options.size;
        this.options.time_for_enter = (typeof options.time_for_enter === 'undefined') ? 5 : options.time_for_enter;
        this.options.ignoreChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        this.options.noise = 40;
        this.options.width = 300;
        this.options.height = 150;
        this.options.fontSize = 72;
        this.options.color = '';
        this.options.background = '';
        this.preset = presets.node({
            DOMParser,
            canvas,
            fetch
        });
        this.language = (typeof options.language === 'undefined') ? 'en' : options.language;
        this.libraryInitialization();
        process.env["NTBA_FIX_350"] = 1;
        process.env["NTBA_FIX_319"] = 1;
    }
    async libraryInitialization() {
        this.createMenu = createMenu;
        this.banChannel = banChannel;
        this.createInlineKeyboard = createInlineKeyboard;
        this.clickKeyboard = clickKeyboard;
        this.clickDelete = clickDelete;
        this.clickUpdate = clickUpdate;
        this.lang = JSON.parse(
            await readFile(
                new URL('./language.json', import.meta.url)
            )
        );
        this.lang.captcha_channel[this.language] = this.lang.captcha_channel[this.language].replace('%time_for_enter%', humanizeDuration(60000 * this.options.time_for_enter, { language: this.language }));
    }
    async generateCaptcha(cjr) {
        svg.loadFont(path.join(__dirname, '/font/sofiaregularcaptcha.otf'));
        svg.createMathExpr({mathMin: 1, mathMax: 8, mathOperator: '+-'})
        this.options.color = color();
        this.options.background = color();
        var captcha = svg.create(this.options);
        const canvas = this.preset.createCanvas(350, 150);
        const ctx = canvas.getContext('2d');
        const v = Canvg.fromString(ctx, captcha.data, this.preset);
        await v.render();
        const png = canvas.toBuffer();
        this.check[cjr.from.id] = {};
        this.check[cjr.from.id].captcha_text = captcha.text;
        this.check[cjr.from.id].captcha_input = '';
        this.check[cjr.from.id].captcha_count = 0;
        this.check[cjr.from.id].chat_id = cjr.chat.id;
        this.check[cjr.from.id].keyboard = {};
        this.bot.sendPhoto(cjr.user_chat_id, png, this.createMenu(cjr.from.id), {filename: 'captcha.png', contentType: 'image/png'}).then((msg_promise) => {
            this.check[cjr.from.id].message_id = msg_promise.message_id;
            this.check[cjr.from.id].captcha = setTimeout(this.banChannel.bind(this), this.options.time_for_enter * 60000, cjr.chat.id, cjr.from.id);
        });
    }
    clickNumber(query, num) {
        this.check[query.from.id].captcha_input += num;
        this.check[query.from.id].captcha_count++;
        this.bot.editMessageCaption(
            this.lang.captcha_channel[this.language] + '\n<b>' + this.lang.result[this.language] + this.check[query.from.id].captcha_input + '</b>',
            {
                message_id: query.message.message_id,
                chat_id: query.message.chat.id,
                reply_markup: this.check[query.from.id].keyboard,
                parse_mode: "HTML"
            }).then(() => {
                if (this.check[query.from.id].captcha_count == this.options.size) {
                    if (this.check[query.from.id].captcha_text == this.check[query.from.id].captcha_input) {
                        this.bot.approveChatJoinRequest(this.check[query.from.id].chat_id, query.from.id);
                        this.bot.deleteMessage(query.message.chat.id, query.message.message_id);
                        delete this.check[query.from.id];
                    }
                }
            });
    }
}