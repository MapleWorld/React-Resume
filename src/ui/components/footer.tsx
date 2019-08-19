import * as React from 'react';

export default class Footer extends React.Component < null > {
    render() {
        return (
            <div className="detail">
                <footer id="footer" className="footer">
                    <div className="footer-inner">
                        <div className="copyright">
                            <span>{new Date().getFullYear()}</span>
                            <span className="with-love">
                                <i className="fa fa-heart"></i>
                            </span>
                            <span className="author">Ou Ye</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
