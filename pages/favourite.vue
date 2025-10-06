<template>
<section class="pages pt-3 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-3 bg-primary p-4">
                <p class="fs-6 fw-600">BB BigBarter</p>
                <ProductNav/>
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
                                    <p class="text-primary fw-600"><span class="rectangle"></span>My Like</p>
                                </div>
                                <div class="col-md-8">
                                    <p class="fs-3" id="tab-title">Shop</p>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end gap-4">
                                    <a class="tab-btn active" id="shop-tab-btn" @click="ChangeTab('shop')">Shop</a>
                                    <a class="tab-btn" id="product-tab-btn" @click="ChangeTab('product')">Product</a>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div class="col-md-12 p-5 hidden" id="product-tab">
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
                    <div class="col-md-12 p-5" id="shop-tab">
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
import {
    gotoProduct
} from '@/utils/utils'
import Breadcrumb from '~/components/Breadcrumb.vue';
definePageMeta({
    layout: 'default',
})
const currencyFillter = ref('THB');
const selectItem = ref(['All', 'BB', 'TMC', 'BB&TMC']);
const selectValue = ref('All');

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

interface Shop {
    id: string;
    name: string;
    image: string;
    favourite: boolean;
}

interface productWithHover extends Product {
    isHovered: boolean;
}

const {
    data: productData
} = await useFetch < Product[] > ('/api/products/getallProduct');

const products = productData.value?.find(productData => productData.favourite == true) as Product | undefined
console.log('productsWithHoverState computed:', products);
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

const {
    data: shopData
} = await useFetch < Shop[] > ('/api/getshop');

const shops = shopData.value?.find(shopData => shopData.favourite == true) as Shop | undefined
console.log('shops computed:', shops);
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

const ChangeTab = (tab: string) => {
    if (tab === 'product') {
        document.getElementById('tab-title')!.textContent = 'Product';
        document.getElementById('shop-tab')!.classList.add('fade');
        document.getElementById('shop-tab')!.classList.add('hidden');
        document.getElementById('product-tab-btn')!.classList.add('active');
        document.getElementById('product-tab')!.classList.remove('fade');
        document.getElementById('product-tab')!.classList.remove('hidden');
        document.getElementById('shop-tab-btn')!.classList.remove('active');
    } else if (tab === 'shop') {
        document.getElementById('tab-title')!.textContent = 'Shop';
        document.getElementById('product-tab')!.classList.add('fade');
        document.getElementById('product-tab')!.classList.add('hidden');
        document.getElementById('shop-tab-btn')!.classList.add('active');
        document.getElementById('shop-tab')!.classList.remove('fade');
        document.getElementById('shop-tab')!.classList.remove('hidden');
        document.getElementById('product-tab-btn')!.classList.remove('active');
    }
}
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

.tab-btn {
    color: #5a5a5a;
    cursor: pointer;
}

.active {
    color: #DB4444 !important;
    /* text-decoration: underline !important; */
    /* text-decoration-color: #DB4444 !important;
  text-decoration-thickness: 3px !important;
  text-underline-offset: 0.3rem !important;
  text-decoration-style: solid !important; */
}

.tab-btn:hover {
    text-decoration: underline !important;
    text-decoration-color: #DB4444 !important;
    text-decoration-thickness: 3px !important;
    text-underline-offset: 0.3rem !important;
    text-decoration-style: solid !important;
    color: #5a5a5a;
}

.tab-active {
    display: block;
}

.hidden {
    display: none;
}
</style>
