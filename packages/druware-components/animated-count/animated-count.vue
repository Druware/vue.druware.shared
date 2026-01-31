<template>
  <div :class="cardClass">
    <div v-if="icon != null" class="icon-badge">
      <span :class="'icon is-large ' + iconStyle">
        <i :class="iconFamily + ' ' + icon" aria-hidden="true"></i>
      </span>
    </div>
    <div class="count">{{ currentCount }}</div>
    <div class="label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentCount: 0,
    }
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    iconFamily: {
      type: String,
      default: "fa",
    },

    count: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: null,
    },
    iconStyle: {
      type: String,
      default: "has-text-info",
    },
    card: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    cardClass() {
      return (this.card ? 'card ' : '') + "animated-count";
    }
  },
  methods: {
    async setCount(value) {
      var increment = Math.round(value / 10);
      while (this.currentCount < value) {
        this.currentCount += increment;
        await new Promise(resolve => setTimeout(resolve, 25));
      }
      this.currentCount = value;
    }
  },
  watch: {
    count(to,from) {
      if (to === from) return;
      this.setCount(to);
      return;
    }
  },
  mounted() {
    this.setCount(this.count);
  }
};
</script>
<style lang="scss" scoped>
.animated-count {
  // border: 1px solid black;
  text-align: center;
  align-content: space-evenly;
  vertical-align: middle;
  max-width: 140px;
  min-width: 140px;
  min-height: 128px;
  max-height:128px;

  .icon-badge {
    font-size: 2em;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .count {
    font-size: 1.25em;
    font-weight: 800;
  }

  .label {
    color: #999999;
    font-size: 0.75em;
    font-weight: 100;
  }
}
</style>
