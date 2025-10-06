<template>
<section class="page pages edit-address-page">
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <Breadcrumb :breadcrumb="[{ name: 'แก้ไขที่อยู่', link: '#', isActived: true }]" />
            </div>
            <div class="col-md-12">
                <header class="mb-2">
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-primary fw-500"><span class="rectangle"></span>Address</p>
                        </div>
                        <div class="col-md-12 d-flex justify-content-start align-items-center">
                            <p class="fs-2 fw-400">Edit Address</p>
                        </div>
                    </div>
                </header>
            </div>
            <div class="col-md-12 mt-4">
                <div class="row  d-flex justify-content-center align-items-center">
                    <div class="col-md-9 offset-md-3">
                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="name" class="form-label">ชื่อ</label>
                                        <input type="text" class="form-control" id="name" placeholder="ชื่อ" v-model="name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="lastname" class="form-label">นามสกุล</label>
                                        <input type="text" class="form-control" id="lastname" placeholder="นามสกุล" v-model="lastname">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="email" class="form-label">อีเมลล์</label>
                                        <input type="text" class="form-control" id="email" placeholder="อีเมลล์" v-model="email">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="tel" class="form-label">เบอร์โทรศัพท์</label>
                                        <input type="text" class="form-control" id="tel" placeholder="เบอร์โทรศัพท์" v-model="tel">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="address" class="form-label">ที่อยู่</label>
                                        <textarea class="form-control" id="address" rows="3" v-model="address"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-4 d-flex justify-content-end gap-5">
                                    <button type="button" class="btn btn-secondary">Cancel</button>
                                    <button type="button" class="btn btn-primary" @click="SendData">Save Data</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
const authStore = useAuthStore();
definePageMeta({
    layout: 'default',
    title: 'แก้ไขที่อยู่'
})

onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    } else {
        useRouter().push('/login');
    }
})

const formData = reactive({
    name: authStore.user?.firstname,
    lastname: authStore.user?.lastname,
    email: 'dev@dev.com',
    tel: '0888888888',
    address: 'กรุงเทพฯ'
});

const { name, lastname, email, tel, address } = toRefs(formData);


const SendData = () => {
    Swal.fire({
        title: 'Successfully',
        text: "Data sent successfully.",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#DB4444',
        confirmButtonText: 'OK'
    })
}
</script>

<style scoped>
input {
    background: rgba(0, 0, 0, 5%) none repeat scroll 0 0;
    height: 3rem;
    border: 0;
}
textarea {
    background: rgba(0, 0, 0, 5%) none repeat scroll 0 0;
    border: 0;
}

.btn {
    padding: 0.5rem 4rem;
}
.btn-secondary {
    background-color: #FFF;
    color: #333;
    border-radius: 0.25rem;
    border:0
}
</style>
