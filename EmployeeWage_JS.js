/*--------Employee Wage-------*/
console.log("Welcome to the employee wage programs :-) ");

const PART_TIME_HRs=4;
const FULL_TIME_HRs=8;
const WAGE_PER_HRs=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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
function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HRs;
}
let totalEmpHrs = 0;
let empHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHrs(employeeCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days is :- " + totalWorkingDays+ "\nTotal Employee Hrs is:- "+totalEmpHrs+ " \nEmploye wage is :- " +empWage);