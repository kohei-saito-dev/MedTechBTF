/**
 * 予想Hb増加量
 */
function calculateHb() {
    const weight = parseFloat(document.getElementById('weight').value);
    const units = parseFloat(document.getElementById('rcMapUnits').value);
    const resultBox = document.getElementById('hbResult');
    const resultVal = document.getElementById('hbIncreaseVal');

    if (isNaN(weight) || isNaN(units) || weight <= 0) return;

    const hbPerUnit = 26.5;
    const bvCoefficient = 0.7; // dL/kg

    const increase = (hbPerUnit * units) / (weight * bvCoefficient);

    resultVal.textContent = increase.toFixed(1);
    resultBox.style.display = 'block';
}

/**
 * 予測血小板増加数
 */
function calculatePlt() {
    const weight = parseFloat(document.getElementById('plt_weight').value);
    const units = parseFloat(document.getElementById('plt_units').value);
    const resultBox = document.getElementById('pltResult');
    const resultVal = document.getElementById('pltIncreaseVal');

    if (isNaN(weight) || isNaN(units) || weight <= 0) return;

    // 10単位 = 2.0 x 10^11 platelets
    const totalPlatelets = (units / 10) * 2.0; // x10^11
    const efficiency = 0.67;
    const bvCoefficient = 75; // mL/kg (血小板計算では75を使うことが多い)

    // 増加数 (x10^4/μL) = (導入数 x 10^11 * 有効率) / (体重 * 75 * 10^3) / 10^4
    // 整理すると: (導入数[x10^11] * 0.67 * 10) / (体重 * 0.075) ? No.
    // 1μL = 10^-6 L. BV = Weight * 0.075 L.
    // Increase = (TotalPlt * Efficiency) / (Weight * 75 * 10^-3 L -> mL)
    // Result in 10^4/μL
    const increase = (totalPlatelets * efficiency * 100) / (weight * 0.075 * 100); // 簡略化
    const finalIncrease = (totalPlatelets * 10 * efficiency) / (weight * 0.075);
    // 標準的な簡便式: (導入数[x10^11] * 2/3) / (体重 * 0.075) -> 単位は /μL
    // x10^4/μL にするには 10000 で割る
    const rise = (totalPlatelets * efficiency) / (weight * 0.075); // これで 10^4/uL 相当

    resultVal.textContent = rise.toFixed(1);
    resultBox.style.display = 'block';
}

/**
 * CCI (補正血小板増加数)
 */
function calculateCCI() {
    const bsa = parseFloat(document.getElementById('cci_bsa').value);
    const inc = parseFloat(document.getElementById('cci_inc').value);
    const count = parseFloat(document.getElementById('cci_plt_count').value);
    const resultBox = document.getElementById('cciResult');
    const resultVal = document.getElementById('cciVal');

    if (isNaN(bsa) || isNaN(inc) || isNaN(count) || count <= 0) return;

    // CCI = (増加数[/μL] * BSA[m2]) / (導入血小板数[x10^11])
    const cci = (inc * bsa) / count;

    resultVal.textContent = Math.round(cci).toLocaleString();
    resultBox.style.display = 'block';
}

/**
 * 予測上昇凝固因子活性値
 */
function calculateFFP() {
    const weight = parseFloat(document.getElementById('ffp_weight').value);
    const ml = parseFloat(document.getElementById('ffp_ml').value);
    const resultBox = document.getElementById('ffpResult');
    const resultVal = document.getElementById('ffpVal');

    if (isNaN(weight) || isNaN(ml) || weight <= 0) return;

    // 上昇値(%) = 投与量(mL) / (体重(kg) * 40) * 100
    const increase = (ml / (weight * 40)) * 100;

    resultVal.textContent = Math.round(increase);
    resultBox.style.display = 'block';
}

/**
 * アルブミン投与量
 */
function calculateAlbumin() {
    const weight = parseFloat(document.getElementById('alb_weight').value);
    const target = parseFloat(document.getElementById('alb_target').value);
    const current = parseFloat(document.getElementById('alb_current').value);
    const resultBox = document.getElementById('albResult');
    const resultVal = document.getElementById('albVal');
    const vialInfo = document.getElementById('albVialInfo');

    if (isNaN(weight) || isNaN(target) || isNaN(current) || weight <= 0) return;

    const diff = target - current;
    if (diff <= 0) {
        resultVal.textContent = "0.0";
        vialInfo.textContent = "現在の値が目標を超えています。";
        resultBox.style.display = 'block';
        return;
    }

    // 必要量(g) = (目標-現在) * 体重 * 0.4
    const grams = diff * weight * 0.4;

    resultVal.textContent = grams.toFixed(1);

    // 製剤例の提示
    const vials25 = Math.ceil(grams / 12.5);
    vialInfo.textContent = `目安: 25%製剤(12.5g/50mL) 約 ${vials25} 瓶`;

    resultBox.style.display = 'block';
}
