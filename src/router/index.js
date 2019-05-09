import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import AllRecord from '../views/AllRecord';//所有维修记录
import Sended from '../views/Sended';//已派单
import PersonalCenter from '~/views/PersonalCenter';//个人中心
import Done from '~/views/Done';//已完成


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // {...props}数组展开运算符
    // 要有exact 不然路由混乱 <Route path="/layout" component={AllRecord} exact />



    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/layout" render={(props) =>(
                        <Layout {...props}>
                            <Switch>
                                <Route path="/layout" component={AllRecord} exact />
                                <Route path="/layout/sended" component={Sended} />
                                <Route path="/layout/personalcenter" component={PersonalCenter} />
                                <Route path="/layout/done" component={Done} />
                            </Switch>
                        </Layout>
                    )} />
                </Switch>
            </Router>
        )
    }
}

export default Container;

