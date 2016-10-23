class BrowserActions {

	waitForPresentAndVisible(el){
		browser.wait(function () { return el.isPresent();},10000);
		browser.wait(function () { return el.isDisplayed();},10000);
	};

	waitAndScrolltoElement(el) {
		browser.executeScript(
			function(el) { el.scrollIntoView(false);}, el.getWebElement()
		);
	};

	customMatchers(){
		return {
		toBeLoaded: function () {
			return {
				compare: function(actual){
					var result = {};
					//result.pass= actual.isLoaded()…
					//if result.pass ==true
					//result.message=’aasfaf’
					//else..
					}
				}
			}
		}
	};


}
export default BrowserActions;
