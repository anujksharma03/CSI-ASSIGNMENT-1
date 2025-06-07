import React from 'react';
import './Header.css';
const logo = `${process.env.PUBLIC_URL}/Celebal-logo.png`;
const user = `${process.env.PUBLIC_URL}/UserProfile-CSI.png`;

const Header = () => {

    return (
        <header>
            <nav>
                < a href='https://csi.celebaltech.com/'>
                <img id='logo' src={logo} alt="Celebal-logo"/>
                </a>
                <a href="https://www.linkedin.com/in/prajjwalsharma-/">
                <div className='user-profile'>
                    <img id='user-profile-pic' src={user} alt="user-profile" />
                    <div className='user-name'>
                        <p>Prajjwal Sharma</p>
                        <p><span>ReactJs Developer</span></p>
                    </div>
                </div>
                </a>
            </nav>
        </header>
    )
}

export default Header;