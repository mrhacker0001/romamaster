import React, { useState } from 'react';
import "./Firstsection.css";
import img from "../assets/Group 2147.png";
import skidka from "../assets/coupon 1.png";

function Firstsection() {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalToggle = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <div className='Firstsection'>
            <div className="left-card">
                <h1>ВОДОСЧЕТЧИКИ ЧЕЛЯБИНСК</h1>
                <span>Установка, замена счетчиков воды в Челябинске и Копейске</span>
                <ul>
                    <li>Поставка счетчиков воды напрямую от производителя</li>
                    <li>Усиленные фильтры высокого давления, производство Германия, прочная сетка из нержавеющей стали</li>
                    <li>Американки из высокопрочной латуни на основе меди, встроенный обратный клапан, как дополнительная защита, фторопластовые прокладки с защитой от высыхания</li>

                    <li>водосчетчики челябинскводосчетчики челябинскводосчетчики челябинскводосчетчики челябинскводосчетчики челябинск  Выполнение работ в соответствие с ГОСТ и ТУ (технические условия)</li>
                </ul>
                <p>Оставить заявку на <a href='##' onClick={handleModalToggle}>скидку 25%</a></p>
            </div>

            <div className="right-card">
                <img src={img} alt="" />
            </div>

            <div className="red-card">
                <img src={skidka} alt="" />
                <span>
                    <b>32 клиента</b> заказали услугу по акции  <b>25%</b>. Период скидки ограничен. Осталось всего 6 мест, успевайте заказать.
                    <b>Оставьте заявку</b> на получение скидки прямо сейчас.
                </span>
            </div>

            <div className="bottom-card">
                <h2>Цена по акции:  <span>1190 руб.</span></h2>
                <h1>Акция на замену водосчетчиков <br /> действует только</h1>
                <p>Оставьте заявку сегодня,чтобы зафиксировать цену</p>
                <div className="btns">
                    <input type="text" name='text' placeholder='Ваш имя' />
                    <input type="number" name="number" placeholder='Ваш телефон' />
                    <button style={{ display: modalVisible ? 'none' : 'block' }}>Оформить заявку</button>
                    <span>Ваши данные не будут переданы 3-им лицам</span>
                </div>
            </div>

            <div className="modal-card" style={{ zIndex: modalVisible ? 1000 : -100 }}>
                <div className="modal-cart">
                    <h1>25% скидка на услугу.</h1>
                    <h2>До конца акции осталось <br />
                        5 часов 10 минут.</h2>
                    <input type="text" name='text' placeholder='Введите телефон' />
                    <button onClick={handleModalToggle}>Перезвоните мне!</button>
                </div>
            </div>
        </div>
    );
}

export default Firstsection;