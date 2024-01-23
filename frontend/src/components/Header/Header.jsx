import React, { useContext } from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";
// import AuthContext from "../../context/AuthContext"; 
// import { useNotifications } from "../../hooks/useNotifications";

export default function Header () {
    const navigate = useNavigate();
    // const { user, isAuth, isAdmin, logout } = useContext(AuthContext);
    // const { notificationsNumber } = useNotifications();

    const redirects = {
        home: () => navigate('/home'),
        rent: () => navigate('/rent'),
        // dashboard: () => navigate('/dashboard'),
        // login: () => navigate('/login'),
        // register: () => navigate('/register'),
        // profile: (id) => navigate('/profile/' + id),
    }

    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }
   
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a className="logo d-flex align-items-center" onClick={() => redirects.home()}>
                    <img src="/assets/Logo.png" alt="logo"/>
                </a>
                <nav id="navbar" className="navbar">
                    <ul className="header-container container-fluid">
                        <li className="link nav-link" onClick={() => redirects.rent()}>Rent</li>
                        <li className="link nav-link" onClick={() => redirects.home()}>Home</li>
                        {/* <div className="navbar_list collapse navbar-collapse" id="headerNav">
                            <ul className="nav_list navbar-nav">
                                <li className="link nav-link" onClick={() => redirects.home()}>Home</li>
                                <li className="link nav-link" onClick={() => redirects.rent()}>Rent</li>
                                {isAdminUser}
                                {isUsername}
                                {isUser}
                            </ul>
                        </div> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}