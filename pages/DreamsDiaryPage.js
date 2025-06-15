class DreamsDiaryPage {
  constructor(page) {
    this.page = page
    this.dreamsTable = page.locator('#dreamsDiary')
    this.tableRows = page.locator('#dreamsDiary tbody tr')
  }

  async getRowCount() {
    return await this.tableRows.count()
  }

  async getAllRowData() {
    const count = await this.tableRows.count();
    const rows = [];

    for (let i = 0; i < count; i++) {
      const row = this.tableRows.nth(i);
      const cols = row.locator('td');
      const dreamName = await cols.nth(0).innerText();
      const daysAgo = await cols.nth(1).innerText();
      const dreamType = await cols.nth(2).innerText();
      rows.push({ dreamName, daysAgo, dreamType });
    }

    return rows;
  }
}

export { DreamsDiaryPage }