import React from 'react';

class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Default message"
        }
    }

    click = () => {
        console.log("CreateTodo click function is running");
        this.setState({message: "Click! " + Math.random()})
    }

    anotherClick() {
        console.log("Another click here!!!");
        // Warning: This will not work, as "this" is undefined
        // can be worked around w/ method binding
        // or just always use arrow functions or your methods!
        this.setState({message: "Another button click handler!"});
    }

    render() {
        return (
            <div className="todo-create">
                <p>Message: {this.state.message}</p>
                <p>Counter: {this.state.counter}</p>
                <input type="text" />
                <button onClick={this.click}>Add</button>
            </div>
        )
    }
}

export default CreateTodo;

{/* <button onClick={(e) => {console.log("click", e)}}>Add</button> */}
{/* <button onClick={() => this.anotherClick()}>Add</button> */}
{/* <button onClick={this.click}>Add</button> */}
{/* <button onClick={() => 
                    this.setState({message: "Add button clicked!"})
                }>Add</button> */}