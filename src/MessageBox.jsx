import React from "react";

// export default function MessageBox(props) {
//     return (
//         <div style={{backgroundColor: "lightblue"}}>
//             {props.children}
//         </div>
//     )
// }

export default class MessageBox extends React.Component {
//1. set up React state
    constructor(props){
        super(props)

        this.state = {
            backgroundColor: "lightblue"
        }

        this.changeBgToRed = this.changeBgToRed.bind(this);
    }

    changeBgToRed() {
        this.setState({backgroundColor: "red"})
    }

//2. do different things when different events happen on webpage. 

    render() {
        return (
        <div style={{backgroundColor: this.state.backgroundColor}}>
            {this.props.children}
            <button onClick={this.changeBgToRed
                // this.state.backgroundColor = "red"
                // this.setState({backgroundColor: "red"})
            }>Change background to Red</button>
        </div>
        )
    }
}