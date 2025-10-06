<template>
    <section class="pages">
        <Breadcrumb :breadcrumb="[{ name: 'ติดต่อเรา', link: '#', isActived: true }]" />
        <div class="container contact ">
            <h2 class="mb-5">ติดต่อเรา</h2>
            <div class="row">
                <div class="col-md-4 mb-2">
                    <div class="border p-5">
                        <p class="d-flex align-items-center gap-4"><img src="/newimg/icons-phone.png" alt=""> <span
                                class="fw-bold">Call To Us</span></p>
                        <p class="fw-500">We are available 24/7, 7 days a week.</p>
                        <p class="fw-500">Phone: 02-046-0372-3 </p>
                        <hr>
                        <p class="d-flex align-items-center gap-4"><img src="/newimg/icons-mail.png" alt=""><span
                                class="fw-bold">Send To US</span></p>
                        <p class="fw-500">บริษัทไทยเจนเนอเรชั่น จำกัด<br>
                            เลขที่ 1000/274 ชั้น 3 อาคารลิเบอร์ตี้พลาซ่า<br>
                            ถนนสุขุมวิท 55(ทองหล่อ)<br>
                            แขวงคลองตันเหนือ
                            เขตวัฒนา กรุงเทพฯ 10110</p>
                    </div>
                </div>
                <div class="col-md-7 mb-2">
                    <div class="border p-5">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" v-model="name" placeholder="Your Name">
                            </div>
                            <div class="col-md-4">
                                <input type="text" v-model="email" placeholder="Your Email">
                            </div>
                            <div class="col-md-4">
                                <input type="text" v-model="phoneNumber" placeholder="Your Phone">
                            </div>
                            <div class="col-md-12">
                                <textarea v-model="message" placeholder="Your Message"></textarea>
                            </div>
                            <div class="col-md-12 d-flex justify-content-end">
                                <button class="btn btn-primary" type="button">Send Massage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'default',
    title: 'ติดต่อเรา'
})
</script>

<style scoped>
.border {
    border-radius: 0.25rem;
    border-color: #dbdbdb !important;
    border-style: solid !important;
    height: 500px;
}

hr {
    color: #000000;
}

input {
    width: 100%;
    background: #ececec;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
}

textarea {
    width: 100%;
    height: 15rem;
    background: #ececec;
    border: 0;
    padding: 0.5rem !important;
    border-radius: 0.25rem;
    margin-top: 2rem;
    resize: none;
    font-size: 1rem;
}

button {
    margin-top: 1rem;
    height: 3rem;
    background: #db4444;
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
}

section {
    padding-top: 1rem;
}
</style>
