class HandlesActions {

  windowCount(count){
      return function () {
          return browser.getAllWindowHandles().then(function (handles) {
              return handles.length >= count;
          });
      };
  };

  switchToHandles(index){
    browser.wait(this.windowCount(index+1), 10000);
    browser.getAllWindowHandles().then(function(handles){
      browser.switchTo().window(handles[index]);
    });
  }

}
export default HandlesActions;
