export default {
  data () {
    return {
      toastConfig: {
        show: {
          theme: 'dark',
          icon: 'icon-person',
          position: 'topCenter',
          progressBarColor: 'rgb(0, 255, 184)',
          buttons: [
            [
              '<button>Ok</button>',
              function (instance, toast) {
                alert('Hello world!')
              },
              true
            ],
            [
              '<button>Close</button>',
              function (instance, toast) {
                instance.hide(
                  {
                    transitionOut: 'fadeOutUp',
                    onClosing: function (instance, toast, closedBy) {
                      console.info('closedBy: ' + closedBy)
                    }
                  },
                  toast,
                  'buttonName'
                )
              }
            ]
          ],
          onOpening: function (instance, toast) {
            console.info('callback abriu!')
          },
          onClosing: function (instance, toast, closedBy) {
            console.info('closedBy: ' + closedBy)
          }
        },
        ballon: {
          balloon: true,
          position: 'bottomCenter'
        },
        info: {
          position: 'topRight'
        },
        success: {
          position: 'topRight'
        },
        warning: {
          position: 'topRight'
        },
        error: {
          position: 'topRight'
        },
        question: {
          timeout: 20000,
          close: false,
          overlay: true,
          toastOnce: true,
          id: 'question',
          zindex: 999,
          position: 'center',
          buttons: [
            [
              '<button><b>YES</b></button>',
              function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              },
              true
            ],
            [
              '<button>NO</button>',
              function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              }
            ]
          ],
          onClosing: function (instance, toast, closedBy) {
            console.info('Closing | closedBy: ' + closedBy)
          },
          onClosed: function (instance, toast, closedBy) {
            console.info('Closed | closedBy: ' + closedBy)
          }
        }
      }
    }
  }
}
