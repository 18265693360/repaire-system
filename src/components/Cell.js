import React from 'react';

// 组件类型检查
import PropTypes from 'prop-types';
import './Cell.css';
import moment from 'moment';


class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    //引入数据需要安装类型检查 prop-types   状态需要判断
    render() {
        const {title, status, date} = this.props;
        let getstatusText = (statusNum) =>{
            if (statusNum === 1){
                return "派单中"
            } else if (statusNum === 2) {
                return "正在维修"
            }else if (statusNum === 3){
                return "维修完成"
            }
        };

        let getFromDate = (dateString) =>{
            return moment(dateString).format("YYYY-MM-DD hh:mm:ss")
        };

        return (
            <div className="cell-wrap">
                <div className="cell-row1">
                    <div className="row-left">
                        <div className="title">
                            {title}
                        </div>
                        <i className="iconfont iconhtbarrowright02"></i>
                    </div>
                    <div className="row-right">
                        {
                            getstatusText(status)
                        }
                    </div>
                </div>
                <div className="cell-row2">
                    {/*{getFromDate}     这是时间的格式 还需要添加data中的时间 */}
                    {getFromDate(date)}
                </div>
            </div>
        )
    }
}

Cell.propTypes = {
    titles: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.number
};

export default Cell;