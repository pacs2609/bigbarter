<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import Explore from '@/components/Home/Explore.vue';
import BestSelling from '@/components/Home/BestSelling.vue';
import Newarrival from '~/components/Home/Newarrival.vue';
import Category from '~/components/Home/Category.vue';

onMounted(() => {
    authStore.initializeAuth();
});

const authStore = useAuthStore();

console.log(authStore.isAuthenticated);
</script>

<template>
<section class="intro">
    <div class="container">
        <div class="row">
            <div class="col-md-4 d-flex justify-content-center align-items-center flex-column">
                <div class="intro-left text-inverse">
                    <h2>Bigbarter&nbsp;</h2>
                    <div>เรามุ่งหวัง ที่จะสร้างสังคมแห่งการแลกเปลี่ยน</div>
                    <div>และแบ่งปัน เราจึงสร้างพื้นที่เล็กๆแห่งนี้<div>ขึ้นมาเพื่อเป็นพื่นที่ให้ทุกๆ คนสามารถเข้ามาใช้เป็น</div>
                        <div>สื่อกลางในการนำสิ่งของ ที่อาจจะไม่ได้ใช้&nbsp;</div>
                        <div>ประโยชน์ นำมาแบ่งปัน ให้กับเพื่อน ๆ&nbsp;</div>
                        <div>ในสังคมได้ใช้ประโยชน์ต่อไปได้ นี่จึงเป็นที่มา</div>
                        <div>ของการพัฒนาแพลตฟอร์ม Bigbarter</div>
                    </div> <br>
                    <br>
                </div>
            </div>

            <div class="col-md-8">
                <div class="row">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active indicators-btn" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-bock w-100" src="/img/img-3831576742838.jpg" alt="bmwbarcelonamotor">
                            </div>
                            <div class="carousel-item">
                                <img class="d-bock w-100" src="/img/img-2271571634650.jpg" alt="พิเศษสุดๆ">
                            </div>
                            <div class="carousel-item">
                                <img class="d-bock w-100" src="/img/img-7801583992133.jpg" alt="บะหมี่แห้งตัวจริง">
                            </div>
                            <div class="carousel-item">
                                <img class="d-bock w-100" src="/img/img-571583984055.jpg" alt="PR">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Explore />
<Category />
<!-- <BestSelling /> -->
<Newarrival />
<div class="container">
    <hr>
</div>
<Concept/>
<div></div>
</template>

