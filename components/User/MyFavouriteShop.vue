<template>
<div class="container p-4">
    <div class="row">
        <div class="col-md-4 product-box mb-4" v-for="shopData in shopWithHoverState" :key="shopData.id">
            <div class="d-flex justify-content-end" v-if="shopData.favourite">
                <a class="favourite-btn">
                    <Icon class="favourite" icon="mdi:heart" /></a>
            </div>
            <div class="d-flex justify-content-end" v-if="!shopData.favourite">
                <a class="favourite-btn">
                    <Icon icon="mdi:heart-outline" /></a>
            </div>
            <div class="d-flex justify-content-center align-items-center bg-light-gray p-2 product-card" @click="gotoProduct(shopData.id)">
                <img :src="'/newimg/brand/'+shopData.image" class="img-responsive">
            </div>
            <p class="d-flex justify-content-center align-items-center mt-1 fw-600 mb-2 cursor-pointer">{{ shopData.name }}</p>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';

interface Shop {
    id: string;
    name: string;
    image: string;
    favourite: boolean;
}

const {
    data: shopData
} = await useFetch < Shop[] > ('/api/getshop');

const shopWithHoverState: Ref < Shop[] > = computed(() => {
    if (!shopData.value) {
        return [];
    }
    const transformedShop = shopData.value.filter(shop => shop.favourite === true).map(shopData => ({
        ...shopData,
        isHovered: false
    }));
    return transformedShop;
});
</script>

<style scoped>
svg {
    width: 22px;
    height: 22px;
}

.product-card {
    height: 200px;
    margin-bottom: 1rem;
    padding: 1rem;
}

.product-card img {
    width: 100%;
    max-width: 130px;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

.product-box {
    padding: 0rem 2rem;
}

.favourite-btn {
    position: absolute;
    margin-top: 5px;
    margin-right: 5px;
    padding: 0.3rem;
    background-color: #FFF;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.favourite {
    color: #DB4444;
}
</style>
