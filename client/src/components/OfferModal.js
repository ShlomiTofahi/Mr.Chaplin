import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Row, Col, Container, Input, FormGroup, Form, Modal, ModalHeader } from 'reactstrap';

import ReactWhatsapp from 'react-whatsapp';
import axios from 'axios';

// import { sendMail } from '../actions/contactsActions';
// import { clearErrors } from '../actions/errorActions';
// import { clearMsgs } from '../actions/msgActions';

// import { Icon, InlineIcon } from '@iconify/react';
// import petsIcon from '@iconify-icons/dashicons/pets';

export default class Contact extends Component {

    state = {
        modal: false,

        name: '',
        phone: '',
        livingArea: '',

        msg: null,
        msgAlery: '',
        visible: true
    };


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // static protoType = {
    //     error: PropTypes.object.isRequired,
    //     msg: PropTypes.object.isRequired,
    //     clearErrors: PropTypes.func.isRequired,
    //     clearMsgs: PropTypes.func.isRequired,
    //     sendMail: PropTypes.func.isRequired
    // }


    // componentDidUpdate(prevProps) {
    //     const { error, msg } = this.props;
    //     if (error !== prevProps.error) {
    //         // Check for register error
    //         if (error.id === 'MAIL_SEND_FAIL') {
    //             this.setState({
    //                 msg: error.msg,
    //                 msgAlery: 'danger'
    //             });
    //         } 
    //     }
    //     if (msg && msg.id === 'MAIL_SEND') {
    //         this.setState({
    //             msg: msg.msg,
    //             msgAlery: 'info',
    //             title: '',
    //             name: '',
    //             phone: '',
    //             email: '',
    //             message: ''
    //         })

    //         // Clear errors
    //         this.props.clearErrors();
    //         // Clear msgs
    //         this.props.clearMsgs();
    //     }
    // }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { name, phone, livingArea } = this.state;
        const body = JSON.stringify({ name, phone, livingArea });
        await axios.post('/send-mail', body, config);
        this.toggle();
    }

    onDismiss = () => {
        this.setState({
            visible: false
        })
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
            backgroundPosition: 'center left',

            backgroundSize: 'cover',
            // backgroundPosition: 'center',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            borderRadius: '50%'

            // opacity: '0.7',

        };
    };

    imgStyle = () => {
        return {
            // border: '1px solid rgb(230, 230, 230)',
            width: '90%',
            display: 'inline',
            webkitBorderRadius: '35px',
            mozBorderRadius: '35px',
            borderRadius: '35px',
            opacity: '0.9',

        };
    };

    render() {
        return (
            <div>
                <button data-aos='fade-left' data-aos-delay="2000" data-aos-anchor-placement="top-bottom" className='offer-btn' onClick={this.toggle}>
                    <span>להצעת מחיר</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </button>
                <Modal align="center" isOpen={this.state.modal} toggle={this.toggle} onClosed={this.close} className="orange-modal">
                    {/* <ModalHeader cssModule={{ 'modal-title': 'w-100 text-center' }} toggle={this.toggle}> */}
                    {/* </ModalHeader> */}

                    <div id="contact" className='contact-fullpage my-5'>
                        <div className="contact">
                            <h5 className='pb-3'>
                            מחפשים חברת אחזקות וניהול מבנים?
                            <br />
                            השאירו פרטים ונחזור אליכם בהקדם!
                            </h5 >
                            {/* <h1 style={{ color: '#7c6f5a7a' }}>נשמח לשמוע ממכם, ולהיות לשירוכם!</h1> */}
                            {/* {this.state.msg ? <Alert color={this.state.msgAlery} isOpen={this.state.visible} toggle={this.onDismiss}>{this.state.msg}</Alert>
                        : null} */}
                            {/* <h3 class='text-header-color mb-4'>השאירו פרטים ונחזור אליכם בהקדם</h3> */}
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup className='contact-form'>
                                    <p>
                                        <input className='input' onChange={this.onChange} type="text" name="name" placeholder="שם" />
                                    </p>
                                    <p>
                                        <input className='input' onChange={this.onChange} type="text" name="phone" placeholder="טלפון" />
                                    </p>
                                    <p>
                                        <input className='input' onChange={this.onChange} type="text" name="livingArea" placeholder="אזור מגורים" />
                                    </p>
                                    <p>
                                    </p>
                                    <p class="full">
                                        <button type="submit">שליחה</button>
                                    </p>
                                </FormGroup>
                            </Form>
                        </div>
                        {/* </div> */}
                        {/* </Container> */}
                    </div>
                </Modal>
            </div>

        )
    }
}

// const mapStateToProps = (state) => ({
//     error: state.error,
//     msg: state.msg
// });

// export default connect(
//     mapStateToProps,
//     { sendMail, clearErrors, clearMsgs }
// )(Contact);