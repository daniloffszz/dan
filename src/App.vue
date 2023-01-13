<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
import AddFriend from './components/AddFriend.vue'
</script>

<template>
    <div class="wrap">
        <AddFriend />
        <Sidebar />
        <RouterView />
    </div>
</template>

<style scoped>

.container {
    width: 1300px;
    margin: 0 auto;
    padding: 0 10px;
}
.wrap {
    display: flex;
}
</style>

