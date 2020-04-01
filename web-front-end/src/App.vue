<!--
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-24 13:40:32
 * @LastEditTime: 2020-03-24 15:53:57
 * @LastEditors: aiyoudiao
 * @FilePath: \vue-admin-template-small\src\App.vue
 -->
<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
li, ul, p, div, body, html, table {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body {
    height: 100%;
    /* overflow: hidden; */
}
li {
    list-style: none;
}
#app {
    /* height: 100%; */
}
</style>
