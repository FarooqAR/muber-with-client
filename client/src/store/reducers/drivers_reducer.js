import DriverAction from '../actions/driver_action';

export default function(state = [], action){
    switch(action.type){
        case DriverAction.GET_DRIVERS:
            return action.drivers;
        default:
            return state;
    }
}