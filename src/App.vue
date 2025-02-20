<script setup>
import {RouterView} from 'vue-router'
import navbar from './components/navbar.vue'
</script>

<template>
 <v-app>
    <navbar/>
       <v-main>
        <RouterView/>
    </v-main>
    </v-app>


</template>

