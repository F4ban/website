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
    <div class="row position-absolute g-0 align-items-center intro-body vw-100 vh-100">
      <div class="col-lg-8 mx-auto">
        <transition name="slide-right-slow" appear>
          <h1 class="display-1" style="transition-delay: 250ms">Fabian Markl</h1>
        </transition>
        <transition name="slide-right-slow" appear>
          <h2 class="h5" style="transition-delay: 500ms">DevOps / Systems Administration</h2>
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
  "https://images.unsplash.com/photo-1544931170-3ca1337cce88?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1545112719-ce81d7de0b71?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1480506132288-68f7705954bd?auto=compress,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1480506404747-355771880b86?auto=compress,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1489257900339-13e688fb85fd?auto=compress,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1496674205429-924b32acd421?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop&crop=focalpoint&fp-y=0",
  "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=compress,format&cs=tinysrgb&w=1920&h=1080&fit=crop&crop=focalpoint&fp-y=1",
  "https://images.unsplash.com/photo-1509910387569-734a87698588?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1509910513818-4d13fdaf89c9?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1509910615591-5d2b5391393b?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1519876217051-4449feb0b589?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1609603078807-cf61d4f77e94?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1624696941338-934bf86c28b4?auto=compress,enhance,format&cs=tinysrgb&w=1920&h=1080&fit=crop",
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
  opacity: 0.4;
}
</style>
