<template>
<section class="productlist pages">
    <div class="breadcrumb-area mb-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/"><i class="fa fa-home"></i> หน้าแรก</a></li>
                    <li class="breadcrumb-item active">จัดการสินค้า</li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="container">
        <div class="page-header d-flex justify-content-center">
            <span class="fs-2">จัดการสินค้า</span>
        </div>
        <div class="row">
            <div class=" col-lg-4 col-md-4 col-sm-3 col-xs-12 mt-5" v-for="items in Products" :key="items.id">
                <div class="panel panel-body">
                    <div class="product-img pt-20 d-flex justify-content-center">
                        <a href=""><img :src="items.img" class="img-responsive product-img"></a>
                    </div>
                    <div class="product-content product-i">
                        <div class="pro-title">
                            <span class="fs-5">ชื่อสินค้า : <a href="" class="fs-5">{{ items.title}}</a></span>
                        </div>
                        <div class="price-box d-flex flex-column justify-content-center mb-2">
                            <span class="price product-price">จำนวนเหรียญที่ต้องการ : <span style="color:blue;">{{ formatNumber(items.newPrice) }}</span></span>
                            <span class="price product-price">จำนวนสินค้า : <span style="color:blue;">{{ items.quantity }}</span></span>
                            <span class="price product-price">สินค้าคงเหลือ : <span style="color:red;">{{ items.remaining }}</span></span>
                            <span class="price product-price">BG {{ formatNumber(items.newPrice) }} <s v-if="items.discount == 'Y'" class="old-price fs-7 text-danger">{{ items.price }} ลด {{ items.discountPercent }}%</s> </span>
                            <span class="border border-primary p-2 d-flex justify-content-center align-items-center mt-2" style="color:#ff0000;font-size:14px;">สินค้าใหม่</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3 gap-2">
                        <a href="" class="btn btn-primary btn-sm"><i class="fa fa-image"></i> จัดการรูปภาพ</a>
                        <a href="" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i> แก้ไขข้อมูล</a>
                        <a href="" class="btn btn-primary btn-sm" onclick="return confirm('คุณต้องการลบรายการนี้ใช่หรือไม่ ?')"><i class="fa fa-trash"></i> ลบรายการนี้</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>

</section>
</template>

<script lang="ts" setup>
import {
    formatNumber
} from '@/utils/utils';

const Products = [{
        id: 1,
        img: '/img/ocs-3741572594077.jpg',
        title: 'Swing Mechanic Built',
        price: 18500,
        quantity: 1,
        remaining: 10,
        discount: 'N',
        discountPercent: 0,
        newPrice: 18500,
        newProduct: 'Y'

    },
    {
        id: 2,
        img: '/img/ocs-141572235382.jpg',
        title: 'Pool Villa at HuaHin',
        price: 4500,
        quantity: 1,
        remaining: 6,
        discount: 'Y',
        discountPercent: 13,
        newPrice: 3900,
        newProduct: 'Y'

    }
]
</script>

<style>
.border-primary {
    border-color: #ff7377 !important;
    border-radius: 0.15rem !important;
}
</style>
