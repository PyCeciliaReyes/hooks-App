import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, Login, NavBar } from './index';
import { UserProvider } from './context/userProvider';

export const MainApp = () => {
    
    return(
        < UserProvider>
            <NavBar />
            <hr />

            <Routes>
                <Route path='/' element = {<HomePage/>}  />
                <Route path='/about' element = {<AboutPage/>}  />
                <Route path='/login' element = {<Login/>}  />
                <Route path='*' element = {<Navigate to='/about'/>}  />
            </Routes>
        </ UserProvider>
    );
};