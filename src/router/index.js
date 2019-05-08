import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import AllRecord from '../views/AllRecord';//所有维修记录
import Sended from '../views/Sended';//已派单



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // {...props}数组展开运算符

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact>

                    </Route>

                    <Route path="/layout" render={(props) =>(
                        <Layout {...props}>
                            <Switch>
                                <Route path="/layout" component={AllRecord} />
                                <Route path="/layout/sended" component={Sended} />
                            </Switch>

                        </Layout>
                    )} />

                </Switch>
            </Router>
        )
    }
}

export default Container;