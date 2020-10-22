import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Auth from './utils/Auth';
import {AuthContext} from './utils/authContex'

function Navigation() {

    const [name, setUserName] = React.useState('');

    const context = React.useMemo(() => {
        return {
            signIn: (name) => {
                window.localStorage.setItem('@user_name',name);
                setUserName(name)
            },
            signOut: () => {
                window.localStorage.clear();
                setUserName('')
            },
        };
    }, []);

    React.useEffect(() => {
        const userName = Auth.getAuthToken();
        setUserName(userName);
    }, [])

    return (

        <AuthContext.Provider value={{ signIn: context.signIn, signOut: context.signOut }}>
            <Router>
                <Switch>
                    {
                        name
                            ?
                            <Route path='/' exact component={Dashboard} />
                            :
                            <Route path='/' component={Login} />
                    }

                </Switch>
            </Router>
        </AuthContext.Provider>
    );
}

export default Navigation;
