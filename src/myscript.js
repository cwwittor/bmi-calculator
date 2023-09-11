let metricHeight = 0;
let metricWeight = 0;

let metricBMIval = 0;
let imperialBMIval = 0;

let imperialHeightFeet = 0;
let imperialWeightStones = 0;
let imperialHeightInches = 0;
let imperialWeightPounds = 0;

function swapInput(input) {
  if (input === "metric") {
    document.getElementById("score-bmi").innerHTML = "NaN";
    document.getElementById("ideal-bmi-range").innerHTML = "_ - _";
    document.getElementById("bmi-status").innerHTML = "";

    let doc = document.getElementsByClassName("imperialBmiInputs");
    [...doc].forEach((element) => {
      element.style.display = "none";
    });
    let docMetric = document.getElementsByClassName("metricBmiInputs");
    [...docMetric].forEach((element) => {
      element.style.display = "block";
    });
  } else {
    document.getElementById("score-bmi").innerHTML = "NaN";
    document.getElementById("ideal-bmi-range").innerHTML = "_ - _";

    let doc = document.getElementsByClassName("imperialBmiInputs");
    [...doc].forEach((element) => {
      element.style.display = "block";
    });
    let docMetric = document.getElementsByClassName("metricBmiInputs");
    [...docMetric].forEach((element) => {
      element.style.display = "none";
    });
  }
}

function imperialInput(input, type) {
  if (isNaN(input)) {
    document.getElementById("score-bmi").innerHTML = "NaN was attempted";
    return;
  }

  if (type === "stones") {
    imperialWeightStones = input;
  } else if (type === "pounds") {
    imperialWeightPounds = input;
  } else if (type === "feet") {
    imperialHeightFeet = input;
  } else if (type === "inches") {
    imperialHeightInches = input;
  }

  if (
    imperialWeightStones !== 0 &&
    imperialWeightPounds !== 0 &&
    imperialHeightFeet !== 0 &&
    imperialHeightInches !== 0
  ) {
    imperialBMIval = imperialBMI(
      imperialWeightStones,
      imperialWeightPounds,
      imperialHeightFeet,
      imperialHeightInches
    );
  }
}

function metricInput(input, type) {
  if (isNaN(input)) {
    document.getElementById("score-bmi").innerHTML = "NaN was attempted";
    return;
  }

  if (type === "height") {
    metricHeight = input;
  } else {
    metricWeight = input;
  }

  if (metricHeight !== 0 && metricWeight !== 0) {
    metricBMIval = metricBMI(metricHeight, metricWeight);
  }
}

function buttonHeight() {
  console.log(metricHeight);
}

function metricBMI(height, weight) {
  let bmi = (weight / height / height) * 10000;
  document.getElementById("score-bmi").innerHTML = Math.round(bmi * 10) / 10;

  idealMetricBMI(height);
}

function imperialBMI(stone, pound, feet, inches) {
  let weight = parseInt(stone) * 14 + parseInt(pound);
  let height = parseInt(feet) * 12 + parseInt(inches);
  let bmi = (weight / height / height) * 703;
  document.getElementById("score-bmi").innerHTML = Math.round(bmi * 10) / 10;

  idealImperialBMI(height);
}

function idealMetricBMI(height) {
  let idealUpperWeight = (24.9 / 10000) * (height * height);
  let idealLowerWeight = (18.5 / 10000) * (height * height);
  console.log(idealLowerWeight + "kgs " + idealUpperWeight);
  let idealRange =
    Math.round(idealLowerWeight * 10) / 10 +
    "kgs - " +
    Math.round(idealUpperWeight * 10) / 10 +
    "kgs";

  document.getElementById("ideal-bmi-range").innerHTML = idealRange;

  if (height > idealUpperWeight || height < idealLowerWeight) {
    document.getElementById("bmi-status").innerHTML = "unhealthy";
  } else {
    document.getElementById("bmi-status").innerHTML = "healthy";
  }
}

function idealImperialBMI(height) {
  let idealUpperWeight = (24.9 / 703) * (height * height);
  let idealLowerWeight = (18.5 / 703) * (height * height);

  let idealUpperStones = Math.floor(idealUpperWeight / 14);
  let idealUpperPounds = Math.floor(idealUpperWeight - idealUpperStones * 14);

  let idealLowerStones = Math.floor(idealLowerWeight / 14);
  let idealLowerPounds = Math.floor(idealLowerWeight - idealLowerStones * 14);
  let idealRange =
    idealLowerStones +
    "st " +
    idealLowerPounds +
    "lbs" +
    " - " +
    idealUpperStones +
    "st " +
    idealUpperPounds +
    "lbs";
  document.getElementById("ideal-bmi-range").innerHTML = idealRange;

  if (height > idealUpperWeight || height < idealLowerWeight) {
    document.getElementById("bmi-status").innerHTML = "unhealthy";
  } else {
    document.getElementById("bmi-status").innerHTML = "healthy";
  }
}
