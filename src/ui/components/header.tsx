import * as React from 'react';

export default class Header extends React.Component < null > {
    render() {
        return (
            <div className="detail">
                <header id="header" className="header">
                    <div className="header-inner">
                        <div className="site-meta ">
                            <div className="custom-logo-site-title">
                                <a href="/" className="brand" rel="start">
                                    <span className="logo-line-before"><i></i></span>
                                    <span className="site-title">Ou Ye的 One Piece</span>
                                    <span className="logo-line-after"><i></i></span>
                                </a>
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
                                    <a href="/tech" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-battery-full"></i> <br />
                                        技术
                                    </a>
                                </li>
                                <li className="menu-item menu-item-life">
                                    <a href="/life" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-book"></i> <br />
                                        随笔
                                    </a>
                                </li>
                                <li className="menu-item menu-item-books">
                                    <a href="/books" rel="section">
                                        <i className="menu-item-icon fa fa-fw fa-bookmark"></i> <br />
                                        书房
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
