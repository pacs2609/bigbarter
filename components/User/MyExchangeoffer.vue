<template>
<div class="container p-5">
    <p class="fs-4 text-primary mb-4">Exchange Offer</p>
    <div class="row">
        <div class="col-md-12">
            <form class="row g-3 align-items-center flex">
                <div class="col-auto">
                    <VueDatePicker v-model="formData.date" id="date-picker" date-picker placeholder="วันที่ทำรายการ" />
                </div>
                <div class="col-auto">
                    <select class="form-select mx-2" v-model="formData.status">
                        <option value="all" selected>ทั้งหมด</option>
                        <option value="OC">กำลังตรวจสอบข้อเสนอของท่าน</option>
                        <option value="DL">สินค้าที่ท่านต้องจัดส่ง</option>
                        <option value="PC">รอตรวจสอบสินค้าจริง</option>
                        <option value="WOC">โปรดตรวจสอบข้อเสนออีกครั้ง</option>
                        <option value="S">การแลกเปลี่ยนสินค้าสำเร็จ</option>
                        <option value="X">ยกเลิกรายการ</option>
                        <option value="DC">ส่งคืนสินค้า</option>
                    </select>
                </div>
                <div class="col-auto">
                    <button class="search-btn rounded-full mx-2" type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div class="col-auto">
                    <button class="search-btn rounded-full mx-2" type="button" @click="refresh()"><i class="fa-solid fa-rotate-right"></i></button>
                </div>
            </form>
        </div>
        <div class="col-md-12 mt-4" v-for="(item,index) in exchangeData" :key="index">
            <div class="row">
                <div class="col-md-12">
                    <!-- {{ data.date }} -->
                    <div class="card">
                        <div class="card-header p-4">
                            <div class="d-flex justify-content-between flex-grow-1">
                                <span class="d-flex align-items-center gap-2">
                                    <i class="fa-solid fa-arrow-down ico me-2"></i>
                                    <span>นำเสนอสินค้า</span>
                                </span>
                                <span class="d-flex align-items-center gap-2">
                                    <span v-for="currency in item.currencyLists" :key="currency.id" class="d-flex align-items-center gap-2">
                                        <img :src="'/newimg/'+currency.currencyname.toLowerCase()+'.png'" alt="">
                                        <span>{{ formatNumber(currency.amount) }}</span>
                                    </span>
                                </span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center flex-grow-1">
                                <span>Invoice No. {{ item.orderNo }}</span>
                                <Icon icon="icon-park-solid:up-one" class="text-primary" width="20" height="20" />
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <div class="row w-full">
                                <div class="col-md-12">
                                    <p>ชื่อสินค้า</p>
                                </div>
                                <div class="col-md-12">
                                    <p class="fw-300">{{ item.productName }}</p>
                                    <!-- <img :src="item.imgurl" style="max-height: 75px;"> -->

                                </div>
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3 bot-col">Quantity</div>
                                        <div class="col-md-3 bot-col">Date</div>
                                        <div class="col-md-3 bot-col">Total</div>
                                        <div class="col-md-3 bot-col">Status</div>
                                        <div class="col-md-3 bot-col">
                                            <!-- {{ item.quantity }} -->
                                            1
                                        </div>
                                        <div class="col-md-3 bot-col text-primary">
                                            {{ formatDate(item.createdAt) }}
                                        </div>
                                        <div class="col-md-3 bot-col d-flex flex-column">
                                            <span v-for="currency in item.currencyLists" :key="currency.id" class="d-flex align-items-center fs-6 fw-500 gap-2">
                                                {{ formatNumber(currency.amount) }} {{ currency.currencyname }}
                                            </span>
                                        </div>
                                        <div v-if="item.status == 'W'" class="col-md-3 bot-col"><span class="text-purple">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />รอดำเนินการ</span></div>
                                        <div v-if="item.status == 'WO'" class="col-md-3 bot-col"><span class="text-purple">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />กำลังตรวจสอบข้อเสนอของท่าน</span></div>
                                        <div v-if="item.status == 'WS'" class="col-md-3 bot-col"><span class="text-warning">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />สินค้าที่ท่านต้องจัดส่ง</span></div>
                                        <div v-if="item.status == 'WC'" class="col-md-3 bot-col"><span class="text-info">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />รอตรวจสอบสินค้าจริง</span></div>
                                        <div v-if="item.status == 'CS'" class="col-md-3 bot-col"><span class="text-pink">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />โปรดตรวจสอบข้อเสนออีกครั้ง</span></div>
                                        <div v-if="item.status == 'S'" class="col-md-3 bot-col"><span class="text-success">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />ยอมรับข้อเสนอ</span></div>
                                        <div v-if="item.status == 'SX'" class="col-md-3 bot-col"><span class="text-success">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />ยกเลิกต่อลองราคา</span></div>
                                        <div v-if="item.status == 'CX'" class="col-md-3 bot-col"><span class="text-info">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />ส่งคืนสินค้า</span></div>
                                        <div v-if="item.status == 'C'" class="col-md-3 bot-col"><span class="text-danger">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />การแลกเปลี่ยนสินค้าสำเร็จแล้ว</span></div>
                                        <div v-if="item.status == 'X'" class="col-md-3 bot-col"><span class="text-danger">
                                                <Icon icon="icon-park-outline:dot" width="20" height="20" />ยกเลิกรายการ</span></div>
                                    </div>
                                </div>
                                <div v-if="item.bargainBB > 0 && item.status == 'W' || item.bargainTMC > 0 && item.status == 'W'" class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-4 gap-5 flex align-items-center justify-content-center">
                                            <label>หมายเหตุ</label>
                                            <span>{{ item.remark }}</span>
                                        </div>
                                        <div class="col-md-4 flex align-items-center justify-content-center gap-2">
                                            <label>เสนอราคา</label>
                                            <span class="text-primary">{{ formatNumber(item.bargainBB) }} BB </span>
                                            <span class="text-primary">{{ formatNumber(item.bargainTMC) }} TMC </span>
                                        </div>
                                        <div class="col-md-4 flex justify-end gap-3">
                                            <button class="btn btn-secondary opacity-50 px-4" type="button" @click="cancelOrder(item.id)">ยกเลิก</button>
                                            <button class="btn btn-primary px-4" type="button" @click="acceptOrder(item.id,item.status)">ยอมรับ</button>
                                        </div>
                                    </div>
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
} from '@/utils/utils';
import VueDatePicker from '@vuepic/vue-datepicker';
import Swal from 'sweetalert2';
// import '@/assets/css/vuedatepicker.css';

