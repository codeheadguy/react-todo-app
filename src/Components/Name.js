import React from 'react'
import FormUpdate from './FormUpdate'

const Name = props => {
    return (
        <li className="list-group-item">
            {props.edit ? 
            (
                <div>
                    <FormUpdate onUpdate={props.onUpdate}  />
                </div>
            ) : (
                <div>
                    <input onChange={props.onCheck} type="checkbox"/> <span className={props.check ? 'done' : ''}>
                        {props.name} - {props.age}
                    </span> 
                    <div className="float-right">
                    <button className="btn btn-danger"  onClick={props.onRemove}>Delete</button> <button className="btn btn-primary"  onClick={props.onEdit}>Edit</button>
                    </div>
                </div>
            )}
        </li>
    )
}

export default Name