<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Path>
          Наши процедуры
        </Path>


        <div class="main__blog blog">
          <div class="blog__container">
            <div class="blog__body">
              <div class="blog__title title">Наши процедуры</div>

              <div class="blog__categories">
                <div class="blog__category category"
                     v-for="i in nameProcedures"
                     :class="i.link === this.rout ? 'category_active' : ''">
                  <router-link :to="'/ru/procedures/' + i.link">{{ i.name }}</router-link>
                </div>
              </div>

              <div v-if="this.rout === undefined">
                <div class="blog__grid"
                     v-for="articl in this.dataMass">
                  <div class="blog__acrticle article"
                       v-for="article in articl"
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
              </div>
<!--              <div v-else>-->
<!--                <div class="blog__grid"-->
<!--                     v-for="articl in this.dataMass">-->
<!--                  <div v-else class="blog__article article"-->
<!--                       v-for="article in this.dataMass[this.rout.replace(/-/g, '_')]"-->
<!--                  >-->
<!--                    <div class="article__image"><img src="@/assets/images/articles/1.jpg" alt=""></div>-->
<!--  -->
<!--                    <div class="article__body">-->
<!--                      <div class="article__title">{{ article.title }}</div>-->
<!--                      <div class="article__date">{{ article.date }}</div>-->
<!--                      <div class="article__description">{{ article.description }}</div>-->
<!--                      <router-link :to="article.path" class="article__link">Читать продолжение</router-link>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
              <div v-else>
                <div class="blog__grid"
                >
                  <div class="blog__article article"
                       v-for="article in this.dataMass[this.rout.replace(/-/g, '_')]">
                    <div class="article__image"><img :src="article.img" alt=""></div>

                    <div class="article__body">
                      <div class="article__title">{{ article.title }}</div>
                      <div class="article__date">{{ article.date }}</div>
                      <div class="article__description">{{ article.description }}</div>
                      <router-link :to="article.path" class="article__link">Читать продолжение</router-link>
                    </div>
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
import axios from 'axios'

