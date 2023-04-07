import { writeFileSync, unlinkSync } from 'fs';
import path from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import color from 'randomcolor';
import { Canvg } from 'canvg';
import svg from 'svg-captcha';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lang = JSON.parse(
    await readFile(
        new URL('./language.json', import.meta.url)
    )
);

export function createMenu(id) {
    var menu = {};
    menu.caption = lang.captcha_channel[this.language];
    menu.parse_mode = "HTML";
    menu.reply_markup = this.createInlineKeyboard(id);
    return menu;
}

export function banChannel(chat_id, user_id) {
    var date_unban = Date.now() + (1000 * 60 * 60 * 24);
    this.bot.banChatMember(chat_id, user_id, {until_date: date_unban, revoke_messages: true});
    delete this.check[user_id];
}

export function createInlineKeyboard(user_id) {
    var key = {};
    key.resize_keyboard = true;
    key.inline_keyboard = [[{},{},{}],[{},{},{}],[{},{},{}],[{},{},{}]];
    key.inline_keyboard[0][0] = {text: '7', callback_data: user_id + '_7'};
    key.inline_keyboard[0][1] = {text: '8', callback_data: user_id + '_8'};
    key.inline_keyboard[0][2] = {text: '9', callback_data: user_id + '_9'};
    key.inline_keyboard[1][0] = {text: '4', callback_data: user_id + '_4'};
    key.inline_keyboard[1][1] = {text: '5', callback_data: user_id + '_5'};
    key.inline_keyboard[1][2] = {text: '6', callback_data: user_id + '_6'};
    key.inline_keyboard[2][0] = {text: '1', callback_data: user_id + '_1'};
    key.inline_keyboard[2][1] = {text: '2', callback_data: user_id + '_2'};
    key.inline_keyboard[2][2] = {text: '3', callback_data: user_id + '_3'};
    key.inline_keyboard[3][0] = {text: '🔄', callback_data: user_id + '_🔄'};
    key.inline_keyboard[3][1] = {text: '0', callback_data: user_id + '_0'};
    key.inline_keyboard[3][2] = {text: '⌫', callback_data: user_id + '_⌫'};
    this.check[user_id].keyboard = key;
    return key;
}

export function clickKeyboard(query) {
    var code = query.data.split('_');
    if (code[0] == query.from.id) {
        switch (code[1]) {
            case '🔄':
                this.clickUpdate(query);
                break;
            case '⌫':
                this.clickDelete(query);
                break;
            default:
                this.clickNumber(query, code[1]);
                break;
        }
    }
}

export function clickDelete(query) {
    if (this.check[query.from.id].captcha_count > 0) {
        this.check[query.from.id].captcha_input = this.check[query.from.id].captcha_input.slice(0, -1);
        this.check[query.from.id].captcha_count--;
        if (this.check[query.from.id].captcha_count === 0) {
            this.bot.editMessageCaption(lang.captcha_channel[this.language], {message_id: query.message.message_id, chat_id: query.message.chat.id, reply_markup: this.check[query.from.id].keyboard});
        } else {
            this.bot.editMessageCaption(lang.captcha_channel[this.language] + '\n<b>' + lang.result[this.language] + this.check[query.from.id].captcha_input + '</b>', {message_id: query.message.message_id, chat_id: query.message.chat.id, reply_markup: this.check[query.from.id].keyboard, parse_mode: "HTML"});
        }
    }
}

export async function clickUpdate(query) {
    this.options.color = color();
    this.options.background = color();
    var captcha = svg.create(this.options);
    const canvas = this.preset.createCanvas(350, 150);
    const ctx = canvas.getContext('2d');
    const v = Canvg.fromString(ctx, captcha.data, this.preset);
    await v.render();
    const png = canvas.toBuffer("image/png");
    writeFileSync(path.join(__dirname, query.from.id.toString() + ".png"), png);
    this.check[query.from.id].captcha_text = captcha.text;
    this.check[query.from.id].captcha_input = '';
    this.check[query.from.id].captcha_count = 0;
    this.bot.editMessageMedia(
        {
            type: 'photo',
            media: `attach://${path.join(__dirname, query.from.id.toString() + ".png")}`,
            caption: lang.captcha_channel[this.language]
        },
        {
            message_id: query.message.message_id,
            chat_id: query.message.chat.id,
            reply_markup: this.check[query.from.id].keyboard
        }).then(() => {
            unlinkSync(path.join(__dirname, query.from.id.toString() + ".png"));
        });
}