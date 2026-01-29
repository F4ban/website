<template>
  <section class="text-center pt-page pb-5">
    <div class="container">
      <div class="row mb-4">
        <div class="col">
          <h1>Skills</h1>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-9 mx-auto">
          A list of skills and toolsets that I'm proficient in on a scale of 1–5
          stars.
        </div>
      </div>

      <!-- Loading -->
      <div v-if="isLoading" class="row">
        <div class="col">
          <div class="spinner-border text-primary mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="row">
        <div class="col">
          <div class="alert alert-danger" role="alert">
            {{ error }}
          </div>
        </div>
      </div>

      <!-- Content -->
      <template v-else>
        <section v-for="{ title, skills } in state" :key="title">
          <div class="row mb-2">
            <div class="col">
              <h2 class="h3">{{ title }}</h2>
            </div>
          </div>

          <div class="row mb-4">
            <template
              v-for="(chunk, i) in [
                skills.slice(0, Math.ceil(skills.length / 2)),
                skills.slice(Math.ceil(skills.length / 2)),
              ]"
              :key="i"
            >
              <div
                class="col-sm-8 col-lg-5 col-xl-4 mx-auto"
                :class="[i === 0 ? 'ms-lg-auto me-lg-0' : 'me-md-auto ms-lg-0']"
              >
                <ul class="list-group list-group-inverse">
                  <li
                    v-for="(skill, j) in chunk"
                    :key="skill.title"
                    class="list-group-item"
                  >
                    <transition name="fade" appear>
                      <div
                        class="row"
                        :style="{ transitionDelay: `${i * 250 + j * 50}ms` }"
                      >
                        <div class="col text-start">
                          {{ skill.title }}
                        </div>
                        <div class="col-auto">
                          <StarRating
                            v-model="skill.rating"
                            class="text-primary"
                          />
                        </div>
                      </div>
                    </transition>
                  </li>
                </ul>
              </div>

              <div
                v-if="i === 0"
                class="col-auto g-0 d-none d-lg-block border-end border-opacity-10 border-light"
              />
            </template>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<script setup>
import { useAsyncState } from "@vueuse/core";
import StarRating from "../components/StarRating.vue";
import pb from "../plugins/pocketbase.js";

const { state, isLoading, error } = useAsyncState(async () => {
  try {
    const response = await pb.collection("skill_headings").getFullList({
      expand: "skills_via_heading",
      sort: "order,title",
      fields:
        "title,expand.skills_via_heading.title,expand.skills_via_heading.rating",
    });

    return response
      .map(({ title, expand }) => ({
        title,
        skills: expand?.skills_via_heading?.sort(
          (a, b) => b.rating - a.rating || a.title.localeCompare(b.title),
        ),
      }))
      .filter(({ skills }) => skills?.length);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch skills. Please try again later.");
  }
});
</script>

<style lang="scss">
.opacity-15 {
  opacity: 0.15;
}
</style>
