<template>
<div>
    <header>
        <nav class="navbar navbar-default fixed-top">
            <section class="container d-block d-sm-none">
                <section class="d-flex justify-content-between top-xs">
                    <div class="top-xs-welcome">
                        <NuxtLink to="/#"> </NuxtLink>
                    </div>
                    <div class="top-xs-welcome">
                        <NuxtLink to="/notice" class="notification">
                            <span><i class="fa fa-bell" aria-hidden="true"></i></span>
                            <span style="top:-2px; right:-2px;" class="notice_cnt">0</span>
                        </NuxtLink>
                    </div>
                    <div class="top-xs-bg">
                        <NuxtLink to="/#"><i class="fa fa-rouble"></i> 0 BG</NuxtLink>
                    </div>
                    <div class="top-xs-cart">
                        <NuxtLink to="cart"><i class="fa fa-cart"></i>
                            <span class="title-cart"> ตระกร้าของฉัน</span>
                            <span class="count-item">0 รายการ</span>
                            <span class="price"><b></b></span>
                        </NuxtLink>
                    </div>
                </section>
                <div class="navbar-header d-flex justify-content-between align-items-center w-100 py-2">
                    <NuxtLink class="navbar-brand" to="/"><img class="logo" :src="bbLogo"></NuxtLink>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>

                <div class="navbar-collapse collapse" id="collapseExample" style="height: 1px;">
                    <div class="input-group stylish-input-group mt-2 mb-2 p-2">
                        <input type="text" name="kw" placeholder="ค้นหา..." value="" class="form-control" style="width: 80%;">
                        <span class="input-group-addon d-flex align-items-center">
                            <button class="btn-xs btn-nav-search" style="background: #fff !important;color:#333;"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                    <ul class="nav navbar-nav menu">
                        <li>
                            <NuxtLink to="/"><i class="fa fa-home"></i></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./products">รายการสินค้า</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./shop">ร้านค้า</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./about">เกี่ยวกับเรา</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./contact">ติดต่อเรา</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./howtouse">วีดีโอ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="./exchangeoffer">นำเสนอแลกเปลี่ยน</NuxtLink>
                        </li>
                        <template v-if="authStore.isAuthenticated">
                            {{ authStore.user?.firstname }} {{ authStore.user?.lastname }}
                        </template>
                        <template v-else>
                            <li class="dropdown visible-xs hidden-lg">
                                <NuxtLink to="/#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">สมาชิก <span class="caret"></span>
                                </NuxtLink>
                                <ul class="dropdown-menu">
                                    <li>
                                        <NuxtLink to="./login">เข้าสู่ระบบ</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="./register">สมัครสมาชิก</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                        </template>
                    </ul>
                </div>
            </section>
            <section class="top d-none d-sm-block w-100">
                <div class="container header-top-area">
                    <div class="row d-flex justify-content-between">
                        <div class="col-md-3 col-xs-12">
                            <div class="header-top-left">
                                <span class="text-white fs-7 me-2"><i class="fa-solid fa-headphones fa-lg"></i></span>
                                <NuxtLink to="tel:02-046-0372-3" class="fs-7">02-046-0372-3</NuxtLink>
                            </div>
                        </div>

                        <div class="col-md-9 col-xs-12 d-flex justify-content-end align-items-center gap-2">
                            <div class="dropdown">
                                <button class="btn btn-lang dropdown-toggle d-flex align-items-center gap-1" type="button" id="currency" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="px-1">THB</span>
                                    <Icon icon="hugeicons:exchange-01" width="20" height="20" />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="currency">
                                    <li><a class="dropdown-item text-primary" href="#">THB</a></li>
                                    <li><a class="dropdown-item text-primary" href="#">USD</a></li>
                                </ul>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-lang dropdown-toggle d-flex align-items-center gap-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="px-1">TH</span>
                                    <Icon icon="streamline-plump:web" width="20" height="20" />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item text-primary" href="#">TH</a></li>
                                    <li><a class="dropdown-item text-primary" href="#">EN</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container d-none d-sm-block">
                <div class="row d-flex align-items-center w-100 py-3">
                    <div class="col-md-1">
                        <div class="navbar-header">
                            <NuxtLink class="navbar-brand" to="/"><img class="logo" :src="bbLogo">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-center align-items-center ml-auto gap-3">
                            <NuxtLink class="nav-btn fs-6 me-4" to="/">Home</NuxtLink>
                            <NuxtLink class="nav-btn fs-6 me-4" to="./products">สินค้า</NuxtLink>
                            <NuxtLink class="nav-btn fs-6 me-4" to="./shop">ร้านค้า</NuxtLink>
                            <NuxtLink class="nav-btn fs-6 me-4" to="./exchangeoffer">นำเสนอแลกเปลี่ยน</NuxtLink>
                            <NuxtLink class="nav-btn fs-6 me-4" to="./about">เกี่ยวกับเรา</NuxtLink>
                            <NuxtLink class="nav-btn fs-6 me-4" to="./contact">ติดต่อเรา</NuxtLink>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="input-group stylish-input-group">
                            <input type="text" name="kw" placeholder="ค้นหา..." value="" class="form-control" autocomplete="off" style="max-width: 180px;background-color: #fff !important;">
                            <span class="input-group-addon d-flex align-items-center">
                                <button class="btn-xs btn-nav-search" style="background: #fff !important;color:#333;"><Icon class="text-primary" icon="ph:magnifying-glass" width="20" height="20" /></button>
                            </span>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <template v-if="authStore.isAuthenticated">
                            <div class="d-flex justify-content-end align-items-center">
                                <NuxtLink to="./favourite"><Icon class="text-white me-2" icon="solar:heart-linear" width="24" height="24" /></NuxtLink>
                                <NuxtLink to="./cart"><Icon class="text-white me-2" icon="famicons:cart-outline" width="24" height="24" /></NuxtLink>
                                <Icon class="text-white me-2" icon="mdi-light:bell" width="24" height="24" />
                                <NuxtLink to="user/profile">
                                    <BaseAvatar :src="authStore.user?.avatar" alt="Jane Doe"/>
                                </NuxtLink>
                            </div>
                        </template>
                        <template v-else>
                            <div class="d-flex justify-content-end align-items-center">
                                <NuxtLink class="nav-btn fs-6" to="./login"><i class="fa-solid fa-lock"></i> Login
                                </NuxtLink>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <slot />
        <BackToTop/>
    </main>
    <Footer />
</div>
</template>

<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import {
    Icon
} from '@iconify/vue';
import bbLogo from '~/assets/images/newimg/bblogo.png';
import {
    useAuthStore
} from '~/stores/auth';
const authStore = useAuthStore();
onMounted(() => {
    if (authStore.token != null) {
        useAuthStore().initializeAuth();
    }
});

</script>

<style scoped>
.dropdown-menu>li>a {
    display: block;
    /* padding: 3px 20px; */
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}

.dropdown-menu>li>a:hover {
    border-radius: 0.5rem;
    background-color: #ff737817;
}

.dropdown-menu {
    min-width: 1rem !important;
    border-color: #FF7377;
    text-align: center;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0 !important;
    border-right: 0 !important;
    border-bottom: 0;
    border-left: 0 !important;
}

.btn-lang {
    background: transparent;
    color: #FFF;
}
</style>
