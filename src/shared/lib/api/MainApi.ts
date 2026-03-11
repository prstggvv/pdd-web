import { Api } from './Api';

const CONSULTANT_WEBHOOK_PATH = '/webhook/semantic-search';

export type ConsultantWebhookPayload = {
  message: string;
};

export type ConsultantWebhookItem = {
  reply?: string;
  message?: string;
  text?: string;
  [key: string]: unknown;
};

export type ConsultantWebhookResponse = ConsultantWebhookItem | ConsultantWebhookItem[];

const mainApi = new Api('https://n8botpars.ru');

export const sendConsultantMessage = (
  message: string,
): Promise<ConsultantWebhookResponse> => {
  return mainApi.post<ConsultantWebhookResponse>(CONSULTANT_WEBHOOK_PATH, {
    message,
  } as ConsultantWebhookPayload);
};
