import { NavLink } from "react-router-dom"
import { useState } from "react"

// import './navbar.css'
// export const Navbar = () => {
//     return(
//         <div>
//             {/* <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/' >Home</NavLink>  */}

//              <NavLink to='/' >Home</NavLink> | 
//              <NavLink to='/about' >About</NavLink> | 
//              <NavLink to='/users' >Users</NavLink> | 
//              <NavLink to='/count' >Count</NavLink> | 
//              <NavLink to='/dashboard' >Dashboard</NavLink>
//         </div>
//     )
// }

import homeImg from '../assets/home.png'

export const Navbar = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    const handleBurgerActive = () => {
        setBurgerActive(!burgerActive)
    }
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <NavLink className="navbar-item" to="/">
                    <img src={homeImg} width={30} height={140} alt="img" />
                </NavLink>
                <a role="button" onClick={handleBurgerActive} className={ 'navbar-burger ' + (burgerActive ? 'is-active' : '') }  aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div id="navbarBasicExample" className={'navbar-menu ' + (burgerActive ? 'is-active' : '') } >
                <div className="navbar-start">
                    
                    <NavLink className="navbar-item" to="/users">
                        Users
                    </NavLink>
                    <NavLink className="navbar-item" to="/count">
                        Count
                    </NavLink>
                    <NavLink className="navbar-item" to="/about">
                        About
                    </NavLink>
                    <NavLink className="navbar-item" to="/dashboard">
                        Dashboard
                    </NavLink>


                    {/* <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div> */}

                    {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div> */}

                </div>

            </div>

        </nav>

    )
}

