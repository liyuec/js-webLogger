import {rewWriteAddEventListener,reWriteRemoveEventListsner} from './eventsCore'

const EventLogger = (function(){
    let _eventInstance = null;
    return function(options){
        if(_eventInstance !== 'iswrite'){
            _eventInstance = 'iswrite'
        }

        return _eventInstance;
    }
})()


const unEventLogger = (function(){
    return function(){

    }
})()

export {EventLogger,unEventLogger}