<template>
<div class="container p-5">
    <p class="fs-5 text-primary mb-4">Point</p>
    <div class="flex justify-center">
        <div class="row" style="width: 600px;">
            <div class="col-md-2 flex"><img src="/newimg/bb.png" alt=""></div>
            <div class="col-md-5 flex text-primary">BB</div>
            <div class="col-md-5 flex">{{ formatNumber(userData?.currencyLists[0].amount) }}</div>
            <div class="col-md-12 mb-2" v-if="userData">
                <hr>
            </div>
            <div class="col-md-2 flex"><img src="/newimg/tmc.png" alt=""></div>
            <div class="col-md-5 flex text-primary">TMC</div>
            <div class="col-md-5 flex" v-if="userData.uid != ''">{{ formatNumber(userData?.currencyLists[1].amount) }}</div>
            <div class="col-md-5 flex text-primary fw-300" v-else><a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Open TMC Wallet</a></div>
            <div class="col-md-12 mb-2" v-if="userData">
                <hr>
            </div>
            <div class="col-md-5 offset-md-2 flex">Total</div>
            <div class="col-md-5 flex">{{ formatNumber(total) }}</div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title mx-2" id="exampleModalLabel">TMC Wallet</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
                <div class="policy">
                    <p>เงื่อนไขการเปิดกระเป๋า TMC</p>
                    <p>
                        1. นโยบายความเป็นส่วนตัว
                        บริษัทฯ ถือปฎิบัติอย่างเคร่งครัดว่าด้วยเรื่องความเป็นส่วนตัวของสมาชิกเป็นเรื่องสำคัญ และบริษัทฯ จะจัดเก็บ
                        บันทึก ยึดถือ เก็บรักษา เปิดเผย โอน หรือใช้ข้อมูลส่วนตัวของท่านตามที่จำเป็นเท่านั้น
                        ภายใต้พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (Personal Data Protection Act: PDPA)

                        การปกป้องรักษาข้อมูลความเป็นส่วนตัวของท่านถือเป็นเรื่องสำคัญ
                        บริษัทฯจึงจะจัดเก็บข้อมูลเพียงเท่าที่จำเป็นต่อการตรวจสอบที่มาที่ไปของสินค้าที่ทำการแลกเปลี่ยนเท่านั้น
                        ได้แก่ ข้อมูลส่วนตัวของสมาชิก
                        รวมถึงประวัติหรือข้อมูลที่เกี่ยวข้องกับการติดต่อแลกเปลี่ยนสินค้าระหว่างท่านกับบริษัทฯ เท่านั้น
                        <br>
                        2. การจัดเก็บข้อมูลส่วนตัว
                        เมื่อท่านสร้างบัญชีกับ Bigbarter หรือให้ข้อมูลส่วนตัวของท่านผ่านทางแพลตฟอร์ม ข้อมูลที่บริษัทฯ
                        จัดเก็บอาจรวมถึงข้อมูลต่าง ๆ เหล่านี้ของท่าน

                        ชื่อ นามสกุล
                        สถานที่จัดส่งสินค้า
                        อีเมล์
                        หมายเลขติดต่อ
                        หมายเลขโทรศัพท์เคลื่อนที่
                        วันเดือนปีเกิด
                        เพศ
                        ข้อมูลดังกล่าวจะต้องเป็นข้อมูลที่ ถูกต้อง ครบถ้วน และไม่ทำให้เกิดความเข้าใจผิดใด ๆ
                        ท่านจะต้องอัพเดทข้อมูลของท่านให้เป็นปัจจุบัน และแจ้งให้บริษัทฯ ทราบเกี่ยวกับการเปลี่ยนแปลงข้อมูลต่าง ๆ
                        บริษัทฯ สงวนสิทธิที่จะร้องขอเอกสารเพิ่มเติมเพื่อตรวจสอบยืนยันว่าข้อมูลที่ท่านให้มานั้นถูกต้อง

                        บริษัทฯ จะสามารถจัดเก็บข้อมูลส่วนตัวของท่านหากท่านส่งมอบข้อมูลให้บริษัทฯด้วยความสมัครใจของท่านเท่านั้น
                        หากท่านเลือกจะไม่ส่งข้อมูลส่วนตัวของท่านให้แก่บริษัทฯ
                        หรือเลือกที่จะเพิกถอนความยินยอมในการใช้ข้อมูลส่วนตัวของท่าน บริษัทฯอาจไม่สามารถให้บริการแก่ท่านได้

                        หากท่านสมัครเพื่อใช้งาน Bigbarter โดยผ่านทางบัญชีโซเชียลมีเดีย (Social Media) หรือเชื่อมต่อบัญชี Bigbarter
                        กับบัญชีโซเชียลมีเดียของท่าน ให้ถือว่าท่านอนุญาตให้บริษัทฯเข้าถึงข้อมูลเกี่ยวกับท่าน
                        ที่ท่านได้ให้ไว้โดยสมัครใจกับบัญชีโซเชียลมีเดียของท่านผ่านทางผู้ให้บริการโซเชียลมีเดียรายนั้น ๆ
                        <br>
                        3. การใช้และการเปิดเผยข้อมูลส่วนตัว
                        บริษัทฯ จะใช้ข้อมูลส่วนที่ได้รับจากท่านหรือส่งต่อแก่บุคคลภายนอก (รวมถึงบริษัทที่เกี่ยวข้อง
                        ผู้ให้บริการภายนอก) เพื่อประโยชน์ในกิจการแลกเปลี่ยนสินค้าทั้งหมดหรือแค่บางส่วนดังจะได้กล่าวต่อไปนี้

                        เพื่อดำเนินการหรือสนับสนุนการใช้บริการ (Services)
                        เพื่อดำเนินการตามคำสั่งแลกเปลี่ยนสินค้าของท่านที่ส่งผ่านทางระบบ
                        เพื่อการจัดส่งสินค้าที่ท่านได้แลกเปลี่ยนผ่านระบบ
                        เพื่อแจ้งให้ท่านทราบเกี่ยวการจัดส่งสินค้า
                        เพื่อเปรียบเทียบข้อมูลและตรวจสอบกับบุคคลภายนอกเพื่อรับรองความถูกต้องของข้อมูล
                        อีกทั้งอาจมีการเปิดเผยข้อมูลเมื่อได้รับการร้องขอจากหน่วยงานราชการ
                        หรือการเปิดเผยข้อมูลนี้ยังสามารถทำขึ้นโดยเป็นไปตามหมายศาล คำสั่งศาล การร้องขอตามกฎหมาย
                        หรือข้อกำหนดหรือกระบวนการทางกฎหมายอื่นๆ
                        <br>
                        4. ข้อจำกัดความรับผิด
                        หากเกิดความสูญหายหรือเสียหายขึ้นเนื่องจากการใช้บริการ
                        หรือจากการละเมิดระเบียบกฎเกณฑ์และเงื่อนไขนี้ไม่ว่าโดยบุคคลใด เช่น การเขียนและเผยแพร่ข้อความที่ต้องห้าม
                        บริษัทไม่ต้องรับผิดชอบใดๆ ทั้งสิ้นต่อท่าน และ/หรือบุคคลผู้เสียหายนั้น
                        สมาชิกต้องรับผิดชอบและรับผลเสียหายที่เกิดขึ้นนั้นแต่เพียงผู้เดียว ทั้งนี้
                        ท่านตกลงสละสิทธิเรียกร้องให้บริษัทรับผิดในความสูญหายและเสียหายใดๆ ที่เกิดขึ้นจากการใช้บริการนี้ทั้งสิ้น
                        <br>
                        5. การยกเลิกบริการ
                        5.1 บริษัทมีสิทธิยกเลิก หรือระงับการให้บริการไว้ชั่วคราวหรือถาวร
                        หากผู้ใช้บริการฝ่าฝืนหรือพยายามฝ่าฝืนข้อตกลงหรือเงื่อนไขนี้ข้อหนึ่งข้อใด
                        5.2 บริษัทสามารถที่จะลบบัญชีสมาชิกของท่านออกจากระบบ หากท่านไม่ได้เข้ามาใช้งานบริการเป็นเวลา 1ปี
                        5.3 บริษัทสามารถยกเลิกบริการ และลบข้อมูลเนื้อหาในบริการได้ทันที โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                        <br>
                        6. เงื่อนไขเกี่ยวกับคะแนน BB ในแพลตฟอร์ม Bigbarter
                        6.1 คะแนน BB ใน Bigbarter ถือเป็นกรรมสิทธิ์ของบริษัทฯ บริษัทฯมีสิทธิ อำนาจในการเปลี่ยนแปลง ยกเลิก
                        เงื่อนไขการใช้คะแนน โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
                        6.2 คะแนน BB ใน Bigbarter ไม่สามารถแลกเปลี่ยน โอน โยกย้ายระหว่างสมาชิกโดยตรงได้
                        6.3 คะแนน BB ใน Bigbarter ไม่สามารถแลกเปลี่ยนเป็นเงินสดได้ในทุกกรณี
                        6.4 หากบัญชีสมาชิก Bigbarter ของท่านถูกระงับการให้บริการอันเป็นผลมาจากการละเมิดกฎข้อบังคับข้อใดข้อหนึ่ง
                        บริษัทฯขอสงวนสิทธิ์ในการไม่ชดเชยในทุกเงื่อนไข
                        6.5 คะแนน BB ใน Bigbarter ไม่มีกำหนดเรื่องระยะเวลาหมดอายุ สามารถสะสมในบัญชีสมาชิกได้
                        ตลอดระยะเวลาที่แพลตฟอร์ม Bigbarter ยังเปิดให้บริการ
                        <br>
                        7. เงื่อนไขเกี่ยวกับการแลกเปลี่ยนสินค้า
                        7.1 สินค้าที่จะทำการแลกเปลี่ยนจะต้องไม่เป็นสิ่งผิดกฎหมาย หรือผิดศีลธรรมอันดี จารีตประเพณี วัฒนธรรม บริษัทฯ
                        ขอสงวนสิทธิ์ในการยกเลิก ยับยั้ง นำออกจากระบบ หากพบสินค้าที่แลกเปลี่ยนเข้ามาผิดเงื่อนไขข้างต้น
                        หรือดำเนินการตามขั้นตอนของกฎหมายตามความเหมาะสม
                        7.2 สมาชิกเป็นผู้รับผิดชอบค่าใช้จ่ายในการจัดส่งสินค้าในทุกกรณี
                        7.3 การนำเสนอแลกเปลี่ยนสินค้า สมาชิกจะต้องให้ข้อมูลเกี่ยวกับสินค้าอย่างครบถ้วนและถูกต้องทุกประการ
                        หากภายหลัง ทีมงานตรวจสอบสินค้าและพบว่ามีรายละเอียดไม่ตรงตามที่สมาชิกให้ข้อมูลเบื้องต้นเข้ามา บริษัทฯ
                        ขอสงวนสิทธิ์ในการยกเลิกรายการแลกเปลี่ยนสินค้านั้นๆ และทำการส่งสินค้าคืนให้กับสมาชิก
                        ด้วยวิธีส่งพัสดุเก็บเงินปลายทาง โดยสมาชิกจะต้องเป็นผู้รับผิดชอบค่าใข้จ่ายในการจัดส่ง
                        หากสมาชิกปฎิเสธการรับสินค้านั้น และสินค้าถูกส่งกลับมาที่บริษัทฯ
                        ให้ถือว่าท่านสละสิทธ์ความเป็นเจ้าของในสินค้าชิ้นนั้น
                        7.4 เมื่อการแลกเปลี่ยนสินค้าแต่ละรายการสิ้นสุด ให้ถือว่าสินค้านั้นๆเป็นกรรมสิทธิ์ของทางบริษัทฯ
                        บริษัทฯสามารถดำเนินการอย่างใดอย่างหนึ่งกับสินค้าได้ โดยสมาชิกไม่มีสิทธิ์ในการคัดค้าน ขอคืน หรือยกเลิก
                        ทั้งนี้เพื่อป้องกันความวุ่นวายในกรณีที่สินค้าได้เปลี่ยนมือไปยังสมาชิกท่านอื่นแล้ว
                        7.5 บริษัทเป็นเพียงตัวกลางในการแลกเปลี่ยนสินค้าเท่านั้น ในกรณีที่เกิดการฟ้องร้องด้านกฎหมาย
                        เกี่ยวกับสินค้าไม่ว่าจะด้วยกรณีใดก็ตาม สมาชิกจะต้องเป็นผู้รับผิดชอบต่อผลของคดี

                    </p>
                </div>
                <div class="form-check mt-4">
                    <input class="form-check-input" type="checkbox" value="accept" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">
                        ยอมรับเงื่อนไขการเปิดกระเป๋า TMC
                    </label>
                </div>

            </div>
            <div class="modal-footer mb-4">
                <button type="button" class="btn btn-primary w-100" @click="OpenTMC">Open TMC Wallet</button>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>
