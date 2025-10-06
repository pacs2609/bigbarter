<template>
<section class="pages">
    <div class="breadcrumb-area mb-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <NuxtLink to="/"><i class="fa fa-home"></i> หน้าแรก</NuxtLink>
                    </li>
                    <li class="breadcrumb-item">บัญชีของฉัน</li>
                </ol>
            </nav>
        </div>
    </div>
    <section class="profile">
        <div class="container">
            <div class="row">
                <div class="d-flex align-items-start col-md-3">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <li class="tab-btn main-tab active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true"><i class="fa fa-user"></i>
                            บัญชีของฉัน</li>
                        <li class="tab-btn sub-tab" id="v-pills-changepass-tab" data-bs-toggle="pill" data-bs-target="#v-pills-changepass" type="button" role="tab" aria-controls="v-pills-changepass" aria-selected="false">เปลี่ยนรหัสผ่าน</li>
                        <li class="tab-btn sub-tab " id="v-pills-my-bg-tab" data-bs-toggle="pill" data-bs-target="#v-pills-my-bg" type="button" role="tab" aria-controls="v-pills-my-bg" aria-selected="false">BG ของฉัน</li>
                        <li class="tab-btn main-tab" id="v-pills-create-exchange-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-exchange" type="button" role="tab" aria-controls="v-pills-create-exchange" aria-selected="false"><i class="fa fa-exchange"></i> นำเสนอแลกเปลี่ยน</li>
                        <li class="tab-btn sub-tab" id="v-pills-history-exchange-item-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history-exchange-item" type="button" role="tab" aria-controls="v-pills-history-exchange-item" aria-selected="false">ประวัติแลกของ</li>
                        <li class="tab-btn sub-tab" id="v-pills-history-exchange-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history-exchange" type="button" role="tab" aria-controls="v-pills-history-exchange" aria-selected="false">
                            ประวัติการนำเสนอแลกเปลี่ยน</li>
                        <li class="tab-btn main-tab" id="v-pills-voucher-tab" data-bs-toggle="pill" data-bs-target="#v-pills-voucher" type="button" role="tab" aria-controls="v-pills-voucher" aria-selected="false"><i class="fa fa-tags"></i>Voucher
                        </li>
                        <li class="tab-btn main-tab" id="v-pills-alert-tab" data-bs-toggle="pill" data-bs-target="#v-pills-alert" type="button" role="tab" aria-controls="v-pills-alert" aria-selected="false"><i class="fa fa-bell"></i> การแจ้งเตือน</li>
                    </div>
                </div>
                <div class="tab-content col-md-9" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <div class="profile-content">
                            <div class="panel panel-default">
                                <div class="panel-heading"> บัญชีของ {{ authStore.user?.firstname }} {{ authStore.user?.lastname }} </div>
                                <div class="panel-body">
                                    <div class="billing-fields row">
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label for="firstname">ชื่อ<font color="red"> *</font></label>
                                            <input type="text" name="firstname" id="firstname" placeholder="ชื่อ " v-model="FormProfile.firstname" class="form-control">
                                            <p id="efirstname" class="help-block err" style="display:none;color:red">*กรุณาใส่ ชื่อ</p>
                                            <br>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label for="lastname">นามสกุล<font color="red"> *</font></label>
                                            <input type="text" name="lastname" id="lastname" v-model="FormProfile.lastname" placeholder="นามสกุล" class="form-control">
                                            <p id="elastname" class="help-block err" style="display:none;color:red"> *กรุณาใส่ นามสกุล</p>
                                            <br>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label class="" for="username">Username<font color="red"> *</font> </label>
                                            <input type="text" placeholder="Username" id="username" name="username" v-model="FormProfile.username" class="form-control mydata" readonly>
                                            <p id="eusername" class="help-block err" style="display:none;color:red"> *กรุณาใส่ Username</p>
                                            <br>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label for="email">อีเมลล์<font color="red"> *</font></label>
                                            <input type="text" name="email" id="email" v-model="FormProfile.email" placeholder="อีเมลล์" class="form-control mydata" readonly>
                                            <p id="eemail" class="help-block err" style="display:none;color:red"> *กรุณาใส่ อีเมลล์</p>
                                            <br>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label for="tel">เบอร์โทรศัพท์<font color="red"> *</font></label>
                                            <input type="text" name="tel" id="tel" v-model="FormProfile.tel" placeholder="เบอร์โทรศัพท์" class="form-control">
                                            <p id="etel" class="help-block err" style="display:none;color:red"> *กรุณาใส่ เบอร์โทรศัพท์</p>
                                            <br>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                            <label class="" for="line">Line ID</label>
                                            <input type="text" value="lineid" placeholder="Line ID" id="line" name="line" class="form-control mydata">
                                            <br>
                                        </div>

                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <label for="address">ที่อยุ่<font color="red"> *</font></label>
                                            <textarea name="address" id="address" cols="30" rows="5" placeholder="ที่อยู่" v-model="FormProfile.address" class=""></textarea>
                                            <p id="eaddress" class="help-block err" style="display:none;color:red">
                                                *กรุณาใส่ ที่อยุ่</p>
                                            <br>
                                            <br>
                                        </div>

                                        <div class="col-md-12 col-sm-12 col-xs-12">
                                            <center><input type="button" value="แก้ไขข้อมูล" name="signup" class="btn btn-primary"></center><br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-changepass" role="tabpanel" aria-labelledby="v-pills-changepass-tab">
                        <div class="profile-content">
                            <div class="panel panel-default">
                                <div class="panel-heading"> เปลี่ยนรหัสผ่าน</div>
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
                    <div class="tab-pane fade" id="v-pills-my-bg" role="tabpanel" aria-labelledby="v-pills-my-bg-tab">
                        <div class="profile-content">
                            <div class="panel panel-default bg-sum-item">
                                <div class="card-header bg-transparent d-flex justify-content-between">
                                    <div><span class="fs-7 bg-sum-item-type">ประวัติ เพิ่ม/ลด แต้ม BG</span></div>
                                    <div>
                                        <span class="text-muted fs-7"><i class="fa fa-calendar" aria-hidden="true"></i> 05/09/2019</span>
                                        <span class="text-muted fs-7 bg-sum-item-sum" style="margin-left:10px;"><i class="fa fa-clock-o" aria-hidden="true"></i> 13:54:14</span>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <font color="green" class="fs-7">รายการเพิ่มเหรียญ</font><br> <span class="fs-7 text-muted">หมายเหตุ : จากการอนุมัติสินค้า หมายเลข
                                                B0000000157</span>
                                        </div>
                                        <div class="col-sm-3 text-right fs-7" style="color:blue">15,000.00</div>
                                        <div class="col-sm-3 text-right"><span class="fs-7 text-muted">คงเหลือ</span><span class="fs-7 text-primary bg-sum-item-sum"> 15,000.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default bg-sum-item">
                                <div class="panel-heading">
                                    <div class="card-header bg-transparent d-flex justify-content-between">
                                        <div><span class="bg-sum-item-type fs-7">รายการแลกของ</span></div>
                                        <div><span class="text-primary fs-7">สถานะ : </span>
                                            <span class="fs-7">รอตรวจสอบ</span>
                                        </div>
                                        <div class="text-right"><span class="fs-7 text-muted"><i class="fa fa-calendar" aria-hidden="true"></i> 06/09/2019</span>
                                            <span class="fs-7 text-muted" style="margin-left:10px;"><i class="fa fa-clock-o" aria-hidden="true"></i> 15:41:43</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 mb-10"><span class="text-primary fs-7">หมายเลข
                                            </span><span class="fs-7"> 4082399900</span>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="row">
                                                <div class="col-xs-6">
                                                    <div class="bg-sum-list">
                                                        <img class="img-responsive" src="/img/img_81518066867.jpg">
                                                        <div class="bg-sum-list-text">หมอนรองคอTotoro</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 text-right">
                                            <span class="fs-7" style="color:red">0.00</span>
                                        </div>
                                        <div class="col-md-3 text-right"><span class="fs-7">คงเหลือ</span> <span class="text-primary bg-sum-item-sum fs-7">15,000.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-default bg-sum-item">
                                <div class="card-header bg-transparent d-flex justify-content-between">
                                    <div><span class="bg-sum-item-type fs-7">ประวัติ เพิ่ม/ลด แต้ม BG</span></div>
                                    <div class="text-right"><span class="fs-7 text-muted"><i class="fa fa-calendar" aria-hidden="true"></i> 09/09/2019</span>
                                        <span class="fs-7 text-muted" style="margin-left:10px;"><i class="fa fa-clock-o" aria-hidden="true"></i> 12:30:42</span>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <font color="red" class="fs-7">รายการลดเหรียญ</font><br> หมายเหตุ :
                                        </div>
                                        <div class="col-sm-3 text-right fs-7" style="color:red">14,931.00</div>
                                        <div class="col-sm-3 text-right"><span class="fs-7 text-muted">คงเหลือ</span><span class="text-primary bg-sum-item-sum fs-7"> 69.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-create-exchange" role="tabpanel" aria-labelledby="v-pills-create-exchange-tab">
                        <div class="profile-content">
                            <div class="panel panel-default">
                                <div class="panel-heading">นำเสนอแลกเปลี่ยน</div>
                                <div class="panel-body">
                                    <form id="announce-form" method="post" action="/saveproduct/" enctype="multipart/form-data" autocomplete="off">
                                        <div class="form-group">
                                            <label for="inputName" class="control-label">ชื่อสินค้า</label>
                                            <div class="">
                                                <input type="text" name="name" id="name" maxlength="50" placeholder="กรอกชื่อสินค้า.." class="form-control">
                                            </div>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <label for="" class="control-label">หมวดหมู่หลัก</label>
                                            <div class="">
                                                <select class="form-control" id="categoryID" name="categoryID" title="กรุณาเลือก หมวดหมูหลัก">
                                                    <option value="">กรุณาเลือกหมวดหมูหลัก</option>
                                                    <option value="29">เสื้อผ้าแฟชั่นและเครื่องประดับ</option>
                                                    <option value="30">สินค้าแม่และเด็ก</option>
                                                    <option value="31">สุขภาพและความงาม</option>
                                                    <option value="9">อุปโภค บริโภค</option>
                                                    <option value="10">บ้านและสวน</option>
                                                    <option value="11">เครื่องใช้ไฟฟ้าและคอมฯ</option>
                                                    <option value="15">มือถือและอุปกรณ์ถ่ายภาพ</option>
                                                    <option value="32">กีฬาและงานอดิเรก</option>
                                                    <option value="33">รถยนต์และประดับยนต์</option>
                                                    <option value="34">อื่นๆ</option>
                                                    <option value="35">Voucher</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="categoryID" class="control-label">หมวดหมู่ย่อย</label>
                                            <div class="">
                                                <select class="form-control" id="subcategoryID" name="subcategoryID" title="กรุณาเลือก หมวดหมู่ย่อย">
                                                </select>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <div class=" col-sm-offset-2 ">
                                                <label for="file">กรุณาเลือกไฟล์รูปภาพ (ขั้นต่ำ 1 รูป)</label><br>
                                                <input type="file" id="files" name="uploadpic[]" multiple="">
                                            </div>
                                        </div>
                                        <br>

                                        <div class="form-group">
                                            <label for="inputPhoneNumber" class="control-label">รายละเอียดสินค้า</label>
                                            <div class="">
                                                <textarea class="form-control" name="detail" id="detail" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <label for="item_condition" class="control-label">สภาพสินค้า</label>
                                            <div class="">
                                                <select class="form-control" id="item_condition" name="item_condition" tmt:invalidindex="0" tmt:message="กรุณาเลือก สภาพสินค้า" title="กรุณาเลือก สภาพสินค้า">
                                                    <option value="1">มือหนึ่ง</option>
                                                    <option value="2">มือสอง</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group" id="showp" style="display: none;">
                                            <label class="form-control" for="percent" style="display:none">สภาพสินค้ามือสอง (เปรียบเทียบสินค้าใหม่คือ
                                                100%)<font color="red"> *</font></label>
                                            <!-- <input type="text" value="" tmt:required="true" tmt:errorclass="invalid" tmt:message="กรุณาใส่ สภาพมือสองกี่เปอร์เซ็นต์ (%)"  placeholder="กรอกเปอร์เซ็นต์" id="percent" name="percent" class="form-controller"> -->
                                            <input type="text" class="col-md-10 col-sm-offset-2" value="" placeholder="กรอกเปอร์เซ็นต์" id="percent" name="percent">
                                            <span id="errmsg1" style="color:red"></span>
                                            <br><br>
                                        </div>
                                        <div class="form-group" id="showp2" style="display:none">
                                            <label class="control-label" for="remark">ตำแหน่งที่มีรอยตำหนิ<font color="red"> *</font></label>
                                            <!-- <textarea name="remark" id="remark" class="summernote" tmt:required="true" tmt:errorclass="invalid" tmt:message="กรุณาใส่ ตำแหน่งที่มีรอยตำหนิ"></textarea> -->
                                            <textarea class="col-md-10" name="remark" id="remark" rows="10"></textarea>
                                            <br><br>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="control-label">BG ที่ต้องการ</label>
                                            <div class="">
                                                <input class="form-control" type="text" value="" placeholder="BG ที่ต้องการ" id="price" name="price">
                                                <span id="errmsg2" style="color:red"></span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="" class="control-label">จำนวนสินค้า</label>
                                            <div class="">
                                                <input class="form-control" type="text" value="" placeholder="จำนวนสินค้า" id="qty" name="qty">
                                                <span id="errmsg3" style="color:red"></span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="form-group">
                                            <div class="col-sm-offset-2 ">
                                                <input type="button" value="ส่งข้อมูล" name="ส่งช้อมูล" class="btn btn-primary">
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-history-exchange-item" role="tabpanel" aria-labelledby="v-pills-history-exchange-item-tab">
                        <div class="profile-content">
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-history-exchange" role="tabpanel" aria-labelledby="v-pills-history-exchange-tab">
                        <div class="profile-content">
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-voucher" role="tabpanel" aria-labelledby="v-pills-voucher-tab">
                        <div class="profile-content">
                            <div class="panel panel-default bg-sum-item">
                                <div class="panel-body">
                                    <div class="voucher-form">
                                        <form action="https://www.bartergang.net/refill_voucher.php" method="post">
                                            <div class="billing-fields row">
                                                <div class="col-md-12 col-sm-12 col-xs-12">
                                                    <label class="" for="voucher">รหัส Voucher<font color="red"> *
                                                        </font></label>
                                                    <input type="text" value="" placeholder="กรุณากรอก รหัส Voucher" id="voucher" name="voucher" class="form-control">
                                                    <p id="evoucher" class="help-block err" style="display:none;color:red">*กรุณากรอก รหัส Voucher</p>
                                                </div>
                                                <div class="col-md-12 col-sm-12 col-xs-12 mt-15"> <button type="submit" value="ใช้ Voucher" class="btn btn-primary">ใช้ Voucher</button> </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="panel-footer">
                                    <h4 class="text-primary">ประวัติการใช้ Voucher</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-alert" role="tabpanel" aria-labelledby="v-pills-alert-tab">
                        <div class="profile-content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'default',
    middleware: ['auth']
})


