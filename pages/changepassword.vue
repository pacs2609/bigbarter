<template>
<section class="pages">
    <div class="container">
        <div class="breadcrumb-area mb-3">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <NuxtLink to="/"><i class="fa fa-home"></i> หน้าแรก</NuxtLink>
                        </li>
                        <li class="breadcrumb-item">เปลี่ยนรหัสผ่าน</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="profile-content">
            <div class="panel panel-default">
                <div class="panel-heading d-flex justify-content-center">
                    <span class="fs-5">
                        เปลี่ยนรหัสผ่าน
                    </span>
                </div>
                <div class="panel-body">
                    <form id="changepass-form" action="" autocomplete="off" onsubmit="return false;">
                        <div class="billing-fields row">
                            <br>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <label class="" for="username">รหัสผ่านเก่า<font color="red"> *
                                    </font></label>
                                <input type="text" value="" placeholder="รหัสผ่านเก่า" id="oldpass" name="oldpass" class="form-control" required="" autocomplete="off">
                                <p id="eoldpass" class="help-block err" style="display:none;color:red">*กรุณาใส่
                                    รหัสผ่านเก่า</p>
                                <br>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <label class="" for="newpass">รหัสผ่านใหม่<font color="red"> *
                                    </font></label>
                                <input type="password" value="" placeholder="รหัสผ่านใหม่" id="newpass" name="newpass" @blur="checkPasswordStrength()" class="form-control" required="">
                                <p id="enewpass" class="help-block err" style="display:none;color:red">*กรุณาใส่
                                    รหัสผ่าน</p>
                                <p id="password-strength-status" class="strong-password" style="color: green;">สามารถใช้ได้</p>
                                <br>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <label class="" for="repass">ยืนยันรหัสผ่านใหม่<font color="red">
                                        *</font></label>
                                <input type="password" value="" placeholder="ยืนยันรหัสผ่านใหม่" id="repass" name="repass" @blur="checkPasswordStrength()" class="form-control" required="">
                                <p id="erepass" class="help-block err" style="display:none;color:red">*กรุณาใส่
                                    ยืนยันรหัสผ่านใหม่</p>
                                <br>
                            </div>

                            <div class="col-md-12 col-sm-12 col-xs-12" style="margin-top: 2rem">
                                <center><input type="submit" value="แก้ไขข้อมูล" name="signup" class="btn btn-primary"></center>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
