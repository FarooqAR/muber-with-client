import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import DriverMiddleware from './store/middlewares/driver_middleware';

function mapDispatchToProps(dispatch){
  return {
    create: (driver) => dispatch(DriverMiddleware.create(driver)),
    getAllDrivers: () => dispatch(DriverMiddleware.getAllDrivers()),
    deleteDriver: (driver) => dispatch(DriverMiddleware.deleteDriver(driver)),
    editDriver: (newData) => dispatch(DriverMiddleware.editDriver(newData))
  }
}
function mapStateToProps(state){
  return {
    drivers: state.drivers
  }
}


class App extends Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.create({email: this.input.value});
    this.input.value = '';
  }

  openEditDialog(driver){
    const email = prompt('Edit the email', driver.email);
    const newData = {...driver, email};
    
    if(email !== null && email !== '' && email !== driver.email){
      this.props.editDriver(newData);
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <h3>Add a Driver</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div><input type="text" placeholder="Driver email" ref={input => this.input = input}/></div>
            <div><input type="submit" value="Submit"/></div>
          </form>
        </div>
        <div><input type="button" value="Get All Drivers" onClick={this.props.getAllDrivers}/></div>
        <h3>All Drivers</h3>
        
        <ul style={{textAlign: 'left'}}>
      
          {this.props.drivers.map(driver => {
      
            return (<li key={driver._id}>
                      <span>{driver.email} </span>
                      <input type="button" value="Delete" onClick={() => this.props.deleteDriver(driver)}/>
                      <input type="button" value="Edit" onClick={() => this.openEditDialog(driver)}/>
                    </li>)
      
          })}
      
        </ul>
      
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
