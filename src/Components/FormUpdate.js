import React from "react";

const FormUpdate = props => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.onUpdate}>
            <div className="row">
                    <div className="col-5">
                        <input className="form-control" type="text" name="name" placeholder="Add Name" />
                    </div>
                    <div className="col-5">
                        <input className="form-control" type="text" name="age" placeholder="Add Age" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary btn-block" type="submit">Update</button> 
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormUpdate