<script setup>
import { ref } from 'vue'
const Modalvisibility = ref(false)

const phone = ref('')
const name = ref('')
const desc = ref('')

    const emit = defineEmits(['ButtonClicked'])

    const handleButtonClicked = () => {
        emit('buttonClicked', name, phone, desc)
    }

</script>

<template>
    <a href="#" @click="Modalvisibility = true" class="button_green">Add Friend</a>

    <Teleport to="body">
        <div v-if="Modalvisibility" class="modal">
            <div class="modal-header">
                <h3>Add Friend</h3>
                <img class="close" @click="Modalvisibility = false" src="../assets/icons/cross-bl.svg" alt="">
            </div>
            <div class="modal-body">
                <input type="text" v-model="name" class="form-input form-input__grey" placeholder="Name...">
                <input type="text" v-model="phone" class="form-input form-input__grey" placeholder="Phone...">
                <input type="text" v-model="desc" class="form-input form-input__grey" placeholder="Description...">
                <button type="submit" class="form-submit" @click="handleButtonClicked">Submit</button>
            </div>
        </div>
    </Teleport>
</template>

<style>
.modal {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 400px;
    top: 33%;
    background: rgb(44, 44, 44);
    border-radius: 5px;
    padding: 10px;
    z-index: 1;
}
.modal-body {
    margin-top: 10px;
}

.close {
    cursor: pointer;
}

.button_green {
    background-color: rgb(33, 165, 0);
    ;
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    color: rgb(33, 165, 0);
}

.form-input {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    border: none;
    height: 30px;
    outline: none;
    border-radius: 5px;
    
    color: #fff;
}

.form-input::placeholder {
    color: #fff;
    font-family: sans-serif;
}

.form-input__grey {
    background: rgb(87, 87, 87);
}

.form-submit {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    color: #fff;
    background: rgb(33, 165, 0);
    border: none;
    border-radius: 5px;
}
</style>