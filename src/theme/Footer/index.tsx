import React from 'react';
import './CustomFooter.css';

const CustomFooter: React.FC = () => {
    return (
        <footer style={{backgroundColor: '#333', padding: '1rem', color: '#fff', textAlign: 'center'}}>
            <div className="footer-column">
                <h3>关于ChineseLitNotes</h3>
                <ul>
                    <li><a href="">关于我们</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>社区</h3>
                <ul>
                    <li><a href="https://github.com/wissen-ws/ChineseLitNotes">Github</a></li>
                    <li><a href="https://discord.com/channels/1320711800542462026/1320713881496326247">Discord</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>更多</h3>
                <ul>
                    <li><a href="https://x.com/wissen_ws">X</a></li>
                </ul>
            </div>
            <div className="footer-copyright" style={{margin: 0}}>
                Copyright © {new Date().getFullYear()} ChineseLitNotes.
            </div>
            <div className="footer-busuanzi">
                本站访问量 <span id="busuanzi_site_pv">加载中...</span> 次 丨
                本页阅读量 <span id="busuanzi_page_pv">加载中...</span> 次
            </div>
        </footer>
    );
};


export default CustomFooter;