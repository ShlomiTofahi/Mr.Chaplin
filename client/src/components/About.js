import React, { Component } from 'react'

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
            <div id="about" className='shadow my-5' align='right' style={this.aboutStyle()}>
                {/* <h2 align='center' className='brand display-4 pt-4' style={window.innerWidth >= 992 ? { fontFamily: "'Shadows Into Light', Kimberly Geswein", opacity: '0.4' } : { fontFamily: "'Shadows Into Light', Kimberly Geswein", opacity: '0.4', fontSize: '2.0em' }}>
                            החזון שלנו
                        </h2> */}
                <h2 style={headerStyle} align='center' className='display-4'>החזון שלנו</h2>
                <p className='lead'>
                    מיסטר צ׳פלין הינה חברה העוסקת בניהול ואחזקת מבנים , תפעול וביצוע פרויקטים רב תחומיים.
                    חברתנו שמה לעצמה כערך עליון שקיפות והגינות מקסימלית מול הלקוח , חדשנות  ומצויינות
                    <br /><br />
                    לקוחותנו יכולים להנות מאפליקציה חדשנית לניהול מבנים המאפשרת מענה מהיר וזמינות 24/7
                    <br /><br />
                    הצוותים שלנו מיומנים כל אחד בתחומו ולרשתנו כל הציוד הנדרש על מנת לתת לכם את השירות הכי מהיר ומקצועי ובכך להבטיח את שימור אורח החיים בסביבות
                    המגורים / העבודה שלכם .
                    <br /><br />
                    כמו כן אנו שמים דגש על רמת הבטיחות הנדרשת בהתאם לתו תקן כדי להבטיח את רמת הביטחון המקסימלית ללקוחות ולעובדים שלנו
                    <br /><br />
                    לכל מבנה יש צרכים משלו לכן אנו ממליצים לקבוע פגישת יעוץ בחינם על מנת שנוכל להבין את הצרכים של המבנה שלכם ובכך לבנות יחד אתכם תוכנית עבודה מתאימה שתספק לכם את כלל הצרכים במידה הגבוהה ביותר
                </p>
            </div>
        )
    }
}

const headerStyle = {
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'
}