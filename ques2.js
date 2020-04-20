var firstName = 'Rahul';
var lastName = ' Sharma';
var myName = firstName + lastName;

var z = myName.toUpperCase();
console.log(z);
console.log(z.length);
//  WE CAN ALSO DO IT BY USING STRING FUNCTIONS//
var y = firstName.concat(lastName);
var y = y.toUpperCase();
console.log(y);
console.log(y.length);

function name() {
    console.log(firstName + lastName);
}

name();
var day = 'sunday';
/* It was having some problem hope you will fix that out for me
I AM UNABLE TO GET INPUT FROM USER
var txt;

var q = prompt("Please Enter your choice 1 for week pb and 2 for multiple of 5");
if (q != null) {
    txt = q;
}  */
switch (txt) {
    case 1:
        if (day == 'sunday' || day == 'saturday') {
            console.log("weekend");
        } else console.log("weekday");
        break;
    case 2:
        for (i = 1; i <= 100; i++) {
            if (i % 5 === 0) {
                console.log(i + "");
            }
        }
        break;
}