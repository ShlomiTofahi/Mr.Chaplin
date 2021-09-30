import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

import Home from './home/Home';
// import About from './About';
// import Contact from './Contact';


export default class Main extends Component {

    render() {
        return (
            <main>
                <ScrollToTop />
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/* <Route exact path='/admin' component={is_admin ? AdminManage : Home} />

                    <Route exact path='/profile' component={isAuthenticated ? ShowProfile : Home} />
                    <Route exact path='/profile/edit' component={isAuthenticated ? EditProfile : Home} />

                    <Route exact path='/products' component={Products} />
                    <Route exact path='/products/payment' component={Payment} />

                    <Route exact path='/forum' component={Forum} />
                    <Route exact path="/forum/:pet" component={Forum} />

                    <Route exact path='/rest-pasword' component={RestPassword} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/haircut' component={Haircut} />
                    <Route exact path='/FileUpload' component={FileUpload} /> */}

                </Switch>
            </main>
        )
    }
}

