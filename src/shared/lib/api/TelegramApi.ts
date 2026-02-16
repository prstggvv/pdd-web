import { Api } from "./Api";

export class TelegramApi extends Api {
  private chatId: string;

  constructor(token: string, chatId: string) {
    super(`https://api.telegram.org/bot${token}/`);
    this.chatId = chatId;
  }

  sendMessage(text: string): Promise<any> {
    return this.post('sendMessage', {
      chat_id: this.chatId,
      text,
      parse_mode: 'HTML',
    });
  }
}
