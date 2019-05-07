import React, {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return prevState;
  // }
  /**
  * Warning: This lifecycle is currently deprecated, and will be removed in React version 17+
  More details here: https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
  */
  // componentWillReceiveProps(nextProps) {
  //   console.log('[Persons.js] componentWillReceiveProps',nextProps );
  // }

  

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      return true
    }else{
      return false
    }
    // return true;
    
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  // componentWillUpdate(nextProps, nextState) {
    
  // }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[Persons.js] componentDidUpdate ');
    console.log(Snapshot);
  }
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount ');
    
  }
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
      <Person
          key={person.id}
          click={()=> this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
      />
      );
    });
  }
}

export default Persons;
