import { useI18n } from 'vue-i18n'
export default {
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
