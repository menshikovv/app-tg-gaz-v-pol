import { useState } from 'react';
import s from './Footer.module.scss';
import { ROUTES } from '../../../shared/constans/constants';
import { LinkLogo, PassLogo, PromoLogo, ShopLogo } from '../../../page/Cabinet/ui';
import { ModalWork } from '../../../shared/ui';

export const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onOpen = () => setIsModalOpen(true);
    const onClose = () => setIsModalOpen(false);

    const handleItemClick = (tab: string) => {
        if (tab === 'shop' || tab === 'pass') {
            onOpen();
        }
    };

    return (
        <>
            <ModalWork isOpen={isModalOpen} onClose={onClose} />

            <div className={s.items}>
                <div className={s.item} onClick={() => handleItemClick('shop')}>
                    <ShopLogo />
                    Магазин
                </div>
                <a href={ROUTES.REF} className={s.item}>
                    <LinkLogo />
                    Рефка
                </a>
                <div className={s.item} onClick={() => handleItemClick('pass')}>
                    <PassLogo />
                    Pass
                </div>
                <a href={ROUTES.PROMO} className={s.item}>
                    <PromoLogo />
                    Промо
                </a>
            </div>
        </>
    );
};