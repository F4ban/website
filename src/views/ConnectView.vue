<template>
  <section class="pt-page">
    <div class="container pb-5">
      <div class="row mb-4">
        <div class="col">
          <h1>Connect</h1>
        </div>
      </div>
      <section>

        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <form
              ref="form"
              novalidate
              class="needs-validation"
              @submit.prevent="submit"
            >
              <fieldset>
                <!-- Alerts -->
                <div class="mb-3">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    Failed to send message. Please try again later.
                  </div>

                  <div v-if="success" class="alert alert-success" role="alert">
                    Message sent successfully!
                  </div>
                </div>

                <!-- Name -->
                <div class="form-group mb-3">
                  <label for="nameInput" class="form-label">Name</label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <account-icon fixed-width />
                    </div>
                    <input
                      id="nameInput"
                      v-model="formData.name"
                      class="form-control"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="form-group mb-3">
                  <label for="emailInput" class="form-label">
                    Email Address
                  </label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <at-icon fixed-width />
                    </div>
                    <input
                      id="emailInput"
                      v-model="formData.email"
                      class="form-control"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <!-- Message -->
                <div class="form-group mb-3">
                  <label for="messageInput" class="form-label">
                    Message
                  </label>
                  <div class="input-group">
                    <div class="input-group-text">
                      <comment-icon fixed-width />
                    </div>
                    <textarea
                      id="messageInput"
                      v-model="formData.message"
                      class="form-control vertical"
                      required
                      style="min-height: 62px"
                      @input="
                        $event.target.style.height = '';
                        $event.target.style.height =
                          $event.target.scrollHeight + 'px';
                      "
                    ></textarea>
                  </div>
                </div>

                <!-- Submit -->
                <div class="form-group mb-3">
                  <button class="btn btn-outline-primary" :disabled="loading">
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
import { ref } from "vue";
import pb from "@/plugins/pocketbase";

import AccountIcon from "~icons/material-symbols/person-rounded";
import AtIcon from "~icons/material-symbols/alternate-email-rounded";
import CommentIcon from "~icons/material-symbols/mode-comment-rounded";
import SendIcon from "~icons/material-symbols/send-rounded";
import RefreshIcon from "~icons/mdi/loading";

const form = ref(null);

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref(false);

const submit = async () => {
  const valid = form.value.checkValidity();
  form.value.classList.add("was-validated");

  if (!valid) return;

  loading.value = true;
  error.value = false;
  success.value = false;

  try {
    await pb.collection("contacts").create({
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    });

    success.value = true;
    form.value.reset();

    formData.value = {
      name: "",
      email: "",
      message: "",
    };
  } catch (err) {
    console.error(err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
