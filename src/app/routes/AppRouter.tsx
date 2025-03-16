import { useEffect } from 'react'
import { initTelegram } from '../../shared/lib/telegram'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../shared/constans/constants'
import { Cabinet, Pass, Promo, Ref, Shop } from '../../page'

export const App = () => {
  useEffect(() => {
    initTelegram()
  }, [])

  return (

    <Routes>
        <Route path={ROUTES.CABINET} element={<Cabinet />} />
        <Route path={ROUTES.PASS} element={<Pass />} />
        <Route path={ROUTES.PROMO} element={<Promo />} />
        <Route path={ROUTES.REF} element={<Ref />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
    </Routes>
  )
}