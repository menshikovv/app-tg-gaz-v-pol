import s from './Header.module.scss'
import { user } from '../../../shared/lib/telegram'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                {user ? (
                    <>
                        <img src={user.photo_url} alt="Avatar" className={s.avatar}/>
                        <h1 className={s.nick}>{user.first_name}</h1>
                    </>
                ) : (
                        <h1 className={s.nick}>NICKNAME</h1>
                )}
            </div>
            <div className={s.money}>+5$</div>
        </div>
    )
}