import React from 'react';
import {NavBar, Button, Icon} from 'antd-mobile';
import { InputItem } from 'antd-mobile';
import './index.scss';
//rc 将数据导入state
// import {createFrom}错了是 form 不是 from   from 'rc-form';//引入表单注入插件

import {createForm} from 'rc-form';//引入表单注入插件 去取值 + 封装表单页面 组件



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClick = () => {
      console.log(this.props.form.getFieldValue('username'));
      console.log(this.props.form.getFieldValue('password'));
    };


    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="login-container">
                {/*<NavBar*/}
                    {/*mode="light"*/}
                    {/*icon={<Icon type="left" />}*/}
                    {/*onLeftClick={() => console.log('onLeftClick')}*/}
                    {/*rightContent={[*/}
                        {/*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,*/}
                        {/*<Icon key="1" type="ellipsis" />,*/}
                    {/*]}*/}
                {/*>NavBar</NavBar>*/}

                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    leftContent="返回"
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >维修员登录页面</NavBar>

                <div className="input-wrap">
                    <InputItem
                        {...getFieldProps('username')}
                        clear
                        placeholder="请输入用户名"
                        // ref={el => this.username = el}
                    >用户名</InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        clear
                        placeholder="请输入密码"
                        type="password"
                        // ref={el => this.password = el}
                    >密码</InputItem>
                    <div className="btn-wrap">
                        <Button
                            type="primary"
                            onClick={this.handleClick
                            }>登录
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props);
        // setInterval(()=>{
                    //     console.log(this.props);
                    // },1000)
    }
}


// const LoginContain = createFrom()(Login); 重新定义组件输出 因为rc的基本运用
const Loginwrap = createForm()(Login);
export default Loginwrap;