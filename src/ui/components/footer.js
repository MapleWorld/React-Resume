import * as React from 'react';

export default function Footer() {
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
