// import React from 'react';
// import $axios from '~/utils';
// import $Cookie from 'js-cookie';
// import Cell from '~/components/Cell';

//
// class Sended extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             repaireArr:[]
//         }
//     }
//
//     componentWillMount() {
//         this.getData();
//     }
//
//     getData = () =>{
//       const userJsonStr = Cookies.get('user');
//       const userObj = JSON.parse(userJsonStr);
//
//       $axios.get('/admin/repairRecord',{
//           params:{
//               repair_man: userObj.id,
//               status: 2
//           }
//       }).then(res =>{
//           this.setState({
//               repairArr: res.data
//           })
//       })
//     };
//
//     render() {
//         const {repairArr} = this.state;
//         return (
//             <div>
//                 {
//                     repairArr.map((item, index) =>(
//                         <Cell
//                         title={item.title}
//                         status={item.status}
//                         date={item.updateTime}
//                         key={index} />
//                     ))
//                 }
//             </div>
//         )
//     }
// }
//
// export default Sended;


import React from 'react';

class Sended extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}


export default Sended;








































