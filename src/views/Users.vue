<script setup>
import AddFriend from '../components/AddFriend.vue'
import { ref } from 'vue'

const friends = ref([
    {
        id: 1,
        name: 'John',
        phone: '7999999999',
        desc: 'Marks friend'
    }
])

const showAlert = (name, phone, desc) => {
    friends.value.push({
        id: Math.floor(Math.random() * 100000),
        name: name.value,
        phone: phone.value,
        desc: desc.value
    })

}



</script>

<template>
    
    <div class="container">
        <div class="header">
            <h1>Friends</h1>
            <AddFriend @ButtonClicked="showAlert" />
        </div>
        <div v-for="friend in friends" class="list">
            <div class="list-item">
                <div class="list-item-name">
                    {{ friend.name }}
                </div>
                <div class="list-item-phone">{{ friend.phone }}</div>
                <div class="list-item-desc">{{ friend.desc }}</div>
                <div class="list-item-buttons">
                    <a href="#" class="button-edit">
                        <img src="../assets/icons/edit.svg" alt="">
                    </a>
                    <a href="#" class="button-delete">
                        <img src="../assets/icons/cross.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.list {
    margin-top: 20px;
}

.list-item {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button-delete {
    background: red;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px 0px;
}

.list-item-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
}

.button-edit {
    width: 30px;
    height: 30px;
    background: rgb(44, 44, 44);
    border-radius: 5px;
    margin: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>