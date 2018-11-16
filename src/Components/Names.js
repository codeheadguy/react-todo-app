import React from 'react'
import Name from './Name'

const Names = props => {

    const { onUpdate, onEdit, onCheck, onRemove, people } = props

    const list = people.map((person, index) => {
        return <Name 
            key={index} 
            onRemove={(e) => {onRemove(e,index)}} 
            onCheck={(e) => {onCheck(e,index)}} 
            onEdit={(e) => {onEdit(e,index)}} 
            onUpdate={(e) => {onUpdate(e,index)}} 
            // Pass All props instead of using name={person.name}
            {...person} />
    })

    return (
        <div>
            { people.length === 0 ? <p className="alert alert-danger" role="alert">No Info</p> : <ul className="list-group">{list}</ul>}
        </div>
    )
}

export default Names