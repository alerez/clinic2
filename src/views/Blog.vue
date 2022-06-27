<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Path>
          Медицинское оборудование
        </Path>


        <div class="main__blog blog">
          <div class="blog__container">
            <div class="blog__body">
              <div class="blog__title title">Наше медицинское оборудование</div>

<!--              <div class="blog__categories">-->
<!--                <div class="blog__category category"-->
<!--                     v-for="i in 11"-->
<!--                     :class="i === 1 ? 'category_active' : ''"-->
<!--                >{{ i % 2 === 0 ? 'Пример' : 'Название категории' }}</div>-->
<!--              </div>-->

              <div class="blog__grid">
                <div class="blog__acticle article"
                     v-for="article in this.dataMass"
                     :key="article.title"
                >
                  <div class="article__image"><img :src="article.img" alt=""></div>

                  <div class="article__body">
                    <div class="article__title">{{ article.title }}</div>
                    <div class="article__date">{{ article.date }}</div>
                    <div class="article__description">{{ article.description }}</div>
                    <router-link :to="article.path" class="article__link">Читать продолжение</router-link>
                  </div>
                </div>
              </div>

<!--              <div class="blog__pagination">123456</div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import Blog from '@/components/Blog.vue';
import Path from '@/components/Path.vue';

export default {
  data () {
    return {
      dataMass: [
        {
          img: '../../src/assets/images/equipment/1.jpg',
          title: 'Сургитрон',
          date: '19.05.2022',
          description: 'Это радиоволновой аппарат для удаления новообразований (папиллом, бородавок, родинок, прижигание эрозии шейки матки). Применяется в основном в дерматологической, гинекологической и урологической практике. Сургитрон позволяется быстро...',
          path: '/ru/equipment/article/0'
        },
        {
          img: '../../src/assets/images/equipment/2.jpg',
          title: 'Стерилизация в клинике Dr Beauty',
          date: '19.05.2022',
          description: 'Для многих успешный результат лечения зависит от правильного выбора клиники. Эстетика и красота — очень важны в современной действительности, поэтому так важно выбрать правильное место ...',
          path: '/ru/equipment/article/1'
        },
        {
          img: '../../src/assets/images/equipment/3.jpg',
          title: 'Удаление новообразований лазером СО2',
          date: '19.05.2022',
          description: 'КАКИЕ ЖЕ НОВООБРАЗОВАНИЯ МОЖНО УДАЛИТЬ С ПОМОЩЬЮ ЛАЗЕРА СО2? Родинки Папилломы Кондиломы Бородавки Фибромы  ...',
          path: '/ru/equipment/article/2'
        },
        {
          img: '../../src/assets/images/equipment/4.jpg',
          title: 'Мезопистолет U225',
          date: '19.05.2022',
          description: 'Мезопистолет U225 в чем его преимущество? Процедура плазмотерапии для кожи и волос на данный момент является самой инновационной и действенной процедурой.  Но почему же не ...',
          path: '/ru/equipment/article/3'
        },
        {
          img: '../../src/assets/images/equipment/5.jpg',
          title: 'SOPRANO TITANIUM',
          date: '19.05.2022',
          description: 'Объединив уровни поглощения и проникновения трех разных длин волн, наряду с покрытием для лечения, комфортом и низким содержанием диодного лазера, Soprano с технологией TITANIUM обеспечивает ...',
          path: '/ru/equipment/article/4'
        },
        {
          img: '../../src/assets/images/equipment/6.jpg',
          title: 'VelaShape 2',
          date: '19.05.2022',
          description: 'Мечты о красивой фигуре не должны оставаться мечтами. Сотрудники клиники эстетической медицины Dr Beauty в этом уверены! С заботой о вас, мы выбрали разные варианты ...',
          path: '/ru/equipment/article/5'
        },
        {
          img: '../../src/assets/images/equipment/7.jpg',
          title: 'VelaShape 3',
          date: '19.05.2022',
          description: 'Как добиться желаемой фигуры без изнурительных диет и тяжелых физических нагрузок? В современном мире далеко не у всех есть время, возможность и желание соблюдать строжайшую ...',
          path: '/ru/equipment/article/6'
        },
        {
          img: '../../src/assets/images/equipment/8.jpg',
          title: 'CO2',
          date: '19.05.2022',
          description: 'Показания для процедуры с применением фракционного углекислородного лазера СО2 являются: морщины увядающая кожа постакне рубцы растяжки гиперпигментация устранение расширенных пор Как работает СО2-лазер Углекислородный лазер ...',
          path: '/ru/equipment/article/7'
        },
      ]
    }
  },
  components: {Path}
}
</script>

<style lang="scss" scoped>

.blog {
  flex: 1 1 100%;

  &__container {
    height: 100%;
  }

  &__body {
    height: 100%;
    padding: 90px 0 70px 0;

    @media(max-width: 790px) { padding: 60px 0; }
  }

  &__title {
    margin: 0 0 30px 0;
  }

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 30px 0;
  }

  &__category {
    // max-width: fit-content;
    font-size: 14px;
    text-align: center;

    @media(max-width: 400px) { width: 100%; }
  }

  &__grid {
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    gap: 20px;
  }

  &__acticle {
  }

  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
