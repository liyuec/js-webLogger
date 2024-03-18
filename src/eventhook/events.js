import {
  rewWriteAddEventListener,
  reWriteRemoveEventListsner,
} from "./eventsCore";

const EventLogger = (function () {
  let _eventInstance = null;
  return function (options) {
    if (!!_eventInstance) {
      _eventInstance = "iswrite";
    }

    return _eventInstance;
  };
})();

const unEventLogger = (function () {
  let _unEventLogger = null;
  return function () {
    if(_unEventLogger !== 'isUnWrite'){
      _unEventLogger = 'isUnWrite'
    }
  };
})();

export {EventLogger, unEventLogger};
