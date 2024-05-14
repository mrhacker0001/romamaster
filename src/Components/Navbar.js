import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <div className='Navbar'>
            <nav>
                <img src={logo} alt="logo" />
                <div className="texts">
                    <a href=".">Наши цены</a>
                    <a href=".">Сантехнические работы</a>
                    <a href=".">Отзывы</a>
                    <a href=".">Мы работаем с 8-30 до 22-00 без выходных</a>
                </div>
                <button>Заказать звонок</button>
            </nav>

        </div>
    )
}

export default Navbar