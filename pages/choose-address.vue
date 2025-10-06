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
                            <p class="text-primary fw-500"><span class="rectangle"></span>My Address</p>
                        </div>
                        <div class="col-md-12 d-flex justify-content-between align-items-center">
                            <p class="fs-2 fw-400">Choose Address</p>
                            <button class="btn btn-primary" style="padding: 0 15px">Add Address</button>
                        </div>
                    </div>
                </header>
                <div class="col-md-12 mt-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row d-flex">
                                <div class="col-md-10 offset-md-2 border p-4 mb-4">
                                    <p class="d-flex justify-content-between align-items-center"><span>
                                            <Icon icon="ph:map-pin" width="30" height="30" class="text-primary me-2" />สมชาย กล้าหาญ</span>
                                        <span>
                                            <NuxtLink to="/edit-address" class="btn">
                                                <Icon icon="uil:edit" width="24" height="24" />
                                            </NuxtLink>
                                            <NuxtLink class="btn" @click="showConfirmationDialog">
                                                <Icon icon="lucide:trash" width="24" height="24" />
                                            </NuxtLink>
                                        </span>
                                    </p>
                                    <p>
                                        89/348 คอนโดยูดีไลท์ หัวหมาก สเตชั่น ถนนรามคำแหง 24 แขวง
                                        หัวหมาก เขตบางกะปิ กทม 10240
                                    </p>
                                    <p>
                                        088-888-8888
                                    </p>
                                </div>
                                <div class="col-md-10 offset-md-2 border active p-4 mb-4">
                                    <p class="d-flex justify-content-between align-items-center"><span>
                                            <Icon icon="ph:map-pin" width="30" height="30" class="text-primary me-2" />สมชาย กล้าหาญ</span>
                                        <span>
                                            <NuxtLink to="/edit-address" class="btn">
                                                <Icon icon="uil:edit" width="24" height="24" />
                                            </NuxtLink>
                                            <NuxtLink class="btn" @click="showConfirmationDialog">
                                                <Icon icon="lucide:trash" width="24" height="24" />
                                            </NuxtLink>
                                        </span>
                                    </p>
                                    <p>
                                        89/348 คอนโดยูดีไลท์ หัวหมาก สเตชั่น ถนนรามคำแหง 24 แขวง
                                        หัวหมาก เขตบางกะปิ กทม 10240
                                    </p>
                                    <p>
                                        088-888-8888
                                    </p>
                                </div>
                                <div class="col-md-10 offset-md-2 border p-4 mb-4">
                                    <p class="d-flex justify-content-between align-items-center"><span>
                                            <Icon icon="ph:map-pin" width="30" height="30" class="text-primary me-2" />สมชาย กล้าหาญ</span>
                                        <span>
                                            <NuxtLink to="/edit-address" class="btn">
                                                <Icon icon="uil:edit" width="24" height="24" />
                                            </NuxtLink>
                                            <NuxtLink class="btn" @click="showConfirmationDialog">
                                                <Icon icon="lucide:trash" width="24" height="24" />
                                            </NuxtLink>
                                        </span>
                                    </p>
                                    <p>
                                        89/348 คอนโดยูดีไลท์ หัวหมาก สเตชั่น ถนนรามคำแหง 24 แขวง
                                        หัวหมาก เขตบางกะปิ กทม 10240
                                    </p>
                                    <p>
                                        088-888-8888
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import {
    Icon
} from '@iconify/vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import Swal from 'sweetalert2';
import {
    onMounted
} from 'vue';

definePageMeta({
    layout: 'default',
    title: 'ที่อยู่ของฉัน'
})

const authStore = useAuthStore();
onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    } else {
        useRouter().push('/login');
    }
})
const showConfirmationDialog = async () => {

    const result = await Swal.fire({
        title: 'Delete',
        html: `
        The data will be permanently deleted.
        `,
        showCancelButton: true,
        confirmButtonColor: '#DB4444',
        cancelButtonColor: '#636363',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
        // User clicked "Yes"
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicked "No, cancel!" or dismissed the dialog
        Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
        );
    }
};
</script>

<style scoped>
svg {
    color: #DB4444;
}

.border {
    border-radius: 0.5rem;
    border-color: #cccccc
}

.active {
    border-radius: 0.5rem;
    border-color: #DB4444 !important;
}

.btn {
    padding: 0 5px
}
</style>
