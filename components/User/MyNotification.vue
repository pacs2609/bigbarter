<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-12 d-flex justify-between mb-4 head">
        <span class="d-flex gap-3">
          <span class="fw-400 fs-4 text-primary">Notification List</span>
        </span>
        <div class="col-md-4 d-flex justify-content-end gap-4">
          <a class="tab-btn active" id="all-tab-btn" @click="ChangeFilter('all')">All</a>
          <a class="tab-btn" id="readed-tab-btn" @click="ChangeFilter('readed')">Readed</a>
          <a class="tab-btn" id="unread-tab-btn" @click="ChangeFilter('unread')">Unread</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex align-items-center mb-4 gap-3 voucher-box" v-for="noti in notiWithHoverState"
          :key="noti.id">
          <div class="row w-full" data-bs-toggle="modal" data-bs-target="#targetModal" @click="ShowNotiDetail(noti.id)">
            <div class="col-md-1 d-flex justify-content-center">
              <img src="/newimg/bb.png" alt="" style="max-width: 40px;max-height: 40px;">
            </div>
            <div class="col-md-8">
              <p class="d-flex fs-4 fw-600 gap-2 align-items-center">แลกสินค้า
                <span class="text-primary fs-5" v-if="noti.readed == 'unread'">
                  <i class="fa-solid fa-circle-exclamation"></i>
                </span>
                <span class="text-success fs-5" v-else-if="noti.readed == 'readed'">
                  <i class="fa-solid fa-circle-check"></i>
                </span>
              </p>
              <p class="fw-400">{{ noti.productName }} <span class="text-muted">Invoice No. {{ noti.invoiceNo }}</span>
              </p>
              <p class="fw-500 fs-6">Status
                <span class="text-warning" v-if="noti.status == 'DL'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> ที่ต้องจัดส่ง
                </span>
                <span class="text-info" v-if="noti.status == 'DS'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> จัดส่งแล้ว
                </span>
                <span class="text-danger" v-if="noti.status == 'X'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> ยกเลิกรายการ
                </span>
                <span class="text-success" v-if="noti.status == 'S'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> สำเร็จ
                </span>
                <span class="text-purple" v-if="noti.status == 'OC'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> กำลังตรวจสอบข้อเสนอของท่าน
                </span>
                <span class="text-info" v-if="noti.status == 'PC'">
                  <Icon icon="icon-park-outline:dot" width="20" height="20" /> รอตรวจสอบสินค้าจริง
                </span>
              </p>
              <p class="fw-300 fs-6 text-muted">5 days ago</p>
            </div>
            <div class="col-md-3 d-flex justify-end ">
              <Icon icon="uil:trash" width="24" height="24" class="text-primary cursor-pointer mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="targetModal" tabindex="-1" aria-labelledby="targetModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header p-4">
            <h5 class="modal-title" id="targetModalLabel"><img src="/newimg/bb.png" class="me-3">แลกสินค้า <span
                id="notiDate" class="text-muted fw-300 fs-6"></span></h5>
            <a @click="deleteNoti()">
              <Icon icon="uil:trash" width="24" height="24" class="text-primary cursor-pointer mt-2" />
            </a>
          </div>
          <div class="modal-body">
            <div class="row p-5">
              <div class="col-md-12">
                <p class="d-flex justify-between"><span id="productName"></span><span
                    class="d-flex align-items-center gap-2"><img src="/newimg/bg.png" alt=""><span
                      id="total"></span></span></p>
              </div>
              <div class="col-md-12">
                <p class="d-flex gap-4">Invoice No. <span id="invoiceNo" class="text-muted fw-300"></span></p>
              </div>
              <div class="col-md-12">
                <p class="d-flex gap-4">วันที่ทำรายการ <span id="createat" class="text-muted fw-300"></span></p>
              </div>
              <div class="col-md-12">
                <div class="px-4">
                  <div class="row">
                    <div class="col-md-3 modal-table">
                      <p>Quantity</p>
                      <p id="quantity"></p>
                    </div>
                    <div class="col-md-3 modal-table">
                      <p>Type</p>
                      <p id="type" class="text-primary"></p>
                    </div>
                    <div class="col-md-3 modal-table">
                      <p>Total</p>
                      <p id="productTotal"></p>
                    </div>
                    <div class="col-md-3 modal-table">
                      <p>Status</p>
                      <p id="status"><Icon icon="icon-park-outline:dot" width="20" height="20" /><span id="statusName"></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  formatNumber
} from '@/utils/utils';
import {
  Icon
} from '@iconify/vue';
import Swal from 'sweetalert2';
const authStore = useAuthStore()

