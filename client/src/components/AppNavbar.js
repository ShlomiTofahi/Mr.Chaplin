import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, Nav, NavItem, Container, NavbarBrand
} from 'reactstrap';

export default class AppNavbar extends Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    shdowStyle = () => {
        return {
            direction: 'ltr',
            WebkitBoxShadow: '0 0 5px 0.1px #C7C7C7',
            boxSshadow: '0 0 5px 0.1px #C7C7C7'
        };
    };

    openTab = (event) => {

        var i, tablinks;

        tablinks = document.getElementsByClassName("header-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        tablinks = document.getElementsByClassName("header-tablinks-right");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        tablinks = document.getElementsByClassName("header-tablinks-left");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active";
    }

    render() {
        return (
            <Fragment>
                <Navbar style={this.shdowStyle()} fixed='top' color='white' light expand='sm' className='nav-header mb-5'>
                    <Container>

                        <NavbarBrand href="#" className="mr-auto">
                        </NavbarBrand>
                            <Link className="mr-auto" style={{ position: 'absolute', marginRight: '100px' }} className={'navlinkLogo d-sm-inline-block'} to='#'>
                                <p className='mb-0'>
                                    <img style={{ width: '108.3px' }} src='/images/logo.jpg' alt='לוגו' />
                                </p>
                            </Link>

                        <NavbarToggler className='NavToggler' onClick={this.toggle} />
                        <Collapse onClick={() => { this.setState({ isOpen: false }) }} isOpen={this.state.isOpen} navbar >
                            <Nav className='header-tab m-auto' navbar>
                                <NavItem>
                                    <a style={{ float: 'right' }} onClick={this.openTab.bind(this)} className={'navlink header-tablinks py-2 nav-link px-3 px-md-4 px-lg-5 d-md-inline-block lead'} href='#about'>אודות</a>
                                </NavItem>
                                <NavItem>
                                    <a style={{ float: 'right' }} onClick={this.openTab.bind(this)} className={'navlink header-tablinks py-2 nav-link px-3 px-md-4 px-lg-5 d-md-inline-block lead'} href='#contact'>צור קשר</a>
                                </NavItem>
                                <NavItem>
                                    <a style={{ float: 'right' }} onClick={this.openTab.bind(this)} className={'navlink header-tablinks py-2 nav-link px-3 px-md-4 px-lg-5 d-md-inline-block lead'} href='#services'>שירותי ניהול</a>
                                </NavItem>
                                <NavItem>
                                    <a style={{ float: 'right' }} onClick={this.openTab.bind(this)} className={'navlink header-tablinks py-2 nav-link px-3 px-md-4 px-lg-5 d-md-inline-block lead'} href='#home'>עמוד הבית</a>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}