<template>
<div class="container p-5">
    <p class="fs-4 text-primary mb-4">Edit Your Profile</p>
    <div class="row">
        <div class="col-md-12">
            <div class="avatar" v-if="User">
                <img :src="User.avatar" alt="" class="img-fluid mb-4" />
                <button class="edit-avatar">
                    <Icon icon="iconamoon:edit-fill" width="15" height="15" /></button>
            </div>
        </div>
        <div class="col-md-12">
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="firstname">ชื่อ</label>
                            <input type="text" class="form-control" v-model="formData.firstname" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="lastname">นามสกุล</label>
                            <input type="text" class="form-control" v-model="formData.lastname" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="text" class="form-control" v-model="formData.email" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="phone">เบอร์โทร</label>
                            <input type="text" class="form-control" v-model="formData.phone" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="address">ที่อยู่</label>
                            <textarea cols="30" rows="10" class="form-control" v-model="formData.address"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control mb-2" v-model="formData.currentPassword" placeholder="Current Password"/>
                        <input type="password" class="form-control mb-2" v-model="formData.newPassword" placeholder="New Password">
                        <input type="password" class="form-control mb-2" v-model="formData.confirmPassword" placeholder="Confirm Password">
                      </div>
                    </div>
                    <div class="col-md-12 d-flex justify-end">
                        <button class="btn btn-primary fw-300" type="button">Save Change</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    Icon
} from '@iconify/vue';
interface User {
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    phone: string;
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const authStore = useAuthStore();
const User = authStore.user;
const initialUser: Partial<User> = User || {};

const formData = reactive({
    firstname: initialUser.firstname,
    lastname: initialUser.lastname,
    address: initialUser.address,
    email: initialUser.email,
    phone: initialUser.phone,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
})

</script>

<style scoped>
.img-fluid {
    max-width: 150px;
    object-fit: cover;
    border-radius: 50%;
    height: auto;
}

.edit-avatar {
    position: absolute;
    top: 5%;
    left: 15%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    color: #333;
}

.avatar {
    position: relative;
}
.form-group {
    margin-bottom: 1rem;
}
.form-control {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #ebebeb;
    background-clip: padding-box;
    border: 0;
    border-radius: 0rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    box-shadow: inset 0 0 0 
}
.btn {
    padding: 0.6rem 3rem;
    font-size: 1rem;
    font-weight: 300;
    background-color: #DB4444;
}
</style>
