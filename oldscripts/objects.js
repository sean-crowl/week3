var person = {
    firstName : "Sean",
    lastName : "Crowl",
    email : "sean.crowl@interapthq.com",
    phone : "330.605.0354",
    birthday : "July 2, 1987",
    fullname : function() {
        return this.firstName + " " + this.lastName;
    }
};

function printDetails (p) {
 // Can make something not print if it's undefined/empty/etc.
    if (typeof p.email != "undefined") {
        console.log(p.email);
    }
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.birthday);
    console.log(p.phone);
    console.log(p.fullname());
}

printDetails(person);
