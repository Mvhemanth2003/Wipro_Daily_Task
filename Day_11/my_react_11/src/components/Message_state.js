import React ,{Component} from 'react'


class Message extends Component{

    constructor()
    {
        super()
        this.state = {message:"Welcome to message"}
    }

    changeState ()
    {
        this.setState({

            message:"Thank you for clicking the button"
        })
    }




    render ()
    {
        return (
            <>
            <h1> {this.state.message} </h1>
            <button onClick={() =>this.changeState()}>Clickme</button>
            </>
        )
    }
}
export default Message;




