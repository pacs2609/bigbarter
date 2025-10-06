<template>
<div class="container p-4">
    <div class="row">
        <div class="col-md-4 product-box mb-4" v-for="product in productWithHoverState" :key="product.id">
            <div class="d-flex justify-content-end" v-if="product.favourite">
                <a class="favourite-btn">
                    <Icon class="favourite" icon="mdi:heart" /></a>
            </div>
            <div class="d-flex justify-content-end" v-if="!product.favourite">
                <a class="favourite-btn">
                    <Icon icon="mdi:heart-outline" /></a>
            </div>
            <div class="d-flex justify-content-center align-items-center bg-light-gray p-2 product-card cursor-pointer" @click="gotoProduct(product.id)">
                <img :src="product.img" class="img-responsive">
            </div>
            <p class="d-flex justify-content-start align-items-center mt-1 fw-600 mb-2 cursor-pointer">{{ product.title }}</p>
            <div class="d-flex flex-column justify-content-start align-items-start mt-1 mb-2">
                <p class="d-flex w-100 justify-content-between align-items-center text-primary mt-1 fw-600 mb-2" v-if="product.bbprice > 0"><span>{{ product.bbprice }}</span><span>BB</span></p>
                <p class="d-flex w-100 justify-content-between align-items-center text-primary mt-1 fw-600 mb-2" v-if="product.tmcprice > 0"><span>{{ product.tmcprice }}</span><span>TMC</span></p>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
interface Product {
    id: number;
    title: string;
    img: string;
    shop: string;
    productCode: string;
    productPercent: number;
    quantity: number;
    bbprice: number;
    tmcprice: number;
    price: number;
    discount: string;
    discountPercent: number;
    newPrice: number;
    newProduct: string;
    favourite: boolean;
}

interface productWithHover extends Product {
    isHovered: boolean;
}

const {
    data: productData
} = await useFetch < Product[] > ('/api/products/getallProduct');
const productWithHoverState: Ref < productWithHover[] > = computed(() => {
    if (!productData.value) {
        return [];
    }
    const transformedproduct = productData.value.filter(product => product.favourite === true).map(productData => ({
        ...productData,
        isHovered: false
    }));
    return transformedproduct;
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
