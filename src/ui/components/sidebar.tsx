import * as React from 'react';

export default class Sidebar extends React.Component < null > {
    onclick() {

    }

    render() {
        return (
            <div className="detail">
                <div className="sidebar-toggle">
                    <div className="sidebar-toggle-line-wrap">
                        <span className="sidebar-toggle-line sidebar-toggle-line-first"></span>
                        <span className="sidebar-toggle-line sidebar-toggle-line-middle"></span>
                        <span className="sidebar-toggle-line sidebar-toggle-line-last"></span>
                    </div>
                </div>
                <aside id="sidebar" className="sidebar">
                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-inner">
                        <section className="site-overview sidebar-panel  sidebar-panel-active ">
                            <div className="site-author motion-element">
                                <img className="site-author-image" src="https://raw.githubusercontent.com/chocoluffy/blog_assets/master/me.jpg" alt="Ou Ye" />
                                <p className="site-author-name">Ou Ye</p>
                                <p className="site-description motion-element">时间知道</p>
                            </div>
                            <nav className="site-state motion-element">
                                <div className="site-state-item site-state-posts">
                                    <a href="/archives">
                                        <span className="site-state-item-count">122</span>
                                        <span className="site-state-item-name">日志</span>
                                    </a>
                                </div>
                                <div className="site-state-item site-state-categories">
                                    <span className="site-state-item-count">9</span>
                                    <span className="site-state-item-name">分类</span>
                                </div>
                                <div className="site-state-item site-state-tags">
                                    <span className="site-state-item-count">66</span>
                                    <span className="site-state-item-name">标签</span>
                                </div>
                            </nav>
                            <div className="feed-link motion-element">
                                <a href="/atom.xml" rel="alternate">
                                    <i className="fa fa-rss"></i>
                                    RSS
                                </a>
                            </div>
                            <div className="links-of-author motion-element">
                                <span className="links-of-author-item">
                                    <a href="https://github.com/chocoluffy" target="_blank" title="GitHub">
                                        <i className="fa fa-fw fa-github"></i>
                                        GitHub
                                    </a>
                                </span>
                                <span className="links-of-author-item">
                                    <a href="https://www.zhihu.com/people/yu-shun-zhe/" target="_blank" title="知乎">
                                        <i className="fa fa-fw fa-globe"></i>
                                        知乎
                                    </a>
                                </span>
                                <span className="links-of-author-item">
                                    <a href="https://www.linkedin.com/in/yushunzhe/" target="_blank" title="Linkedin">
                                        <i className="fa fa-fw fa-linkedin-square"></i>
                                        Linkedin
                                    </a>
                                </span>
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        );
    }
}