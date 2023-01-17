<template>
    <input type="text" v-model="name">
    <button @click="handleButtonClicked">1231</button>
</template>

<script setup>
    import { ref } from 'vue'

    const name = ref('')

    const emit = defineEmits(['buttonClicked'])

    const handleButtonClicked = () => {
        emit('buttonClicked')
    }

</script>