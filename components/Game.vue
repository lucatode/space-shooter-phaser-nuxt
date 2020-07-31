<template>
  <div></div>
</template>

<script>
  import { createGame } from '../game/game-root'

  export default {
    mounted() {

      this.game = createGame(this.$el, this.$store)
    },

    beforeDestroy() {
      this.game.destroy()
    }  }
</script>
