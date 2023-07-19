const findTheOldest = function(array) {
    const actualDate = (new Date()).getFullYear();
    return array.reduce((oldest, person) => {
        if (!person.yearOfDeath) person.yearOfDeath = actualDate;
        const personYears = person.yearOfDeath - person.yearOfBirth;
        const oldestYears = oldest.yearOfDeath - oldest.yearOfBirth;

        if (personYears > oldestYears) return person;
        return oldest;
        
    }, {yearOfBirth: actualDate, yearOfDeath: actualDate});
};

// Do not edit below this line
module.exports = findTheOldest;
