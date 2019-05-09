import React from 'react';
import {NavBar, TabBar, Icon} from 'antd-mobile';
import './index.css';


const tabArr = [
    {
        title:'所有维修记录',
        icon:'iconallpic',
        name:'all',
        url:'/layout'
    },
    {
        title:'已派单',
        icon:'iconGroupCopy',
        name:'send',
        url:'/layout/sended'
    },
    {
        title:'已完成',
        icon:'iconyiwancheng',
        name:'done',
        url:'/layout/done'
    },
    {
        title:'个人中心',
        icon:'iconwodedangxuan1',
        name:'personalcenter',
        url:'/layout/personalcenter'
    }
];


class Layout extends React.Component {
    constructor(props) {
        super(props);
        const setTitle = (isInit=true)=>{
            const pathName = props.location.pathname;
            let title = "";
            switch(pathName){
                case "/layout":
                    title = "所有维修记录";
                    if(this.props.title === '所有维修记录');
                    break;
                case "/layout/sended":
                    title = "已派单";
                    break;
                case"/layout/done":
                    title = "维修完成";
                    break;
                default:
                    title = "维修记录";
            }
            if (isInit){
                this.state = {
                    title,
                    selectedTab: 'all'
                }
            }else{
                this.setState({
                    title
                })
            }
        };
        setTitle();
        this.setTitle = setTitle;
    };



//写页面的地方
    render() {
        return (
            <div className="layout-container">
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    leftContent="返回"
                >{this.state.title}</NavBar>
                {this.props.children}


                <TabBar
                    className="tabbar-wrap"
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    {
                        tabArr.map((item, index) =>(
                            <TabBar.Item
                                key={index}
                                title={item.title}
                                icon={<i className={'iconfont' + ' ' +  item.icon} />}
                                selectedIcon={<i className={'iconfont' + ' ' + item.icon + 'active'} />}

                                selected={this.state.selectedTab === item.name}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.name,
                                    });
                                    this.props.history.push(item.url)
                                }}
                            />
                        ))
                    }
                </TabBar>
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props);
    }
    componentWillUpdate(nextProps, nextState) {
        const pathName = nextProps.location.pathname;
        let title = '';
        switch (pathName) {
            case "/layout":
                title = "所有维修记录";
                if (nextState.title === '所有维修记录'){
                    return
                }
                break;
            case "/layout/sended":
                title = "已派单";
                if (nextState.title === '已派单'){
                    return
                }
                break;
            case "/layout/done":
                title = "维修完成";
                if (nextState.title === '维修已完成'){
                    return
                }
                break;
            case "/layout/personalcenter":
                title = "个人中心";
                if (nextState.title === '个人中心'){
                    return
                }
                break;
        }
        this.setState({
            title
        })
    }
}

export default Layout;








