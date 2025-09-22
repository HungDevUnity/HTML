function getGrade(score) {
    if (score >= 85 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 84) {
        return "B";
    } else if (score >= 50 && score <= 69) {
        return "C";
    } else if (score >= 0 && score < 50) {
        return "D";
    }
}

console.log(getGrade(90));
