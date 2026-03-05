import { useState, useRef, useEffect } from 'react';
import {
  sendConsultantMessage,
  type ConsultantWebhookResponse,
} from '../../../shared/lib/api/MainApi';
import cls from './ConsultantChat.module.css';
import MessageSvg from '../../../shared/assets/images/message/message.svg';

export type MessageFrom = 'consultant' | 'user';

export interface ChatMessage {
  id: string;
  text: string;
  from: MessageFrom;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: '0',
  text: 'Здравствуйте, я ИИ консультант, постараюсь ответить на ваши вопросы! Чем я могу вам помочь?',
  from: 'consultant',
};

export const ConsultantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const panelVisibleRef = useRef(false);
  panelVisibleRef.current = isOpen && !isClosing;

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen && unreadCount > 0) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsClosing(true);
  const handlePanelAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget || !isClosing) return;
    setIsOpen(false);
    setIsClosing(false);
  };

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), text, from: 'user' },
    ]);
    setInputValue('');
    setIsTyping(true);
    try {
      const res = await sendConsultantMessage(text);

      const pickTextFromItem = (item: any): string | undefined => {
        if (!item || typeof item !== 'object') return undefined;
        if (typeof item.reply === 'string' && item.reply) return item.reply;
        if (typeof item.message === 'string' && item.message) return item.message;
        if (typeof item.text === 'string' && item.text) return item.text;
        return undefined;
      };

      const extractReply = (response: ConsultantWebhookResponse | undefined): string | undefined => {
        if (!response) return undefined;

        if (Array.isArray(response)) {
          const texts = response
            .map((item) => pickTextFromItem(item))
            .filter((v): v is string => Boolean(v));

          if (texts.length === 0) return undefined;
          if (texts.length === 1) return texts[0];
          return texts.join('\n\n');
        }

        return pickTextFromItem(response as unknown as Record<string, unknown>);
      };

      const reply =
        extractReply(res) ??
        'Принято. Чем ещё могу помочь?';

      setIsTyping(false);
      const replyId = `r-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        { id: replyId, text: reply, from: 'consultant' },
      ]);
      if (!panelVisibleRef.current) {
        setUnreadCount((c) => c + 1);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsTyping(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `h-${Date.now()}`,
          text: 'Чем ещё могу помочь?',
          from: 'consultant',
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `e-${Date.now()}`,
          text: 'Не удалось отправить сообщение. Попробуйте позже.',
          from: 'consultant',
        },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (!trimmed || isTyping) return;
      handleSend();
    }
  };

  const showPanel = isOpen || isClosing;

  return (
    <div className={cls.root}>
      {showPanel && (
        <>
          <button
            type="button"
            className={cls.backdrop}
            onClick={handleClose}
            aria-label="Закрыть чат"
            data-closing={isClosing || undefined}
          />
          <aside
            className={`${cls.panel} ${isClosing ? cls.panelClosing : ''}`}
            role="dialog"
            aria-label="Чат с консультантом"
            onAnimationEnd={handlePanelAnimationEnd}
          >
            <div className={cls.panelContent}>
              <div className={cls.header}>
                <span className={cls.headerTitle}>Консультант</span>
                <button
                  type="button"
                  className={cls.closeBtn}
                  onClick={handleClose}
                  aria-label="Закрыть"
                >
                  ×
                </button>
              </div>
              <div className={cls.list} ref={listRef}>
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cls.messageWrap}
                    data-from={msg.from}
                  >
                    <p className={cls.message}>{msg.text}</p>
                  </div>
                ))}
                {isTyping && (
                  <div className={cls.messageWrap} data-from="consultant">
                    <p className={cls.typingMessage}>
                      <span className={cls.typingDots}>Консультант печатает</span>
                    </p>
                  </div>
                )}
              </div>
              <div className={cls.footer}>
                <input
                  type="text"
                  className={cls.input}
                  placeholder="Напишите сообщение..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Сообщение"
                />
                <button
                  type="button"
                  className={cls.sendBtn}
                  onClick={handleSend}
                  aria-label="Отправить"
                  disabled={isTyping || !inputValue.trim()}
                >
                  Отправить
                </button>
              </div>
            </div>
          </aside>
        </>
      )}
      <button
        type="button"
        className={`${cls.trigger} ${showPanel ? cls.triggerWhenOpen : ''}`}
        onClick={showPanel ? handleClose : handleOpen}
        aria-label={showPanel ? 'Закрыть чат' : 'Открыть чат с консультантом'}
      >
        <img
          className={cls.triggerIcon} aria-hidden
          src={MessageSvg}
          alt='Логотип картинки с сообщением'
        />
        {unreadCount > 0 && (
          <span className={cls.badge} aria-label={`Непрочитанных: ${unreadCount}`}>
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
