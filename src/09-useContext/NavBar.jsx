import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary rounded-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">useContext</Link>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <NavLink
                                    className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                                    to='/'
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                                    to='/about'
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}
                                    to='/login'
                                >
                                    Login
                                </NavLink>
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    );
};