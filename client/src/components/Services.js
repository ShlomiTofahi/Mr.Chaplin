import React, { Component, Fragment } from 'react'
import { Collapse } from 'react-collapse';

export default class About extends Component {
    state = {
        collapsetoggle: '',
    };

    CollapseHangdle = (name) => {
        this.setState(prevState => {
            if (prevState.collapsetoggle === name) {
                return ({
                    collapsetoggle: ''
                })
            } else {
                return ({
                    collapsetoggle: name
                })
            }
        });
    }

    aboutStyle = () => {
        return {
            margin: '0 auto',
            // backgroundColor: '#323232',
            color: 'white',
            width: window.innerWidth >= 992 ? '60%' : '90%',
            padding: '24px',
            opacity: '0.7',
            minHeight: '600px'
        };
    };

    render() {
        return (
            <div id="services" style={this.aboutStyle()} className=' my-5'>
                <div className='services my-5'>
                    <div className='service-item animated bounceIn'>
                        <button className='icon' onClick={this.CollapseHangdle.bind(this, 'clean')}>
                            <img className='garden-icon' src="/icons/clean-icon.png" />
                        </button>
                        <h4 className='service-header'>שירותי נקיון</h4>
                    </div>
                    <div className='service-item animated bounceIn'>
                        <button className='icon' onClick={this.CollapseHangdle.bind(this, 'maintenance')}>
                            <img className='garden-icon' src="/icons/maintenance-icon.png" />
                        </button>
                        <h4 className='service-header'>ניהול ואחזקת מבנים</h4>
                    </div>
                    <div className='service-item animated bounceIn'>
                        <button className='icon' onClick={this.CollapseHangdle.bind(this, 'gardening')}>
                            <img className='garden-icon' src="/icons/gardening-icon.png" />
                        </button>
                        <h4 className='service-header'>שירותי גינון</h4>
                    </div>
                    <div className='service-item animated bounceIn'>
                        <button className='icon' onClick={this.CollapseHangdle.bind(this, 'project')}>
                            <img className='project-icon' src="/icons/project-icon.png" />
                        </button>
                        <h4 className='service-header'>פרויקטים</h4>
                    </div>
                </div>
                <Collapse isOpened={this.state.collapsetoggle === 'clean'}>
                    <small><p
                      className='opacity'
                     >
                        נקיון שוטף ליצירת סביבת מגורים / עבודה נעימה זהו דבר הכרחי לשיפור האווירה ואורח החיים ,
                        <br />
                        <br />
                        חברתנו דואגת לנקיון ברמה הגבוה ביותר עם אנשי מקצוע, חומרים ומכשור הכי מתקדם בתחום כמו כן אצלנו תוכלו למצוא גם שירותי פוליש ונקיון לאחר בניה
                    </p></small>
                </Collapse>
                <Collapse isOpened={this.state.collapsetoggle === 'maintenance'}>
                    <small><p
                     className='opacity'
                     >
                        ניהול שוטף של השגרה בבניין ,
                        <br />
                        <br />
                        השבחה ושמירה על המבנים ,אחזקת מבנים היא שם כולל לכמה פעולות שחייב לעשות באופן שוטף כמו : בדיקת מערכות כיבוי , בדיקת תקינות מעליות , ועוד..
                        <br />
                        <br />
                        בנוסף לכך אחזקת מבנים לא רק משפרת את נראות ואיכות הבניין, אלא גם תורמת להעלאת ערך הדירה
                    </p></small>
                </Collapse>
                <Collapse isOpened={this.state.collapsetoggle === 'gardening'}>
                    <small><p 
                    className='opacity'
                    >
                        הגינה היא אחד האלמנטים החשובים בסביבת מגורים / עבודה היא הדבר הראשון שאנו פוגשים כאשר אנחנו מגיעים למקום מסויים
                        <br />
                        <br />
                        לכן אנחנו כאן כדי לדאוג לכם לגינה יפה ומטופחת בעזרת שירותי הגינון הכי טובים ואיכותיים שלנו
                    </p></small>
                </Collapse>
                <Collapse isOpened={this.state.collapsetoggle === 'project'}>
                    <small><p
                     className='opacity'
                     >
                    תוכלו למצוא אצלנו שירותי מיזוג אוויר, התקנת מצלמות אבטחה , שיפוצים וגבס ברמה המקצועית והגבוהה ביותר
                    </p></small>
                </Collapse>

            </div>
        )
    }
}

const headerStyle = {
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'
}