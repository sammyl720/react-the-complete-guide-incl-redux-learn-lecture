import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/persons/persons';
import Cockpit from '../Cockpit/Cockpit';
class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {id:"aware", name: "Max", age: 28},
        {id: "avatar", name: "Manu", age: 29},
        {id:"robot", name: "Stephanie", age: 26}
      ],
        showPersons: false,
        showCockpit: true
    }
  }
  

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js getDerivedStateFromProps', nextProps);
    return prevState;
  }
  
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1);
      this.setState({persons:persons});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
    
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p =>{
          return p.id === id;
      });
      const person = {
          ...this.state.persons[personIndex]
      };

      //const person = Object.assign({}. this.state.persons[personIndex])
      person.name = event.target.value;
      const persons = [...this.state.persons]
      persons[personIndex] = person;

      this.setState({
          persons: persons
      });
  }
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons){
        persons = (

           <div>
           <Persons 
           persons={this.state.persons} 
           clicked={this.deletePersonHandler} 
           changed={this.nameChangedHandler}
           />
               
            </div>
        );
        
    }

   
    return (
      <div className={classes.App}>
      <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
         {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
           personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
           /> : null}
          {persons}


      </div>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,"Hi, i\'m a React App!!!!"))
  }
}

export default App;
