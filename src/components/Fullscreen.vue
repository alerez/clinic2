<template>
  <section class="main__fullscreen fullscreen fullscreen_main">
    <div class="fullscreen__container">
      <div class="fullscreen__body">
        <div class="fullscreen__content">
          <div class="fullscreen__title">{{ t('fullscreen.title') }}</div>
          <div class="fullscreen__text">{{ t('fullscreen.text') }}
          </div>
          <div class="fullscreen__subtitle">{{ t('fullscreen.subtitle') }}</div>
          <div class="fullscreen__button button">{{ t('fullscreen.button') }}</div>
        </div>

        <div class="fullscreen__image"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name: 'fullscreen',
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
