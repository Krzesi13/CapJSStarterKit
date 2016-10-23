class HomepageBootstrap {
  //elements
  get() {
    browser.get('https://angular-ui.github.io/bootstrap/');
  }
  getNewTab(){
    return element(by.css('#accordion > div.row.code > div > div.pull-right > button'));
  }
  getTitle(){
    return element(by.css('#overview > div:nth-child(1) > h1'));
  }
  getTitle2(){
    return element(by.css('body > nav > div > div > a > span'));
  }

}
export default HomepageBootstrap;
