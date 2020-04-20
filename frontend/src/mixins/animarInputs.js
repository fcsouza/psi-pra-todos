export default {
  mounted () {
    this.animarInputs()
  },
  methods: {
    animarInputs () {
      const blurInput = function () {
        var inputValue = $(this).val()
        if (inputValue === '') {
          $(this).removeClass('filled')
          $(this).parents('.form-group').removeClass('focused')
        } else {
          $(this).addClass('filled')
        }
      }

      const focusInput = function () {
        $(this).parents('.form-group').addClass('focused')
      }

      $('select').focus(focusInput).blur(blurInput)

      $('input').focus(focusInput).blur(blurInput())

      $('textarea').focus(focusInput).blur(blurInput())
    }
  }
}
