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
          A list of skills and toolsets that I'm proficient in on a scale of 1-5
          stars.
        </div>
      </div>
      <div v-if="loading" class="row">
        <div class="col">
          <div class="spinner-border text-primary mt-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <div v-if="error" class="col">
        <div class="alert alert-danger" role="alert">
          {{ error }}
        </div>
      </div>
      <section
        v-for="{ title, skills } in skillsCategories"
        v-else
        :key="title"
      >
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
                        <div class="float-end">
                          <StarRating
                            v-model="skill.rating"
                            class="text-primary"
                          />
                        </div>
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import StarRating from "../components/StarRating.vue";

const skillsData = [
  {
    title: "Network & Server Administraton",
    skills: [
      { title: "Network Engineering", rating: 4 },
      { title: "Linux Server", rating: 5 },
      { title: "Windows Server", rating: 3 },
      { title: "FreeBSD Server", rating: 4 },
      { title: "Proxmox", rating: 5 },
      { title: "VMware", rating: 3 },
      { title: "OpnSense Firewall", rating: 5 },
      { title: "Grafana Monitoring", rating: 4 },
      { title: "Zabbix Monitoring", rating: 5 },
      { title: "CheckMK Monitoring", rating: 5 },
      { title: "LAMP-Stack Administration", rating: 4 },
      { title: "Nginx Administration", rating: 4 },
      { title: "MySQL", rating: 3 },
      { title: "Wazuh SIEM/XDR", rating: 3 },
    ],
  },
  {
    title: "Automating processes",
    skills: [
      { title: "Powershell", rating: 3 },
      { title: "Ansible", rating: 3 },
      { title: "Python", rating: 3 },
      { title: "Selenium", rating: 2 },
      { title: "Shell Scripting", rating: 3 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { title: "Git", rating: 3 },
      { title: "Docker (Compose)", rating: 5 },
      { title: "Cloudflare", rating: 3 },
    ],
  },
];

const skillsCategories = ref(skillsData);
</script>

<style lang="scss">
.opacity-15 {
  opacity: 0.15;
}
</style>
