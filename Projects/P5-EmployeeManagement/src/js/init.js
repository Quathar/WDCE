
'use strict'

import { employees } from './resources.js'
import { drawBrowser } from './drawer.js'
import { drawEmpInfo } from './drawer.js'
import { drawButtons } from './drawer.js'
import { Employee }    from './employee.js'

// <<-CONSTANT->>
const DATA_START = 1;

// <<-FUNCTIONS->>
export const sortBy = (employees, fieldName) => employees.sort((employeeA, employeeeB) => employeeA[fieldName] - employeeeB[fieldName]);

function splitData(data) {
    let linesArray = data.split('\n');
    for (let i = DATA_START; i < linesArray.length; i++) {
        let fieldsArray = linesArray[i].split(',');
        employees[i - DATA_START] = new Employee(
            fieldsArray[0],
            fieldsArray[1],
            fieldsArray[2],
            fieldsArray[3],
            fieldsArray[4],
            fieldsArray[5],
        );
    }

    // Order by ID
    return sortBy(employees, Employee.fields[0]);
}

export function createInterface(data) {
    drawBrowser();
    drawEmpInfo(splitData(data));
    drawButtons();
}
