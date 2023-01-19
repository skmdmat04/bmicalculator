export const levels = [
    { title: 'Underweight', color: '#96A3AB', icon: 'down', bmi: [0, 18.59] },
    { title: 'Healthy', color: '#0EAD69', icon: 'up', bmi: [18.6, 24.99] },
    { title: 'Overweight', color: '#E2B036', icon: 'down', bmi: [25, 30] },
    { title: 'Obesity', color: '#C3423F', icon: 'down', bmi: [30.1, 99] },
];
export const calculatebmi = (height, weight) => {
    const bmi = (weight / (height * height))*100*100;
    for (let i in levels) {
        if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
            let levelCopy = Object.assign({}, levels[i]);
            levelCopy.yourbmi = parseFloat(bmi.toFixed(2));
            return levelCopy;
        }
    }
    let levelCopy = Object.assign({}, levels[3]);
            levelCopy.yourbmi = parseFloat(bmi.toFixed(2));
            return levelCopy;
};

