<template>
<section class="page pages exchangeoffer">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'โปรไฟล์', link: '#', isActived: true }]" />
            </div>
            <div class="col-md-12 mt-4 mb-2">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>My Account</p>
                        </div>
                        <div class="col-md-12">
                            <p class="fs-3 fw-600" id="myprofile-tab-name">My Profile</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-3">
                <AccountSideMenu/>
            </div>
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane border fade active show" id="myprofile" role="tabpanel" aria-labelledby="myprofile-tab"><MyAccount /></div>
                    <div class="tab-pane border fade" id="mypoint" role="tabpanel" aria-labelledby="mypoint-tab"><MyPoint/></div>
                    <div class="tab-pane border fade" id="shop" role="tabpanel" aria-labelledby="shop-tab"><MyFavouriteShop/></div>
                    <div class="tab-pane border fade" id="product" role="tabpanel" aria-labelledby="product-tab"><MyFavouriteProduct/></div>
                    <div class="tab-pane border fade" id="exchange" role="tabpanel" aria-labelledby="exchange-tab"><MyExchange/></div>
                    <div class="tab-pane border fade" id="exchangeoffer" role="tabpanel" aria-labelledby="exchangeoffer-tab"><MyExchangeoffer/></div>
                    <div class="tab-pane border fade" id="auction" role="tabpanel" aria-labelledby="auction-tab"><MyAuction/></div>
                    <div class="tab-pane border fade" id="transfertmc" role="tabpanel" aria-labelledby="transfertmc-tab"><MyTransferTMC/></div>
                    <div class="tab-pane border fade" id="voucher" role="tabpanel" aria-labelledby="voucher-tab"><MyVoucher/></div>
                    <div class="tab-pane border fade" id="notification" role="tabpanel" aria-labelledby="notification-tab"><MyNotification/></div>
                    <div class="tab-pane border fade" id="setting" role="tabpanel" aria-labelledby="setting-tab"><MySetting/></div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import MyAccount from '~/components/User/MyAccount.vue'
import AccountSideMenu from '~/components/User/AccountSideMenu.vue'
import MyPoint from '~/components/User/MyPoint.vue'
import MyFavouriteShop from '~/components/User/MyFavouriteShop.vue'
import MyFavouriteProduct from '~/components/User/MyFavouriteProduct.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import MyExchange from '~/components/User/MyExchange.vue'
import MyExchangeoffer from '~/components/User/MyExchangeoffer.vue'
import MyAuction from '~/components/User/MyAuction.vue'
import MyTransferTMC from '~/components/User/MyTransferTMC.vue'
import MyVoucher from '~/components/User/MyVoucher.vue'
import MyNotification from '~/components/User/MyNotification.vue'
import MySetting from '~/components/User/MySetting.vue'
definePageMeta({
    title: 'My Account',
    layout: 'default',
})

onPrehydrate(() => {
const router = useRouter()
const authStore = useAuthStore()
    if (authStore.token) {
        authStore.initializeAuth()
    } else {
        router.push({
            name: 'login'
        })
    }
})

onMounted(() => {
const authStore = useAuthStore()
const router = useRouter()
    if (authStore.token) {
        authStore.initializeAuth()
    }else{
        router.push({
            name: 'login'
        })
    }
})
</script>

<style scoped>
.nav-item {
    padding: 0 2rem;
    color: var(--bs-gray);
}
.border {
    border-radius: 0.5rem;
    /* padding: 2rem; */
}

</style>
