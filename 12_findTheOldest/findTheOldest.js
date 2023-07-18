const findTheOldest = function(person) {
    const ageArr = [];
    for (let i = 0; i < person.length; i++) {
        let age;
        if (person[i].yearOfDeath) {
            age = (person[i].yearOfDeath - person[i].yearOfBirth);
        } else {
            person[i].yearOfDeath = new Date().getFullYear();
            age = (person[i].yearOfDeath - person[i].yearOfBirth);
        }
        ageArr.push(age);
    }
    let oldestAge = 0;
    let oldestAgeIndex;
    for (let i = 0; i < ageArr.length; i++) {
        if (oldestAge < ageArr[i]) {
            oldestAge = ageArr[i];
            oldestAgeIndex = i;
        }
    }
    return person[oldestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
