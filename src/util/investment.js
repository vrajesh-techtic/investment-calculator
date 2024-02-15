export function calculate(val) {
  let initialInvestment = parseFloat(val["initial"]);
  let annualInvestment = parseFloat(val["annual"]);
  let expectedReturn = parseFloat(val["expected"]);
  let duration = parseFloat(val["duration"]);

  let tabVal = new Array();

  tabVal.push({
    i: 0,
    iv: initialInvestment,
    iy: 0,
    ti: 0,
    ic: initialInvestment,
  });

  for (let i = 1; i <= duration; i++) {
    let iy = Math.round((tabVal[i - 1].iv * expectedReturn) / 100);
    let ti = tabVal[i - 1].ti + iy;
    let iv = iy + annualInvestment + tabVal[i - 1].iv;
    let ic = tabVal[i - 1].ic + annualInvestment;

    tabVal.push({ i, iv, iy, ti, ic });
  }

  return tabVal;
}
