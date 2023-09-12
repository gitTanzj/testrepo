const person = {
    firstname: "Kadi",
    lastname: "Tamm",
    age: "16",
    email: "Kadi.tamm@gmail.com",
    Hobbies: ["Tennis", "Korvpall"],
    Address: {
        city: "Tallinn",
        county: "Harjumaa"
    },
    getBirthYear: function(){
        return 2023 - this.age

    },
    showHobbies: function(){
        this.Hobbies.forEach((hobbie) => {
            console.log(hobbie)
        })
    }
}
let val = person.firstname
val = person.Hobbies
console.log(val)
console.log(person.showHobbies())

