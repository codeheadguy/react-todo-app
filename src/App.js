import React, { Component } from "react"
import './App.css';
import Form from "./Components/Form"
import Names from "./Components/Names"

let id = 0;

class App extends Component {
	state = {
		people: []
	}

	// Pass parameter from component method using refs
	// onAdd = (name, age) => {
	// 	const newName = {
	// 		name,
	// 		age
	// 	}

	// 	this.setState({
	// 		people: [...this.state.people, newName]
	// 	})
	// }

	onAdd = e => {

		e.preventDefault()
		
		if (e.target.name.value === '' && e.target.age.value === '') {
			alert('Please fill out fields')
		} else {

			const newName = {
				name: e.target.name.value,
				age: e.target.age.value,
				id: id++,
				check: false,
				edit: false
			}
	
			this.setState({
				people: [...this.state.people, newName]
			})
	
			console.log(e)
			
			e.target.reset();
		}
	}

	onRemove = (e,index) => {

		const confirm = window.confirm("Are you sure you wish to delete this item?")

		if (confirm) {
			//Logic to delete the item
			const people = this.state.people.filter(person => {
				return person.id !== index
			})
	
			this.setState({
				people
			})
			
			console.log(e, index)
		}
	}

	onCheck = (e, index) => {
		
		const people = [...this.state.people]
		people[index] = {...people[index]}
		people[index].check = e.target.checked
		
		this.setState({
			people
		})

		console.log(people[index])
	}

	onEdit = (e, index) => {
		
		const people = [...this.state.people]
		people[index] = {...people[index]}
		people[index].edit = true
		
		this.setState({
			people
		})

		console.log(people[index])
	}

	onUpdate = (e, index) => {

		e.preventDefault()

		if (e.target.name.value === '' & e.target.age.value === '') {
			alert('Please fill out fields')
		} else {

			const people = [...this.state.people]
			people[index] = {...people[index]}
			people[index].name = e.target.name.value
			people[index].age = e.target.age.value
			people[index].edit = false
			
			this.setState({
				people
			})
	
			console.log(people[index])
		}
		
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="jumbotron">
							<h1 className="display-4">Todo App</h1>
							<p className="lead">Daily Life Todo App</p>
						</div>
						<Form onAdd={this.onAdd} />
						<Names 
							people={this.state.people} 
							onRemove={this.onRemove} 
							onCheck={this.onCheck}
							onEdit={this.onEdit}
							onUpdate={this.onUpdate} />
					</div>
				</div>
			</div>
		)
	}
}

export default App
