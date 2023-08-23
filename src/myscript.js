function metricBMI(height, weight) {
  let bmi = (weight / height / height) * 10000;
  console.log(Math.round(bmi * 10) / 10);
}

function imperialBMI(stone, pound, feet, inches) {
  let weight = stone * 14 + pound;
  let height = feet * 12 + inches;
  let bmi = (weight / height / height) * 703;
  console.log(Math.round(bmi * 10) / 10);
}

function idealMetricBMI(height) {
  let idealUpperWeight = (24.9 / 10000) * (height * height);
  let idealLowerWeight = (18.5 / 10000) * (height * height);
  console.log(idealLowerWeight + " " + idealUpperWeight);
}

function idealImperialBMI(height) {
  let idealUpperWeight = (24.9 / 703) * (height * height);
  let idealLowerWeight = (18.5 / 703) * (height * height);
  console.log(idealLowerWeight + " " + idealUpperWeight);
}
