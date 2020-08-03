import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import uuid from 'uuid'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './component/TodoList'
import TodoInput from './component/TodoInput'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      id: uuidv4(),
      item: '',
      editItem: false
    }
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = { id: this.state.id, title: this.state.item }
    const updatedItems = [...this.state.items, newItem] //  state are immutable. we can't do items.push(newItems)

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({ items: [] })
  }

  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id)
    this.setState({ items: filterItems })
  }

  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id)

    const selectedItem = this.state.items.find((item) => item.id === id)
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App
