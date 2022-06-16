<template>
  <section class="main__detailed-article detailed-article">
    <div class="detailed-article__container">
      <div class="detailed-article__body">
        <div class="detailed-article__section">
          <div class="detailed-article__title title">{{propArticle.title}}</div>
            <div class="detailed-article__date">{{propArticle.date}}</div>

            <div class="detailed-article__image"><img src="../../src/assets/images/articles/det-ar-1.png" alt=""></div>
            <div class="detailed-article__subtitle subtitle">{{propArticle.subtitle}}</div>
            <div class="detailed-article__text">{{propArticle.text}}</div>

          <div class="detailed-article__subtitle subtitle">{{propArticle.subtitle2}}</div>
          <div class="detailed-article__text">{{propArticle.text2}}</div>
        </div>

        <div class="detailed-article__grid grid">
          <div class="grid__title title">Читайте так же</div>

<!--          <div class="grid__body">-->
<!--            <div class="detailed-article__acticle article"-->
<!--              v-for="i in 3"-->
<!--              :key="i"-->
<!--            >-->
<!--              <div class="article__image"><img :src="store.articles[0].img" alt=""></div>-->

<!--              <div class="article__body">-->
<!--                <div class="article__title">{{ store.articles[0].title }}</div>-->
<!--                <div class="article__date">{{ store.articles[0].date }}</div>-->
<!--                <div class="article__description">{{ store.articles[0].description }}</div>-->
<!--                <router-link :to="store.articles[0].path" class="article__link">Читать продолжение</router-link>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['propArticle']
}
</script>

<style lang="scss" scoped>

.detailed-article {

  &__container {
  }

  &__body {
    padding: 90px 0 0 0;

    @media(max-width: 790px) { padding: 60px 0; }
  }

  &__title,
  &__date,
  &__subtitle,
  &__text {
    padding: 0 55px;

    @media(max-width: 539.98px) { padding: 0 20px; }
    @media(max-width: 424.98px) { padding: 0; }

  }

  &__title {
    margin: 0 0 10px 0;
  }

  &__date {
    margin: 0 0 30px 0;
  }

  &__image {
    margin: 0 0 30px 0;

    img { width: 100%; }
  }

  &__subtitle {
    margin: 0 0 20px 0;
    font-weight: 500;
    font-size: 32px;
  }

  &__text {
    margin: 0 0 20px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  }
}

.grid {
  &__body {
    display: grid;
    grid-template: auto / repeat(auto-fit, minmax(min(365px, 100%), 1fr));
    gap: 20px;
  }

  &__title {
    margin: 70px 0 30px 0;
  }
}
</style>
