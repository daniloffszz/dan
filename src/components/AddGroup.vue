<template>
    <a href="#" @click="Modalvisibility = true" class="button_green">Add Group</a>

    <Teleport to="body">
        <div v-if="Modalvisibility" class="modal">
            <div class="modal-header">
                <h3>Add Group</h3>
                <img class="close" @click="Modalvisibility = false" src="../assets/icons/cross-bl.svg" alt="">
            </div>
            <div class="modal-body">
                <input type="text" v-model="name" class="form-input form-input__grey" placeholder="Name of party...">
                <div class="row">
                    <h3>Participants:</h3>
                    <div class="select">
                        <div @click="parListVisibility = !parListVisibility" class="select-header">
                            Select participants:
                            <img src="../assets/icons/arrow.svg" alt="">
                        </div>
                        <div v-if="parListVisibility" class="select-options">
                            <div v-for="f in friends" class="option">
                                <label for="{{ f.id }}"><input type="checkbox" name="" id="{{ f.id }}">{{ f.name }}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h3>Price:</h3>
                    <input type="number" v-model="price" class="form-input form-input__grey" placeholder="Price...">
                </div>
                

                <button type="submit" class="form-submit" @click="da">Submit</button>
            </div>
        </div>
    </Teleport>

</template>

<script setup>
import { ref } from 'vue'
import friends from '../data/friends.json'
const Modalvisibility = ref(false)
const parListVisibility = ref(false)

const name = ref('')
const price = ref('')

const da = () => {
    console.log(name, price, )
}

</script>

<style scoped>
h3 {
    font-weight: bold;
}

.row {
    display: flex;
    margin-top: 10px;
    gap: 10px;
}

.select {
    color: #fff;
    height: 30px;
    background: rgb(87, 87, 87);
    width: 100%;
    border-radius: 5px;
    padding: 0 10px;
    cursor: pointer;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.select-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.select-header img {
    transform: rotate(180deg);
}
.select-options {
    position: absolute;
    top: 30px;
    left: 0px;
    z-index: 1;
    background: rgb(87, 87, 87);
    width: 100%;
    padding: 10px 10px;
    border-radius: 5px;
}
</style>