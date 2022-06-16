<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
  <section class="main__contacts contacts">
    <div class="contacts__container">
      <div class="contacts__body">
        <div class="contacts__title title">Контакты</div>

        <div
          class="contacts__item item"
          v-for="i in store.contacts"
          :key="i.title"
        >
          <div class="item__body">
            <div class="item__icon"><img :src="i.img" alt=""></div>
            <div class="item__title">{{ i.title }}</div>
            <div class="item__subtitle">{{ i.subtitle }}</div>
          </div>
        </div>

        <div class="contacts__socials">
          <a href="https://www.facebook.com/dr.beauty.bialik"><img src="@/assets/images/header/icons/facebook.svg" alt=""></a>
          <a href="https://www.instagram.com/_dr__beauty/"><img src="@/assets/images/header/icons/instagram.svg" alt=""></a>
          <a href="https://www.tiktok.com/@drbeautyclinic?_d=secCgYIASAHKAESMgowfO594KVrDG0C83evIXLxP4sGCNwcvwJyEm%2FswRC%2BPpiQ8ilEw5vTtl0qmXmu5FPnGgA%3D&checksum=c531e1e09eb3c0ea2748eadee30ec33cab0bc260d00d529834371de87dcacc85&language=ru&preview_pb=0&sec_user_id=MS4wLjABAAAAQxk-Bbksxv8F3xA7riBs_i2jGBa-muToXyq-GkezQfgMelPpncJNAXW0t1-cDsgi&share_app_id=1233&share_item_id=6984394150594612481&share_link_id=7F333AE2-BE23-456C-A3B9-9980E2C56291&source=h5_m&timestamp=1629382274&tt_from=whatsapp&u_code=dhg0jegh10b1k0&user_id=6940301651899794433&utm_campaign=client_share&utm_medium=ios&utm_source=whatsapp&_r=1"><img src="@/assets/images/header/icons/tiktok.svg" alt=""></a>
          <a href="https://www.youtube.com/channel/UCEYd24fNcboNA4k7TUC1dXw"><img src="@/assets/images/header/icons/youtube.svg" alt=""></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  background-image: url('../../src/assets/images/map.png');
  // background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 45px 0 235px 0;

  &__container {
  }

  &__body {
    max-width: 445px;
    width: 100%;
    padding: 35px 30px;
    background: #fff;
    box-shadow: 0px 24px 35px rgba(0, 0, 0, 0.11);
    border-radius: 10px;
  }

  &__title {
    margin: 0 0 20px 0;
    font-size: 28px;
  }

  &__item {
  }

  &__socials {
    display: flex;

    a:not(:last-child) { margin: 0 10px 0 0; }
  }
}

.item {
  &:not(:last-child) { margin: 0 0 20px 0; }

  &__body {
    position: relative;
    padding: 0 0 0 30px;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__title {
    margin: 0 0 7px 0;
    font-size: 13px;
    color: #00000080;
  }

  &__subtitle {
  }
}

</style>
