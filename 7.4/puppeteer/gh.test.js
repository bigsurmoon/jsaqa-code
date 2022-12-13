let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.setDefaultTimeout(120000);
    await page.goto("https://github.com/team");
  })

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toMatch("Get started with Team");
  });
});

describe("Github page tests", () => {

  test("The h1 header content on Pricing page", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Pricing · Plans for every developer · GitHub");

  });

  test("The h1 header content on Resources page", async () => {
    await page.goto("https://resources.github.com");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Home - GitHub Resources");

  });

  test("The h1 header content on Privacy page", async () => {
    await page.goto("https://github.com/privacy");
    await page.waitForSelector('h1');
    const actual = await page.title();
    expect(actual).toEqual("privacy · GitHub");

  });
});