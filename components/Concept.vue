<template>
<section class="concept">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-3 offset-md-1 services">
                <img src="/newimg/Services.png" alt="">
                <p class="fw-800 mt-4">FAST DELIVERY</p>
                <p>Free delivery for all orders over $140</p>
            </div>
            <div class="col-md-3 services">
                <img src="/newimg/24_7service.png" alt="">
                <p class="fw-800 mt-4">24/7 CUSTOMER SERVICE</p>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div class="col-md-3 inset-md-1 services">
                <img src="/newimg/payment.png" alt="">
                <p class="fw-800 mt-4">Secure Payment</p>
                <p>Safe and diverse exchange</p>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.concept {
    padding-top: 5rem;
    padding-bottom: 7rem;
}
.services {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
</style>