const authStore = useAuthStore();
const FormProfile = reactive({
    firstname: authStore.user?.firstname,
    lastname: authStore.user?.lastname,
    username: authStore.user?.username,
    email: '',
    tel: '',
    line: '',
    address: ''
})
onMounted(() => {
    authStore.initializeAuth();
});

const checkPasswordStrength = () => {

    const newPass = (document.getElementById('newpass') as HTMLInputElement).value;
    const rePass = (document.getElementById('repass') as HTMLInputElement).value;
    const strengthStatus = document.getElementById('password-strength-status') as HTMLParagraphElement;

    if (newPass.length === 0 && rePass.length === 0) {
        strengthStatus.style.display = 'none';
        return;
    } else {
        strengthStatus.style.display = 'block';
    }

    if (newPass !== rePass) {
        strengthStatus.innerHTML = 'รหัสผ่านไม่ตรงกัน';
        strengthStatus.style.color = 'red';
        return;
    }

    // Regular expressions for password strength
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

    if (strongRegex.test(newPass)) {
        strengthStatus.innerHTML = 'แข็งแรงมาก';
        strengthStatus.style.color = 'green';
    } else if (mediumRegex.test(newPass)) {
        strengthStatus.innerHTML = 'ปานกลาง';
        strengthStatus.style.color = 'orange';
    } else {
        strengthStatus.innerHTML = 'อ่อนแอ';
        strengthStatus.style.color = 'red';
    }
}
</script>

<style>
.panel-heading {
    padding: 1rem;
    border-radius: 0.25rem 0.25rem 0 0;
}

.panel-body {
    padding: 1rem;
    border-radius: 0.25rem;
    height: auto !important;
}

.nav>li {
    margin-bottom: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
}

.nav>li.active {
    background-color: #ff7377;
    color: #fff !important;
}

.link-dark {
    color: #666 !important;
}

.sub-tab {
    margin-left: 1rem;
    font-size: 0.9rem;
    color: #666;
}

.main-tab {
    color: #ff7377;
}

.list-unstyled>li {
    padding: 0.1rem;
}
</style>
