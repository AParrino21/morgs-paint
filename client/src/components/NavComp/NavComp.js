import React from 'react';
import './navComp.css';
import { Link, useLocation } from 'react-router-dom'
import NavHeader from './morganNavHeader.JPG'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavComp = () => {

    const location = useLocation()

    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))

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
                            {/* <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>HOME</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/gallery' className={location.pathname === '/gallery' ? 'nav-link active' : 'nav-link'}>GALLERY</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>CONTACT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>ABOUT ME</Link>
                            </li>
                            <li className="nav-item cart-nav-item">
                                {storage === null || storage && storage.length === 0 ? <Link to='/cart' className='nav-link'><ShoppingCartIcon/></Link> : <Link to='/cart' className='nav-link'><ShoppingCartIcon/><span className='cart-nav-item'><p className='item-in-cart'>{storage.length}</p></span></Link>}
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavComp
