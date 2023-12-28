
'use strict'

import { employees } from './resources.js'
import { searchEmployee } from './event-listeners.js'
import { createEmployee } from './event-listeners.js'
import { updateEmployee } from './event-listeners.js'
import { deleteEmployee } from './event-listeners.js'
import { clearForm } from './event-listeners.js'
import { sortBy } from './init.js'
import { Employee } from './employee.js'

// <<-CONSTANTS->>
const EMP_INFO_ID  = 'emp-info';
const EMP_TABLE_ID = 'emp-table';
const CRUD         = 'buttons'
const BROWSER      = 'browser';

// <<-FUNCTIONS>>
const sortAndUpdate = (fieldName) => update(sortBy(employees, fieldName));

export function update(employees) {
    document.getElementById(EMP_TABLE_ID).remove();
    drawEmpInfo(employees);
}

export function drawBrowser() {
    const SEARCH = 'SEARCH';

    let browser = document.createElement('input');
    browser.type  = 'text';
    browser.id    = BROWSER;
    browser.style = `border-radius: 1rem;
                     width: 40%;
                     height: 1.7rem;
                     padding-left: 1rem;`;
    browser.placeholder = 'Search by name...'
    browser.addEventListener('keypress', (event) => {
        if (event.key === 'Enter')
            searchEmployee();
    });

    let search = document.createElement('input');
    search.type  = 'button';
    search.id    = SEARCH;
    search.value = SEARCH;
    search.style = `border-radius: 1rem;
                    background-color: rgb(128,128,200);
                    width: 10%;
                    height: 1.7rem;
                    margin-left: 1rem;
                    color: white;
                    font-weight: bold;`;
    search.addEventListener('click', () => searchEmployee());

    document.getElementById(EMP_INFO_ID).appendChild(browser)
    document.getElementById(EMP_INFO_ID).appendChild(search)
}

export function drawEmpInfo(employees) {
    // TABLE
    let table = document.createElement('table');
    table.id    = EMP_TABLE_ID;
    table.style = `margin-top: 1.5rem;
                   background-color: rgb(200, 215, 200);
                   width: 80%;
                   max-width: 90%;
                   border: 2px solid black;
                   border-radius: 1rem;
                   justify-self: center;`;

    // Headers
    let headers = table.insertRow();
    Employee.fields.forEach(field => {
        let header = headers.insertCell();
        header.textContent = field;
        header.addEventListener('click', () => sortAndUpdate(field));
    })

    // Data
    for (let i = 0; i < employees.length; i++) {
        let row = table.insertRow();
        Employee.fields.forEach(fieldName =>
            row.insertCell().textContent = employees[i].field(fieldName));
        row.addEventListener('click', () => showEmp(employees[i]));

        // Paint the even lines in a different color (THIS IS ONLY VISUAL)
        if (i % 2 === 0) row.style.background = 'honeydew';
    }

    document.getElementById(EMP_INFO_ID).appendChild(table);
}

export function drawButtons() {
    const BUTTON = ['CREATE', 'UPDATE', 'DELETE', 'CLEAR'];

    for (let i = 0; i < BUTTON.length; i++) {
        let input = document.createElement('input');
        input.type  = 'button';
        input.id    = BUTTON[i];
        input.value = BUTTON[i];
        input.style = `height: 3rem;
                       width: 25%;
                       font-size: 1.1rem;
                       border-radius: 1.5rem;
                       background-color: cornsilk;`
        document.getElementById(CRUD).appendChild(input);
    }

    document.getElementById(BUTTON[0]).addEventListener('click', createEmployee);
    document.getElementById(BUTTON[1]).addEventListener('click', updateEmployee);
    document.getElementById(BUTTON[2]).addEventListener('click', deleteEmployee);
    document.getElementById(BUTTON[3]).addEventListener('click', clearForm);
}
