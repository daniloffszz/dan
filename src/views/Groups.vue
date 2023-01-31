<template>
    <div class="container">
        <div class="header">
            <h1>Groups</h1>
            <AddGroup @NewGroup="AddNewGroup" />
        </div>
        <div class="groups-list">
            <div v-for="g in groups" class="group">
                <div class="group-left">
                    <div class="group-name">
                        <h3>{{ g.group_name }}</h3>
                    </div>
                    <div class="group-participants">
                        <div v-for="p in g.participants" class="participant">
                            <p v-if="p.name">{{ p.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="group-right">
                    <div class="group-price">
                        <h3>Price</h3>
                        <h4>{{ g.price }}</h4>
                    </div>
                    <div class="group-date">
                        <h3>Date</h3>
                        <h4>{{ g.date.getDate() + '/' + g.date.getMonth() + 1 + '/' + g.date.getFullYear() }}</h4>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AddGroup from '../components/AddGroup.vue'
import friends from '../data/friends.json'

      

const groups = ref(
    [
        {
            id: Math.floor(Math.random() * 100000),
            group_name: 'Birthday',
            participants: [
                {
                    id: Math.floor(Math.random() * 100000),
                    name: 'John'
                },
                {
                    id: Math.floor(Math.random() * 100000),
                    name: 'Maria'
                },
                {
                    id: Math.floor(Math.random() * 100000),
                    name: 'Kevin'
                },
                {
                    id: Math.floor(Math.random() * 100000),
                    name: 'Dan'
                },
                {
                    id: Math.floor(Math.random() * 100000),
                    name: 'Alex'
                },
            ],
            price: '300$',
            date: new Date()
        },
    ]
)

const AddNewGroup = (name, price, usersForPraty) => {

    let arr = usersForPraty.value

    let users = []

    let p = [
        {
            name: [],
        }
    ]

    for (let i = 0; i < arr.length; i++) {
        users.push(friends.find(el => el.id == arr[i]))
    }

    groups.value.push({
        id: Math.floor(Math.random() * 100000),
        group_name: name.value,
        participants: [

        ],
        price: price.value,
        date: new Date()
    })
    

    // users.forEach(element => {
    //     p.name.push({
    //         id: element.id,
    //         name: element.name
    //     })

    // })
    // console.log(friends.id)

    // console.log(groups)

}
</script>

<style scoped>
.groups-list {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.group {
    padding: 10px;
    background: rgb(44, 44, 44);
    max-width: 315px;
    width: 100%;
    height: 150px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}

h4 {
    font-weight: bold;
}

h3 {
    font-weight: bold;
}

.group-participants {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100px;
}

.group-right {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: space-evenly;
}

</style>