<script>
import Path from '@/components/Path.vue';
import DetailedArticle from '@/components/DetailedArticle.vue';

export default {
  components: {
    Path,
    DetailedArticle
  },
  data() {
    return {
      dataMass: [
        {
          title: 'Сургитрон',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Это радиоволновой аппарат для удаления новообразований (папиллом, бородавок, родинок, прижигание эрозии шейки матки).\n' +
            '\n' +
            'Применяется в основном в дерматологической, гинекологической и урологической практике.\n' +
            '\n' +
            'Сургитрон позволяется быстро и без кровопотери лечить многие новообразования. При помощи этого аппарата можно в амбулоторных условиях за один прием осуществить конизацию шейки матки или взять биопсию.\n' +
            '\n' +
            'Сургитрон избавляет пациентов от таких неприятных послеоперационных последствий как — боль, инфекция и отек.\n' +
            '\n' +
            'В клинике Dr Beauty мы используем сургитрон для удаления новообразований на коже и во влагалище. ...',
          // subtitle2: 'Подзаголовок',
          // text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи 2',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи 3',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи 4',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи 5',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи 6',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
        {
          title: 'Название статьи',
          date: '19.05.2022',
          subtitle: 'Подзаголовок',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
          subtitle2: 'Подзаголовок',
          text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo consequat ...',
        },
      ],
      routers: 0
    }
  },
  mounted() {
    const routersLet = this.$route.path.split('/')
    this.routers = 1 + routersLet[4]
  }
}
</script>

<template>
  <main class="main">
    <div class="main__container">
      <div class="main__body">
        <Path/>

        <DetailedArticle v-bind:propArticle="dataMass[this.routers]"/>
      </div>
    </div>
  </main>
</template>