interface Exchange {
    date: string,
    result: dataItem[],
}

interface apiItem {
    code: number;
    result: [
        code: number,
        msg: string
    ]
}

interface dataItem {
    id: number,
        orderNo: string,
        productName: string,
        quantity: number,
        type: string,
        amountBB: number,
        amountTMC: number,
        bargainBB: number,
        bargainTMC: number,
        createdAt: string,
        remark: string,
        status: string,
        currencyLists: [{
            id: number,
            currencyname: string,
            amount: number
        }]
}

const date = ref({
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
});

const authStore = useAuthStore();

const formData = ref < {
    status: string,
    date: string
} > ({
    status: 'all',
    date: new Date(date.value.year, date.value.month, date.value.day).toISOString().split('T')[0]
})

const {
    data: response,
    refresh
} = await useFetch < Exchange[] > ('/api/account/myoffer', {
    body: {
        memberId: authStore.user?.id
    },
    method: 'POST'
});
const exchangeData: dataItem[] = response.value?.result || [];

const cancelOrder = async (id: number) => {
    try {
        const data: apiItem = await $fetch('https://fontapi.bigbarter.net/deleteofferorder/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'BB'
            }
        })
        if (data.code == 200) {
            Swal.fire({
                icon: 'success',
                title: 'ลบรายการสำเร็จ',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                refresh()
            })
        } else {
            console.log(response)
        }
    } catch (error) {
        console.log(error)
    }
}

const acceptOrder = async (id: number, status: string) => {
    try {
        const data: apiItem = await $fetch('https://fontapi.bigbarter.net/sendofferorder/' + id + '/' + status, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'BB'
            }
        })
        if (data.code == 200) {
            Swal.fire({
                icon: 'success',
                title: 'ยอมรับรายการสำเร็จ',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                refresh()
            })
        } else {
            console.log(response)
        }
    } catch (error) {
        console.log(error)
    }
}
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

.bot-col span {
    font-size: 0.75rem;
}

span {
    display: flex;
    align-items: center;
    justify-content: center;
}

option {
    color: #DB4444;
    background-color: #FFF;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 20px 1px 20px;
    font-weight: 400;
    border: 0;
}
</style>
