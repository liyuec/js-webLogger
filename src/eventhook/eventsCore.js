const originalEventTarget = '__originalEventTarget__';


function _setOriginalEventTarget(){
    window[originalEventTarget] = window.EventTarget;
}

function _getOriginalEventTarget(){
    return window[originalEventTarget];
}

/**
 *  获取浏览器端的 纯净的 eventTarget
 */
function _pureEventTarget(){
    let _iframe = document.createElement('iframe');

    _iframe.width = 0;
    _iframe.height = 0;

    document.body.appendChild(_iframe);
    
    let {EventTarget} = _iframe.contentWindow;
    document.body.removeChild(_iframe);
    return EventTarget;
}

/**
 * 获取本端的EventTarget事件，因为可能已经被重写了
 */
function _getEventTarget(_EventTarget = window.EventTarget){
    let {prototype} = _EventTarget;
    return {
        _addEventListener:prototype.addEventListener,
        _removeEventListener:prototype.removeEventListener
    }
}


/**
 * 本端EventTarget是否已经被重写
 */
var _isOriginalEventTarget = (function(){
    return window.EventTarget.toString().includes('EventTarget() { [native code] }');
})()

 /**
  * 重写AddEventListener    保留曾经的可能重写过的EventListsner (默认click)
  * @param {*} EventTypes       需要重写的Type事件
  */
function rewWriteAddEventListener(EventTypes = ['click'],beforeFuncList = void 0,beforeFuncList = void 0){
    //保留曾经的可能重写过的EventListsner
    if(!_isOriginalEventTarget){
        _setOriginalEventTarget()
    } 
   
    const _EventTarget = _pureEventTarget();
    let {_addEventListener} = _getEventTarget(_EventTarget),
    rewrite = function(type,customerFunc,...args){
        if(EventTypes.includes(type)){
            let newFunc = function(){
                
            }
        }else{
            return _addEventListener.call(this,type,customerFunc,...args)
        }
    }
 

    window.EventTarget.prototype.addEventListener = rewrite;
}

/**
 * 重写AddEventListener    保留曾经的可能重写过的EventListsner (默认click)
 * @param {*} EventTypes 需要重写的Type事件
 */
function reWriteRemoveEventListsner(EventTypes = ['click']){
    //保留曾经的可能重写过的EventListsner
    if(!_isOriginalEventTarget){
        _setOriginalEventTarget()
    }


}

/*
    卸载自己的hooks ，还原客户端的，要还原都的还原，否则removeEventListsener 会出错，去掉引用无效
*/
function unReWriteEventListener(isUseOrigina = true){
    
}



export {
    rewWriteAddEventListener,reWriteRemoveEventListsner

}