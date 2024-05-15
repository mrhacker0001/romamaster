import React from 'react'
import "./Thirdsection.css"
import step from "../assets/Step.png"
import step1 from "../assets/Step 2.png"
import step2 from "../assets/Step 3.png"
import step3 from "../assets/Step 4.png"
// import pattern from "../assets/Rectangle (16).png"

function Thirdsection() {
    return (
        <div className='Thirdsection'>
            <h1>Скидка на наши услуги действует только. <br />
                Оставьте заявку прямо сейчас, чтобы зафиксировать скидку <br />
                <span>сегодня 21 мая</span>
            </h1>

            <div className="cards">
                <div className="card">
                    <h1>ПРОДАЖА ВОДОСЧЕТЧИКОВ <br />
                        РОСКОНТРОЛЬ</h1>
                    <div className="cart">
                        <button>Оформить заявку</button>
                        <span> Цена по акции:<button>640 руб.</button></span>
                    </div>
                </div>

                <div className="card">

                    <h1>ПРОДАЖА ВОДОСЧЕТЧИКОВ <br />
                        РОСКОНТРОЛЬ</h1>
                    <ul>
                        <li>Водосчетчик входит в стоимость</li>
                        <li>Производство работ входит в стоимость</li>
                    </ul>
                    <div className="cart">
                        <button>Оформить заявку</button>
                        <span> Цена по акции:<button>640 руб.</button></span>
                    </div>
                </div>

                <div className="card">
                    <h1>ПРОДАЖА ВОДОСЧЕТЧИКОВ <br />
                        РОСКОНТРОЛЬ</h1>
                    <ul>
                        <li>2 водосчетчика входят в стоимость</li>
                        <li>Расходные материалы входят в стоимость</li>
                        <li>Производство работ входит в стоимость</li>
                        <li> Фильтры очистки входят в стоимость</li>
                        <li>Производство работ входит в стоимость</li>
                    </ul>
                    <div className="cart">
                        <button>Оформить заявку</button>
                        <span> Цена по акции:<button>640 руб.</button></span>
                    </div>
                </div>
            </div>

            <div className="three-cards">
                <h1>Почему люди выбирают нашу компанию</h1>
                <div className="all">
                    <div className="one-card">
                        <h1>Честная стоимость</h1>
                        <p>Демократичные цены, никаких дополнительных затрат</p>
                        <img src={step} alt="..." />
                    </div>

                    <div className="one-card">
                        <h1>Гарантия</h1>
                        <p>Предоставляем гарантию на все виды наших работ</p>
                        <img src={step3} alt="..." />
                    </div>

                    <div className="one-card">
                        <h1>Оперативность</h1>
                        <p>Выезд мастера в кратчайшие сроки в удобное для Вас время</p>
                        <img src={step2} alt="..." />
                    </div>

                    <div className="one-card">
                        <h1>Индивидуальный подход</h1>
                        <p>Индивидуальный подход к каждому клиенту, бесплатные консультации</p>
                        <img src={step1} alt="..." />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Thirdsection