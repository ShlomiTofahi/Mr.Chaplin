import React, { Component } from 'react'
import CoverImage from './CoverImage'
// import Robot from './Robot'

export default class Home extends Component {
    render() {
        return (

            <div
                id='home'
                style={{
                    backgroundColor: '#282c34',
                    width: '100%',
                    height: '100%',
                    paddingBottom: '50px',
                }}>
                <CoverImage />
                {/* <Robot /> */}
            </div>
        )
    }
}
