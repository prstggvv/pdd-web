import { useState, useRef, useEffect } from 'react';
import cls from './ConsultantChat.module.css';

export type MessageFrom = 'consultant' | 'user';

export interface ChatMessage {
  id: string;
  text: string;
  from: MessageFrom;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: '0',
  text: 'Здравствуйте! Чем я могу вам помочь?',
  from: 'consultant',
};

export const ConsultantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

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

  const [isClosing, setIsClosing] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsClosing(true);
  const handlePanelAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget || !isClosing) return;
    setIsOpen(false);
    setIsClosing(false);
  };

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        text,
        from: 'user',
      },
    ]);
    setInputValue('');
    // TODO: здесь будет вызов API; ответ консультанта добавится в messages
    // и при закрытой панели: setUnreadCount((c) => c + 1)
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
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
        <span className={cls.triggerIcon} aria-hidden>💬</span>
        {unreadCount > 0 && (
          <span className={cls.badge} aria-label={`Непрочитанных: ${unreadCount}`}>
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
