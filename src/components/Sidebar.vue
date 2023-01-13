<script>

</script>

<template>

    <nav>
        <div class="navbar">
            <router-link active-class="nav-link__active" class="nav-link" to="/">General</router-link>
            <router-link active-class="nav-link__active" class="nav-link" to="Users">Friends</router-link>
        </div>
    </nav>

</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 30px 20px 30px 20px;
    width: 300px;
    background: rgb(44, 44, 44);
    height: 100vh;
    box-shadow: 5px 5px 5px #141414;
}

.nav-link {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #eee;
}

.nav-link__active {
    color: rgb(33, 165, 0);
    border-bottom: 1px solid rgb(33, 165, 0);
}
</style>