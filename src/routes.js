import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';


const Routes = () => (
    //BrowserRouter vai definir que estamos a usar rotas atravez do browser
    <BrowserRouter>
    {/* Switch vai permitir que apenas uma unica rota seja chamada */}
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />

        </Switch>
    </BrowserRouter>
    );

    export default Routes;