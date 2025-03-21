import s from './Ref.module.scss'
import { tg } from '../../shared/lib/telegram'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Button } from '../../shared/ui';

export const Ref = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const success = () => {
        if (isLoading) return;

        setIsLoading(true);

        messageApi.open({
            type: 'success',
            content: 'Ссылка скопирована',
            duration: 1,
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            navigate(-1)
        })

        return () => {
            tg.BackButton.hide()
        }
    }, [navigate])
    
    return (
        <div className='wrapper'>
            {contextHolder}
            <h1 className={s.title}>РЕФЕРАЛЬНАЯ ССЫЛКА</h1>
            <div className={s.ref}>
                <p>Ваша реферальная ссылка:</p>
                <p className={s.ref__link}>https://t.me/QuantaTrafficBot?start=0x2c9d7647</p>
                <Button onClick={success}>
                    {isLoading ? 'Подождите...' : 'Скопировать'}
                </Button>
            </div>
        </div>
    )
}