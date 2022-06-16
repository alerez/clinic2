<script setup>
import { useStore } from '@/stores';

const store = useStore();
</script>


<template>
  <section class="main__more-contacts more-contacts">
    <div class="more-contacts__container">
      <div class="more-contacts__body">
        <div class="more-contacts__section">
          <div class="more-contacts__title title">Наши контакты</div>

          <div
            class="more-contacts__item item"
            v-for="i in store.contacts"
            :key="i.title"
          >
            <div class="item__body">
              <div class="item__icon"><img :src="i.img" alt=""></div>
              <div class="item__title">{{ i.title }}</div>
              <div class="item__subtitle">{{ i.subtitle }}</div>
            </div>
          </div>

          <div class="more-contacts__socials">
            <div class="contacts__socials">
              <a href="https://www.facebook.com/dr.beauty.bialik"><img src="@/assets/images/header/icons/facebook.svg" alt=""></a>
              <a href="https://www.instagram.com/_dr__beauty/"><img src="@/assets/images/header/icons/instagram.svg" alt=""></a>
              <a href="https://www.tiktok.com/@drbeautyclinic?_d=secCgYIASAHKAESMgowfO594KVrDG0C83evIXLxP4sGCNwcvwJyEm%2FswRC%2BPpiQ8ilEw5vTtl0qmXmu5FPnGgA%3D&checksum=c531e1e09eb3c0ea2748eadee30ec33cab0bc260d00d529834371de87dcacc85&language=ru&preview_pb=0&sec_user_id=MS4wLjABAAAAQxk-Bbksxv8F3xA7riBs_i2jGBa-muToXyq-GkezQfgMelPpncJNAXW0t1-cDsgi&share_app_id=1233&share_item_id=6984394150594612481&share_link_id=7F333AE2-BE23-456C-A3B9-9980E2C56291&source=h5_m&timestamp=1629382274&tt_from=whatsapp&u_code=dhg0jegh10b1k0&user_id=6940301651899794433&utm_campaign=client_share&utm_medium=ios&utm_source=whatsapp&_r=1"><img src="@/assets/images/header/icons/tiktok.svg" alt=""></a>
              <a href="https://www.youtube.com/channel/UCEYd24fNcboNA4k7TUC1dXw"><img src="@/assets/images/header/icons/youtube.svg" alt=""></a>
            </div>
          </div>
        </div>

        <div class="more-contacts__image">
          <img src="../../src/assets/images/mini-map.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.more-contacts {
  flex: 1 1 100%;
  background-image: url('../../src/assets/images/more-contacts.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 90px 0 70px 0;

  @media(max-width: 790px) { padding: 30px 0; }

  &__container {
    height: 100%;
  }

  &__body {
    display: grid;
    place-items: center;
    grid-template: 1fr / repeat(auto-fit, minmax(min(375px, 100%), 1fr));
    height: 100%;
  }

  &__section {
    padding: 35px 0px;
  }

  &__image {
    border-radius: 10px;
    // width: 100%;

    img { width: 100%; }
  }

  &__title {
    margin: 0 0 20px 0;
  }

  &__item {
  }

  &__socials {
    display: flex;

    @media(max-width: 790px) { justify-content: center; }

    a {
      img {
        width: 50px;
        height: 50px;

        @media(max-width: 1023.98px) {
          width: 40px;
          height: 40px;
        }
      }

      &:not(:last-child) { margin: 0 20px 0 0; }
    }
  }
}

.item {
  &:not(:last-child) { margin: 0 0 35px 0; }

  &__body {
    position: relative;
    padding: 0 0 0 50px;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;

    img { width: 100%; }
  }

  &__title {
    margin: 0 0 10px 0;
    font-weight: 400;
    font-size: 18px;
    color: #00000080;
  }

  &__subtitle {
    font-weight: 450;
    font-size: 24px;

    @media(max-width: 1023.98px) { font-size: 18px; }
  }
}

</style>
