import $ from 'jquery';
import * as React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component < null > {

    componentDidMount() {
        document.title = "Ou's home";
    }

    toggleNavigation() {
        let $siteNav = $('.site-nav');
        let ON_CLASS_NAME = 'site-nav-on';
        let isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
        let animateAction: keyof typeof $siteNav = isSiteNavOn ? 'slideUp' : 'slideDown';
        let animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';
        $siteNav.stop()[animateAction]('fast', () => {
            if (animateCallback == 'removeClass') {
                $siteNav.removeClass(ON_CLASS_NAME);
            } else {
                $siteNav.addClass(ON_CLASS_NAME);
            }
        });
    }

    render() {
        return (
            <div className="detail">
                <header id="header" className="header">
                    <div className="header-inner">
                        <div className="site-meta ">
                            <div className="custom-logo-site-title">
                                <Link to="/" className="brand" rel="start">
                                    <span className="logo-line-before"><i></i></span>
                                    <span className="site-title">Ou の One Piece</span>
                                    <span className="logo-line-after"><i></i></span>
                                </Link>
                            </div>
                            <p className="site-subtitle"></p>
                        </div>
                        <div className="site-nav-toggle" id="nav-toggle">
                            <button onClick={this.toggleNavigation}>
                                <span className="btn-bar"></span>
                                <span className="btn-bar"></span>
                                <span className="btn-bar"></span>
                            </button>
                        </div>
                        <nav className="site-nav" >
                            <ul id="menu" className="menu">
                                <li className="menu-item menu-item-tech">
                                    <Link to="/" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-home active"></i> <br />
                                        Home
                                    </Link>
                                </li>
                                <li className="menu-item menu-item-tech">
                                    <Link to="/machineLearning" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-anchor"></i> <br />
                                        Machine Learning
                                    </Link>
                                </li>
                                <li className="menu-item menu-item-books">
                                    <a href="./resume_ou_ye_software_engineer.pdf" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-user-circle"></i> <br />
                                        Resume PDF
                                    </a>
                                </li>
                                <li className="menu-item menu-item-books">
                                    <Link to="/ads" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-money"></i> <br />
                                        Ads
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