interface Notification {
  data: {
    status: string;
    type: string;
    createat: string;
    productName: string;
    invoiceNo: string;
    quantity: number;
    total: number;
  };
  notidate: string;
  id: number,
  status: string,
  readed: string,
  productName: string,
  invoiceNo: string,
  time: string
}

const filter = ref('all');

onMounted(() => {
  const router = useRouter()
  if (!authStore.token) {
    router.push({
      name: 'login'
    })
  }
})

const {
  data: notiData
} = await useFetch<Notification[]>('/api/account/mynoti');

const notiWithHoverState: Ref<Notification[]> = computed(() => {
  if (!notiData.value) {
    return [];
  }
  const transformednoti = notiData.value.filter(noti => noti.readed === filter.value || filter.value === 'all').map(notiData => ({
    ...notiData
  }));
  return transformednoti;
});

const ChangeFilter = (readed: string) => {
  if (readed === 'all') {
    document.getElementById('all-tab-btn')?.classList.add('active');
    document.getElementById('readed-tab-btn')?.classList.remove('active');
    document.getElementById('unread-tab-btn')?.classList.remove('active');
  } else if (readed === 'readed') {
    document.getElementById('all-tab-btn')?.classList.remove('active');
    document.getElementById('readed-tab-btn')?.classList.add('active');
    document.getElementById('unread-tab-btn')?.classList.remove('active');
  } else {
    document.getElementById('all-tab-btn')?.classList.remove('active');
    document.getElementById('readed-tab-btn')?.classList.remove('active');
    document.getElementById('unread-tab-btn')?.classList.add('active');
  }
  filter.value = readed;
  console.log(filter.value);
}

const ShowNotiDetail = (id: number) => {


  const modalData = notiData.value?.filter(noti => noti.id === id)[0];

  if (modalData) {
    document.getElementById('notiDate')!.innerHTML = modalData.notidate;
    document.getElementById('productName')!.innerHTML = modalData.data.productName;
    document.getElementById('total')!.innerHTML = formatNumber(modalData.data.total);
    document.getElementById('productTotal')!.innerHTML = formatNumber(modalData.data.total);
    document.getElementById('invoiceNo')!.innerHTML = modalData.data.invoiceNo;
    document.getElementById('createat')!.innerHTML = modalData.data.createat;
    document.getElementById('quantity')!.innerHTML = String(modalData.data.quantity); // Convert number to string
    document.getElementById('type')!.innerHTML = modalData.data.type;

    const status = document.getElementById('status');
    const statusName = document.getElementById('statusName');

    status?.classList.remove('text-purple', 'text-info', 'text-warning', 'text-success', 'text-danger');

    if (modalData.data.status === 'DS') {
      status!.classList.add('text-info');
      statusName!.innerHTML = 'จัดส่งแล้ว'
    } else if (modalData.data.status === 'DL') {
      status!.classList.add('text-warning');
      statusName!.innerHTML = 'ที่ต้องจัดส่ง'
    } else if (modalData.data.status === 'X') {
      status!.classList.add('text-danger');
      statusName!.innerHTML = 'ยกเลิกรายการ'
    } else if (modalData.data.status === 'S') {
      status!.classList.add('text-success');
      statusName!.innerHTML = 'สำเร็จ'
    } else if (modalData.data.status === 'OC') {
      status!.classList.add('text-purple');
      statusName!.innerHTML = 'กำลังตรวจสอบข้อเสนอของท่าน'
    } else if (modalData.data.status === 'PC') {
      status!.classList.add('text-info');
      statusName!.innerHTML = 'รอตรวจสอบสินค้าจริง'
    }

    console.log(modalData)
  }

}

const deleteNoti = () => {

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}
</script>

<style scoped>
.voucher-box {
  padding: 1rem 1rem;
  border-bottom: solid 2px #cecece;
}

.tab-btn {
  color: #5a5a5a;
  cursor: pointer;
}

.active {
  color: #DB4444 !important;
  text-decoration: underline !important;
  text-decoration-color: #DB4444 !important;
  text-decoration-thickness: 3px !important;
  text-underline-offset: 0.3rem !important;
  text-decoration-style: solid !important;
}

.tab-btn:hover {
  text-decoration: underline !important;
  text-decoration-color: #DB4444 !important;
  text-decoration-thickness: 3px !important;
  text-underline-offset: 0.3rem !important;
  text-decoration-style: solid !important;
  color: #5a5a5a;
}

.tab-active {
  display: block;
}

.hidden {
  display: none;
}

.head {
  border-bottom: solid 2px #cecece;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
}

.modal-table > p {
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
