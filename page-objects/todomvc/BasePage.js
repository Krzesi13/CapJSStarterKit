class BasePage {

  isLoaded(el){
    return el.isPresent() && el.isDisplayed();
  };


}
export default BasePage;
