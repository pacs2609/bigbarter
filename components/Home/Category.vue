<template>
<section class="category d-none d-sm-block">
    <div class="container">
        <header class="mb-2">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-primary fw-600"><span class="rectangle"></span>Categories</p>
                </div>
                <div class="col-md-10">
                    <p class="fs-3">Browse By Category</p>
                </div>
                <div class="col-md-2 d-flex justify-content-end gap-1">
                    <a class="icon-btn rounded-circle"><i class="fa-solid fa-arrow-left"></i></a>
                    <a class="icon-btn rounded-circle"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </header>
        <div class="category-container">
            <div class="category-item">
                <img src="../../public/images/category/Category-CellPhone.png" alt="">
                <p class="fw-500 mt-3">Phones</p>
            </div>
            <div class="category-item">
                <img src="../../public/images/category/Category-Computer.png" alt="">
                <p class="fw-500 mt-3">Computers</p>
            </div>
            <div class="category-item">
                <img src="../../public/images/category/Category-SmartWatch.png" alt="">
                <p class="fw-500 mt-3">SmartWatch</p>
            </div>
            <div class="category-item active">
                <img src="../../public/images/category/Category-Camera.png" alt="">
                <p class="fw-500 mt-3">Camera</p>
            </div>
            <div class="category-item">
                <img src="../../public/images/category/Category-Headphone.png" alt="">
                <p class="fw-500 mt-3">HeadPhones</p>
            </div>
            <div class="category-item">
                <img src="../../public/images/category/Category-Gamepad.png" alt="">
                <p class="fw-500 mt-3">Gaming</p>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.category-container {
    display: grid;
    grid-template-columns: repeat(6, minmax(180px, 1fr));
    gap: 20px;
}

.category-item {
    border: solid 1px #999999;
    border-radius: 0.3rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.active {
    background-color: #db4444 !important;
    color: #FFFFFF !important;
}

.category-item>img {
    width: 50px !important;
}
</style>