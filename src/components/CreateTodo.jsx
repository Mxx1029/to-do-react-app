import React from 'react';

class CreateTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Default message"
        }
    }

    click = () => {
        console.log("button was clicked");
        this.setState({message: "Button was clicked!"})
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
                <p>{this.state.message}</p>
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