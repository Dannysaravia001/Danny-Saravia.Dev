import {
    DiCss3,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiJqueryLogo,
    DiMongodb,
    DiMysql
} from 'react-icons/di';

import './About.css';

export default function SkillSet() {
    return (
        <div className="iconContainer">
            <div className='icon'><DiCss3 size={40} /></div>
            <div className="icon"><DiJavascript1 size={40} /></div>
            <div className="icon"><DiNodejs size={40} /></div>
            <div className="icon"><DiReact size={40} /></div>
            <div className="icon"><DiJqueryLogo size={40} /></div>
            <div className="icon"><DiMongodb size={40} /></div>
            <div className="icon"><DiMysql size={40} /></div>
        </div>
    );
}