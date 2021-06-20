import React from 'react';
import './Header.css';

const Header = ({headTitle, headerExpanded}) => {
    return (
        <div className="head-container">
            <img
             src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            //  src="https://user-images.githubusercontent.com/34273222/122657596-94f57500-d182-11eb-829b-b2a59f8fd316.png"
             className={`head-image ${
                 headerExpanded
                     ? 'head-image-expanded'
                     : 'head-image-contracted'
             }`}
             alt="headerImage"
             />
            <h1 className={`head-text ${
                 headerExpanded
                     ? 'head-text-expanded'
                     : 'head-text-contracted'
             }`}>
                {headTitle}
            </h1>
        </div>
    );
};
export default Header;