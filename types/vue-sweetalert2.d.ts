import 'sweetalert2'; // Import the original SweetAlert2 types

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $swal: typeof Swal;
  }
}