import {
    formatNumber
} from '@/utils/utils';
import Swal from 'sweetalert2';
const authStore = useAuthStore()
const userData = authStore.user;
// userData.total = 0;
const total = userData?.currencyLists[0].amount + userData?.currencyLists[1].amount;

const OpenTMC = async () => {
    const modalElement = document.getElementById('exampleModal');
    const checked = document.getElementById('flexCheckChecked');
    if (checked) {
        if (!(checked as HTMLInputElement).checked) {
            Swal.fire({
                icon: 'error',
                title: "Error",
                text: "Please accept the terms and conditions.",
                confirmButtonColor: '#DB4444'
            })
            return;
        }

        if (modalElement) {
            const modal = bootstrap.Modal.getInstance(modalElement);
            if (modal) {
                modal.hide();
            }
        }

        const openTMC = await $fetch('https://fontapi.bigbarter.net/member/genmemberuid?id=' + userData?.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authStore.token}`,
                    'prefix': 'BB'
                }
            })
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully',
                    text: 'Open TMC wallet successfully.',
                    confirmButtonColor: '#DB4444'
                })
                userData.uid = data.uid;
                userData.bbcoin = data.bbcoin;
                userData.tmccoin = data.tmccoin;
                userData.currencyLists = data.currencyLists;

                authStore.updateUser(userData);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Open TMC wallet failed.',
                    confirmButtonColor: '#DB4444'
                })
            });
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

a {
    cursor: pointer;
}

.modal-header {
    border-bottom: 0;
}

.modal-body {
    border-bottom: 0;
}

.modal-footer {
    border-top: 0;
}

button {
    padding: 0.7rem 1rem;
}

.policy {
    height: 300px;
    overflow: auto;
}
</style>
