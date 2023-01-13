<script>

</script>

<template>
    
    <div class="container">
        <div class="header-users">
            <h1>Friends</h1>
            <a href="#" class="button_green">Add Friend</a>
        </div>
        <div class="list">
            <div class="list-item">
                <div class="list-item-name">
                    David D.
                </div>
                <div class="list-item-phone">+7 999 999-99-99</div>
                <div class="list-item-desc">Mark's friend</div>
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
.header-users {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
}

.button_green {
    background-color: rgb(33, 165, 0);
    ;
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
}

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