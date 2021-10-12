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
            backgroundImage: `url(/images/bgAbout.jpg)`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain',
            backgroundPosition: 'top right',

            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            // opacity: '0.7',
            position: 'relative',

        };
    };

    render() {
        return (
            <div id="about" className='my-5' align='right' style={this.aboutStyle()}>
                <br />
                <p className='about-text lead pt-5'>
                    <h2 style={headerStyle} align='center' className='display-1' data-aos='fade-up'>
                        הניהול שלנו-השקט שלכם
                    </h2>
                    <br />

                    <img style={logoStyle} src="/images/chaplin.png" data-aos='fade-left' />
                    <strong className='text-bold'>
                        <strong className='text-bold text-Highlighted'>
                            מיסטר צ׳פלין הינה חברה העוסקת בניהול ואחזקת מבנים , תפעול וביצוע פרויקטים רב תחומיים.
                            <br />
                            חברתנו שמה לעצמה כערך עליון שקיפות והגינות מקסימלית מול הלקוח , חדשנות  ומצויינות.
                        </strong>
                        <br />
                        <br />
                        {
                            !this.state.readMore &&
                            <button className="text-bold regular-btn" onClick={this.collapseToggle}
                                data-aos="flip-up"
                                data-aos-anchor-placement="top-bottom"
                            >קרא עוד</button>
                        }
                        <Collapse isOpened={this.state.readMore}>
                            {/* <div style={headerLogoStyle} align="left"> */}
                            {/* </div> */}
                            לקוחותנו יכולים להנות מ
                            <strong className='text-bold text-Highlighted'>
                                אפליקציה חדשנית&nbsp;
                            </strong>
                            לניהול מבנים המאפשרת מענה מהיר ו
                            <strong className='text-bold text-Highlighted'>
                                זמינות&nbsp;
                            </strong>
                            <strong className='text-header-color'>
                                24/7
                            </strong>
                            <br /><br />
                            ה
                            <strong className='text-bold text-Highlighted'>
                                צוותים&nbsp;
                            </strong>

                            שלנו מיומנים כל אחד בתחומו ולרשתנו כל הציוד הנדרש
                            <br />
                            על מנת לתת לכם את השירות הכי
                            <strong className='text-bold text-Highlighted'>
                                &nbsp;מהיר ומקצועי&nbsp;
                            </strong>
                            <br />
                            ובכך להבטיח את שימור
                            <strong className='text-bold text-Highlighted'>
                                &nbsp;אורח החיים&nbsp;
                            </strong>
                            בסביבות
                            המגורים / העבודה שלכם.
                            <br /><br />
                            כמו כן אנו שמים דגש על רמת ה
                            <strong className='text-bold text-Highlighted'>
                                בטיחות&nbsp;
                            </strong>

                            הנדרשת 
                            {/* בהתאם לתו תקן */}
                            <br />
                            כדי להבטיח את רמת הביטחון המקסימלית ללקוחות ולעובדים שלנו
                            <br /><br />
                            הסטנדרט שתקבלו אצלנו במסגרת שירותי האחזקה והנקיון הינו התו תקן הגבוהה ביותר ללא פשרות.

                            <br /><br />
                            לכל מבנה יש צרכים משלו לכן אנו ממליצים לקבוע
                            <strong className='text-bold text-Highlighted'>
                                &nbsp;פגישת יעוץ בחינם&nbsp;
                            </strong>
                            <br />
                            על מנת שנוכל להבין את הצרכים של המבנה שלכם
                            <br />
                            ובכך לבנות יחד אתכם
                            <strong className='text-bold text-Highlighted'>
                                &nbsp;תוכנית&nbsp;
                            </strong>

                            עבודה מתאימה שתספק לכם את כלל הצרכים
                            <strong className='text-bold text-Highlighted'>
                                &nbsp;במידה הגבוהה ביותר&nbsp;
                            </strong>
                            .
                            <br /><br />
                            <button className="text-bold regular-btn" onClick={this.collapseToggle}
                                data-aos="flip-down"
                                data-aos-anchor-placement="top-bottom"
                            >קרא פחות</button>
                        </Collapse>
                    </strong>
                </p>
            </div>
        )
    }
}

const logoStyle = {
    position: 'absolute',
    zIndex: '-1',

    maxWidth: '100%',
    height: 'auto',
    bottom: 0,
    opacity: 0.89,

    // left: window.innerWidth / 4 + 'px',
    left: 0,
    // right:0,
    // marginLeft:"auto",
    // marginRight:"auto",
    // maxWidth: window.innerWidth / 2 + 'px',
}
const headerLogoStyle = {
    position: 'relative',
    // margin: '0 auto',
    // zIndex: '-1',

    // paddingTop: window.innerWidth / 4.57 + 'px'
}

const headerStyle = {
    // paddingBottom: '65px',
    paddingBottom: '90px',
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)',
    fontWeight: '600'

}