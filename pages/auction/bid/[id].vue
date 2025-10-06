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
                            <p class="fs-3">{{ productData?.title }}</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-7">
                <div class="product-detail-item">
                    <div class="carousel-container">
                        <ClientOnly>
                            <MySwiper :image="productData?.productImage" />
                        </ClientOnly>
                    </div>
                </div>
            </div>

            <div class="col-md-5 product-detail-content d-flex flex-column gap-2">
                <div class="row">
                  <div class="col-md-12 d-flex justify-content-between">
                    <p>เริ่มการประมูล</p>
                    <p class="text-primary fw-400">08-06-2024  15.00 น.</p>
                  </div>
                  <div class="col-md-12 d-flex justify-content-between">
                    <p>สิ้นสุดการประมูล</p>
                    <p class="text-primary fw-400">08-06-2024  18.00 น.</p>
                  </div>
                    <div class="col-md-12 d-flex justify-content-between mt-4">
                        <span class="fw-400 fs-5 text-primary" style="width: 50%;">ราคาเริ่มต้นประมูล</span>
                        <span class="fw-400 fs-5">{{ formatNumber(productData?.bbprice) }}</span>
                        <span class="fw-400 fs-5 text-primary">BB</span>
                    </div>
                    <div class="col-md-12 d-flex justify-content-between mt-4">
                        <span class="fw-400 fs-5 text-primary" style="width: 50%;">อัตราการเพิ่มราคาประมูล</span>
                        <span class="fw-400 fs-5">{{ formatNumber(productData?.bbprice * 0.01) }}</span>
                        <span class="fw-400 fs-5 text-primary">BB</span>
                    </div>
                    <div class="col-md-12 mb-2 mt-2"><hr></div>
                    <div class="col-md-12 d-flex justify-content-between mt-3">
                        <span class="fw-400 fs-5 text-primary">เวลาที่เหลือ</span>
                        <span class="fw-400 fs-5 countdown">
                          <!-- 00:40:23 -->
                        <CountdownTimer target-date="2025-07-30T18:00:00" />
                        </span>
                    </div>
                    <div class="col-md-12 mt-2 d-flex justify-content-between mt-4">
                        <span class="fw-400 fs-5 text-primary" style="width: 50%;">ราคาตอนนี้</span>
                        <span class="fw-400 fs-5">{{formatNumber(1000)}}</span>
                        <span class="fw-400 fs-5 text-primary">BB</span>
                    </div>
                    <div class="col-md-12 mt-2 d-flex justify-content-between mt-4">
                        <span class="fw-400 fs-5 text-primary" style="width: 50%;">ผู้เสนอราคาสูงสุด</span>
                        <span class="fw-400 fs-5">KT</span>
                        <span class="fw-400 fs-5 text-primary"><Icon icon="mingcute:medal-fill" width="30" height="30"  style="color: #FFC300;"/></span>
                    </div>
                    <div class="col-md-12 mb-2 mt-2"><hr></div>
                    <div class="col-md-12">
                      <p class="fs-8 text-primary fw-400">ใส่ราคาประมูล</p>
                    </div>
                    <div class="col-md-12 mt-2 d-flex gap-2 justify-content-center">
                        <QuantitySelector :max="authStore.user?.bbcoin" :min="1" :value="currentQuantity" :width="200" v-model="currentQuantity" @change="handleQuantityChange"/>
                        <button class="btn btn-primary px-5">Bid Now</button>
                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <header class="mb-2 mt-4">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Product details</p>
                        </div>
                        <div class="col-md-12 border p-4">
                            <div v-html="sanitizedHtml"></div>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-12 mt-5">
              <header>
                <div class="row">
                  <div class="col-md-12">
                    <p class="text-primary fw-600"><span class="rectangle"></span>การเสนอราคา</p>
                  </div>
                </div>
              </header>
            </div>
            <div class="col-md-12 d-flex justify-content-center">
              <table>
                <thead>
                  <tr class="border-bottom">
                    <td class="text-muted">เวลาประมูล</td>
                    <td class="text-muted">ราคา</td>
                    <td class="text-end text-muted">ผู้ประมูล</td>
                  </tr>                
                </thead>
                <tbody>
                  <tr>
                    <td>08-06-2024  15.00 น.</td>
                    <td>1,200</td>
                    <td class="text-end"><Icon icon="mingcute:medal-fill" width="40" height="40" class="px-2" style="color: #FFC300;"/>KT</td>
                  </tr>
                  <tr>
                    <td>10-10-68 08:46:36</td>
                    <td>1,000</td>
                    <td class="text-end">CK</td>
                  </tr>
                </tbody>
              </table>
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
    formatNumber
} from '@/utils/utils';

definePageMeta({
    layout: 'default',
})

const router = useRouter();
const {
    $dompurify
} = useNuxtApp();

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


const authStore = useAuthStore()
const isAnimating = ref(false);

onMounted(() => {
        authStore.initializeAuth();
})

const route = useRoute()
const id = Number(route.params.id)

const {
    data
} = await useFetch('/api/products/getViewProduct')

const productData = data.value?.find(product => product.id === id) as Product | undefined

const dirtyHtml = ref(productData?.productContent)

const sanitizedHtml = computed(() => {
    if (import.meta.client) {
        return $dompurify(dirtyHtml.value);
    }

    // On the server, return an empty string or a placeholder.
    return '';
});

//  console.log(productData)
const currentQuantity = ref(1);
const handleQuantityChange = (newQuantity: number) => {
    currentQuantity.value = newQuantity;
};


const Addcart = () => {
    if (authStore.isAuthenticated) {
        const cartStore = useCartStore();
        const cartData = {
            id: productData?.id,
            title: productData?.title,
            img: productData?.img,
            shop: productData?.shop,
            productCode: productData?.productCode,
            productPercent: productData?.productPercent,
            quantity: currentQuantity.value,
            bbprice: productData?.bbprice,
            tmcprice: productData?.tmcprice,
            discount: productData?.discount,
            discountPercent: productData?.discountPercent,
            newPrice: productData?.newPrice,
            newProduct: productData?.newProduct,
            productImage: productData?.productImage,
            createat: productData?.createat,
            productContent: productData?.productContent
        }
        cartStore.addItem(cartData);
        // alert('Product added to cart!');

        isAnimating.value = true;
        setTimeout(() => {
            isAnimating.value = false;
        }, 500);

        console.log(cartStore.items)
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

.countdown {
  border: solid 2px #DB4444;
  border-radius: 5px;
  padding: 0.3rem 3rem;
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

table {
  width: 100%;
}

td {
  padding: 0.75rem;
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
