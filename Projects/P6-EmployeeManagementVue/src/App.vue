<template>
    <img alt="Vue logo" src="./assets/logo.png" width="100">
    <div id="app">
        <EmployeeFilter/>
    </div>
</template>

<script>
import EmployeeFilter from './components/EmployeeFilter.vue'

export default {
    name: 'App',
    components: {
        EmployeeFilter
    },
    mounted() {
        document.title = 'Employees'
    }
}
</script>

<style>
* {
    margin: 0;
    outline: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
    width: 99vw;
    height: 100vh;
    background: linear-gradient(45deg, #7f0799, #afbbf2, #9649cb, #d3fff3);
    background-size: 300% 300%;
    animation: move-back 12s ease-in-out infinite;
}

@keyframes move-back {
    0%   { background-position: 0 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 1rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
