import { message } from 'antd';
import s from './Promo.module.scss';
import { useEffect, useState } from 'react';
import { Button, Input } from '../../shared/ui';
import { tg } from '../../shared/lib/telegram';
import { useNavigate } from 'react-router-dom';

export const Promo = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [text, setText] = useState<string>('');
    const navigate = useNavigate();

    const success = () => {
        if (isLoading) return;

        setIsLoading(true);

        messageApi.open({
            type: 'success',
            content: 'Предложение отправлено',
            duration: 1,
        });

        setText('')

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            navigate(-1)
        })
    }, [])

    return (
        <div className='wrapper'>
            {contextHolder}
            <h1 className={s.nick}>ПРОМОКОД</h1>
            <div className={s.input}>
                <Input placeholder='Введите промокод' value={text} onChange={(e) => setText(e)}/>
                <Button onClick={success}>
                    {isLoading ? 'Подождите...' : 'Активировать'}
                </Button>
            </div>
        </div>
    )
}