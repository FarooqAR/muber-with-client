export default class DriverAction{
    static ON_CREATE = 'ON_CREATE';
    static GET_DRIVERS = 'GET_DRIVERS';

    static onCreate(){
        return {
            type: DriverAction.ON_CREATE
        }
    }
    
    static setDrivers(drivers){
        return {
            type: DriverAction.GET_DRIVERS,
            drivers
        }
    }
}