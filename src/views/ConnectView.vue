<template>
  <section class="pt-page">
    <div class="container pb-5">
      <div class="row mb-4">
        <div class="col">
          <h1>Connect</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">Here are some ways to reach out!</div>
      </div>
      <section></section>
      <section>
        <div class="row mt-4 mb-1">
          <div class="col">
            <h2 class="h3">Contact</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <form
              id="needs-validation"
              ref="form"
              data-focus="false"
              method="post"
              action="https://example.com/api/mail"
              role="form"
              novalidate
              @submit.prevent="submit"
            >
              <fieldset>
                <div class="col mb-3">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    Failed to send message. Please try again later.
                  </div>
                  <div
                    v-else-if="success"
                    class="alert alert-success"
                    role="alert"
                  >
                    Your message has not been sent. Still working on my private
                    E-Mail Server. Sorry!
                  </div>
                </div>
                <!--Name-->
                <div class="form-group mb-3">
                  <label for="nameInput" class="form-label">Name</label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <account-icon fixed-width />
                    </div>
                    <input
                      id="nameInput"
                      v-model="formData.name"
                      name="name"
                      placeholder="Name"
                      class="form-control"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <!--Email-->
                <div class="form-group mb-3">
                  <label for="emailInput" class="form-label"
                    >Email Address</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">
                      <at-icon fixed-width />
                    </div>
                    <input
                      id="emailInput"
                      v-model="formData.email"
                      name="email"
                      placeholder="name@example.com"
                      class="form-control"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <!--Message-->
                <div class="form-group mb-3">
                  <label for="messageInput" class="form-label">Message</label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <comment-icon fixed-width />
                    </div>
                    <textarea
                      id="messageInput"
                      v-model="formData.message"
                      class="form-control vertical"
                      name="text"
                      required
                      style="min-height: 62px"
                      @input="
                        $event.target.style.height = '';
                        $event.target.style.height = `${$event.target.scrollHeight}px`;
                      "
                    ></textarea>
                  </div>
                </div>
                <!-- Button -->
                <div class="form-group mb-3">
                  <button class="btn btn-outline-primary">
                    <refresh-icon
                      v-if="loading"
                      class="icon-spin"
                      fixed-width
                    />
                    <send-icon v-else fixed-width />
                    Send
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
//import { onActivated, onMounted, ref } from "vue";
import { ref } from "vue";
//import LinkedinIcon from "~icons/simple-icons/linkedin";
//import GithubIcon from "~icons/simple-icons/github";
import AccountIcon from "~icons/material-symbols/person-rounded";
import AtIcon from "~icons/material-symbols/alternate-email-rounded";
import CommentIcon from "~icons/material-symbols/mode-comment-rounded";
import SendIcon from "~icons/material-symbols/send-rounded";
import RefreshIcon from "~icons/mdi/loading";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const error = ref(null);
const success = ref(false);
const loading = ref(false);

const form = ref(null);

const submittedForms = []; // This array will hold submitted form data

const submit = async () => {
  const valid = form.value.checkValidity();
  form.value.classList.add("was-validated");

  if (valid) {
    loading.value = true;
    const wait = new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      // Simulate form submission
      submittedForms.push({
        ...formData.value,
        submittedAt: new Date().toISOString(),
      });

      await wait; // Simulate a delay for the form submission
      success.value = true;
      // Reset form data after submission
      formData.value = { name: "", email: "", message: "" };
    } finally {
      loading.value = false;
    }
  }
};
</script>
