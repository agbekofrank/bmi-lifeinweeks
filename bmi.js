function bmiCalc(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    if (isNaN(bmi) || bmi < 0) {
        msg = 'Enter positive numbers only';
        return msg;
    } else {
        let w = bmi < 18.5 ? 'underweight' : (bmi > 18.5 && bmi < 24.9) ?
            'normal weight' : (bmi > 24.9) ? 'overweight' : 'in an unkwown weight';
        let msg = `Your BMI is ${bmi} so you are ${w}`;
        return msg;
    }
}