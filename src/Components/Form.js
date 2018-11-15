import React, { Component } from "react";

class Form extends Component {

    // Attached methos to onSubmit event in the form
    handleSubmit = e => {
        e.preventDefault()

        const name = this.refs.name.value // You can use refs to get value from input
        const age = this.refs.age.value // You can use refs to get value from input

        this.props.onAdd(name, age) // Get method as prop from parent component

        this.refs.name.value = '' // clear value from input
        this.refs.age.value = '' // clear value from input
    }

    render() { 

        const { onAdd } = this.props

        return (
            <div>
                <form onSubmit={onAdd}>
                <div className="row">
                    <div className="col-md-5">
                        <input className="form-control" type="text" name="name" placeholder="Add Name" />
                    </div>
                    <div className="col-md-5">
                        <input className="form-control" type="text" name="age" placeholder="Add Age" />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" type="submit">Add</button> 
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Form