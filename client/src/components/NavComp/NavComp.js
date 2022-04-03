import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom'
import NavHeader from './morganNavHeader.JPG'

const NavComp = () => {

    const location = useLocation()

    return (
        <div>
            <div className='morgs-header-container'>
                <img className='morgs-header' src={NavHeader} alt="" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='bg-darker'>
                <div className="container-fluid">
                    {/* <Link to='/' className='navbar-brand'>LOGO</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/shop' className={location.pathname === '/shop' ? 'nav-link active' : 'nav-link'}>SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/gallery' className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}>GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>CONTACT</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    DROPDOWN</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp
