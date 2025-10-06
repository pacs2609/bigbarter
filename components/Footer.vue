<template>
<footer>
    <div class="container">
        <div class="row text-white">
            <div class="col-md-3">
                <h4 class="mb-4">Exclusive</h4>
                <template v-if="authStore.isAuthenticated">
                    <a href="#">Open TMC Wallet</a>
                </template>
                <template v-else>
                    <h5 class="mb-4">Subscribe</h5>
                    <p>Get 10% off your first order</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2">
                        <button class="btn" type="button" id="button-addon2">
                            <Icon icon="majesticons:send-line" width="24" height="24" />
                        </button>
                    </div>
                </template>
            </div>
            <div class="col-md-2">
                <h4 class="mb-4">Support</h4>
                <p style="font-size: 0.85rem;">
                    บริษัท ไทยเจนเนเรชั่น จำกัด
                    1000/274 ชั้น 3 อาคารลิเบอร์ตี้พลาซ่า
                    ถ.สุขุมวิท55 (ทองหล่อ)
                    แขวงคลองตัน เขตวัฒนา
                    กรุงเทพฯ 10110
                </p>
                <p>bartergang@tgen.co.th</p>
                <p>02-046-0372-3</p>
            </div>
            <div class="col-md-2">
                <h4 class="mb-4">Account</h4>
                <p><a href="#">My Account</a></p>
                <p><a href="#">Login / Register</a></p>
                <p><a href="#">Cart</a></p>
                <p><a href="#">Wishlist</a></p>
                <p><a href="#">Shop</a></p>
            </div>
            <div class="col-md-2">
                <h4 class="mb-4">Quick Link</h4>
                <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Terms Of Use</a></p>
                <p><a href="#">FAQ</a></p>
                <p><a href="#">Contact</a></p>
            </div>
            <div class="col-md-3">
                <h4 class="mb-4">Download App</h4>
                <p style="font-size: 0.85rem;">Save $3 with App New User Only</p>
                <img src="../public/newimg/qrcode.png" alt="">
                <div class="row mt-2">
                    <div class="col-md-2">
                        <Icon icon="fa6-brands:facebook-f" />
                    </div>
                    <div class="col-md-2">
                        <Icon icon="fa6-brands:x-twitter" />
                    </div>
                    <div class="col-md-2">
                        <Icon icon="fa6-brands:instagram" />
                    </div>
                    <div class="col-md-2">
                        <Icon icon="fa6-brands:linkedin-in" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script setup>
import {
    Icon
} from "@iconify/vue";

const authStore = useAuthStore();
console.log(authStore.isAuthenticated);
</script>

<style scoped>
input {
    background-color: #000;
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
    border-right: 0;
    border-bottom: solid 1px #fff;
    color: #fff;
    width: 200px;
}

a {
    color: #fff;
    text-decoration: none;
}

button {
    border: solid 1px #fff;
    border-left: 0;
    background-color: #000;
    color: #fff;
}

footer {
    background-color: #000;
    padding-bottom: 5rem;
    padding-top: 5rem;
}
</style>
