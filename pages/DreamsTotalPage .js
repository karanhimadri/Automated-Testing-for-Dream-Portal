class DreamsTotalPage {
  constructor(page) {
    this.page = page
    this.table = page.locator('#dreamsTotal')
    this.tableRows = page.locator('#dreamsTotal tbody tr')
  }

  async getStatByLabel(text) {
    const row = this.page.locator(`#dreamsTotal tbody tr`, {
      hasText: text
    });
    const data = row.locator('td').nth(1);
    const numberText = await data.textContent();
    return parseInt(numberText.trim());
  }
}

export { DreamsTotalPage }
