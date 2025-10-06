<template>
<div class="container p-5">
    <p class="fs-4 text-primary mb-4">Exchange</p>
    <div class="row">
        <div class="col-md-12">
            <form class="row g-3 align-items-center flex">
                <div class="col-auto">
                    <VueDatePicker v-model="formData.date" id="date-picker" date-picker placeholder="วันที่ทำรายการ" />
                </div>
                <div class="col-auto">
                    <select class="form-select mx-2" v-model="formData.status">
                        <option value="all" selected>ทั้งหมด</option>
                        <option value="W">ที่ต้องจัดส่ง</option>
                        <option value="C">จัดส่งแล้ว</option>
                        <option value="S">สำเร็จ</option>
                    </select>
                </div>
                <!-- <div class="col-auto">
                    <button @click="refresh()" class="search-btn rounded-full mx-2" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div> -->
            </form>
        </div>
        <div class="row">
            <div v-for="item in exchangeData?.result" :key="item.id" class="col-md-12 mt-4">
                <div class="card">
                    <div class="card-header p-4">
                        <div class="d-flex justify-content-between flex-grow-1">
                            <span class="d-flex align-items-center gap-2">
                                <i class="fa-solid fa-arrow-up ico me-2"></i>
                                <span>แลกสินค้า</span>
                            </span>
                            <span class="d-flex align-items-center gap-2">
                                <img src="/newimg/bb.png" alt="">
                                <span>{{ formatNumber(item.total) }}</span>
                            </span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center flex-grow-1">
                            <span>Invoice No. {{ item.orderCode }}</span>
                            <Icon icon="icon-park-solid:up-one" class="text-primary" width="20" height="20" />
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <div class="row w-full">
                            <div class="col-md-12">
                                <p>ชื่อสินค้า</p>
                            </div>
                            <div class="col-md-12">
                                <p class="fw-300" v-for="orderLists in item.orderDetailLists" :key="orderLists.id">{{ orderLists.productName }}</p>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-3 bot-col">Quantity</div>
                                    <div class="col-md-3 bot-col">Type</div>
                                    <div class="col-md-3 bot-col">Total</div>
                                    <div class="col-md-3 bot-col">Status</div>
                                    <div class="col-md-3 bot-col">{{ item.quantity }}</div>
                                    <div class="col-md-3 bot-col text-primary">{{ item.type }}</div>
                                    <div class="col-md-3 bot-col">{{formatNumber(item.total)}}</div>
                                    <div v-if="item.status == 'W'" class="col-md-3 bot-col"><span class="text-warning">
                                            <Icon icon="icon-park-outline:dot" width="20" height="20" />ที่ต้องจัดส่ง</span></div>
                                    <div v-if="item.status == 'C'" class="col-md-3 bot-col"><span class="text-info">
                                            <Icon icon="icon-park-outline:dot" width="20" height="20" />จัดส่งแล้ว</span></div>
                                    <div v-if="item.status == 'X'" class="col-md-3 bot-col"><span class="text-danger">
                                            <Icon icon="icon-park-outline:dot" width="20" height="20" />ยกเลิก</span></div>
                                    <div v-if="item.status == 'S'" class="col-md-3 bot-col"><span class="text-success">
                                            <Icon icon="icon-park-outline:dot" width="20" height="20" />สำเร็จ</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    ref
} from 'vue';
import {
    Icon
} from '@iconify/vue';
import {
    formatNumber
} from '#imports';
import VueDatePicker from '@vuepic/vue-datepicker';
// import '@/assets/css/vuedatepicker.css';
import '@vuepic/vue-datepicker/dist/main.css';
const authStore = useAuthStore();

interface Exchange {
    date: string,
        datalist: dataItem[],
}

interface dataItem {
    id: number,
        invoiceNo: number,
        orderCode: string,
        productName: string,
        orderDetailLists: [],
        quantity: number,
        type: string,
        total: number,
        createdAt: string,
        updatedAt: string,
        status: string
}

const date = ref({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
});

const formData = ref({
    pagination: {
        perPage: 1000,
        currentPage: 1,
        totalReccord: 0
    },
    date: new Date(date.value.year, date.value.month, date.value.day).toISOString().split('T')[0],
    memberId: authStore.user?.id,
    ordercode: "",
    status: "W"
})

const {
    data: exchangeData
} = await useFetch < Exchange[] > (
    import.meta.env.VITE_API_URL + '/getordermember', {
        method: 'POST',
        body: formData.value,
        headers: {
            'Content-Type': 'application/json',
            'prefix': 'BB'
        }
    });
</script>

<style scoped>
.search-btn {
    background-color: #DB4444;
    border: 0;
    color: #FFF;
    padding: 0.7rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
}

.ico {
    background-color: #DB4444;
    color: #FFF;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.card-header {
    border-bottom: solid 2px #DB4444;
    background-color: #FFF;
    border-radius: 1rem 1rem 0 0;
}

.card {
    border: solid 2px #DB4444;
    border-radius: 1rem;
}

.bot-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
