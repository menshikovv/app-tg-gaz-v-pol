import { message } from "antd";
import s from './Connection.module.scss';
import { useState } from "react";
import { Textarea, Button } from "../../shared/ui";

export const Connection = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [text, setText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const success = () => {
        if (isLoading) return;

        setIsLoading(true);

        messageApi.open({
            type: 'success',
            content: 'Предложение отправлено',
            duration: 1,
        });

        setText('');

        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    
    return (
        <div className={s.wrapper}>
            {contextHolder}
            <Textarea value={text} setText={setText} />
            <Button onClick={success}>Активировать</Button>
        </div>
    );
}