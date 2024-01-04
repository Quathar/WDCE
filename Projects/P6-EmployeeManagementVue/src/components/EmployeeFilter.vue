<template>
    <select class="select crystal" id="department" v-on:change="changeEmployees($event)">
        <option v-for="department in departments" :key="department">{{ department }}</option>
    </select>
    <div class="employees">
        <div class="employee crystal" v-for="employee in employees" :key="employee.id">
            <div class="data">
                <div>ID:</div>
                <div>{{ employee.id }}</div>
            </div>
            <div class="data">
                <div>Name:</div>
                <div>{{ employee.nombre }}</div>
            </div>
            <div class="data">
                <div>Surname:</div>
                <div>{{ employee.apellido }}</div>
            </div>
            <div class="data">
                <div>Emp_No:</div>
                <div>{{ employee.nempleado }}</div>
            </div>
            <div class="data">
                <div>Position:</div>
                <div>{{ employee.puestotr }}</div>
            </div>
            <div class="data">
                <div>Department:</div>
                <div>{{ employee.departamento }}</div>
            </div>
        </div>
    </div>
    <div class="pagination">
        <input class="button" type="button" value="Previous" v-on:click="previousPage()" />
        <input class="button" type="button" value="Next"     v-on:click="nextPage()" />
    </div>
</template>

<script setup>
import employeeData from '../assets/employees.json'
import { ref } from 'vue'

let start = 0;
let end = 10;

let employeesSlice = employeeData.slice(start, end)

let employees = ref(employeesSlice)
let departments = setDepartments()

function changeEmployees(event) {
    const selectedDepartment = event.target.value
    employees.value = selectedDepartment !== 'All'
        ? employeesSlice.filter(employee => employee.departamento === selectedDepartment)
        : employeesSlice
}

function setDepartments() {
    let arr = employeesSlice.map(employee => employee.departamento)
        .filter((element, i, self) => self.indexOf(element) === i)
    arr.unshift('All')
    return arr
}

function update(start, end) {
    employeesSlice = employeeData.slice(start, end)
    departments = setDepartments()
    employees.value = employeesSlice
}

function previousPage() {
    if (start === 0) {
        return
    }

    start -= 10
    end   -= 10

    update(start, end)
}

function nextPage() {
    if (end === employeeData.length) {
        return
    }

    start += 10
    end   += 10
    
    update(start, end)
}
</script>

<style scoped>
.crystal {
    --color: rgb(255, 255, 255, 0.15);

    background-color: var(--color);
    border: 1px solid var(--color);
    border-radius: 0.5rem;
    box-shadow: 0 0 10px black;
}

.select {
    padding: 0.5rem;
}

.employees {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}

.employee {
    --color: rgb(255, 255, 255, 0.15);

    margin: 1rem;
    padding: 0.25rem;
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.employee:hover {
    box-shadow: 0 0 10px white;
}

.data {
    /*border: 1px solid black;*/
    width: 100%;

    color: black;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    justify-items: right;
}

.data > div:nth-child(2) {
    justify-self: left;
}

.pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
}

.pagination > input {
    --color: rgb(255, 255, 255, 0.15);
    background-color: var(--color);
    border: 1px solid var(--color);
    box-shadow: 0 0 10px black;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
}
</style>