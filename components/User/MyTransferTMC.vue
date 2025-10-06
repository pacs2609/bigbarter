<template>
<div class="container p-3">
    <div class="row">
        <div class="col-md-12 d-flex justify-between">
            <span class="d-flex gap-3">
                <img src="/newimg/tmc.png">
                <span class="fw-500 fs-4 text-primary">{{ formatNumber(data.tmccoin) }}</span>
            </span>
            <span>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#transferModal"><i class="fa-solid fa-rotate"></i> Transfer TMC</button>
            </span>
        </div>
        <div class="col-md-12">
            <hr>
        </div>
        <div class="col-md-12">
            <p class="text-primary w-100">Wallet ID: {{ data.uid }} <button class="btn btn-sm border-0"><i class="fa-solid fa-copy" @click="copyToClipboard(data.uid)"></i></button></p>
        </div>
        <div class="col-md-12 d-flex align-items-center gap-3">
            <span>Transfer List</span>
            <input type="text" class="form-control" placeholder="Search" style="max-width: 250px;">
            <a class="btn search-btn"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
        <div class="col-md-12 table-responsive">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th class="text-muted text-center">วันที่ทำรายการ</th>
                        <th class="text-muted text-center">เลขที่รายการ</th>
                        <th class="text-muted text-center" width="40%">กระเป๋าปลายทาง</th>
                        <th class="text-muted text-end">จำนวน TMC</th>
                        <th class="text-muted text-center">สถานะ</th>
                        <th class="text-muted text-end">ยกเลิกรายการ</th>
                    </tr>
                </thead>
                <tbody v-if="data.transferList && data.transferList.length > 0">
                    <tr v-for="(item,index) in data.transferList" :key="index">
                        <td class="text-center fs-8">{{ formatDate(item.date) }}</td>
                        <td class="text-center fs-8">{{ item.transferinvoice }}</td>
                        <td class="text-center fs-8">{{ item.transferto }}</td>
                        <td class="text-end">{{ formatNumber(item.amount) }}</td>
                        <td class="text-center">
                            <span v-if="item.status == 'X'" class="fs-8 text-danger">ยกเลิกรายการ</span>
                            <span v-if="item.status == 'S'" class="fs-8 text-success">สำเร็จ</span>
                            <span v-if="item.status == 'W'" class="fs-8 text-purple">รอดำเนินการ</span>
                        </td>
                        <td class="text-end d-flex gap-2"><button class="btn btn-sm btn-danger" @click="cancelTransfer(item.id, item.memberId)">ยกเลิก<i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4">ไม่มีรายการ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="transferModal" tabindex="-1" aria-labelledby="transferModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <p class="modal-title fs-2" id="transferModalLabel">Transfer TMC</p>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card p-3">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="/newimg/tmcx95.png" style="width: 75px;">
                        </div>
                        <div class="col-md-9 d-flex flex-col">
                            <span>กระเป๋าต้นทาง</span>
                            <span class="fs-6 fw-300">Wallet ID: <span class="fs-7">{{ data.uid }}</span></span>
                            <span class="text-primary fs-5">{{data.tmccoin}} TMC</span>
                        </div>
                        <div class="col-md-9 offset-md-3 d-flex align-items-end justify-end">
                            <span class="text-muted fs-7 d-flex gap-2 align-items-center">
                                <Icon icon="fa6-solid:rotate" width="12" height="12" />ข้อมูล ณ เวลา {{ currentDate.getHours() + ' ' + currentDate.getMinutes() }} น.</span>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 p-3">
                    <div class="col-md-12">
                        <p>กระเป๋าปลายทาง</p>
                        <input v-model="formTransfer.uid" type="text" class="form-control tmc-input text-end" placeholder="ระบุกระเป๋าปลายทาง">
                    </div>
                    <div class="col-md-12">
                        <p>จำนวน</p>
                        <div class="input-group mb-3">
                            <input v-model="formTransfer.currencyLists[0].amount" type="text" class="form-control tmc-input-value text-end" aria-label="จำนวน TMC" placeholder="จำนวน TMC">
                            <span class="input-group-text">TMC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-transparent" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary btn-transfer" @click="transferTMC">Transfer</button>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    formatNumber,
} from '@/utils/utils';
import {
    Icon
} from '@iconify/vue';
import Swal from 'sweetalert2';
const currentDate = new Date();
const authStore = useAuthStore()
const dateNow = ref(new Date().toISOString());
onMounted(() => {
    const router = useRouter()
    if (!authStore.token) {
        router.push({
            name: 'login'
        })
    } else {
        authStore.initializeAuth();
        getMemberData();
        getTransferList();
    }
})
const data = ref({
    uid: authStore.user?.uid, // Initialize uid
    transferList: [] as any[], // Initialize transferList as an empty array
    tmccoin: 0, // Initialize tmccoin
});

