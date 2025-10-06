<template>
<!-- Nav tabs -->
<ul class="nav dflex flex-column mb-4" id="myTab" role="tablist">
        <li class="mb-2">
            <label for="">Manage My Account</label>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link active" id="myprofile-tab" data-bs-toggle="tab" data-bs-target="#myprofile" type="button" role="tab" aria-controls="myprofile" aria-selected="true" @click="changeTabname('My Profile')">My Profile</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="mypoint-tab" data-bs-toggle="tab" data-bs-target="#mypoint" type="button" role="tab" aria-controls="mypoint" aria-selected="false" @click="changeTabname('Point')">My Point</a>
        </li>
        <li>
            <label for="">My Like</label>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="shop-tab" data-bs-toggle="tab" data-bs-target="#shop" type="button" role="tab" aria-controls="shop" aria-selected="false" @click="changeTabname('Shop')">Shop</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="product-tab" data-bs-toggle="tab" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="false" @click="changeTabname('Product')">Product</a>
        </li>
        <li>
            <label for="">My History</label>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="exchange-tab" data-bs-toggle="tab" data-bs-target="#exchange" type="button" role="tab" aria-controls="exchange" aria-selected="false" @click="changeTabname('Exchange')">Exchange</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="exchangeoffer-tab" data-bs-toggle="tab" data-bs-target="#exchangeoffer" type="button" role="tab" aria-controls="exchangeoffer" aria-selected="false" @click="changeTabname('Exchange Offer')">Exchange Offer</a>
        </li>
        <li class="nav-item" role="presentation">
            <a class="nav-link" id="auction-tab" data-bs-toggle="tab" data-bs-target="#auction" type="button" role="tab" aria-controls="auction" aria-selected="false" @click="changeTabname('Auction')">Auction</a>
        </li>
        <li role="presentation" class="mt-2">
            <label id="transfertmc-tab" data-bs-toggle="tab" data-bs-target="#transfertmc" type="button" role="tab" aria-controls="transfertmc" aria-selected="false" @click="changeTabname('Transfer TMC')">Transfer TMC</label>
        </li>
        <li role="presentation" class="mt-2">
            <label id="voucher-tab" data-bs-toggle="tab" data-bs-target="#voucher" type="button" role="tab" aria-controls="voucher" aria-selected="false" @click="changeTabname('Voucher')">Voucher</label>
        </li>
        <li role="presentation" class="mt-2">
            <label id="notification-tab" data-bs-toggle="tab" data-bs-target="#notification" type="button" role="tab" aria-controls="notification" aria-selected="false" @click="changeTabname('Notification')" v-if="notification > 0">Notification <span class="badge">{{ notification }}</span></label>
        </li>
        <li role="presentation" class="mt-2">
            <label id="setting-tab" data-bs-toggle="tab" data-bs-target="#setting" type="button" role="tab" aria-controls="setting" aria-selected="false" @click="changeTabname('Setting')">Setting</label>
        </li>
</ul>
</template>

<script lang="ts" setup>
const notification = 2;
const changeTabname = (name: string) => {
    const tabname = document.getElementById('myprofile-tab-name');
    if (!tabname) return;
    tabname.innerHTML = name;
}
</script>

<style scoped>
.nav-item {
    padding: 0 2rem;
    color: var(--bs-gray);
    cursor: pointer;
}

.nav-item:hover {
    color: #333;
}

.border {
    border-radius: 0.5rem;
    padding: 2rem;
}

li {
    cursor: pointer;
    list-style: none !important;
}

li:hover {
    color: #333;
}

.main-nav {
    color: #000;
}

.nav>li>a {
    position: relative;
    display: block;
    padding: 5px 10px;
    color: #666666;
    font-weight: 300;
}
.badge {
    background-color: #DB4444;
    padding: 0.25rem;
    border-radius: 50%;
    width: 20px;
    height: 20px;
}
</style>
