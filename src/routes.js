import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './pages/Home';
import CharacterInfo from './pages/CharacterInfo';
import MyFavoriteCharacters from './pages/MyFavoriteCharacters';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ver-mais/:id" component={CharacterInfo} />
            <Route exact path="/meus-favoritos" component={MyFavoriteCharacters} />
        </Switch>
    </BrowserRouter>
);

export default Routes;