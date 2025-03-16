import s from './Other.module.scss';
import { BasketIcon, ChatIcon, MarkIcon, MoneyIcon, NewsIcon, ToolsIcon } from './ui';

export const Other = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.block}> <span>Новости</span> <NewsIcon /> </div>
            <div className={s.block}> <span>Чат</span> <ChatIcon /> </div>
            <div className={s.block}> <span>Важно для новых</span> <MarkIcon /> </div>
            <div className={s.block}> <span>Выплаты</span> <MoneyIcon /> </div>
            <div className={s.block}> <span>Мануалы</span> <ToolsIcon /> </div>
            <div className={s.block}> <span>Купить трафик</span> <BasketIcon /> </div>
        </div>
    );
}