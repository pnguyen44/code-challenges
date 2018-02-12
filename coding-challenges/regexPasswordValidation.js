// 5 kyu - Regex Password Validation
// a password to make sure it meets the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
    return password.search(/[A-Z]/g) !== -1 && password.search(/[a-z]/g) !== -1
            && password.search(/[0-9]/g) !== -1
            && password.search(/\W/g) < 0
            && password.length >= 6

}

// Alternative Solution:
// function validate(password) {
// const validPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])[A-Za-z0-9]{6,}$");
// // (?=.*[a-z]) a lowercase letter
// // (?=.*[A-Z]) a upper case letter
// // (?=.*?[0-9]) a number
// // [A-Za-z0-9] all alphanumeric
// // {6,} min length 6
// // $
//   return validPassword.test(password);
// }
