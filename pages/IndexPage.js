class IndexPage {
  constructor(page) {
    this.page = page;
    this.loadingAnimation = page.locator('#loadingAnimation');  // update here
    this.mainContent = page.locator('#mainContent');            // update here
    this.myDreamsButton = page.locator('#dreamButton');          // update here
  }

  async waitForLoadingToDisappear() {
    await this.loadingAnimation.waitFor({ state: 'visible' });
    await this.loadingAnimation.waitFor({ state: 'hidden' });
  }

  async clickMyDreams() {
    await this.myDreamsButton.click();
  }
}

export { IndexPage };
