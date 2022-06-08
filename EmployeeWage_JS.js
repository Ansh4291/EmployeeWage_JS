/*--------Employee Wage-------*/
console.log("Welcome to the employee wage programs :-) ");
/*       UC3
Refactor the Code to write a function to get work hours
*/
const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;


function getWorkingHrs(employeeCheck){
switch(employeeCheck){
    case 0:
        // console.log(" Employee is Present for Part Time ");
        return PART_TIME_HRs;
        break;
    case 1:
        // console.log(" Employee is Present for Full Time ");
        return FULL_TIME_HRs;
        break;
    default:
        // console.log("Employee is ABSENT ");
    return 0;    
        break;        
}
}
let totalEmpHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let employeeCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHrs(employeeCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HRs;
console.log("Total Employee Hrs is:- "+totalEmpHrs+ " \nEmploye wage is :- " +empWage);