import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="parent">
                <NavLink to="/" exact activeClassName ="current" className="child">General News<i className="ui globe icon"/></NavLink>
                <NavLink to="/technical" activeClassName ="current" className="child">Technical News<i className="ui code icon"/></NavLink>
                <NavLink to="/sports" activeClassName ="current" className="child">Sports News<i className="ui football ball icon"/></NavLink>
            </div>
        </div>
    )
}

export default Header
