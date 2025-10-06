<template>
<section class="page product-detail pages">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'สินค้า', link: 'products' }]" />
            </div>
            <div class="col-md-12 mt-4 mb-2">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Product Code</p>
                        </div>
                        <div class="col-md-10">
                            <p class="fs-3">{{ productDetail?.title }}</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-7">
                <div class="product-detail-item">
                    <div class="carousel-container">
                        <!-- <img :src="productDetail?.imgurl || ''" class="product-image" alt=""> -->
                        <!-- {{ productDetail.imgurl }} -->
                        <ClientOnly>
                            <MySwiper :image="[{src : productDetail.imgurl}]" />
                        </ClientOnly>
                    </div>
                </div>
            </div>

            <div class="col-md-5 product-detail-content d-flex flex-column gap-2">
                <div class="row">
                    <div class="col-md-6 border p-4 bg-border" v-if="authStore.isAuthenticated">
                        <img src="/newimg/bb.png" alt="">
                        <span class="fs-6 fw-600" v-if="authStore.isAuthenticated">{{ formatNumber(authStore.user?.currencyLists[0]?.amount) }}</span>
                    </div>
                    <div class="col-md-6 border p-4 tmc-border" v-if="authStore.isAuthenticated">
                        <img src="/newimg/tmc.png" alt="">
                        <span class="fs-6 fw-600" v-if="authStore.isAuthenticated">{{ formatNumber(authStore.user?.currencyLists[1]?.amount) }}</span>
                    </div>
                    <div class="col-md-12 d-flex justify-content-between mt-4" v-for="currency in productDetail.currencyLists" :key="currency.id">
                        <span class="fw-600">{{ formatNumber(currency?.amount) }}</span>
                        <span class="fw-600 text-primary">{{currency.currencyname}}</span>
                    </div>
                    <div class="col-md-12 mt-3 d-flex justify-content-between">
                        <span class="fw-600 text-primary">In Stock {{ productDetail?.quantity }}</span>
                        <span class="fw-600" v-if="productDetail?.newProduct == 'N'">สินค้ามือสอง <span class="text-primary fw-600">[{{ productDetail?.productPercent }}%]</span></span>
                        <span class="fw-600" v-if="productDetail?.newProduct == 'Y'">สินค้าใหม่</span>
                    </div>
                    <div class="col-md-12 mb-2 mt-2">
                        <hr>
                    </div>
                    <div class="col-md-12 d-flex">
                        <ColorSelector :colors="['#FF7377','#b9b9ff']" />
                    </div>
                    <div class="col-md-12 mt-2">
                        <SizeSelector :sizes="[{label:'S',available:true},{label:'M',available:true},{label:'L',available:true},{label:'XL',available:true}]" />
                    </div>
                    <div class="col-md-12 mt-2 d-flex gap-2 align-items-center">
                        <label class="quantity-selector__label">Quantity:</label>
                        <QuantitySelector :max="productDetail?.quantity" :center="true" v-model="currentQuantity" @change="handleQuantityChange"/>
                        <button class="btn btn-primary">Exchange</button>
                        <button class="btn btn-primary" :class="{'cart-icon-shake' : isAnimating }" @click="Addcart">
                            <Icon icon="ion:cart-outline" width="20" height="20" />
                        </button>
                    </div>
                    <div class="col-md-12 mt-2 mb-2">
                        <hr>
                    </div>
                    <div class="col-md-12 d-flex justify-content-end">
                        <span class="fw-500 fs-6">วันที่ลงประกาศ : {{ productDetail?.createdat }}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <header class="mb-2 mt-4">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Product details</p>
                        </div>
                        <div class="col-md-2 d-flex flex-column">
                            <img src="/newimg/brand/bmw.png" class="img-fluid bg-light-gray">
                            <p class="text-center mt-2 fw-600">{{ productData?.shop }}</p>
                        </div>
                        <div class="col-md-10 border p-4">
                            <div v-html="sanitizedHtml"></div>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-12 mt-5">
                <header class="mb-2 mt-4">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Related Item</p>
                        </div>
                    </div>
                </header>
            </div>
            <!-- <div class="col-md-12">
                <div class="product-grid">
                    <div v-for="product in productsData" :key="product.id" class="product-card" @click="gotoProduct(product.id)">
                        <div class="image-container">
                            <div class="favourites-icon">
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <img :src="product.imgurl"  class="product-item-img" :alt="product.title">
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
            </div> -->
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';
import {
    formatNumber
} from '@/utils/utils';
const router = useRouter();
const cartStore = useCartStore();
const {
    $dompurify
} = useNuxtApp();
const authStore = useAuthStore()

interface Product {
    id: number;
    productId: number;
    categoryId: number;
    title: string;
    img: string;
    shop: string;
    productCode: string;
    productPercent: number;
    quantity: number;
    bbprice: number;
    tmcprice: number;
    discount: string;
    discountPercent: number;
    newPrice: number;
    newProduct: string;
    productImage ? : {
        src: string
    } [];
    createat: string;
    productContent: string;
}

const isAnimating = ref(false);

onMounted(() => {
    if (authStore.isAuthenticated) {
        authStore.initializeAuth();
    }
})

const route = useRoute()
const productId = Number(route.params.id)

const {data : productDataResponse , pending , error} = await useFetch < Product[] > ('https://fontapi.bigbarter.net/getproduct/' + productId,{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'prefix' : 'bb'
        }
    });
    const productDetail = productDataResponse.value?.result
    // console.log(productDataResponse.value)
const currentQuantity = ref(1200);
const handleQuantityChange = (newQuantity: number) => {
    currentQuantity.value = newQuantity;
};


const Addcart = () => {
    // console.log(productDetail.productId)
    if (authStore.isAuthenticated) {
        const cartData = productDetail;
        cartStore.addToCart(cartData);
        console.log(cartStore.items)

        // cartStore.addToCart(cartData);
        // alert('Product added to cart!');

        isAnimating.value = true;
        setTimeout(() => {
            isAnimating.value = false;
        }, 500);
    } else {
        alert('Please login to add products to cart.');
        router.push('/login');
    
    }
}
</script>

<style scoped>
img {
    object-fit: scale-down;
}

.bg-border {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: solid 0.1rem !important;
    border-right: 0 !important;
    border-radius: 0.5rem 0 0 0.5rem;
    background-color: #FFFFFF !important;
}

.tmc-border {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: solid 0.1rem !important;
    border-radius: 0 0.5rem 0.5rem 0;
}

.product-detail-content {
    padding-left: 5rem;
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

.cart-icon-shake {
  animation: shake 0.5s ease-in-out;
}

.quantity-selector__label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.product-image {
    max-width: 300px;
}

@keyframes shake {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
}

@media screen and (max-width: 768px) {
    .product-detail-content {
        padding: 2rem !important;
    }

    .bg-border {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border: solid 0.1rem !important;
        border-radius: 0.5rem 0.5rem 0 0;
        border-bottom: 0 !important;
    }

    .tmc-border {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border: solid 0.1rem !important;
        border-radius: 0 0 0.5rem 0.5rem;
    }
}
</style>
