<script setup lang="ts">
import { withBase } from 'vitepress'

const STEPS = [
  { title: 'Đọc chương 00–01', detail: 'Khoảng 10 phút. Hiểu NacenCheck làm gì và 8 khái niệm hay gặp.', link: '/mo-dau/00-gioi-thieu', cta: 'Đọc chương 00' },
  { title: 'Làm theo chương 02–04', detail: 'Thiết lập tài khoản: đăng nhập, khai thông tin doanh nghiệp, cơ sở sản xuất và vùng nguyên liệu.', link: '/bat-dau/02-dang-nhap-va-giao-dien', cta: 'Mở chương 02' },
  { title: 'Đi lần lượt chương 05–10', detail: 'Khai vật tư, sản phẩm, nguyên liệu, rồi tạo và bán lô hàng đầu tiên có mã QR.', link: '/luong-chinh/05-danh-muc-vat-tu', cta: 'Mở chương 05' },
]
</script>

<template>
  <section class="newbie">
    <div class="newbie-inner">
      <h2>Bạn mới dùng NacenCheck? Đi theo 3 bước</h2>
      <ol>
        <li v-for="(s, i) in STEPS" :key="s.link">
          <span class="nb-num" aria-hidden="true">{{ i + 1 }}</span>
          <div>
            <p class="nb-title">{{ s.title }}</p>
            <p class="nb-detail">{{ s.detail }}</p>
            <a class="nb-btn" :href="withBase(s.link)">{{ s.cta }} →</a>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
