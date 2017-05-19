import DriverAction from '../actions/driver_action';
import axios from 'axios';

export default class DriverMiddleware{
    static create(driver){
        return dispatch => {
            axios.post('http://localhost:3050/api/drivers',driver)
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    dispatch(DriverMiddleware.getAllDrivers());
                }
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }
    static getAllDrivers(){
        return dispatch => {
            axios.get('http://localhost:3050/api/drivers')
            .then(response => {
                dispatch(DriverAction.setDrivers(response.data));
            })
            .catch(err => {
                console.log(err);
            })
            
        } 
    }
    
    static deleteDriver(driver){
        return dispatch => {
            axios.delete(`http://localhost:3050/api/drivers/${driver._id}`)
            .then(response => {
                console.log(response);
                dispatch(DriverMiddleware.getAllDrivers());
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }

    static editDriver(newData){
        return dispatch => {
            axios.put(`http://localhost:3050/api/drivers/${newData._id}`, {email: newData.email})
            .then(response => {
                console.log(response);
                dispatch(DriverMiddleware.getAllDrivers());
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }
}