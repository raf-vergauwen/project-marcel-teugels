<template>
  <div class="c-notify">
    <div
      v-for="(message, index) in messages"
      :key="index"
      class="c-notify__message"
    >
      <button class="c-notify__close-btn" @click="closeMessage(index)">
        close
      </button>
      <p class="c-notify__message-text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notify',
  data() {
    return {
      latestIndex: 0,
      messages: {},
    };
  },
  mounted() {
    this.$root.$on('notify', (message) => {
      this.addMessage(message);
    });
  },
  methods: {
    closeMessage(index) {
      this.$delete(this.messages, index);
    },
    addMessage(message) {
      const curLatestIndex = this.latestIndex;
      this.$set(this.messages, this.latestIndex, message);
      setTimeout(() => {
        this.closeMessage(curLatestIndex);
      }, 5000);
      this.latestIndex++;
    },
  },
};
</script>

<style lang="scss">
.c-notify {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 0;
  width: 100%;
  max-width: 30rem;
  padding: 0 1rem 1rem;

  &__message {
    position: relative;
    background-color: $light-bg;
    box-shadow: 0 0 7px black;
    margin-top: 1rem;
    padding: 1rem 2.5rem 1rem 1rem;
    &-text {
      margin: 0;
    }
  }

  &__close-btn {
    position: absolute;
    display: block;
    right: 0.5rem;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    background-color: $dark-blue;
    color: transparent;

    &:after,
    &:before {
      content: '';
      display: block;
      height: 1rem;
      width: 2px;
      background-color: $light-bg;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.5rem;
      margin-left: -1px;
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
