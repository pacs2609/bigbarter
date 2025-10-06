<template>
    <section class="pages pt-3 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3 bg-primary p-4">
                    <p class="fs-6 fw-600">BB BigBarter</p>
                    <ProductNav />
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-3 offset-md-9">
                            <Breadcrumb :breadcrumb="[{ name: 'สินค้า', link: 'products' }]" />
                        </div>
                        <div class="col-md-12">
                            <header class="mb-2 ms-5">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p class="text-primary fw-600"><span class="rectangle"></span>This Month</p>
                                    </div>
                                    <div class="col-md-8">
                                        <p class="fs-3">Best Selling Products</p>
                                    </div>
                                    <div class="col-md-3 d-flex justify-content-end">
                                        <select class="u-select form-control" aria-label="Default select example"
                                            v-model="selectValue">
                                            <option v-for="item in selectItem" :key="item" :value="item">{{ item }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-md-1 d-flex justify-content-end">
                                        <button class="btn btn-primary search">
                                            <Icon class="text-white" icon="ph:magnifying-glass" width="18"
                                                height="18" />
                                        </button>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div class="col-md-12 p-5">
                            <div class="row">
                                <div class="col-md-4 product-box mb-4" v-for="product in productWithHoverState"
                                    :key="product.id">
                                    <div class="d-flex justify-content-end" v-if="product.favourite">
                                        <a class="favourite-btn">
                                            <Icon class="favourite" icon="mdi:heart" />
                                        </a>
                                    </div>
                                    <div class="d-flex justify-content-end" v-if="!product.favourite">
                                        <a class="favourite-btn">
                                            <Icon icon="mdi:heart-outline" />
                                        </a>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center bg-light-gray p-2 product-card">
                                        <img :src="product.imgurl" class="img-responsive">
                                        <div class="hover-button-container">
                                            <button class="btn quick-view-button w-100" @click="gotoProduct(product.productId)">View Product</button>
                                        </div>
                                    </div>
                                    <p class="d-flex justify-content-start align-items-center mt-1 fw-600 mb-2">{{
                                        product.productName }}</p>
                                    <div v-if="product.currencyLists && product.currencyLists.length > 0"
                                        class="d-flex flex-column justify-content-start align-items-start mt-1 mb-2">
                                        <p v-for="currency in product.currencyLists" :key="currency.currencyId"
                                            class="d-flex w-100 justify-content-between align-items-center text-primary mt-1 fw-600 mb-2">
                                            <span>{{ currency.amount }}</span><span>{{ currency.currencyname }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';
import { gotoProduct } from '@/utils/utils'
import Breadcrumb from '~/components/Breadcrumb.vue';
definePageMeta({
    layout: 'default',
})
const currencyFillter = ref('THB');
const selectItem = ref(['All', 'BB', 'TMC', 'BB&TMC']);
const selectValue = ref('All');


interface Product {
    id: number;
    shopId: number;
    categoryId: number;
    categorySubId: number;
    seq: number;
    productId: number;
    productCode: string;
    productName: string;
    imgurl: string;
    amountBB: number;
    amountTMC: number;
    currencyLists?: [
        amount: number,
        currencyId: string,
        currencyname: string
    ]
    discount: number;
    useStatus: string;
    createdby: string;
    createdat: string;
    updatedby: string;
    updatedat: string;
    productImgLists: [];
    favourite: boolean;
}


interface ApiResponse {
    result: Product[]
}

interface productWithHover extends Product {
    isHovered: boolean;
}

const param = {
    "pagination": {
        "perPage": 100,
        "currentPage": 1,
        "totalReccord": 0
    },
    "shopId": 0,
    "categoryId": 0,
    "orderBy": "ASC"
}

const header = {
    'Content-Type': 'application/json',
    'prefix': 'bb'
}

const response: ApiResponse = await $fetch('https://fontapi.bigbarter.net/product', {
    method: 'POST',
    headers: header,
    body: param
});

const productData: Product[] = response.result;

const productWithHoverState: Ref<productWithHover[]> = computed(() => {
    if (!productData) {
        return [];
    }
    const transformedproduct = productData.map(product => ({
        ...product,
        isHovered: false
    }));
    // console.log('productsWithHoverState computed:', transformedproduct);
    return transformedproduct;
});


</script>

<style scoped>
svg {
    width: 22px;
    height: 22px;
}

select {
    height: 2rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-right: 5px;
    padding: 0.3rem;
    width: 30px;
    height: 30px;
    background-color: #FFF;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
}

.favourite {
    color: #DB4444;
}

.search {
    border-radius: 50% !important;
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
    margin: 0 !important;

}

.u-select {
    display: flex;
    justify-content: start;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    background-color: #FFF;
    color: #DB4444;
    border: solid 1px #c9c9c9;
    max-width: 150px;
}

.product-card {
    /* Default styles */
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Transition properties */
    cursor: pointer;
    position: relative;
    /* Needed for transform/lifting effect */
}

/* Hover State */
.product-card:hover {
    transform: translateY(-5px);
    /* Moves the card up slightly */
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    /* Stronger shadow */
}

/* Hidden button default state */
.quick-view-button {
    opacity: 0;
    transition: opacity 0.3s ease;
    /* ... other button styles */
}

/* Button visibility on card hover */
.product-card:hover .quick-view-button {
    opacity: 1;
    color: #FFF;
    background-color: #000000;
    width: 100% !important;
    min-width: 230px;
}
</style>
