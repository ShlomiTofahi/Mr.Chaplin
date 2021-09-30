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
            <div id="services" className='services shadow my-5' align='right' style={this.aboutStyle()}>
                <di className='icon'>
                    <img className='garden-icon' src="/icons/garden-icon.png" />
                </di>
                <di className='icon'>
                    <img className='garden-icon' src="/icons/garden-icon.png" />
                </di>
                <di className='icon'>
                    <img className='garden-icon' src="/icons/garden-icon.png" />
                </di>
                <di className='icon'>
                    <img className='garden-icon' src="/icons/garden-icon.png" />
                </di>
            </div>
        )
    }
}

const headerStyle = {
    color: '#eba235',
    textShadow: '0px 0px 10px rgb(0 0 0 / 30%)'
}