const formTransfer = {
    transferinfodate: dateNow.value,
    memberId: authStore.user?.id,
    memberusername: authStore.user?.username,
    uid: "0f92e55ea907be221acf054a4fbd5668b3c1cf427ad4b9e042",
    remark: "",
    currencyLists: [{
        currencyId: 2,
        amount: 0
    }]
}

const transferTMC = async () => {
    try {
        const result = await $fetch('https://fontapi.bigbarter.net/savetransordermember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'bb'
            },
            body: formTransfer
        }).then(res => {
            getMemberData();
            getTransferList();
            showSuccessModal();
        })
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const cancelTransfer = async (id:number, memberId:number) => {


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DB4444',
        cancelButtonColor: '#CCCCCC',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteTransfer(id, memberId);
        }
    })
}

const deleteTransfer = async (id:number, memberId:number) => {

    try {
        const result = await $fetch('https://fontapi.bigbarter.net/deletetransordermember/'+ id +'/'+ memberId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'bb'
            }
        }).then(res => {
                    getMemberData();
                    getTransferList();
                    Swal.fire({
                    title: 'Successfully',
                    icon: 'success',
                    text: 'Cancel transfer successfully.',
                    timer: 2000,
                    showConfirmButton: true
            })
        })
    } catch (error) {
        console.log(error);
    }
}


const getMemberData = async () => {
    try {
        const res = await $fetch('https://fontapi.bigbarter.net/member/profile/'+authStore.user?.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'bb'
            },
            body: {
                memberId: authStore.user?.id
            }
        })
        data.value.tmccoin = res.result.currencyLists[1].amount;
    } catch (error) {
        console.log(error);
    }
}

const getTransferList = async () => {
    try {
        const res = await $fetch('https://fontapi.bigbarter.net/gettransordermember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'bb'
            },
            body: {
                pagination: {
                    perPage: 1000,
                    currentPage: 1,
                    totalReccord: 0
                },
                memberId: authStore.user?.id
            }
        })
        data.value.transferList = res.result.map((item: any) => {
            return {
                date: item.transferinfodate,
                transferto: item.uid,
                status: item.status,
                transferinvoice: item.transOrdercode,
                amount: item.currencyLists[0].amount,
                id: item.currencyLists[0].id,
                memberId: item.memberId
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
        title: 'Copied!',
        icon: 'success',
        text: 'Wallet ID copied to clipboard.',
        timer: 2000,
        showConfirmButton: false
    })
}


const showSuccessModal = () => {
    Swal.fire({
        title: 'Successfully',
        icon: 'success',
        text: 'Transfer TMC successfully.',
        timer: 2000,
        showConfirmButton: false
    })

    closeModal()

}
const closeModal = () => {
    const modalElement = document.getElementById('transferModal');
    if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
            modal.hide();
        }
    }
};
</script>

<style scoped>
.search-btn {
    background-color: #DB4444;
    border: 0;
    color: #FFF !important;
    padding: 0.7rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
}

td {
    padding: 0.75rem !important;
    border: 0;
}

.tmc-input {
    background-color: transparent;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    font-size: 1rem;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.tmc-input-value {
    background-color: transparent;
    color: #DB4444;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    font-size: 1.5rem;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.tmc-input-value::placeholder {
    font-size: 1rem;
    display: flex;
    align-items: end;
}

.modal-header {
    border-bottom: 0;
}

.card {
    background-color: #f5f5f5;
    border: 0;
    border-radius: 0.5rem;
}

.input-group-text {
    display: flex;
    align-items: end;
    /* padding: .375rem .75rem; */
    font-size: 1rem;
    font-weight: 400;
    color: #DB4444;
    text-align: center;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    border-bottom: solid 1px #cccccc;
    border-radius: 0;
    margin-bottom: 1.5rem;
}

.btn-transfer {
    padding: 0.75rem 4rem;
    margin-left: 1rem;
}

.modal-footer {
    border-top: 0;
}
</style>
