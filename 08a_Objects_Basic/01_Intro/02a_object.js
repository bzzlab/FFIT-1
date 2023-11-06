/*
    Topic difference reference vs. copy
*/
module.exports = {
    firstName: "Hans",
    lastName: "Muster",
    gender: "männlich",
    birthday: new Date("1973-11-30"),
    getFullName(){
        return `Ich heisse ${this.firstName} ${this.lastName}.`;
    }
}
