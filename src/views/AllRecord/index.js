// import React from 'react';
// import './index.css';
//
//
//
//
// class AllRecord extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             arr: []
//         }
//     }
//
//     getData = () => {
//       $axios.get('/admin/repaireRecord').then(res =>{
//           console.log(res);
//           this.setState({
//               arr: res.date
//           })
//       })
//     };
//
//     componentWillMount() {
//         this.getData();
//     }
//
//     render() {
//         const arr = this.state.arr;a
//         return (
//             <div className="all-record">
//                 {
//                     arr.map((item, index) => {
//                         return <Cell
//                              key={index}
//                              date={item.update_time}
//                              status={item.status}
//                              title={item.title}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }
//
// export default AllRecord;
//

import React from 'react';


class AllRecord  extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}




























export default AllRecord;