import { useState } from 'react'
import { Header, Coin, Pass, Taba, TabKey, Footer } from '../../widgets/Cabinet'
import s from './Cabinet.module.scss'
import { Clan, Connection, Other } from '../../components'

export const Cabinet = () => {
    const [selectedTab, setSelectedTab] = useState<'others' | 'connection' | 'clan'>('others')
    
    const tabContent: Record<TabKey, JSX.Element> = {
        clan: <Clan />,
        others: <Other />,
        connection: <Connection />
    }

    return (
        <div className={s.wrapper}>
            <Header />
            <div className={`${s.main_content}`}>
                <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 5}}>
                    <Pass />
                    <Coin />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Taba selectedTab={selectedTab} onTabChange={setSelectedTab} />
                </div>
                <div className={s.tab_content}>
                    {tabContent[selectedTab]}
                </div>
            </div>
            <Footer />
        </div>
    )
}