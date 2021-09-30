import React, { Component, Fragment } from 'react'

export default class About extends Component {

    aboutStyle = () => {
        return {
            margin: '0 auto',
            // backgroundColor: '#323232',
            color: 'white',
            width: window.innerWidth >= 992 ? '60%' : '90%',
            padding: '24px',
            opacity: '0.7',

        };
    };

    render() {
        return (
            <div style={this.aboutStyle()} className='shadow my-5'>
                <div id="services" className='services my-5'>
                    <div className='service-item'>
                        <div className='icon'>
                            <img className='garden-icon' src="/icons/clean-icon.png" />
                        </div>
                        <h4>שירותי נקיון</h4>
                    </div>
                    <div className='service-item'>
                        <div className='icon'>
                            <img className='garden-icon' src="/icons/maintenance-icon.png" />
                        </div>
                        <h4>ניהול ואחזקת מבנים</h4>
                    </div>
                    <div className='service-item'>
                        <div className='icon'>
                            <img className='garden-icon' src="/icons/gardening-icon.png" />
                        </div>
                        <h4>שירותי גינון</h4>
                    </div>
                    <div className='service-item'>
                        <div className='icon'>
                            <img className='project-icon' src="/icons/project-icon.png" />
                        </div>
                        <h4>פרויקטים</h4>
                    </div>
                </div>
                <small><p className='des-text'>
                    נקיון שוטף ליצירת סביבת מגורים / עבודה נעימה זהו דבר הכרחי לשיפור האווירה ואורח החיים ,
                    <br />
                    <br />
                    חברתנו דואגת לנקיון ברמה הגבוה ביותר עם אנשי מקצוע, חומרים ומכשור הכי מתקדם בתחום כמו כן אצלנו תוכלו למצוא גם שירותי פוליש ונקיון לאחר בניה
                </p></small>
            </div>
        )
    }
}

const headerStyle = {
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'
}