import React from 'react'
import { Link } from 'react-router-dom'

const NavigateCustom = () => {
  return (
    <div>
        <Link to='/'>Главная</Link>
        <Link to='/dialog:id'>Чаты</Link>
        <Link to='/profile'>Профиль</Link>
    </div>
  )
}

export default NavigateCustom