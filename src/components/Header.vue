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
            <a
              href=""
              v-for="social in this.socials"
              :key="social.title"
            ><img :src="social.path" alt=""></a>
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
          path: './../assets/images/header/icons/facebook.svg',
          title: 'Facebook'
        },
        {
          path: './../assets/images/header/icons/instagram.svg',
          title: 'Instagram'
        },
        {
          path: './../assets/images/header/icons/tiktok.svg',
          title: 'TikTok'
        },
        {
          path: './../assets/images/header/icons/youtube.svg',
          title: 'Youtube'
        },
      ],
      navLinks: [
        {
          path: '/',
          title: 'Главная'
        },
        {
          path: '/about-us',
          title: 'O нашей косметологии'
        },
        {
          path: '/',
          title: 'Медицинское оборудование'
        },
        {
          path: '/',
          title: 'Наши процедуры'
        },
        {
          path: '/contacts',
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
