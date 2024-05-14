import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className='Footer'>
            <h1>Остались вопросы</h1>
            <div className="middle-cart">
                <span>
                    Позвоните нам по номерам: <b>+7-351-776-076-1;  +7-968-110-13-58</b>  <br />
                    или оставьте заявку и получите бесплатную консультацию
                </span>

                <button>Заказать консультацию</button>
            </div>

            <div className="bottom-cart">
                <img src={logo} alt="..." />
                <span>Все права защищены 2010 - 2019 <br /> Политика конфиденциальности</span>
                <b>+7-111-111-111-11 <br />
                    +7-222-222-22-22</b>
               
            </div>
        </div>
    )
}

export default Footer