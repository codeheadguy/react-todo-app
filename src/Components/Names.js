import React, { Component } from 'react'
import Name from './Name'

class Names extends Component {

    render() {
        
        const { onUpdate, onEdit, onCheck, onRemove, people } = this.props

        const list = people.map((person, index) => {
            return <Name 
                key={index} 
                onRemove={(e) => {onRemove(e,index)}} 
                onCheck={(e) => {onCheck(e,index)}} 
                onEdit={(e) => {onEdit(e,index)}} 
                onUpdate={(e) => {onUpdate(e,index)}} 
                name={person.name} 
                age={person.age}
                edit={person.edit}
                check={person.check} />
        })

        return (
            <div>
                { people.length === 0 ? <p className="alert alert-danger" role="alert">No Info</p> : <ul className="list-group">{list}</ul>}
            </div>
        )
    }
}

export default Names