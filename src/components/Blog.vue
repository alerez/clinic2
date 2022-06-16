
<template>
  <section class="main__blog blog">
    <div class="blog__container">
      <div class="blog__body">
        <div class="blog__title title">Популярные статьи</div>

        <div class="blog__categories">
          <div class="blog__category category"
            v-for="i in 11"
            :class="i === 1 ? 'category_active' : ''"
          >{{ i % 2 === 0 ? 'Пример' : 'Название категории' }}</div>
        </div>

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

        <div class="blog__pagination">123456</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataMass: [
        {
        img: '../../src/assets/images/articles/1.jpg',
        title: 'Сургитрон',
        date: '19.05.2022',
        description: 'Это радиоволновой аппарат для удаления новообразований (папиллом, бородавок, родинок, прижигание эрозии шейки матки). Применяется в основном в дерматологической, гинекологической и урологической практике. Сургитрон позволяется быстро...',
        path: '/ru/blog/article/1'
      },
        {
          img: '../../src/assets/images/articles/2.jpg',
          title: 'Стерилизация в клинике Dr Beauty',
          date: '19.05.2022',
          description: 'Для многих успешный результат лечения зависит от правильного выбора клиники. Эстетика и красота — очень важны в современной действительности, поэтому так важно выбрать правильное место ...',
          path: '/ru/blog/article/2'
        },
        {
          img: '../../src/assets/images/articles/3.jpg',
          title: 'Удаление новообразований лазером СО2',
          date: '19.05.2022',
          description: 'КАКИЕ ЖЕ НОВООБРАЗОВАНИЯ МОЖНО УДАЛИТЬ С ПОМОЩЬЮ ЛАЗЕРА СО2? Родинки Папилломы Кондиломы Бородавки Фибромы  ...',
          path: '/ru/blog/article/3'
        },
        {
          img: '@/assets/images/articles/4.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/4'
        },
        {
          img: '@/assets/images/articles/5.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/5'
        },
        {
          img: '@/assets/images/articles/6.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/6'
        },
        {
          img: '@/assets/images/articles/1.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/7'
        },
        {
          img: '@/assets/images/articles/1.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/8'
        },
        {
          img: '@/assets/images/articles/1.jpg',
          title: 'Название статьи',
          date: '19.05.2022',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          path: '/ru/blog/article/9'
        },]
    }
  }
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
