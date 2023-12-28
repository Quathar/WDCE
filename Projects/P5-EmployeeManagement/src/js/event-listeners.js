
'use strict'

import { employees } from './resources.js'
import { Employee } from './employee.js'
import { sortBy } from './init.js'
import { update } from './drawer.js'

// <<-FUNCTIONS->>
function showEmp(employee) {
    document.getElementById('id')        .value = employee.id;
    document.getElementById('name')      .value = employee.name;
    document.getElementById('surname')   .value = employee.surname;
    document.getElementById('nemp')      .value = employee.nemp;
    document.getElementById('position')  .value = employee.position;
    document.getElementById('department').value = employee.department;
}

export function searchEmployee() {
    // It's possible to declare this in 1 line but it will be confuse
    let browserTxt = document.getElementById(BROWSER).value.toLowerCase(); 
    let list = employees.filter(employee => employee.name.toLowerCase().includes(browserTxt));
    update(list);
}

export function createEmployee() {
    // It's possible to declare this in 1 line but it will be confuse
    let tempList = sortBy(employees, Employee.fields[0]);
    let employee = tempList[employees.length - 1]
    let id = employee.id + 1;

    let f = document.querySelectorAll('.field');
    employees[employees.length] = new Employee(
        id, f[1].value,
        f[2].value, f[3].value,
        f[4].value, f[5].value);
    
    update(employees);
}

export  function updateEmployee() {
    let id = Number(document.getElementById('id').value);

    let f = document.querySelectorAll('.field');
    for (let i = 0; i < employees.length; i++)
        if (employees[i].id === id)
            employees[employees.length] = new Employee(
                id, f[1].value,
                f[2].value, f[3].value,
                f[4].value, f[5].value);
    
    update(employees);
}

export function deleteEmployee() {
    let id = Number(document.getElementById('id').value);
    for (let i = 0; i < employees.length; i++)
        if (employees[i].id === id)
            employees.splice(i, 1);
    update(employees);
    clearForm();
}

export const clearForm = () => document.querySelectorAll('.field').forEach(field => field.value = '');
