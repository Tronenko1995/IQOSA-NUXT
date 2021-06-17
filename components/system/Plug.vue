<template>
    <transition
    :name="animate"
    appear>
      <div class="plug">
          <Preloader v-if="preloader" />
      </div>
    </transition>
</template>

<script>
import Preloader from '@/components/system/Preloader.vue'
export default {
  components: {
      Preloader
  },
  computed: {
    plug() { return this.$store.getters['plug/visible'] },
    animate() { return this.$store.getters['plug/animate'] },
    preloader() { return this.$store.getters['preloader/preloader'] }
  },
}
</script>

<style lang="scss" scoped>
.plug {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  // background: pink;
  background: #1b1b1b;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.start-enter {
  transform: translateY(0);
  &-active {
      transition: all 1s;
  }
  &-to {
      transform: translateY(0);
  }
}
.start-leave {
  transform: translateY(0);
  &-active {
    transition: all 1s;
  }
  &-to {
    transform: translateY(-100%);
  }
}
.page-enter {
  transform: translateY(100%);
  &-active {
      transition: all 1s;
  }
  &-to {
      transform: translateY(0);
  }
}
.page-leave {
  transform: translateY(0);
  &-active {
      transition: all 1s;
  }
  &-to {
    transform: translateY(100%);
  }
}
.up-enter {
  transform: translateY(100%);
  &-active {
      transition: all 1s;
  }
  &-to {
      transform: translateY(0);
  }
}
.dissolve-leave {
  opacity: 1;
  &-active {
      transition: all 1s;
  }
  &-to {
    opacity: 0;
  }
}
</style>
