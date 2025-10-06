<template>
<section class="featured">
    <div class="container">
        <h3 class="text-strong heading">FEATURED PRODUCTS</h3>
        <div class="row">
            <div class="col-sm-9">
                <div class="row">
                    <div class="col-md-4 col-sm-6" v-for="product in data">
                        <div class="panel panel-default box_c">
                            <div class="panel-body">
                                <div class="product-thumb">
                                    <NuxtLink class="product-thumb-img" @click="gotoProduct(product.id)">
                                        <img class="img-responsive product-img" :src="product.img" :alt="product.title " :title="product.title">
                                    </NuxtLink>
                                    <NuxtLink class="product-thumb-title" @click="gotoProduct(product.id)">{{ product.title }}</NuxtLink>
                                    <div class="product-thumb-detail">
                                        <p><span class="text-primary">ร้านค้า :</span><span>
                                                <NuxtLink href="#" style="color:#b75c00;">{{ product.shop }}</NuxtLink>
                                            </span></p>

                                        <p><span class="text-primary">รหัสสินค้า :</span><span>{{ product.productCode }}</span></p>
                                        <p><span class="text-primary">คงเหลือ :</span><span> {{ product.quantity }}</span></p>
                                    </div>
                                    <div class="product-thumb-status" v-if="product.newProduct == 'N'">
                                        สินค้ามือสอง ( {{product.productPercent}} %)
                                    </div>
                                    <div class="product-thumb-status" v-else>
                                        สินค้าใหม่
                                    </div>
                                    <div class="product-thumb-price">
                                        <div class="price-bg">
                                            <span class="text-primary price-bg-price fs-4" v-if="product.discount == 'N'">{{ formatNumber(product.price) }}</span>
                                            <template v-else>
                                                <span class="text-primary price-bg-price fs-4">
                                                    {{ formatNumber(product.newPrice) }}
                                                </span>
                                                <s style="margin-left:5px;" class="old-price text-muted">{{ formatNumber(product.price) }} </s>
                                            </template>
                                            <span style="margin-left:3px;"><img src="/images/bg.png"></span>
                                        </div>
                                        <div class="product-thumb-price-2" v-if="product.discount == 'Y'">
                                            <div class="price-2"><span>- {{ product.discountPercent }}%</span></div>
                                        </div>
                                    </div>
                                    <div class="product-thumb-bottom">
                                        <a href="#" class="add_cart"><i class="fa fa-shopping-cart"></i> หยิบใส่ตะกร้า</a>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end -->
                </div>
                <div align="center"> <a href="/recommend/" data-toggle="tooltip" title="" data-original-title="ดูทั้งหมด"><i class="fa fa-angle-double-right"></i> ดูทั้งหมด</a> </div>
            </div>
            <div class="col-sm-3">
                <div class="panel panel-default banner_a" v-for="banner in Banner">
                    <div class="p-3">
                        <img class="img-responsive" :src="banner.img"> </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import {formatNumber , gotoProduct} from '@/utils/utils';

const Banner = [{
        img: '/img/img-0861611733209.jpg'
    },
    {
        img: '/img/img-8811573103735.jpg'
    }
]

interface Product {
    id: number;
    title: string;
    img: string;
    shop: string;
    productCode: string;
    productPercent: number;
    quantity: number;
    price: number;
    discount: string;
    discountPercent: number;
    newPrice: number;
    newProduct: string;
}

const { data, pending, error, refresh } = await useFetch('/api/products/getFeatured')
const fetchNewData = () => {
    refresh()
}

</script>

<style>

</style>
