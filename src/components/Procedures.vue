<template>
  <section class="main__procedures procedures">
    <div class="procedures__container">
      <div class="procedures__body">
        <div class="procedures__title title">Процедуры в клинике Dr Beauty</div>

        <div class="procedures__tiles">
<!--          <div class="procedures__tile tile"-->
<!--            v-for="tile in this.tiles"-->
<!--            :key="tile.title"-->
<!--          >-->
<!--            <div class="tile__body">-->
<!--              <div class="tile__image"><img :src="tile.img" alt=""></div>-->
<!--              <div class="tile__title">{{ tile.title }}</div>-->

<!--              <div class="tile__list">-->
<!--                <span-->
<!--                  v-for="l in tile.list"-->
<!--                  :key="l"-->
<!--                >{{ l }}</span>-->
<!--              </div>-->

<!--              <div class="procedures__button button">Узнать больше</div>-->
<!--            </div>-->
<!--          </div>-->
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>
          <div class="procedures__tile tile">
            <div class="tile__body">
              <div class="tile__image"><img src="@/assets/images/procedures/pr1.jpg" alt=""></div>
              <div class="tile__title">Удаление новообразований</div>

              <div class="tile__list">
                <span
                  v-for="l in this.tiles[0].list"
                  :key="l"
                >{{ l }}</span>
              </div>

              <div class="procedures__button button">Узнать больше</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'fullscreen',
  data () {
    return {
      tiles: [
        {
          img: '../assets/images/procedures/pr1.jpg',
          title: 'Удаление новообразований',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
        {
          img: './assets/images/procedures/pr2.jpg',
          title: 'Коррекция фигуры',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
        {
          img: '@/assets/images/procedures/pr3.jpg',
          title: 'Удаление волос лазером',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
        {
          img: '@/assets/images/procedures/pr4.jpg',
          title: 'Уколы красоты',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
        {
          img: '@/assets/images/procedures/pr5.jpg',
          title: 'Процедуры косметологии',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
        {
          img: '@/assets/images/procedures/pr6.jpg',
          title: 'Проффесиональный массаж',
          list: [
            'Почему стоит удалить родинку в Dr Beauty',
            'Ксантелазмы век',
            'Удаление кондилом в ротовой полости',
            'Удаление бородавок',
          ]
        },
      ]
    }
  },
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: 'ru'
    })

    return { locale, t }
  },
  mounted() {
    const rout = this.$route.path.split('/')

    if (rout[1] === 'he'){
      this.locale = 'he'
    }else {
      this.locale = 'ru'
    }

  }
}
</script>

<i18n>
{
  "ru": {
    "fullscreen": {
      "title": "DR.Beauty",
      "text": "Клиника эстетической медицины Dr Beauty предлагает вам более 5000 различных процедур для лица и тела! Мы сделаем все, чтобы улучшить качество вашей жизни и придать вам уверенность!",
      "subtitle": "Всегда к вашим услугам, Доктор Бьюти.",
      "button": "Наши услуги"
    }
  },
  "he": {
    "fullscreen": {
      "title": "DR.Beauty",
      "text": "ד\"ר ביוטי קליניק לרפואה אסתטית מציעה לך למעלה מ-5000 טיפולי פנים וגוף שונים! אנו נעשה הכל כדי לשפר את איכות חייך ולתת לך ביטחון!",
      "subtitle": "תמיד לשירותך, דוקטור ביוטי.",
      "button": "השירותים שלנו"
    }
  }
}
</i18n>

<style lang="scss" scoped>
.procedures {

  &__container {
  }

  &__body {
    padding: 60px 0 0 0;

    @media(max-width: 767.98px) {
      padding: 40px 0 0 0;
    }
  }

  &__title {
    margin: 0 0 60px 0;
    text-align: center;

    @media(max-width: 767.98px) {
      margin: 0 0 15px 0;
    }
  }

  &__tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    row-gap: 30px;
    column-gap: 20px;
  }

  &__tile {
  }

  &__button {
  }
}
.tile {
  box-shadow: 0px 21px 28px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &__body {
    padding: 25px;
  }

  &__image {
    margin: 0 0 15px 0;
    border-radius: 10px;

    img {
      width: 100%;
    }
  }

  &__title {
    max-width: 230px;
    margin: 0 0 15px 0;
    font-weight: 450;
    font-size: 24px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;

    span {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 0 0 25px;

      &:not(:last-child) { margin: 0 0 15px 0; }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #267C8F;
      }
    }
  }
}
</style>
