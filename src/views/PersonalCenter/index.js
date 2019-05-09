import React from 'react';
import "./index.css";
import { Button } from 'antd-mobile';


class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="center">
                <div className="header">
                    <div className="username">
                        18265693360
                    </div>
                    <div className="avatar">
                        <img src="https://pic.cnblogs.com/face/1253749/20180512144313.png" alt=""/>
                    </div>
                </div>
                <div className="content">
                    <div className="repair-left">
                        <div className="repairtext">
                            待维修
                        </div>
                        <div className="repairnum">
                            0
                        </div>
                    </div>
                    <div className="repair-right">
                        <div className="repairedtext">
                            已完成维修
                        </div>
                        <div className="repairednum">
                            2
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <Button type="warning">退出登录</Button>
                </div>
            </div>
        )
    }
}

export default PersonalCenter;