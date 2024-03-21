import {
    DiGit,
    DiNpm,
    DiVisualstudio,
    DiWindows,
    DiUbuntu
    } from 'react-icons/di';

import './About.css';


    export default function Tools() {
        return (
            <div className="toolsContainer">
                <div className="tool"><DiGit size={40}/></div>
                <div className="tool"><DiNpm size={40}/></div>
                <div className="tool"><DiVisualstudio size={40}/></div>
                <div className="tool"><DiWindows size={40}/></div>
            </div>
        );
    }