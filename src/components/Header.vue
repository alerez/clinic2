<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div class="header__top-row">
          <div class="header__logo logo"><img src="@/assets/images/logo-1.svg" alt=""></div>

          <div class="header__contact-links">
            <a href="" class="contact-link">
              <img src="@/assets/images/header/icons/location.svg" alt="">
              <span>Бен-Гурион 63, Кирьят-Бялик</span>
            </a>
            <a href="tel:052-4145005" class="contact-link">
              <img src="@/assets/images/header/icons/telephone-call.svg" alt="">
              <span>052-4145005</span>
            </a>
          </div>

          <div class="header__button button">Заказать звонок</div>

          <div class="header__lang">
            <img src="@/assets/images/header/icons/ru-Ru.svg" alt="">

            <select name="" id="">
              <option value="ru" >Ru</option>
              <option value="he" >He</option>
            </select>
          </div>

          <div class="header__socials">
            <a href="https://www.facebook.com/dr.beauty.bialik"><img src="@/assets/images/header/icons/facebook.svg" alt=""></a>
            <a href="https://www.instagram.com/_dr__beauty/"><img src="@/assets/images/header/icons/instagram.svg" alt=""></a>
            <a href="https://www.tiktok.com/@drbeautyclinic?_d=secCgYIASAHKAESMgowfO594KVrDG0C83evIXLxP4sGCNwcvwJyEm%2FswRC%2BPpiQ8ilEw5vTtl0qmXmu5FPnGgA%3D&checksum=c531e1e09eb3c0ea2748eadee30ec33cab0bc260d00d529834371de87dcacc85&language=ru&preview_pb=0&sec_user_id=MS4wLjABAAAAQxk-Bbksxv8F3xA7riBs_i2jGBa-muToXyq-GkezQfgMelPpncJNAXW0t1-cDsgi&share_app_id=1233&share_item_id=6984394150594612481&share_link_id=7F333AE2-BE23-456C-A3B9-9980E2C56291&source=h5_m&timestamp=1629382274&tt_from=whatsapp&u_code=dhg0jegh10b1k0&user_id=6940301651899794433&utm_campaign=client_share&utm_medium=ios&utm_source=whatsapp&_r=1"><img src="@/assets/images/header/icons/tiktok.svg" alt=""></a>
            <a href="https://www.youtube.com/channel/UCEYd24fNcboNA4k7TUC1dXw"><img src="@/assets/images/header/icons/youtube.svg" alt=""></a>
          </div>
        </div>

        <nav class="header__nav">
          <router-link
            class="header__link"
            v-for="links in this.navLinks"
            :key="links.title"
            :to="links.path"
          >{{ links.title }}</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        {
          path: '@/assets/images/header/icons/facebook.svg',
          title: 'Facebook'
        },
        {
          path: '@/assets/images/header/icons/instagram.svg',
          title: 'Instagram'
        },
        {
          path: '@/assets/images/header/icons/tiktok.svg',
          title: 'TikTok'
        },
        {
          path: '@/assets/images/header/icons/youtube.svg',
          title: 'Youtube'
        },
      ],
      navLinks: [
        {
          path: '/',
          title: 'Главная'
        },
        {
          path: '/ru/about-us',
          title: 'O нашей косметологии'
        },
        {
          path: '/ru/blog',
          title: 'Медицинское оборудование'
        },
        {
          path: '/ru/blog',
          title: 'Наши процедуры'
        },
        {
          path: '/ru/contacts',
          title: 'Контакты клиники'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);

  &__container { height: 100%; }

  &__body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #D6D6D6;
  }

  &__logo {
  }

  &__contact-links {
    display: flex;
    gap: 30px;
  }

  &__button {
  }

  &__lang {
    display: flex;
    align-items: center;
  }

  &__socials {
    display: flex;

    a:not(:last-child) { margin: 0 10px 0 0; }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 0;
    font-size: 17px;
    gap: 20px;
  }

  &__link {
    position: relative;
    min-width: fit-content;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      background-color: #33CBEC;
      transform: translateY(7px);
      transition: width .5s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
        transition: width .35s ease-in-out;
      }
    }
  }
}

@media(max-width: 1139.98px) {
  .header {
    &__top-row {
      justify-content: start;
      gap: 20px;
    }

    &__logo {
      margin-right: auto;
    }

    &__contact-links {
      gap: 15px;

      span { display: none; }
    }
  }
}

@media(max-width: 810px) {
  .header {
    &__top-row {
      display: grid;
      grid-auto-flow: column;
    }

    &__contact-links,
    &__button,
    &__lang,
    &__socials { grid-row: 2 / 3; }

    &__button {
      width: 100%;
      grid-column: 1 / 2;
    }
    &__contact-links { grid-column: 2 / 3; }
  }
}

@media(max-width: 585px) {
  .header {
    &__contact-links,
    &__lang,
    &__socials { grid-row: 3 / 4; }

    &__button {
      width: 100%;
      grid-column: 1 / 2;
    }

    &__socials,
    &__contact-links { grid-column: 1 / 2; }

    &__socials {
      margin-left: auto;
    }
  }
}

@media(max-width: 340px) {
  .header {
    &__contact-links,
    &__socials { grid-row: 3 / 4; }

    &__button {
      width: 100%;
      grid-column: 1 / 2;
    }

    &__socials,
    &__contact-links { grid-column: 1 / 2; }

    &__socials {
      margin-left: auto;
    }

    &__lang { grid-row: 4 / 5; }
  }
}
</style>
