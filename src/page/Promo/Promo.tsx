import { message } from 'antd';
import s from './Promo.module.scss';
import { useEffect, useState } from 'react';
import { Button, Input } from '../../shared/ui';
import { tg } from '../../shared/lib/telegram';
import { useNavigate } from 'react-router-dom';

export const Promo = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const success = () => {
        if (isLoading) return;

        setIsLoading(true);

        messageApi.open({
            type: 'success',
            content: 'Предложение отправлено',
            duration: 1,
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (tg.BackButton) {
            tg.BackButton.show();

            const handleBackClick = () => {
                navigate(-1);
            };

            tg.BackButton.onClick(handleBackClick);

            return () => {
                tg.BackButton.offClick(handleBackClick);
                tg.BackButton.hide();
            };
        }
    }, [navigate]);

    return (
        <div className='wrapper'>
            {contextHolder}
            <h1 className={s.nick}>ПРОМОКОД</h1>
            <div className={s.input}>
                <Input placeholder='Введите промокод' />
                <Button onClick={success}>
                    {isLoading ? 'Подождите...' : 'Активировать'}
                </Button>
            </div>
        </div>
    );
};