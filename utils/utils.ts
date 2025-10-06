import { navigateTo } from "#app";
import Swal from "sweetalert2";

export const gotoProduct = (id: number) => {
  console.log(id);
  navigateTo({ name: "viewproduct-id", params: { id: id } });
};

export const { format: formatNumber } = Intl.NumberFormat("th-TH", {
  notation: "standard",
  maximumFractionDigits: 2,
});

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  Swal.fire({
    icon: "success",
    text: "คัดลอกสำเร็จ",
    confirmButtonColor: "#DB4444",
  });
};


export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
};

