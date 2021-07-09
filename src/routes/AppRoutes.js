import React, { } from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import Dashboard from '../components/app/dashboard';
import Login from '../components/Login/Login';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

     
    const {isAuth} = useSelector(state => state.auth)
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/login"
                        component={ Login }
                        isAuthenticated={ isAuth }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isAuth }
                        path="/admin"
                        component={ Dashboard }
                    />

                    <Redirect to="/login" />


                </Switch>
            </div>
        </Router>
    )
}