export default {
  data () {
    return {
      dataMass: {
        laser: [
          {
            img: '../../src/assets/images/procedures/laser/1.jpg',
            title: 'ЛАЗЕРНАЯ БЛЕФАРОПЛАСТИКА',
            date: '19.05.2022',
            description: 'Лазер СО2 зарекомендовал себя как лучший лазер, который  приносит по-настоящему удивительные результаты, а разнообразие и количество процедур просто поражает',
            path: '/ru/procedures/article/laser-1'
          },
          {
            img: '../../src/assets/images/procedures/laser/2.jpg',
            title: 'Гипертрофические рубцы',
            date: '19.05.2022',
            description: 'Рубцы на коже развиваются после повреждений кожи разного генеза (оперативные вмешательства, ожоги, воздействие разных химических веществ на кожу, травмы). ',
            path: '/ru/procedures/article/laser-2'
          },
          {
            img: '../../src/assets/images/procedures/laser/3.jpg',
            title: 'Келоидные рубцы',
            date: '19.05.2022',
            description: 'Рубец — это плотное образование соединительной ткани, возникшее вследствие регенерации тканей после хирургического вмешательства, травмы, воспаления',
            path: '/ru/procedures/article/laser-3'
          },
          {
            img: '../../src/assets/images/procedures/laser/4.jpg',
            title: 'Антивозрастные процедуры для лица',
            date: '19.05.2022',
            description: 'Старение кожи – это сложный процесс, кроме этого, он очень индивидуален. Чаще всего об антивозрастных процедурах стоит задумываться после 35 лет – ведь именно с этого возраста появляются заметные проявления процесса старения. Как они выглядят и в чем они заключаются...',
            path: '/ru/procedures/article/laser-4'
          },
          {
            img: '../../src/assets/images/procedures/laser/5.jpg',
            title: 'Удаление пигментации',
            date: '19.05.2022',
            description: 'На первый взгляд, пигментация абсолютно безобидна и присутствует у большинства — как минимум, в виде небольших веснушек или точек на лице и теле.',
            path: '/ru/procedures/article/laser-5'
          },
          {
            img: '../../src/assets/images/procedures/laser/6.jpg',
            title: 'Удаление сосудистой сеточки',
            date: '19.05.2022',
            description: 'Как избавиться от сосудов, которые так сильно портят внешний вид? Этим вопросом задаются многие мужчины и женщины, ведь с этой проблемой сталкиваются те, у кого тонкая кожа. ',
            path: '/ru/procedures/article/laser-6'
          },
          {
            img: '../../src/assets/images/procedures/laser/7.jpg',
            title: 'Удаление пост акне',
            date: '19.05.2022',
            description: 'Шлифовка кожи лица лазером СО2 — процедура, основная цель которой  — это омоложение кожного покрова, лечение рубцов после акне, лечение посттравматических шрамов и рубцов при помощи специального оборудования – самого современного лазера. ',
            path: '/ru/procedures/article/laser-7'
          },
          {
            img: '../../src/assets/images/procedures/laser/8.jpg',
            title: 'Блефаропластика без операции',
            date: '19.05.2022',
            description: 'Безоперационная лазерная блефаропластика становится действенным способом избавления от: мелких морщин, мешков под глазами, небольших грыж.',
            path: '/ru/procedures/article/laser-8'
          },
          {
            img: '../../src/assets/images/procedures/laser/9.jpg',
            title: 'Элос омоложение',
            date: '19.05.2022',
            description: 'Давайте помечтаем? Представим, что в один прекрасный день вы решили сходить в салон красоты на эпиляцию. И после этой процедуры обратили внимание, что на лице пропали морщины, исчезли сосудистые звездочки и пост акне, нет больше пигментных пятен. Кожа стала сиять, ее качество изменилось, вы сияете!',
            path: '/ru/procedures/article/laser-9'
          },
          {
            img: '../../src/assets/images/procedures/laser/10.jpg',
            title: 'Как избавиться от постакне?',
            date: '19.05.2022',
            description: 'Постакне — это атрофические последствия угревой сыпи. Постакне указывают на глубину поражению кожи и на неспособность эпидермиса к должной регенерации. Рубцы могут возникать как на лице, так и на теле',
            path: '/ru/procedures/article/laser-10'
          },
          {
            img: '../../src/assets/images/procedures/laser/11.jpg',
            title: 'Лечение ксантелазм',
            date: '19.05.2022',
            description: 'Ксантелазма — это плоское белое/желтое образование, которое наблюдается у людей, страдающих сахарным диабетом или гиперхолестеринемией. Располагаются они на верхних и нижних веках, могут быть как одиночные, так и множественные. ',
            path: '/ru/procedures/article/laser-11'
          },
        ],
        body_shaping: [
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Сургитрон',
            date: '19.05.2022',
            description: 'Это радиоволновой аппарат для удаления новообразований (папиллом, бородавок, родинок, прижигание эрозии шейки матки). Применяется в основном в дерматологической, гинекологической и урологической практике. Сургитрон позволяется быстро...',
            path: '/ru/procedures/article/1'
          },
          {
            img: '../../src/assets/images/articles/2.jpg',
            title: 'Стерилизация в клинике Dr Beauty',
            date: '19.05.2022',
            description: 'Для многих успешный результат лечения зависит от правильного выбора клиники. Эстетика и красота — очень важны в современной действительности, поэтому так важно выбрать правильное место ...',
            path: '/ru/procedures/article/2'
          },
          {
            img: '../../src/assets/images/articles/3.jpg',
            title: 'Удаление новообразований лазером СО2',
            date: '19.05.2022',
            description: 'КАКИЕ ЖЕ НОВООБРАЗОВАНИЯ МОЖНО УДАЛИТЬ С ПОМОЩЬЮ ЛАЗЕРА СО2? Родинки Папилломы Кондиломы Бородавки Фибромы  ...',
            path: '/ru/procedures/article/3'
          },
          {
            img: '../../src/assets/images/articles/4.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/4'
          },
          {
            img: '../../src/assets/images/articles/5.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/5'
          },
          {
            img: '../../src/assets/images/articles/6.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/6'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/7'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/8'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/9'
          },
        ],
        removal_of_neoplasms: [
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Сургитрон',
            date: '19.05.2022',
            description: 'Это радиоволновой аппарат для удаления новообразований (папиллом, бородавок, родинок, прижигание эрозии шейки матки). Применяется в основном в дерматологической, гинекологической и урологической практике. Сургитрон позволяется быстро...',
            path: '/ru/procedures/article/1'
          },
          {
            img: '../../src/assets/images/articles/2.jpg',
            title: 'Стерилизация в клинике Dr Beauty',
            date: '19.05.2022',
            description: 'Для многих успешный результат лечения зависит от правильного выбора клиники. Эстетика и красота — очень важны в современной действительности, поэтому так важно выбрать правильное место ...',
            path: '/ru/procedures/article/2'
          },
          {
            img: '../../src/assets/images/articles/3.jpg',
            title: 'Удаление новообразований лазером СО2',
            date: '19.05.2022',
            description: 'КАКИЕ ЖЕ НОВООБРАЗОВАНИЯ МОЖНО УДАЛИТЬ С ПОМОЩЬЮ ЛАЗЕРА СО2? Родинки Папилломы Кондиломы Бородавки Фибромы  ...',
            path: '/ru/procedures/article/3'
          },
          {
            img: '../../src/assets/images/articles/4.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/4'
          },
          {
            img: '../../src/assets/images/articles/5.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/5'
          },
          {
            img: '../../src/assets/images/articles/6.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/6'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/7'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/8'
          },
          {
            img: '../../src/assets/images/articles/1.jpg',
            title: 'Название статьи',
            date: '19.05.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
            path: '/ru/procedures/article/9'
          },
        ],
        beauty_injections: [],
        plasma_therapy: [],
        massage: [],
        cosmetic_procedures: [],
        laser_stretch_marks_removal: [],
        general_information: [],
      },
      nameProcedures: [
        {
          link: 'laser',
          name: 'Лазерные процедуры'
        },
        {
          link: 'body-shaping',
          name: 'Коррекция фигуры'
        },
        {
          link: 'removal-of-neoplasms',
          name: 'Удаление новообразований'
        },
        {
          link: 'beauty-injections',
          name: 'Уколы красоты'
        },
        {
          link: 'plasma-therapy',
          name: 'Плазмотерапия'
        },
        {
          link: 'massage',
          name: 'Массаж'
        },
        {
          link: 'cosmetic-procedures',
          name: 'Косметические процедуры'
        },
        {
          link: 'laser-stretch-marks-removal',
          name: 'Удаление растяжек лазером'
        },
        {
          link: 'general-information',
          name: 'Общая информация'
        },
      ],
      dataProcedures: []
    }
  },
  methods: {
    getData: async function () {
      const getFootwear = {
        method: 'get',
        url: '' + '/db.json',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      await axios(getFootwear)
        .then(response => response.data)
        .then(res => {
          this.dataProcedures = res.procedures.name
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  components: {Path},
  computed: {
    rout: function ( ) {
      const routVar = this.$route.path.split('/')
      return routVar[3]
    },
  },
  created() {
    this.getData()
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
