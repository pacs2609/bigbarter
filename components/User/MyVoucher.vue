<template>
<div class="container p-5">
    <div class="row">
        <div class="col-md-12 d-flex justify-between mb-4">
            <span class="d-flex gap-3">
                <span class="fw-400 fs-4 text-primary">Voucher List</span>
            </span>
        </div>
        <div class="row">
            <div v-for="voucher in voucherData" :key="voucher.id" class="col-md-12 d-flex align-items-center mb-4 gap-3 voucher-box">
                <div class="row w-full">
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <img src="/newimg/voucher.png" alt="">
                    </div>
                    <div class="col-md-6">
                        <p>Voucher Code : {{voucher.voucherCode}}</p>
                        <p class="text-primary fw-400" v-if="voucher.amountBB > 0">ส่วนลด {{voucher.amountBB}} BB</p>
                        <p class="text-primary fw-400" v-if="voucher.amountTMC > 0">ส่วนลด {{voucher.amountTMC}} TMC</p>
                        <p class="text-muted fs-7">ใช้ได้ถึง {{ formatDate(voucher.enddate) }}</p>
                    </div>
                    <div class="col-md-3 d-flex justify-end ">
                        <Icon icon="solar:copy-linear" width="24" height="24" class="text-primary cursor-pointer mt-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    formatNumber
} from '@/utils/utils';
import {
    Icon
} from '@iconify/vue';
const authStore = useAuthStore()



interface Voucher {
    id: number,
    memberId: number,
    voucherCode: string,
    descripttion: string,
    amountBB: number,
    amountTMC: number,
    voucherType: string,
    usestatus: string,
    startdate: string,
    enddate: string,
    createdat: string,
    updatedat: string,
}

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();
// console.log(day, month, year);

onMounted(() => {
    const router = useRouter()
    if (!authStore.token) {
        router.push({
            name: 'login'
        })
    }
})

const {
    data: apiData
} = await useFetch < Voucher[] > (import.meta.env.VITE_API_URL +'/member/voucher',{
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

});

const voucherData = apiData.value?.result
</script>

<style scoped>
.voucher-box {
    padding: 1rem 1rem;
    border: solid 2px #DB4444;
    border-radius: 0.5rem;
}
</style>
