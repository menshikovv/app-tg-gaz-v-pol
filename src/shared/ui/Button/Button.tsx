import s from './Button.module.scss'

export const Button = ({ onClick, children }: ButtonProps) => {
    return (
        <button className={s.button} onClick={onClick}>
            {children}
        </button>
    )
}

interface ButtonProps {
    onClick: () => void,
    children: any
}