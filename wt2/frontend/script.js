import iplData from "../iplData.json" assert { type: "json" };

const seasonName = document.querySelector("#seasonName");
const stateType = document.querySelector("#stateType");
const chartContainer = document.querySelector("#chartContainer");

function getLabel(stateType) {
  switch (stateType) {
    case "topTenOrangeCapPlayers": {
      return "Runs";
    }
    case "topTenMostFoursPlayers": {
      return "Total no.of 4s";
    }
    case "topTenMostSixsPlayers": {
      return "Total no.of 6s";
    }
    case "topTenMostFiftiesPlayers": {
      return "Total no.of 50s";
    }
    case "topTenMostCenturiesPlayers": {
      return "Total no.of 100s";
    }
    default: {
      return null;
    }
  }
}

function renderChart(seasonName, stateType) {
  const arrayData = iplData[seasonName][stateType];
  const labels = arrayData.map((elem) => elem.playerName);
  const data = arrayData.map((elem) => elem.playerScore);

  chartContainer.innerHTML = "";

  const chartCanvas = document.createElement("canvas");
  chartCanvas.classList.add("myChart");

  const label = getLabel(stateType);
  new Chart(chartCanvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  chartContainer.appendChild(chartCanvas);
}

function handleDOMLoad() {
  renderChart(seasonName.value, stateType.value);
}

function handleSeasonNameChange(e) {
  renderChart(e.target.value, stateType.value);
}

function handleStateTypeChange(e) {
  renderChart(seasonName.value, e.target.value);
}

document.addEventListener("DOMContentLoaded", handleDOMLoad);
seasonName.addEventListener("change", handleSeasonNameChange);
stateType.addEventListener("change", handleStateTypeChange);
