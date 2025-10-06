<template>
<section class="page pages exchangeoffer">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'นำเสนอแลกเปลี่ยน', link: '#', isActived: true }]" />
            </div>
            <div class="col-md-12 mt-4 mb-2">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-600"><span class="rectangle"></span>Exchange Offer</p>
                        </div>
                        <div class="col-md-12">
                            <p class="fs-3 fw-600">Product Data</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-12 d-flex justify-content-center align-items-center">
                <form action="" class="w-80">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="productname">ชื่อสินค้า</label>
                                <input v-model="formData.productName" type="text" class="form-control" placeholder="ชื่อสินค้า">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="maincat">หมวดหมู่หลัก</label>
                                <select id="maincat" v-model="formData.categoryId" class="form-control">
                                    <option value="">เลือกหมวดหมู่หลัก</option>
                                    <option v-for="cate in categories" :key='cate.categoryId' :value="cate.categoryId">{{ cate.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="maincat">หมวดหมู่ย่อย</label>
                                <select id="subcat" v-model="formData.categorySubId" class="form-control">
                                    <option value="0">เลือกหมวดหมู่ย่อย</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="image">Upload Picture <span class="mx-2 text-muted">Add your file here, and you can upload up to 5 files max.</span></label>
                                <input v-model="formData.imgurl" type="text" class="form-control" placeholder="Upload Picture">
                                <!-- <input @change="handleFileChange" type="file" class="form-control mt-2" multiple> -->
                                <!-- <FileUpload  v-model="formData.imgDetail" />  -->
                            </div>
                            <div class="form-group">
                                <p class="text-muted">Only support .jpg, png and .svg</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="">รายละเอียดสินค้า</label>
                                <textarea v-model="formData.descripttion" class="form-control" cols="30" rows="10" placeholder="รายละเอียดสินค้า"></textarea>
                            </div>
                        </div>
                        <!-- <div class="col-md-6">
                            <div class="form-group">
                                <label for="">สภาพสินค้า</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input v-model="formData.condition" class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    มือหนึ่ง
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input id="flexRadioDefault2" v-model="formData.condition" class="form-check-input" type="radio" name="flexRadioDefault" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    มือสอง
                                </label>
                            </div>
                        </div> -->
                        <!-- <div class="col-md-6">
                            <div class="form-group">
                                <label for="">จำนวนสินค้า</label>
                                <QuantitySelector :max="1000" :min="1" :width="300" v-model="formData.currentQuantity" @change="handleQuantityChange" />
                            </div>
                        </div> -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">จำนวน BB ที่ต้องการ</label>
                                <input type="hidden" v-model="formData.currencyLists[0].currencyId"/>
                                <input v-model="formData.currencyLists[0].amount" type="number" class="form-control" placeholder="จำนวน BB ที่ต้องการ">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="">จำนวน TMC ที่ต้องการ</label>
                                <input type="hidden" v-model="formData.currencyLists[1].currencyId"/>
                                <input v-model="formData.currencyLists[1].amount" type="number" class="form-control" placeholder="จำนวน BB ที่ต้องการ">
                            </div>
                        </div>
                        <div class="col-md-12 flex justify-end gap-5">
                            <button type="button" class="btn btn-secondary">Cancel</button>
                            <button type="button" class="btn btn-primary" @click="SendData">Sent Data</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2';

definePageMeta({
    layout: 'default',
    title: 'นำเสนอแลกเปลี่ยน'
})

const authStore = useAuthStore();
const router = useRouter();

const currentQuantity = ref(10);
// const handleQuantityChange = (newQuantity: number) => {
//     currentQuantity.value = newQuantity;
// };

interface Category {
    categoryId: number;
    name: string;
}

interface CurrencyItem {
    id: number;
    amount ? : number;
    currencyId: number;
    currencyName: string;
}
interface Currency {
    result: CurrencyItem[];
}

const currencyLists = ref < CurrencyItem[] > ([]);

// console.log(authStore.user.id)
const formData = {
    memberId: authStore.user?.id,
    shopId: 0,
    productName: '',
    categoryId: 0,
    categorySubId: 0,
    imgurl: '',
    imgDetail: [],
    descripttion: '',
    condition: '',
    quantity: 0,
    amountBB: 0,
    amountTMC: 0, // This property is not used in the template
    currencyLists: [
        {
            amount: 0,
            currencyId: 1,
        },
        {
            amount: 0,
            currencyId: 2,
        }
    ]
}

// const handleFileChange = (event: Event) => {
//     const files = (event.target as HTMLInputElement).files;
//     if (files) {
//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 formData.imgDetail.push(e.target?.result as string);
//             };
//             reader.readAsDataURL(file);
//         }
//     }
// }

const SendData = async () => {
    // console.log(formData)
    try {
        const response = await fetch('https://fontapi.bigbarter.net/saveofferordermember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'BB',
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json();
        if (data.code == 200) {
            Swal.fire({
                title: 'Successfully',
                text: data.message,
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#DB4444',
                confirmButtonText: 'OK'
            }).then(() => {
                navigateTo('/user/profile', {
                    replace: true
                })
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: "Something went wrong.",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#DB4444',
                confirmButtonText: 'OK'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const {
    data: currencyData
} = await useFetch < Currency[] > ('https://api.bigbarter.net/currency', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'prefix': 'BB',
    },
    body: {
        pagination: {
            perPage: 1000,
            currentPage: 1,
            totalReccord: 0
        },
        currencyName: "",
        useStatus: "Y"
    }
}) as {
    data: Ref < Currency | null >
};

onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    } else {
        router.push('/login');
    }
})

const {
    data: categories
} = await useFetch < Category[] > ('/api/getCategory');
</script>

<style scoped>
.panel-heading {
    padding: 0.5rem;
}

.image-box {
    width: 100% !important;
    min-height: 300px !important;
}

.form-group {
    margin-bottom: 1rem;
}

/* .form-check-input {
width: 15px !important;
height: 15px !important;
} */

.form-check-input:checked {
    background-color: #DB4444;
    border-color: #DB4444;
    outline: 1px solid #DB4444;
    outline-offset: 0.20rem;
}

.form-check-input:focus {
    border-color: #FF7377;
    outline: 0;
    box-shadow: 0 0 0 .15rem rgba(255, 115, 120, 0.582);
}

.form-check-input:checked[type=radio] {
    background: #DB4444 !important;
    border-color: #DB4444 !important;
}

input[type=number] {
    -moz-appearance: textfield;
    max-width: 400px;
}

label {
    margin-bottom: 1rem;
}

.btn {
    padding: 0.5rem 4rem;
}

.btn-secondary {
    background-color: #FFF;
    color: #333;
    border-radius: 0.25rem;
    border: 0
}

form {
    max-width: 800px;
}
</style>
