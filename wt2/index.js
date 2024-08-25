const puppeteer = require("puppeteer");
const fs = require("fs");

function TimeOut33() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

(async () => {
  let iplData = null;

  try {
    iplData = fs.readFileSync("iplData.json", { encoding: "utf-8" });
  } catch (error) {
    if (error.code === "ENOENT") {
      fs.writeFileSync("iplData.json", JSON.stringify({}));
      console.log("File created and initial content written");
      iplData = fs.readFileSync("iplData.json", { encoding: "utf-8" });
    } else {
      console.error(error);
    }
  }

  const browser = await puppeteer.launch({ headless: true });

  try {
    iplData = JSON.parse(iplData);
    const page = await browser.newPage();
    await page.goto("https://www.iplt20.com/stats/");

    page.setDefaultNavigationTimeout(60000);

    await page.setViewport({ width: 1200, height: 1024 });

    await page.waitForSelector(".cSBDisplay");

    await page.click(".cSBDisplay:nth-child(1)");

    await page.waitForSelector(".cSBList.active");

    const seasonSelectorParent = await page.$(".cSBList.active");

    const iplSeasonNumber = 1;

    const selectedSeason = await seasonSelectorParent.$(
      `.cSBListItems.seasonFilterItems.ng-binding.ng-scope:nth-child(${iplSeasonNumber})`
    );

    const seasonName = await selectedSeason.evaluate(
      (el) => el.textContent,
      selectedSeason
    );

    console.log(seasonName);

    await selectedSeason.click();
    await page.waitForSelector(".st-ply-name.ng-binding");
    const orangeCapPlayer = await page.$$(".st-ply-name.ng-binding");
    const orangeCapPlayerRuns = await page.$$(".ng-binding.np-tableruns");

    const topTenOrangeCapPlayers = [];

    for (
      let i = 0;
      i < (orangeCapPlayer.length < 10 ? orangeCapPlayer.length : 10);
      i++
    ) {
      const playerName = await page.evaluate(
        (elem) => elem.textContent,
        orangeCapPlayer[i]
      );
      const playerScore = await page.evaluate(
        (elem) => elem.textContent,
        orangeCapPlayerRuns[i]
      );
      const playerData = {
        playerName,
        playerScore,
      };
      topTenOrangeCapPlayers.push(playerData);
    }

    await page.waitForSelector(".customSelecBox.statsTypeFilter");

    await page.click(".customSelecBox.statsTypeFilter");

    let statesFilterSelector = await page.$(".cSBList.active");

    const mostFoursFilterOption = await statesFilterSelector.$(
      ".cSBListItems.batters.selected.ng-binding.ng-scope:nth-child(4)"
    );

    mostFoursFilterOption.click();

    await TimeOut33();

    await page.waitForSelector(".st-ply-name.ng-binding");
    await page.waitForSelector(".ng-binding.np-tableruns");

    const numberOfFours = await page.$$(".ng-binding.np-tableruns");
    const mostFoursPlayer = await page.$$(".st-ply-name.ng-binding");

    const topTenMostFoursPlayers = [];

    for (
      let i = 0;
      i < (mostFoursPlayer.length < 10 ? mostFoursPlayer.length : 10);
      i++
    ) {
      const playerName = await page.evaluate(
        (elem) => elem.textContent,
        mostFoursPlayer[i]
      );
      const playerScore = await page.evaluate(
        (elem) => elem.textContent,
        numberOfFours[i]
      );
      const playerData = {
        playerName,
        playerScore,
      };
      topTenMostFoursPlayers.push(playerData);
    }

    await page.click(".customSelecBox.statsTypeFilter");

    statesFilterSelector = await page.$(".cSBList.active");

    const mostSixsFilterOption = await statesFilterSelector.$(
      ".cSBListItems.batters.selected.ng-binding.ng-scope:nth-child(6)"
    );
    mostSixsFilterOption.click();

    await TimeOut33();

    const numberOfSixes = await page.$$(".ng-binding.np-tableruns");
    const mostSixsPlayers = await page.$$(".st-ply-name.ng-binding");

    const topTenMostSixsPlayers = [];

    for (
      let i = 0;
      i < (mostSixsPlayers.length < 10 ? mostSixsPlayers.length : 10);
      i++
    ) {
      const playerName = await page.evaluate(
        (elem) => elem.textContent,
        mostSixsPlayers[i]
      );
      const playerScore = await page.evaluate(
        (elem) => elem.textContent,
        numberOfSixes[i]
      );
      const playerData = {
        playerName,
        playerScore,
      };
      topTenMostSixsPlayers.push(playerData);
    }

    await page.click(".customSelecBox.statsTypeFilter");

    statesFilterSelector = await page.$(".cSBList.active");

    const mostFifitesFilterOption = await statesFilterSelector.$(
      ".cSBListItems.batters.selected.ng-binding.ng-scope:nth-child(7)"
    );

    mostFifitesFilterOption.click();

    await TimeOut33();

    const numberOfFifties = await page.$$(".ng-binding.np-tableruns");
    const mostFiftiesPlayers = await page.$$(".st-ply-name.ng-binding");

    const topTenMostFiftiesPlayers = [];

    for (
      let i = 0;
      i < (mostFiftiesPlayers.length < 10 ? mostFiftiesPlayers.length : 10);
      i++
    ) {
      const playerName = await page.evaluate(
        (elem) => elem.textContent,
        mostFiftiesPlayers[i]
      );
      const playerScore = await page.evaluate(
        (elem) => elem.textContent,
        numberOfFifties[i]
      );
      const playerData = {
        playerName,
        playerScore,
      };
      topTenMostFiftiesPlayers.push(playerData);
    }

    await page.click(".customSelecBox.statsTypeFilter");

    statesFilterSelector = await page.$(".cSBList.active");

    const mostCenturiesFilterOption = await statesFilterSelector.$(
      ".cSBListItems.batters.selected.ng-binding.ng-scope:nth-child(8)"
    );

    mostCenturiesFilterOption.click();

    await TimeOut33();

    const numberOfCentuires = await page.$$(".ng-binding.np-tableruns");
    const mostCentuiresPlayers = await page.$$(".st-ply-name.ng-binding");

    const topTenMostCenturiesPlayers = [];

    for (
      let i = 0;
      i < (mostCentuiresPlayers.length < 10 ? mostCentuiresPlayers.length : 10);
      i++
    ) {
      const playerName = await page.evaluate(
        (elem) => elem.textContent,
        mostCentuiresPlayers[i]
      );
      const playerScore = await page.evaluate(
        (elem) => elem.textContent,
        numberOfCentuires[i]
      );
      const playerData = {
        playerName,
        playerScore,
      };
      topTenMostCenturiesPlayers.push(playerData);
    }

    if (!iplData[seasonName]) {
      iplData[seasonName] = {};
    }

    iplData[seasonName].topTenOrangeCapPlayers = topTenOrangeCapPlayers;
    iplData[seasonName].topTenMostFoursPlayers = topTenMostFoursPlayers;
    iplData[seasonName].topTenMostSixsPlayers = topTenMostSixsPlayers;
    iplData[seasonName].topTenMostFiftiesPlayers = topTenMostFiftiesPlayers;
    iplData[seasonName].topTenMostCenturiesPlayers = topTenMostCenturiesPlayers;
    fs.writeFileSync("iplData.json", JSON.stringify(iplData));
  } catch (error) {
    console.log(error);
  }
  await browser.close();
})();
