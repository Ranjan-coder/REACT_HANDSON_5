import {PureComponent} from 'react'

export class PureCmp extends PureComponent{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }

    render(){
        console.log('This is render.....')
        return(
            <>
            <div> Count : {this.state.count}</div>
            <button onClick={()=>this.setState({count: 1})}> State not Changing</button>
            </>
        )
    }
}

export class PureCompoStateChange extends PureComponent{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    render(){
        console.log('THis is Render.....')
        return(
            <>
            <div>Count : {this.state.count}</div>
            <button onClick={()=>this.setState({count : this.state.count + 1})}>State Will Change</button>
            </>
        )
    }
}

