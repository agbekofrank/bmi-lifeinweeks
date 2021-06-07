function lifeInWeeks(age) {
    if (!isNaN(age)) {
        let ageLeft = 90 - age;
        console.log(
            `You have ${ageLeft * 365} days,
             ${ageLeft * 52} weeks,
            and ${ageLeft * 12} months left.`
        );
    }
}