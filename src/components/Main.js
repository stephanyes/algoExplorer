import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Blocks from '../components/Blocks/Blocks';
import Navigation from '../components/Navigation/Navigation';
import Transactions from '../components/Transactions/Transactions';
import SingleBlock from '../components/SingleBlock/SingleBlock';
import Error from '../components/Error/Error';


const Main = () => {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blocks" component={Blocks} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/block/:id" component={SingleBlock} />
                <Route component={Error} />
            </Switch>
        </div>
    )
}

export default Main;