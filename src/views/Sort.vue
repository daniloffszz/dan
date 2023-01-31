<template>
    <div class="container">
        <div class="sort">
            <select name="" v-model="sort" id="">
                <option value="asc">asc</option>
                <option value="desc">desc</option>
            </select>
            <div class="price">
                <input type="text" id="min">
                <input type="text" id="max">
            </div>
        </div>
        <div class="catalog">
            <div v-for="c in cards" class="card">
                <div class="card-img">
                    <img :src="c.image" alt="">
                </div>
                <div class="card-nametag">
                    {{ c.title }}
                </div>
                <div class="card-desc">

                </div>
                <div class="card-price">
                    {{ c.price }}$
                </div>
                <div class="card-button">
                    <a href="">Add To Cart</a>
                </div>
            </div>
        </div>
        <div class="loading">
            loading...
        </div>
    </div>


</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { onMounted } from 'vue'

const cards = ref([])

const sort = ref('')

onMounted(async () => {

    document.querySelector('.loading').style.display = 'block'

    await axios
        .get('https://fakestoreapi.com/products')
        .then(response => (cards.value = response.data));

    document.querySelector('.loading').style.display = 'none'
})






</script>

<style scoped>
.catalog {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
}

.card {
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 220px;
    background: rgb(44, 44, 44);
}

.card-img img {
    height: 200px;
    width: 200px;
}

.loading {
    display: none;
}
.sort {
    background: rgb(44, 44, 44);
    height: 60px;
}
</style>