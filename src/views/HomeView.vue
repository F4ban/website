<template>
  <div>
    <div>
      <transition name="fade" appear>
        <div
          v-if="index !== null"
          :key="index"
          class="background-image position-absolute vw-100 vh-100 top-0"
          :style="{ backgroundImage: `url(${backgrounds[index]})` }"
        ></div>
      </transition>
    </div>
    <div
      class="row position-absolute g-0 align-items-center intro-body vw-100 vh-100"
    >
      <div class="col-lg-8 mx-auto">
        <transition name="slide-right-slow" appear>
          <h1 class="display-1" style="transition-delay: 250ms">
            Fabian Markl
          </h1>
        </transition>
        <transition name="slide-right-slow" appear>
          <h2 class="h5" style="transition-delay: 500ms">
            DevOps / Systems Administration
          </h2>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from "vue";

const index = ref(null);
let timeout = null;

const backgrounds = [
  "/images/background/bg1.webp",
  "/images/background/bg2.webp",
  "/images/background/bg3.webp",
  "/images/background/bg4.webp",
  "/images/background/bg5.webp",
];

onActivated(() => {
  if (index.value !== null && !timeout) {
    startTimeout();
  }
});

onDeactivated(() => {
  stopTimeout();
  nextBackground();
});

const nextBackground = async () => {
  const newIndex = (index.value + 1) % backgrounds.length;
  try {
    index.value = newIndex;
  } catch (error) {
    console.error(error);
  }
};

const startTimeout = () => {
  timeout = setTimeout(async () => {
    await nextBackground();
    startTimeout();
  }, 7500);
};

const stopTimeout = () => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = null;
};

(async () => {
  index.value = Math.floor(Math.random() * backgrounds.length); // Start with a random background
  startTimeout();
})();
</script>

<style lang="scss" scoped>
.background-image {
  background-size: cover;
  background-position: center;
  opacity: 0.3;
}
</style>
