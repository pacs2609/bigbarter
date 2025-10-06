// stores/cart.ts
import { defineStore } from 'pinia';
export interface CartItem {
  productId: number;
  productName: string;
  currencyLists: [];
  quantity: number;
  imgurl?: string; // รูปภาพ (อาจจะมีหรือไม่มีก็ได้)
}
// ใช้ defineStore เพื่อสร้าง store
// 'cart' คือ id ของ store นี้ (ต้องไม่ซ้ำกัน)
export const useCartStore = defineStore('cart', {
  // state: คือข้อมูลหลักที่เราจะเก็บ (เหมือน data)
  state: () => ({
    items: [] as CartItem[],
  }),

  // getters: คือ computed property สำหรับ store
  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  persist: true,
  // actions: คือฟังก์ชันสำหรับแก้ไข state (เหมือน methods)
  actions: {
    addToCart(product: Omit<CartItem, 'quantity'>) {
      const existingItem = this.items.find(item => item.productId === product.productId);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.productId !== productId);
    },
    updateQuantity(productId: number, newQuantity: number) {
      const item = this.items.find(item => item.productId === productId);
      if (item) {
        if (newQuantity > 0) {
          item.quantity = newQuantity;
        } else {
          this.removeFromCart(productId);
        }
      }
    },
    clearCart() {
      this.items = [];
    }
  }
});