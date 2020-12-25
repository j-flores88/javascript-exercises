const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, person) => {
  
      if(person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear()
      }
      if(oldest.yearOfDeath === undefined) {
        oldest.yearOfDeath = new Date().getFullYear()
      }
  
      if ((person.yearOfDeath - person.yearOfBirth) > (oldest.yearOfDeath - oldest. yearOfBirth)) {
        return person
      } else if ((person.yearOfDeath - person.yearOfBirth) <= (oldest.yearOfDeath - oldest. yearOfBirth)) {
        return oldest
      }
    })
    return oldestPerson 
  }

module.exports = findTheOldest
