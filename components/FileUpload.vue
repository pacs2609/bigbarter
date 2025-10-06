<template>
<div class="flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 transition-all duration-300 ease-in-out" :class="{ 'drag-border': isDragging }" @dragover.prevent="isDragging = true" @dragleave.prevent="isDragging = false" @drop.prevent="handleDrop">
        <div class="border-2 border-dashed border-gray-300 p-12 text-center text-gray-500 transition-colors duration-200 ease-in-out p-5" :class="{ 'drag-border': isDragging }">
            <img src="/newimg/folder 1.png" >
            <p class="mt-4 text-lg fw-400">
                Drag your file(s) to start uploading
            </p>
            <div class="my-6 flex items-center justify-center">
                <span class="w-1/4 border-t border-secondary"></span>
                <span class="mx-4 text-sm font-semibold text-gray-500 uppercase text-muted">
                    Or
                </span>
                <span class="w-1/4 border-t border-secondary"></span>
            </div>

            <label for="file-upload" class="relative cursor-pointer btn btn-outline-danger rounded-lg mt-4">
                Browse files
                <input id="file-upload" type="file" class="sr-only" @change="handleFileChange" multiple accept="image/*" />
            </label>
        </div>

        <div v-if="selectedFile || uploading || uploadStatus" class="mt-8">
            <div v-if="selectedFile" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-inner">
                <div class="flex items-center space-x-3">
                    <span class="text-sm font-medium text-gray-700">
                        Selected File:
                        <span class="font-bold text-gray-900">{{ selectedFile.name }}</span>
                    </span>
                </div>
                <button @click="uploadFile" :disabled="uploading" class="px-4 py-2 btn btn-secondary" :class="uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'">
                    {{ uploading ? 'Uploading...' : 'Upload' }}
                </button>
            </div>

            <div v-if="uploadStatus" class="mt-4 p-4 rounded-md text-sm" :class="uploadStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                {{ uploadStatus.message }}
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import {
    ref
} from 'vue';

const selectedFile = ref(null);
const isDragging = ref(false);
const uploading = ref(false);
const uploadStatus = ref(null);

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) { // Basic client-side image type check
        selectedFile.value = file;
        uploadStatus.value = null;
    } else {
        selectedFile.value = null;
        uploadStatus.value = {
            type: 'error',
            message: 'Please select an image file.'
        };
    }
};

const handleDrop = (event) => {
    isDragging.value = false;
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) { // Basic client-side image type check
        selectedFile.value = file;
        uploadStatus.value = null;
    } else {
        selectedFile.value = null;
        uploadStatus.value = {
            type: 'error',
            message: 'Please drop an image file.'
        };
    }
};

const uploadFile = async () => {
    if (!selectedFile.value) {
        uploadStatus.value = {
            type: 'error',
            message: 'No file selected for upload.'
        };
        return;
    }

    uploading.value = true;
    uploadStatus.value = null;

    const formData = new FormData();
    formData.append('image', selectedFile.value); // 'image' is the field name for your backend

    try {
        const response = await $fetch('/api/upload', { // Call your Nuxt 3 server route
            method: 'POST',
            body: formData,
        });

        uploadStatus.value = {
            type: 'success',
            message: 'Upload successful! File URL: ' + response.url
        };
        selectedFile.value = null;
        const fileInput = document.getElementById('file-upload');
        if (fileInput) fileInput.value = '';

    } catch (error) {
        console.error('Upload failed:', error);
        uploadStatus.value = {
            type: 'error',
            message: 'Upload failed: ' + (error.data?.statusMessage || error.message)
        };
    } finally {
        uploading.value = false;
    }
};
</script>

<style scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
.border-2 {
  border-style: dashed !important;
  border-radius: 0.5rem;
  border-color: #aaaaaa;
  border-style: solid;
  border-width: 1px;
}

.drag-border {
  border-color: #DB4444;
}
</style>
