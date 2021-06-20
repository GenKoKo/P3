import "./style.scss";
import title from "./title.js";
import list from "./list.js";
import React from "react";
import ReactDom from "react-dom";


class HomePage extends React.Component{
    render(){
        return  <div className="container">
                    <div className="homepage_title">React 練習專案</div>
                    <div className="homepag_main">歡迎光臨我的頁面</div>
                    <input type="submit" value="點此開始" className="homepage_button"/>
                    {/*  onClick={this.pageChanger.bind(this)} */}
                </div>
    }
}


class ListPage extends React.Component{

    render(){
        return ( <div>
            <AddForm/>
            <List/>
        </div> )
    }

}



class AddForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {name: ""}
    }
    
    render(){
        return <div>
                    <form className = "container">
                        <div className="addform_container">
                            <input type="text" className="addform_input" placeholder="測試紀錄"/>
                            <input type="submit" className="addform_submit" value="新增記錄" />
                        </div>
                    </form>
                    <hr/>
                </div>
        
    }
}

class List extends React.Component{

    render(){
        return  <div className = "container">
                    <div className="list_container">
                        <div className="list_item">
                            <div className="list_word">test</div>
                            <input type="submit" className="list_delete" value="刪除"/>
                        </div>
                        <div className="list_item">
                            <div className="list_word">lorem10000</div>
                            <input type="submit" className="list_delete" value="刪除"/>
                        </div>
                        <div className="list_item">
                            <div className="list_word">test</div>
                            <input type="submit" className="list_delete" value="刪除"/>
                        </div>
                
                    </div>
                    <input type="submit" className="list_back" value="返回首頁"/>

                </div>
    }

}


class App extends React.Component{
    
    render(){
        return ( 
            <div>
                {/* <HomePage/> */}
                <ListPage/> 
            </div>
        )

    }


}


// let App = <ListPage/>
ReactDom.render(<App/>, document.getElementById("root"));




// class MyForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {name:"", gender: "male", story:""};
//     }
//     render(){
//         return <form onSubmit={this.handleSubmit.bind(this)}>
//             Name <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
//             <br/>

//             Gender <select value={this.state.gender} onChange={this.handleGenderChange.bind(this)}>
//                 <option value="male">Man</option> <option value="female">Woman</option>
//             </select>

//             <br/>
//             Story <textarea value={this.state.story} onChange={this.handelStoryChange.bind(this)} />


//             <input type="submit" value="Submit"/>

//         </form>
//     }

//     handelStoryChange(e){
//         this.setState({story:e.currentTarget.value})
//     }

//     handleGenderChange(e){
//         this.setState({gender:e.currentTarget.value})
//     }

//     handleNameChange(e){
//         this.setState({name:e.currentTarget.value})
//     }

//     handleSubmit(e){
//         e.preventDefault();
//         console.log("click")
//         console.log(this.state.name);
//         console.log(this.state.gender);
//         console.log(this.state.story);

//     }
// }



// ReactDom.render(<MyForm/>, document.getElementById("root"));






// class MyHead extends React.Component{
//     render(){
//         // console.log(this.props.level)
//         return React.createElement("H"+this.props.level,null, "Hello component");
//     }
// }

// class MyHeadList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {maxLevel:props.start};
//         // window.setTimeout( () => { 
//         //     // this.setState( {maxLevel: 6})
//         //     this.setState( (currentState, currentProps) => ({maxLevel:currentState.maxLevel+1}))
//         // },2000)
//     }

//     componentWillMount(){
//         this.intervalId=window.setInterval(()=> {
//             this.setState((currentState, currentProps) => {

//                 if (currentState.maxLevel > currentProps.end){
//                     return currentState
//                 }else {
//                     return { maxLevel: currentState.maxLevel +1};
//                 }
//             });
//         }, 1000);
//     }

//     componentWillUnmount(){
//         window.clearInterval(this.intervalId)
//     }

//     render(){
//         let heads = [];
//         let head;
//         for (let i=1; i < this.state.maxLevel; i++){
//             head = React.createElement(MyHead, {level: i})
//             heads.push(head)
//         }
//         return React.createElement("DIV", null, heads)
//     }
// }



// // let app = <div>test123 ttt</div> 
// let app = React.createElement(MyHeadList, {start:2, end:5});
// // let app = <MyHeadList start="3" end="5"/>
// ReactDom.render(app, document.getElementById("root"));



// // document.body.append(title)
// // document.body.append(list)



