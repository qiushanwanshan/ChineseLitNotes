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
            <div style={{margin: 0}}>
                Copyright © {new Date().getFullYear()} ChineseLitNotes.
            </div>
        </footer>
    );
};


export default CustomFooter;