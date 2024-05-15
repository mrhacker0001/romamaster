import React from 'react'
import "./Secondsection.css"
// import union from "../assets/Union.png"
import img from "../assets/Rectangle 1166.png"
import img1 from "../assets/Group 1264.png"
import top from "../assets/Top.png"
import top1 from "../assets/Top 2.png"
import bottom from "../assets/Bottom.png"
import img3 from "../assets/di-K11M 2.png"
import vector from "../assets/Vector.png"
import left from "../assets/Pattern.png"
import right from "../assets/Rectangle (16).png"



function Secondsection() {
    return (
        <div className='Secondsection'>
            <img src={left} alt="..."  className='left-img'/>
            <div className="first-card">
                <div className="left-cart">
                    <img src={img} alt="..." />
                </div>

                <div className="right-cart">
                    <h1>Зачем устанавливать водосчетчики?</h1>
                    <p>
                        Представьте ситуацию, когда у ваших соседей в квартире постоянно протекают трубы, или из крана капает вода. Только на первый взгляд, это копейки, но в масштабах целого дома за месяц набегает немалая сумма, ведь таких кранов на многоквартирный дом может быть очень много. Или другая ситуация: ваши соседи не пользуются счетчиками воды, но при этом у них прописан один человек, а фактически проживает пять и более человек. <br /><br />

                        Таким образом, они платят только за то, что теоретически может потратить за месяц один человек, а истинный расход воды намного больше. Кто же оплачивает эту разницу – правильно, тот, у кого нет счетчиков воды. Поэтому важно установить водосчетчики, чтобы коммунальные службы начисляли вам оплату не по средним нормам потребления, а за фактически потребленную воду. <br /> <br />

                        Установив счетчик воды, вы уже со следующего месяца начнете платить ощутимо меньшую сумму, особенно если вы много работаете и водой почти не пользуетесь. Установка водосчетчиков – это простая и быстрая процедура, которую проводят специалисты и она не требует от вас проведения ремонта. <br /> <br />
                    </p>
                    <img src={img1} alt="..." />
                </div>
            </div>


            <div className="second-card">
                <img src={right} alt="..." className='right-img'/>
                <h1>Насколько выгодно использовать счетчики воды?</h1>
                <img src={vector} alt="..." className='class'/>
               <div className="second">
                <div className="left">
                        <img src={top} alt="..."/>
                    <img src={bottom} alt="..." />
                    <div className="inline-card">
                        <h5>СЧЕТЧИК УСТАНОВЛЕН</h5>
                        <img src={img3} alt="..." />
                        <b>Средний реальный расход воды в месяц на 1 человека со счетчиками:</b>
                        <p>Холодная вода: 1,42 куб.м/мес <br />
                            Горячая вода: 1,07 куб.м/мес <br />
                            Водоотведение: 2,49 куб.м/мес
                        </p>
                        <span>При пересчете в денежный эквивалент, согласно тарифов семья из 3 человек с установленными счетчиками заплатит  299,81 рублей*</span>
                    </div>

                </div>


                <div className="left">
                    <img src={top1} alt="..." />
                    <img src={bottom} alt="..." />
                    <div className="inline-card">
                        <h5>СЧЕТЧИК УСТАНОВЛЕН</h5>
                        <img src={img3} alt="..." />
                        <b>Нормативы коммунальных услуг на 1 человека в месяц без счетчиков:</b>
                        <p>
                            Холодная вода: 7,56 куб.м/мес <br />
                            Горячая вода: 4,49 куб.м/мес <br />
                            Водоотведение: 12,05 куб.м/мес
                        </p>
                        <div className="span">
                            <span >При пересчете в денежный эквивалент, согласно тарифов семья из 3 человек с установленными счетчиками заплатит  299,81 рублей*</span>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default Secondsection