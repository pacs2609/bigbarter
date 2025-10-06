<template>
<section class="pages mt-5">
    <div class="login-area">
        <div class="container">
            <header class="mb-2 mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-primary fw-600"><span class="rectangle"></span>Register</p>
                    </div>
                    <div class="col-md-10">
                        <p class="fs-2 fw-600">Create Account</p>
                    </div>
                </div>
            </header>
            <div class="row">
                <form id="register-form" action="" autocomplete="off" @submit.prevent="onComplete">
                    <div class="clear"></div>
                    <div class="col-md-8 offset-md-2">
                        <div class="billing-fields row">
                            <div class="col-md-6 col-sm-6 col-xs-12 mb-5">
                                <label for="firstname">ชื่อ<font color="red"> *</font></label>
                                <input v-model="formData.membername" type="text" placeholder="ชื่อ" class="form-control" style="overflow:hidden;" required>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 mb-5">
                                <label for="lastname">นามสกุล<font color="red"> *</font></label>
                                <input v-model="formData.memberSurname" type="text" placeholder="นามสกุล" class="form-control" required>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 mb-5">
                                <label for="email">อีเมลล์<font color="red"> *</font></label>
                                <input v-model="formData.email" type="text" placeholder="อีเมลล์" class="form-control email" required>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12 mb-5">
                                <label for="tel">เบอร์โทรศัพท์<font color="red"> *</font></label>
                                <input v-model="formData.memberphone" type="text" placeholder="เบอร์โทรศัพท์" class="form-control" required>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 mb-5">
                                <label for="address">ที่อยุ่<font color="red"> *</font></label>
                                <textarea v-model="formData.memberAddress" cols="30" rows="5" placeholder="ที่อยู่" class="form-control" required></textarea>
                            </div>
                            <div class="col-md-12 col-sm-6 col-xs-12 mb-5">
                                    <label class="" for="username">Username<font color="red"> *</font></label>
                                    <input v-model="formData.memberUsername" class="form-control" type="text" placeholder="Username" autocomplete="off" required>
                            </div>
                            <div class="col-md-12 col-sm-6 col-xs-12 mb-5">
                                <label class="" for="password">รหัสผ่าน<font color="red"> *</font></label>
                                <input v-model="formData.password" type="password" placeholder="รหัสผ่าน" class="form-control" required>
                            </div>
                            <div class="col-md-12 col-sm-6 col-xs-12 mb-5">
                                <label class="" for="repass">ยืนยันรหัสผ่าน<font color="red"> *</font></label>
                                <input v-model="formData.comfirmPassword" type="password" placeholder="ยืนยันรหัสผ่าน" class="form-control" required>

                            </div>
                            <!-- <div class="col-md-6 col-sm-6 col-xs-12 mb-5">
                                    <label class="" for="line">Line ID</label>
                                    <input type="text" value="" placeholder="Line ID" id="line"
                                        class="form-control mydata">
                                    <br><br>
                                </div> -->
                            <div class="col-md-12 col-sm-12 col-xs-12 mb-5">
                                <textarea class="form-control" rows="5" cols="30" id="policy" style="width:100%;">
                                        1.	นโยบายความเป็นส่วนตัว
                                            บริษัทฯ ถือปฎิบัติอย่างเคร่งครัดว่าด้วยเรื่องความเป็นส่วนตัวของสมาชิกเป็นเรื่องสำคัญ และบริษัทฯ จะจัดเก็บ บันทึก ยึดถือ เก็บรักษา เปิดเผย โอน หรือใช้ข้อมูลส่วนตัวของท่านตามที่จำเป็นเท่านั้น ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (Personal Data Protection Act: PDPA) 

                                            การปกป้องรักษาข้อมูลความเป็นส่วนตัวของท่านถือเป็นเรื่องสำคัญ บริษัทฯจึงจะจัดเก็บข้อมูลเพียงเท่าที่จำเป็นต่อการตรวจสอบที่มาที่ไปของสินค้าที่ทำการแลกเปลี่ยนเท่านั้น ได้แก่ ข้อมูลส่วนตัวของสมาชิก รวมถึงประวัติหรือข้อมูลที่เกี่ยวข้องกับการติดต่อแลกเปลี่ยนสินค้าระหว่างท่านกับบริษัทฯ เท่านั้น

                                        2.	 การจัดเก็บข้อมูลส่วนตัว
                                            เมื่อท่านสร้างบัญชีกับ Bigbarter หรือให้ข้อมูลส่วนตัวของท่านผ่านทางแพลตฟอร์ม ข้อมูลที่บริษัทฯ จัดเก็บอาจรวมถึงข้อมูลต่าง ๆ เหล่านี้ของท่าน

                                            ชื่อ นามสกุล 
                                            สถานที่จัดส่งสินค้า
                                            อีเมล์
                                            หมายเลขติดต่อ
                                            หมายเลขโทรศัพท์เคลื่อนที่
                                            วันเดือนปีเกิด
                                            เพศ
                                            ข้อมูลดังกล่าวจะต้องเป็นข้อมูลที่ ถูกต้อง ครบถ้วน และไม่ทำให้เกิดความเข้าใจผิดใด ๆ ท่านจะต้องอัพเดทข้อมูลของท่านให้เป็นปัจจุบัน และแจ้งให้บริษัทฯ ทราบเกี่ยวกับการเปลี่ยนแปลงข้อมูลต่าง ๆ บริษัทฯ สงวนสิทธิที่จะร้องขอเอกสารเพิ่มเติมเพื่อตรวจสอบยืนยันว่าข้อมูลที่ท่านให้มานั้นถูกต้อง

                                            บริษัทฯ จะสามารถจัดเก็บข้อมูลส่วนตัวของท่านหากท่านส่งมอบข้อมูลให้บริษัทฯด้วยความสมัครใจของท่านเท่านั้น หากท่านเลือกจะไม่ส่งข้อมูลส่วนตัวของท่านให้แก่บริษัทฯ หรือเลือกที่จะเพิกถอนความยินยอมในการใช้ข้อมูลส่วนตัวของท่าน บริษัทฯอาจไม่สามารถให้บริการแก่ท่านได้ 

                                            หากท่านสมัครเพื่อใช้งาน Bigbarter โดยผ่านทางบัญชีโซเชียลมีเดีย (Social Media) หรือเชื่อมต่อบัญชี Bigbarter  กับบัญชีโซเชียลมีเดียของท่าน ให้ถือว่าท่านอนุญาตให้บริษัทฯเข้าถึงข้อมูลเกี่ยวกับท่าน ที่ท่านได้ให้ไว้โดยสมัครใจกับบัญชีโซเชียลมีเดียของท่านผ่านทางผู้ให้บริการโซเชียลมีเดียรายนั้น ๆ 

                                        3.	 การใช้และการเปิดเผยข้อมูลส่วนตัว
                                            บริษัทฯ จะใช้ข้อมูลส่วนที่ได้รับจากท่านหรือส่งต่อแก่บุคคลภายนอก (รวมถึงบริษัทที่เกี่ยวข้อง ผู้ให้บริการภายนอก) เพื่อประโยชน์ในกิจการแลกเปลี่ยนสินค้าทั้งหมดหรือแค่บางส่วนดังจะได้กล่าวต่อไปนี้

                                            เพื่อดำเนินการหรือสนับสนุนการใช้บริการ (Services) 
                                            เพื่อดำเนินการตามคำสั่งแลกเปลี่ยนสินค้าของท่านที่ส่งผ่านทางระบบ 
                                            เพื่อการจัดส่งสินค้าที่ท่านได้แลกเปลี่ยนผ่านระบบ 
                                            เพื่อแจ้งให้ท่านทราบเกี่ยวการจัดส่งสินค้า 
                                            เพื่อเปรียบเทียบข้อมูลและตรวจสอบกับบุคคลภายนอกเพื่อรับรองความถูกต้องของข้อมูล
                                            อีกทั้งอาจมีการเปิดเผยข้อมูลเมื่อได้รับการร้องขอจากหน่วยงานราชการ หรือการเปิดเผยข้อมูลนี้ยังสามารถทำขึ้นโดยเป็นไปตามหมายศาล คำสั่งศาล การร้องขอตามกฎหมาย หรือข้อกำหนดหรือกระบวนการทางกฎหมายอื่นๆ

                                        4.	 ข้อจำกัดความรับผิด
                                            หากเกิดความสูญหายหรือเสียหายขึ้นเนื่องจากการใช้บริการ หรือจากการละเมิดระเบียบกฎเกณฑ์และเงื่อนไขนี้ไม่ว่าโดยบุคคลใด เช่น การเขียนและเผยแพร่ข้อความที่ต้องห้าม บริษัทไม่ต้องรับผิดชอบใดๆ ทั้งสิ้นต่อท่าน และ/หรือบุคคลผู้เสียหายนั้น สมาชิกต้องรับผิดชอบและรับผลเสียหายที่เกิดขึ้นนั้นแต่เพียงผู้เดียว ทั้งนี้ ท่านตกลงสละสิทธิเรียกร้องให้บริษัทรับผิดในความสูญหายและเสียหายใดๆ ที่เกิดขึ้นจากการใช้บริการนี้ทั้งสิ้น

                                        5.	การยกเลิกบริการ
                                        5.1	บริษัทมีสิทธิยกเลิก หรือระงับการให้บริการไว้ชั่วคราวหรือถาวร หากผู้ใช้บริการฝ่าฝืนหรือพยายามฝ่าฝืนข้อตกลงหรือเงื่อนไขนี้ข้อหนึ่งข้อใด
                                        5.2	บริษัทสามารถที่จะลบบัญชีสมาชิกของท่านออกจากระบบ หากท่านไม่ได้เข้ามาใช้งานบริการเป็นเวลา 1ปี 
                                        5.3	บริษัทสามารถยกเลิกบริการ และลบข้อมูลเนื้อหาในบริการได้ทันที โดยไม่ต้องแจ้งให้ทราบล่วงหน้า

                                        6.	เงื่อนไขเกี่ยวกับคะแนน BB ในแพลตฟอร์ม Bigbarter 
                                            6.1 คะแนน BB ใน Bigbarter ถือเป็นกรรมสิทธิ์ของบริษัทฯ บริษัทฯมีสิทธิ อำนาจในการเปลี่ยนแปลง ยกเลิก เงื่อนไขการใช้คะแนน โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                                            6.2 คะแนน BB ใน Bigbarter ไม่สามารถแลกเปลี่ยน โอน โยกย้ายระหว่างสมาชิกโดยตรงได้
                                            6.3 คะแนน BB ใน Bigbarter ไม่สามารถแลกเปลี่ยนเป็นเงินสดได้ในทุกกรณี
                                            6.4 หากบัญชีสมาชิก Bigbarter ของท่านถูกระงับการให้บริการอันเป็นผลมาจากการละเมิดกฎข้อบังคับข้อใดข้อหนึ่ง บริษัทฯขอสงวนสิทธิ์ในการไม่ชดเชยในทุกเงื่อนไข
                                            6.5 คะแนน BB ใน Bigbarter ไม่มีกำหนดเรื่องระยะเวลาหมดอายุ สามารถสะสมในบัญชีสมาชิกได้ ตลอดระยะเวลาที่แพลตฟอร์ม Bigbarter ยังเปิดให้บริการ

                                        7.	เงื่อนไขเกี่ยวกับการแลกเปลี่ยนสินค้า
                                            7.1 สินค้าที่จะทำการแลกเปลี่ยนจะต้องไม่เป็นสิ่งผิดกฎหมาย หรือผิดศีลธรรมอันดี จารีตประเพณี วัฒนธรรม บริษัทฯ ขอสงวนสิทธิ์ในการยกเลิก ยับยั้ง นำออกจากระบบ หากพบสินค้าที่แลกเปลี่ยนเข้ามาผิดเงื่อนไขข้างต้น หรือดำเนินการตามขั้นตอนของกฎหมายตามความเหมาะสม
                                            7.2 สมาชิกเป็นผู้รับผิดชอบค่าใช้จ่ายในการจัดส่งสินค้าในทุกกรณี 
                                            7.3 การนำเสนอแลกเปลี่ยนสินค้า สมาชิกจะต้องให้ข้อมูลเกี่ยวกับสินค้าอย่างครบถ้วนและถูกต้องทุกประการ หากภายหลัง ทีมงานตรวจสอบสินค้าและพบว่ามีรายละเอียดไม่ตรงตามที่สมาชิกให้ข้อมูลเบื้องต้นเข้ามา บริษัทฯ ขอสงวนสิทธิ์ในการยกเลิกรายการแลกเปลี่ยนสินค้านั้นๆ และทำการส่งสินค้าคืนให้กับสมาชิก ด้วยวิธีส่งพัสดุเก็บเงินปลายทาง โดยสมาชิกจะต้องเป็นผู้รับผิดชอบค่าใข้จ่ายในการจัดส่ง หากสมาชิกปฎิเสธการรับสินค้านั้น และสินค้าถูกส่งกลับมาที่บริษัทฯ ให้ถือว่าท่านสละสิทธ์ความเป็นเจ้าของในสินค้าชิ้นนั้น
                                            7.4 เมื่อการแลกเปลี่ยนสินค้าแต่ละรายการสิ้นสุด ให้ถือว่าสินค้านั้นๆเป็นกรรมสิทธิ์ของทางบริษัทฯ บริษัทฯสามารถดำเนินการอย่างใดอย่างหนึ่งกับสินค้าได้ โดยสมาชิกไม่มีสิทธิ์ในการคัดค้าน ขอคืน หรือยกเลิก ทั้งนี้เพื่อป้องกันความวุ่นวายในกรณีที่สินค้าได้เปลี่ยนมือไปยังสมาชิกท่านอื่นแล้ว
                                            7.5 บริษัทเป็นเพียงตัวกลางในการแลกเปลี่ยนสินค้าเท่านั้น ในกรณีที่เกิดการฟ้องร้องด้านกฎหมาย เกี่ยวกับสินค้าไม่ว่าจะด้วยกรณีใดก็ตาม สมาชิกจะต้องเป็นผู้รับผิดชอบต่อผลของคดี

                                    </textarea>
                            </div>
                            <p class="col-md-12 col-sm-12 col-xs-12 mb-5 d-flex align-items-center gap-2">
                                <input v-model="formData.policy" type="checkbox">
                                <label class="inline" for="rememberme">ยอมรับ
                                    <a href="https://www.bartergang.net/privacy/" style="color: #DB4444;">เงื่อนไขการใช้บริการ</a>
                                    ของเว็บไซต์</label>
                            </p>
                            <br>

                            <div class="col-md-12 col-sm-12 col-xs-12 mb-5">
                                <button class="btn btn-primary">สมัครสมาชิก</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.row -->
        </div>
    </div>
</section>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2';

definePageMeta({
    layout: 'default',
})

const formData = {
    membername: '',
    memberSurname: '',
    email: '',
    memberphone: '',
    memberAddress: '',
    memberUsername: '',
    password: '',
    comfirmPassword: '',
    policy: ''
};

async function onComplete() {
    if (formData.password !== formData.comfirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'แจ้งเตือน',
            text: 'รหัสผ่านไม่ตรงกัน',
        });
        return;
    }
    if (!formData.policy) {
        Swal.fire({
            icon: 'error',
            title: 'แจ้งเตือน',
            text: 'กรุณายอมรับเงื่อนไขการใช้งาน',
        });
        return;
    }
    try {
        const response = await fetch('https://fontapi.bigbarter.net/registermember', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'prefix': 'BB'
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'สมัครสมาชิกสำเร็จ',
            }).then(() => {
                window.location.href = '/login';
            });
        } else {
            const errorData = await response.json();
            console.error(errorData);
            Swal.fire({
                icon: 'error',
                title: 'เกิดข้อผิดพลาด',
                text: errorData.message,
            });
        }
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'เกิดข้อผิดพลาดในการเรียก API',
        });
    }
}
</script>

<style>
.login-area {
    padding-top: 6rem;
}
</style>
