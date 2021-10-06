import React, { Component } from 'react'
import { Collapse } from 'react-collapse';

export default class About extends Component {
    state = {
        readMore: false,
    };

    collapseToggle = () => {
        this.setState({
            readMore: !this.state.readMore
        });
    }

    aboutStyle = () => {
        return {
            margin: '0 auto',
            // backgroundColor: '#575757',
            color: 'white',
            width: window.innerWidth >= 992 ? '60%' : '90%',
            padding: '24px',
            // opacity: '0.7',

        };
    };

    render() {
        return (
            <div id="about" className=' my-5' align='right' style={this.aboutStyle()}>
                {/* <h2 align='center' className='brand display-4 pt-4' style={window.innerWidth >= 992 ? { fontFamily: "'Shadows Into Light', Kimberly Geswein", opacity: '0.4' } : { fontFamily: "'Shadows Into Light', Kimberly Geswein", opacity: '0.4', fontSize: '2.0em' }}>
                            החזון שלנו
                        </h2> */}
                <h2 style={headerStyle} align='center' className='display-1'>
                    הניהול שלנו <br />
                    השקט שלכם
                </h2>
                <p className='about-text lead mt-5'>
                    <strong className='text-bold'>
                        מיסטר צ׳פלין הינה חברה העוסקת בניהול ואחזקת מבנים , תפעול וביצוע פרויקטים רב תחומיים.
                        חברתנו שמה לעצמה כערך עליון שקיפות והגינות מקסימלית מול הלקוח , חדשנות  ומצויינות.
                    </strong>
                    <br />
                    <br />
                    {
                    !this.state.readMore &&
                    <button className="text-bold regular-btn" onClick={this.collapseToggle}>קרא עוד</button>
                    }
                    <Collapse isOpened={this.state.readMore}>
                        לקוחותנו יכולים להנות מ
                        <strong className='text-bold'>
                            אפליקציה חדשנית&nbsp;
                        </strong>
                        לניהול מבנים המאפשרת מענה מהיר ו
                        <strong className='text-bold'>
                            זמינות&nbsp;
                        </strong>
                        24/7
                        <br /><br />
                        ה
                        <strong className='text-bold'>
                            צוותים&nbsp;
                        </strong>

                        שלנו מיומנים כל אחד בתחומו ולרשתנו כל הציוד הנדרש על מנת לתת לכם את השירות הכי
                        <strong className='text-bold'>
                            &nbsp;מהיר ומקצועי&nbsp;
                        </strong>

                        ובכך להבטיח את שימור
                        <strong className='text-bold'>
                            &nbsp;אורח החיים&nbsp;
                        </strong>
                        בסביבות
                        המגורים / העבודה שלכם.
                        <br /><br />
                        כמו כן אנו שמים דגש על רמת ה
                        <strong className='text-bold'>
                            בטיחות&nbsp;
                        </strong>

                        הנדרשת בהתאם לתו תקן כדי להבטיח את רמת הביטחון המקסימלית ללקוחות ולעובדים שלנו
                        <br /><br />
                        לכל מבנה יש צרכים משלו לכן אנו ממליצים לקבוע
                        <strong className='text-bold'>
                            &nbsp;פגישת יעוץ בחינם&nbsp;
                        </strong>

                        על מנת שנוכל להבין את הצרכים של המבנה שלכם ובכך לבנות יחד אתכם
                        <strong className='text-bold'>
                            &nbsp;תוכנית&nbsp;
                        </strong>

                        עבודה מתאימה שתספק לכם את כלל הצרכים
                        <strong className='text-bold'>
                            &nbsp;במידה הגבוהה ביותר&nbsp;
                        </strong>
                        .
                        <br /><br />
                        <button className="text-bold regular-btn" onClick={this.collapseToggle}>קרא פחות</button>
                    </Collapse>
                </p>
            </div>
        )
    }
}

const headerStyle = {
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)',
}