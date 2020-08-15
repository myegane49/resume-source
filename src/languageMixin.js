export const languageMixin = {
  props: ['language'],
  computed: {
    text() {
      if (this.language === 'persian') {
        return this.persianText
      } else {
        return this.englishText
      }
    },
    direction() {
      if (this.language === 'persian') {
        return 'rtl'
      } else {
        return 'ltr'
      }
    }
  }
}