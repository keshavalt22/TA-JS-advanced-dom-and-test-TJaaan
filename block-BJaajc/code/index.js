function getFullName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`
    return fullName;
}

function isPalindrome(string){
    let reverseString = string.split('').reverse().join('');
    if(string === reverseString){
        return true;
    }else {
        return false
    }
}

function getCircumfrence(r){
    let cir = 2*3.1415*r;
    return `The circumference is ${cir}`;
}

 
function findArea(r){
   let circleArea = (3.14 * r * r);
    return `The area is ${circleArea}`;
};