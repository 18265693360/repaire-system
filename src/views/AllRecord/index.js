import React from 'react';


// 消除橡皮筋效应两个方法 1.自己来做滚动条


// import Cell from '../../components/Cell' 可以去调试alias 来简化引入方式 在webpack.config
import Cell from '~/components/Cell';

// import axios from 'axios';
//封装ajax 在 utils中的src目录下
import $axios from '~/utils';
import './index.css';




class AllRecord  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: []
        }
    }

    getData = () =>{
      $axios.get('/admin/repairRecord').then(res =>{
          console.log(res);
          this.setState({
              arr: res.data
          })
      })
    };

    componentWillMount() {
        this.getData();

        // $axios.get('/admin/repairRecord').then(res=>{
        //     console.log(res);
        // })仅仅上面两条代码就可以取得data
    }
    // getData = () =>{
    //   $axios.get('/admin/repairRecord').then(res =>{
    //       console.log(res);
    //       this.setState({
    //           arr: res.data
    //       })
    //   })
    // };
    //
    // componentWillMount() {
    //     this.getData();
    // }  getData componentWillMount  这两部分可以请求data


    //按照data结构 将数据注入组件 key={index}绑定key值
    render(){
        const arr = this.state.arr;
        return(
            <div  className="all-record">
                {
                    arr.map((item, index) =>{
                        return <Cell
                            key={index}
                            date={item.update_time}
                            status={item.status}
                            title={item.title}
                        />
                    })
                }
            </div>
        )
    }
}





export default AllRecord;