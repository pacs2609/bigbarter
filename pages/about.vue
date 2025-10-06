<template>
    <section class="pages">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-5">
                    <Breadcrumb v-model:breadcrumb="_breadcrumbList" />
                </div>
                <div class="col-md-6 align-items-center">

                    <h1 class="mb-5">Our Story</h1>
                    <p class="fs-5 fw-500 mb-4">เรามุ่งหวังที่จะสร้างสังคมแห่งการแลกเปลี่ยนและแบ่งปัน</p>
                    <p>
                        BB BigBarter เปิดตัวในปี 2015 เป็นพื้นที่แลกเปลี่ยนและแบ่งปันสินค้าออนไลน์ ในประเทศ ให้ทุกๆ
                        คนเข้ามาใช้เป็นสื่อกลาง ในการนำสิ่งของที่อาจจะไม่ได้ใช้ประโยชน์
                        นำมาแบ่งปันให้กับเพื่อนๆ สมาชิกได้นำไปใช้ประโยชน์ต่อไปได้ จึงเป็นที่มาของการ พัฒนาเว็บไซต์
                        <span class="text-primary fw-bold">www.BigBarter.com</span>
                    </p>
                    <p>
                        โดยมุ่งหวังให้เป็นเครื่องมือในการแลกเปลี่ยนสินค้าที่น่าเชื่อถือ ซึ่งสามารถทำงานได้
                        จนจบกระบวนการ ตั้งแต่การนำเสนอสินค้า การตกลงแลกเปลี่ยนสินค้า
                        จนถึงระบบการจัดส่งสินค้าให้ถึงมือผู้รับอย่างมีประสิทธิภาพ
                    </p>
                    <p>
                        BB BigBarter มีผลิตภัณฑ์ให้เลือกมากกว่า 1 ล้านรายการและเติบโตอย่างรวดเร็ว นำเสนอผลิตภัณฑ์
                        หมวดหมู่สินค้าให้เลือกหลากหลาย
                    </p>
                </div>
                <div class="col-md-6">
                    <div class="image-container"><img src="/newimg/ourstory.png" alt="Our Story" class="img-responsive"></div>
                </div>
            </div>
            <hr class="mb-5 mt-5">
            <div class="container">
                <div class="row p-5">
                    <div class="col-md-12 text-center">
                        <h2 class="fw-500 underline">สิ่งที่ทำให้เราแตกต่าง</h2>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3 subject-line">
                                <img src="/newimg/about_security.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-3 subject-line justify-content-center">
                                <p class="fw-700">ควาามปลอดภัย</p>
                            </div>
                            <div class="col-md-5 subject-line justify-content-start">
                                <p>www.BigBarter เป็นคนกลางแลกเปลี่ยน ปราศจากความเสี่ยง 100%</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3 subject-line">
                                <img src="/newimg/about_recycle.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-3 subject-line justify-content-center">
                                <p class="fw-700">การนำกลับมาใช้ใหม่</p>
                            </div>
                            <div class="col-md-5 subject-line justify-content-start">
                                <p>นำสิ่งของที่ไม่ได้ใช้ประโยชน์แล้ว มาแลกเปลี่ยนเป็นสิ่งของที่ต้องการกับ
                                    BigBarter</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3 subject-line">
                                <img src="/newimg/about_nocash.png" class="img-fluid" alt="">
                            </div>
                            <div class="col-md-3 subject-line justify-content-center">
                                <p class="fw-700">ปราศจากเงินสด</p>
                            </div>
                            <div class="col-md-5 subject-line justify-content-start">
                                <p>เพียงนำสิ่งของที่ไม่ได้ใช้ มาแลกเป็นแต้ม BG ท่านก็สามารถใช้คะแนน BG
                                    แทนเงิน เลือกซื้อสินค้าใน BigBarter ได้ทันที</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <Concept/>
        </div>
    </section>
</template>

<script lang="ts" setup>
const _breadcrumbList = ref([
    {
        name: 'เกี่ยวกับเรา',
        link: '/about',
        isActived: true
    }
])

definePageMeta({
    layout: 'default'
})
</script>
<style scoped>
.image-container {
    text-align: center;
    padding: 1.5rem 0rem 1.5rem 0rem;
    background-color: #ff7377;
}

hr {
    color: #808080;
}

.img-fluid {
    width: 100%;
    max-width: 100px !important;
}

.col-md-12 {
    margin-bottom: 1.5rem;
}

.subject-line {
    display: flex;
    align-items: center;
    justify-content: end;
}
.subject-line p {
    margin-left: 1rem;
    font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
    .subject-line {
        flex-direction: column;
    }
    .subject-line p {
        margin-left: 0rem;
        margin-top: 1rem;
    }
}
</style>