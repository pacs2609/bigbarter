<template>
  <div class="container p-4">
    <div class="row">
      <div class="col-md-12 d-flex justify-between mb-4">
        <span class="d-flex gap-3">
          <span class="fw-400 fs-4 text-primary">Setting</span>
        </span>
      </div>
      <div class="row">
        <div class="col-md-12">
            <form>
              <div class="row">
                <div class="col-md-12 d-flex mb-4">
                  <label>Language</label>
                  <select v-model="formData.lang" class="form-select">
                    <option value="th">Thai</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div class="col-md-12 d-flex mb-4">
                  <label>Currency</label>
                  <select v-model="formData.currency" class="form-select">
                    <option value="THB">THB</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12 d-flex justify-end">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
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
const authStore = useAuthStore()

const formData = reactive({
  lang: 'th',
  currency: 'THB'
})

onMounted(() => {
  const router = useRouter()
  if (!authStore.token) {
    router.push({
      name: 'login'
    })
  }
})
</script>

<style scoped>
.voucher-box {
  padding: 1rem 1rem;
  border: solid 2px #DB4444;
  border-radius: 0.5rem;
}

label {
  width: 200px;
}

.form-select {
  width: 200px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-align: center;
}

.btn {
  padding: 0.5rem 4rem;
}

</style>
