import * as React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component < null > {
    render() {
        return (
            <div className="detail">
                <header id="header" className="header">
                    <div className="header-inner">
                        <div className="site-meta ">
                            <div className="custom-logo-site-title">
                                <Link to="/" className="brand" rel="start">
                                    <span className="logo-line-before"><i></i></span>
                                    <span className="site-title">Ou Ye 的 One Piece</span>
                                    <span className="logo-line-after"><i></i></span>
                                </Link>
                            </div>
                            <p className="site-subtitle"></p>
                        </div>
                        <div className="site-nav-toggle">
                            <button>
                                <span className="btn-bar"></span>
                                <span className="btn-bar"></span>
                                <span className="btn-bar"></span>
                            </button>
                        </div>
                        <nav className="site-nav">
                            <ul id="menu" className="menu">
                                <li className="menu-item menu-item-tech">
                                    <Link to="/" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-home"></i> <br />
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
                                    <a href="./threejs.html" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-wpexplorer"></i> <br />
                                        Threejs
                                    </a>
                                </li>
                            </ul>
                            <div className="site-search">
                                <div className="popup">
                                    <span className="search-icon fa fa-search"></span>
                                    <input type="text" id="local-search-input"/>
                                    <div id="local-search-result"></div>
                                    <span className="popup-btn-close">close</span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}
