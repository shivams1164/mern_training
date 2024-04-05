const firstNameChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.value);

    const val = e.target.value
    if (val.length > 3) {
        console.log('correct');
    }
}

// const ageCheck = (e) => {
//     if (e.target.value > 18) {
//         console.log("object is older than 18");
//     }
//     else {
//         console.log("object is younger than 18");
//     }
// }

// const submitForm = (e) => {
//     e.preventDefault();
//     // alert("Form Submitted!");
//     console.log("submit")
//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('LastName').value;
//     const age = document.getElementById('age').value;
//     console.log(age);
//     console.log(firstName + ' ' + lastName + ' ' + age);

// };





const submitForm = (e) => {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty !== 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty === 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            } else {
                res[nm] = vl;
            }
        }
    }
    console.log(res);
};

