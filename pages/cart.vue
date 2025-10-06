<template>
<section class="pages page cart-page">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'ตระกร้าของฉัน', link: '#', isActived: true }]" />
            </div>
            <div class="col-md-12 mt-4 mb-2">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>My Cart</p>
                        </div>
                        <div class="col-md-12">
                            <p class="fs-3 fw-600">Items in my shopping cart</p>
                        </div>
                    </div>
                </header>
            </div>
          </div>
            <div class="row">
                <div class="col-md-12 mt-5">
                    <div class="row d-flex align-items-center mb-4 border p-2">
                        <div class="col-md-1 d-flex justify-content-center align-items-center">
                            <input type="checkbox">
                        </div>
                        <div class="col-md-4 cart-head">
                            <span class="fw-500">
                                Product
                            </span>
                        </div>
                        <div class="col-md-2 cart-head justify-content-center align-items-center">
                            <span class="fw-500">
                                Price BB
                            </span>
                        </div>
                        <div class="col-md-2 cart-head justify-content-center align-items-center">
                            <span class="fw-500">
                                Price TMC
                            </span>
                        </div>
                        <div class="col-md-1 cart-head justify-content-center align-items-center">
                            <span class="fw-500">
                                Quantity
                            </span>
                        </div>
                        <div class="col-md-2 cart-head justify-content-center align-items-center">
                            <Icon icon="uil:trash" width="24" height="24" />
                        </div>
                    </div>
                </div>
                <div class="col-md-12 d-flex cart-items justify-content-center align-items-center border p-2 mb-4" v-for="item in cartItems" :key="item.productId">
                    <div class="col-md-1 d-flex justify-content-center align-items-center">
                        <input type="checkbox" v-model="item.selected">
                    </div>
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-3">
                                <img :src="item.imgurl" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-9 d-flex align-items-center">
                                <span class="fs-14 fw-600">{{ item.productName }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex cart-content" v-for="currency in item.currencyLists" :key="currency.currencyname">
                        <span>{{ formatNumber(currency?.amount) }} <span class="text-primary">{{ currency?.currencyname }}</span></span>
                    </div>
                    <div class="col-md-1 d-flex cart-content">
                        <span class="">{{ item.quantity }}</span>
                    </div>
                    <div class="col-md-2 d-flex cart-content justify-center">
                        <Icon icon="uil:trash" width="24" height="24" style="color: #DB4444;" />
                    </div>
                </div>
                <div class="col-md-12 mt-5 d-flex justify-content-between align-items-center">
                    <button class="btn btn-light">Return To Shop</button>
                    <button class="btn btn-primary">Update Cart</button>
                </div>
                <div class="col-md-6 mt-5 d-flex gap-3 align-items-center">
                    <select v-model="formOrder.voucherId" class="form-select">
                        <option value="0">Select Coupon</option>
                        <option v-for="voucher in voucherData" :key="voucher.id" :value="voucher.id">{{ voucher.descripttion }}</option>
                    </select>
                    <button class="btn btn-primary">Apply Coupon</button>
                </div>
                <div class="col-md-6 mt-5">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-6 border p-4 bg-border" v-for="myCurrency in userData?.currencyLists" :key="myCurrency.currencyname">
                            <img src="/newimg/bb.png" alt="">
                            <span class="fs-6 fw-600">{{ formatNumber(myCurrency.amount) }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 offset-md-6 mt-5 d-flex flex-column justify-content-between border p-4">
                    <p class="fs-4 fw-500 mb-4">Cart Total</p>
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fs-5">Subtotal</span><span class="text-primary fs-5 mx-2">BG</span>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <span class="fs-5">{{ formatNumber(sumTotalBG) }}</span><span class="fs-5 text-primary mx-2">BG</span>
                        </div>
                        <div class="col-md-12"><hr></div>
                        <div class="col-md-6">
                            <span class="fs-5">Subtotal</span><span class="text-primary fs-5 mx-2">TMC</span>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <span class="fs-5">{{ formatNumber(sumTotalTMC) }}</span><span class="fs-5 text-primary mx-2">TMC</span>
                        </div>
                        <div class="col-md-12"><hr></div>
                        <div class="col-md-6">
                            <span class="fw-600">Total</span>
                        </div>
                        <div class="col-md-6 d-flex justify-content-end">
                            <span class="fw-600">{{ formatNumber(sumTotal) }}</span>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center align-items-center mt-4">
                            <button class="btn btn-primary" @click="onSave">Exchange</button>
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
    formatNumber
} from '@/utils/utils';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Swal from 'sweetalert2';
const authStore = useAuthStore();
const cartStore = useCartStore();
const userData = computed(() => authStore.user);
const cartItems = useCartStore().items;
definePageMeta({
    layout: 'default',
    title: 'ตระกร้าของฉัน'
})
// console.log(userData.value)
const orderDetailLists = computed(() => {
    const orderDetailLists = [];
    cartItems.forEach(item => {
        orderDetailLists.push({
            productId: item.productId,
        })
    })
    return orderDetailLists;
})


const formOrder = {
    memberId : authStore.user?.id,
    voucherId : 0,
    orderDetailLists : orderDetailLists.value,
}

const onSave = async () => {
    try {
        const { data } = await useFetch(import.meta.env.VITE_API_URL + '/saveordermember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'BB',
            },
            body: JSON.stringify(formOrder),
        })
        if (data.value?.code == 200) {
            Swal.fire({
                title: 'Successfully',
                text: data.value?.message,
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#DB4444',
                confirmButtonText: 'OK'
            }).then(() => {
                useCartStore().clearCart();
                navigateTo('/user/profile', {
                    replace: true
                })
            })
        }
        // console.log(data.value)
    } catch (error) {
        console.log(error)
    }
}


const sumTotalBG = computed(() => {
    let total = 0;
    cartItems.forEach(item => {
        total += item.currencyLists[0].amount * item.quantity;
    });
    return total;
})

const sumTotalTMC = computed(() => {
    let total = 0;
    cartItems.forEach(item => {
        total += item.currencyLists[1].amount * item.quantity;
    });
    return total;
})

const sumTotal = computed(() => {
    return sumTotalBG.value + sumTotalTMC.value;
})

const {data : voucher} = await useFetch(import.meta.env.VITE_API_URL + '/member/voucher', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${authStore.token}`,
        'Content-Type': 'application/json',
        'prefix' : 'BB'
    },
    body: {
        pagination: {
            perPage: 1000,
            currentPage: 1,
            totalReccord: 0
        },
        memberId: authStore.user?.id,
    }
})

const voucherData = voucher.value?.result



onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    } else {
        useRouter().push('/login');
    }
})
</script>

<style scoped>
input[type="checkbox"] {
    width: 20px;
    height: 20px;
}

.cart-head {
    padding: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
}

.border {
    border-radius: 0.25rem;
    border-color: #aaaaaa !important;
}

.img-fluid {
    max-width: 75px;
}

.cart-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-items {
    height: 110px;
}

.btn {
    padding: 0.75rem 3rem;
    border-radius: 0.25rem;
    border: solid 1px #aaaaaa;
    font-size: 1rem;
    font-weight: 500;
}

.coupon {
    height: 3.25rem;
    max-width: 300px;
}

.bg-border {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: solid 0.1rem !important;
    /* border-right: 0 !important; */
    /* border-radius: 0.5rem 0 0 0.5rem; */
}

.tmc-border {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: solid 0.1rem !important;
    border-radius: 0 0.5rem 0.5rem 0;
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
