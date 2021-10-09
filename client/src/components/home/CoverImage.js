import React, { Component, Fragment } from 'react';
import OfferModal from '../OfferModal';

export default class CoverImage extends Component {
    state = {
        path: "/images/home/",
    };

    render() {
        return (
            <Fragment>
                {/* <div className="main-box"  /> */}

                <section style={{ backgroundImage: `url(${this.state.path}cover3.jpg)` }} class="main-box elementor-section elementor-top-section elementor-element elementor-element-f51a8f9 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="f51a8f9" data-element_type="section">
                    <div class="elementor-background-overlay">
                    </div>
                    <div class="elementor-shape elementor-shape-bottom" data-negative="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"></path>
                        </svg>
                    </div>
                    <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1da8698 animated slideInDown slowest" data-id="1da8698" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;slideInUp&quot;,&quot;animation_delay&quot;:500}">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                        <div class="elementor-element elementor-element-bf0a8f8 elementor-widget elementor-widget-heading" data-id="bf0a8f8" data-element_type="widget" data-widget_type="heading.default">
                                            <div class="elementor-widget-container"> <h3 class="elementor-heading-title elementor-size-default">בַּשֵּׁם הַ' נֵעָשֶׂה וְנַצְלִיחַ</h3></div></div><div class="elementor-element elementor-element-9207f77 elementor-widget elementor-widget-heading" data-id="9207f77" data-element_type="widget" data-widget_type="heading.default">
                                            <div class="elementor-widget-container"> <h1 class="site-header elementor-heading-title elementor-size-default" data-aos='flip-up'>מיסטר צ'פלין</h1></div></div><div class="elementor-element elementor-element-1e77f8f elementor-widget elementor-widget-heading" data-id="1e77f8f" data-element_type="widget" data-widget_type="heading.default">
                                            <div class="elementor-widget-container"> <h2 class="elementor-heading-title elementor-size-default"><p data-aos='fade-left' data-aos-delay="500">ניהול מבנים</p>&bull; <p data-aos='fade-left' data-aos-delay="1000">אחזקה</p>&bull; <p data-aos='fade-left' data-aos-delay="1500">שירותי נקיון</p></h2></div></div><div class="elementor-element elementor-element-9207f77 elementor-widget elementor-widget-heading" data-id="9207f77" data-element_type="widget" data-widget_type="heading.default">
                                            {/* <div class="elementor-widget-container"> <h2 class="elementor-heading-title elementor-size-default">בפריסה ארצית</h2></div></div><div class="elementor-element elementor-element-4bc6627 elementor-widget elementor-widget-spacer" data-id="4bc6627" data-element_type="widget" data-widget_type="spacer.default"> */}
                                            <div class="elementor-widget-container">
                                                <div class="elementor-spacer">
                                                    <div class="elementor-spacer-inner">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="elementor-element elementor-element-06e8859 elementor-align-center elementor-widget elementor-widget-button" data-id="06e8859" data-element_type="widget" data-widget_type="button.default">
                                            <div class="elementor-widget-container">
                                                <div class="elementor-button-wrapper">
                                                    <OfferModal />
                                                    {/* <button className='offer-btn'>
                                                        <span>להצעת מחיר</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                                        </svg>
                                                    </button> */}
                                                    {/* <a href="tel:054-8353066" class="elementor-button-link elementor-button elementor-size-md" role="button"> <span class="elementor-button-content-wrapper">
                                                        <span class="elementor-button-icon elementor-align-icon-right">
                                                            <i aria-hidden="true" class="fas fa-phone-alt">
                                                            </i>
                                                        </span>
                                                        <span class="elementor-button-text">054-8353066</span>
                                                    </span>
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}