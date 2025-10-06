<template>
<section class="recommened">
    <div class="container">
        <header class="mb-2">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-primary fw-600"><span class="rectangle"></span>This Month</p>
                </div>
                <div class="col-md-10">
                    <p class="fs-3">Best Selling Products</p>
                </div>
                <div class="col-md-2 d-flex justify-content-end">
                    <button class="btn btn-primary btn-view-all">View All</button>
                </div>
            </div>
        </header>
        <div class="parent-container">
            <div class="product-grid">
                <div v-for="product in productsWithHoverState" :key="product.id" class="product-card" @mouseenter="product.isHovered = true" @mouseleave="product.isHovered = false" @click="gotoProduct(product.id)">
                    <div class="image-container">
                        <div class="favourites-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <img :src="product.img" class="product-item-img" :alt="product.title">
                        <button v-if="!product.isHovered" class="overlay-button" @click="gotoProduct(product.id)">
                            Add To Cart <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                    <p class="fw-500 mt-2 mb-4 text-start px-2">{{ product.title }}</p>
                    <div class="d-flex price-box justify-content-between align-items-center px-2" v-if="product.bbprice > 0">
                        <p class="text-primary fw-500">{{ formatNumber(product.bbprice) }}</p>
                        <p class="text-primary fw-500">BBC</p>
                    </div>
                    <div class="d-flex price-box justify-content-between align-items-center px-2" v-if="product.tmcprice > 0">
                        <p class="text-primary fw-500">{{ formatNumber(product.tmcprice) }}</p>
                        <p class="text-primary fw-500">TMC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import {
    computed
} from 'vue';
import type {
    Ref
} from 'vue';
import {
    gotoProduct,
    formatNumber
} from '~/utils/utils'

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
}

interface ProductWithHover extends Product {
    isHovered: boolean;
}

const {
    data: productsData,
    pending,
    error
} = await useFetch < Product[] > ('/api/products/getBestSelling');

const productsWithHoverState: Ref < ProductWithHover[] > = computed(() => {
    if (!productsData.value) {
        return [];
    }
    const transformedProducts = productsData.value.map(product => ({
        ...product,
        isHovered: false
    }));
    // console.log('productsWithHoverState computed:', transformedProducts);
    return transformedProducts;
});

// watch(productsWithHoverState, (newValue) => {
//     console.log('productsWithHoverState changed:', newValue);
// }, {
//     deep: true
// });
</script>

<style scoped>
/* CSS styles (เหมือนกับตัวอย่างก่อนหน้า) */
.container {
    padding: 20px;
}

.loading,
.error {
    text-align: center;
    padding: 50px;
    font-size: 1.2rem;
    color: #555;
}

.error {
    color: red;
}

.price-box {
    margin-top: -10px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(305px, 1fr));
    width: fit-content;
    gap: 20px;
}

.product-card {
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
    text-align: center;
    transition: transform 0.2s ease;
}

.product-card:hover {
    /* transform: translateY(-5px); */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.favourites-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #FFFFFF;
    border-radius: 50%;
    padding: 5px;
    height: 2.5vh;
    width: 2.5vh;
    cursor: pointer;
}

.image-container {
    position: relative;
    width: 100%;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.overlay-button {
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    z-index: 1000;
}
</style>
