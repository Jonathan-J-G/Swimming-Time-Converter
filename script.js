const button = document.getElementById("convertBtn");

button.addEventListener("click", function () {
  const event = document.getElementById("event").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const time = Number(document.getElementById("timeInput").value);

  const key = `${from}-${to}`;
  const factor = conversions[event][key];

  const convertedTime = time * factor;

  document.getElementById("result").textContent =
    `Converted time: ${convertedTime.toFixed(2)}`;
});
const conversions = {
  // FREESTYLE
  "50 Free": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "100 Free": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "200 Free": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},


  // BACKSTROKE
  "50 Back": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "100 Back": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "200 Back": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},

  // BREASTSTROKE
  "50 Breast": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "100 Breast": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "200 Breast": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},

  // BUTTERFLY
  "50 Fly": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "100 Fly": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},
  "200 Fly": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},

  // INDIVIDUAL MEDLEY
  "100 IM": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    },   // mostly SCY
  "200 IM": {  
    "SCY-SCM": 1.12,
    "SCM-SCY": 0.89,
    "SCM-LCM": 1.05,
    "LCM-SCM": 0.95,
    "SCY-LCM": 1.17,
    "LCM-SCY": 0.85},


};

