<template>
  <section class="contact">
    <div class="grid container">
      <div class="left">
        <img src="../assets/designer.png" alt="" />
      </div>
      <div class="right">
        <h4 class="section_maintext">
          <span class="text-primary"> Register</span>
        </h4>
        <p class="section_paragraph row no-wrap items-baseline">
          Be part of this movement!
          <span class="q-ml-sm move"
            ><img
              style="width: 26px; height: 26px; flex-shrink: 0"
              src="../assets/move.svg"
              alt="" />
            <img
              style="width: 30px; height: 30px; flex-shrink: 0"
              src="../assets/move1.svg"
              alt=""
          /></span>
        </p>
        <!-- <h5 class="create"></h5> -->
        <h5 class="create q-mt-md">CREATE YOUR ACCOUNT</h5>

        <form @submit.prevent="register">
          <div class="inputs">
            <div class="grid">
              <div class="input">
                <label for="">Team’s Name</label>

                <input
                  required
                  placeholder="Enter the name of your group"
                  type="text"
                  v-model="data.team_name"
                />
              </div>
              <div class="input">
                <label for="">Phone</label>

                <input
                  required
                  placeholder="Enter your phone number"
                  type="text"
                  v-model="data.phone_number"
                />
              </div>
            </div>
            <div class="grid">
              <div class="input">
                <label for="">Email</label>

                <input
                  required
                  placeholder="Enter your email address"
                  type="text"
                  v-model="data.email"
                />
              </div>
              <div class="input">
                <label for="">Project Topic</label>

                <input
                  required
                  placeholder="What is your group project topic"
                  type="text"
                  v-model="data.project_topic"
                />
              </div>
            </div>
            <div class="grid">
              <div class="input">
                <label for="">Category</label>

                <select v-model="data.category" required>
                  <option disabled value="">Select your category</option>
                  <option
                    v-for="category in categorys"
                    :value="category.id"
                    :key="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="input">
                <label for="">Group Size</label>

                <select v-model="data.group_size" required>
                  <option disabled value="">Select</option>
                  <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>
            </div>
          </div>

          <p class="text-italic q-mb-sm text-primary">
            Please review your registration details before submitting
          </p>
          <div>
            <q-checkbox
              class="terms"
              v-model="data.privacy_poclicy_accepted"
              label="I agreed with the event terms and conditions  and privacy policy"
            />
          </div>

          <div class="q-mt-md">
            <q-btn
              :loading="loading"
              type="submit"
              style="width: 100%"
              flat
              no-caps
              class="btn"
            >
              Register Now
            </q-btn>
          </div>
        </form>
      </div>
    </div>

    <div class="stars_">
      <img
        style="width: 26px; height: 32px"
        class="stars"
        src="../assets/blurstar.svg"
        alt=""
      />
      <img
        style="width: 26px; height: 32px"
        class="stars"
        src="../assets/blurstar.svg"
        alt=""
      />

      <img
        style="width: 12px; height: 18px"
        class="stars"
        src="../assets/whitestar.svg"
        alt=""
      />
      <img
        style="width: 26px; height: 32px"
        class="stars"
        src="../assets/sata.svg"
        alt=""
      />
      <img
        style="width: 26px; height: 32px"
        class="stars"
        src="../assets/sata.svg"
        alt=""
      />
    </div>
  </section>

  <q-dialog v-model="dialog" class="dialog">
    <q-card>
      <div class="top">
        <img src="../assets/bigtick.svg" alt="" />
        <img src="../assets/successful.svg" alt="" />
      </div>

      <p class="q-mt-md section_paragraph main text-white text-center">
        <span class="text-white"
          >Congratulations <br />
          you have successfully Registered!</span
        >
      </p>

      <p class="q-mt-md terms text-white text-center">
        Yes, it was easy and you did it! <br />
        <span class="row justify-center items-center no-wrap">
          check your mail box for next step
          <img
            style="width: 20px; height: 20px"
            class="q-ml-sm"
            src="../assets/emoji.svg"
            alt=""
        /></span>
      </p>

      <div class="row justify-center q-mt-lg">
        <q-btn
          @click="dialog = false"
          class="btn"
          style="width: 90%"
          flat
          no-caps
        >
          Back
        </q-btn>
      </div>
      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
        <img
          style="width: 18px; height: 22px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 12px; height: 18px"
          class="stars"
          src="../assets/blurstar.svg"
          alt=""
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Notify } from "quasar";
import axios from "axios";

let val = ref(false);
let dialog = ref(false);
let loading = ref(false);
let categorys = ref([]);
let data = ref({
  privacy_poclicy_accepted: true,
  category: "",
  group_size: "",
});
let register = () => {
  if (!data.value.privacy_poclicy_accepted) {
    Notify.create({
      message: "You need to agree to our terms and conditions",
      color: "green",
      position: "top",
    });
    loading.value = true;
    axios
      .post("https://backend.getlinked.ai/hackathon/registration", data.value)
      .then((response) => {
        console.log(response);
        Notify.create({
          message: "Your application was successful",
          color: "green",
          position: "top",
        });
        loading.value = false;
        data.value = {
          privacy_poclicy_accepted: true,
          category: "",
          group_size: "",
        };
        dialog.value = true;
      })
      .catch(({ response }) => {
        console.log(response);
        loading.value = false;
        Notify.create({
          message: response.data.message,
          color: "red",
          position: "bottom",
          actions: [{ icon: "close", color: "white" }],
        });
      });
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://backend.getlinked.ai/hackathon/categories-list`
    );

    categorys.value = response.data;
    // console.log(response);
  } catch (error) {
    // console.error(error);
  }
});
</script>

<style lang="scss" scoped>
h5.create {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
p.text-italic {
  color: #ff26b9 !important;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  line-height: normal;
}
@media (max-width: 800px) {
  .grid.container {
    grid-template-columns: 1fr;
    place-items: center;
    text-align: center;
    gap: 0rem;

    .left {
      &::before {
        content: "";
        position: absolute;
        left: 0%;
        top: 0%;
        z-index: -1;
        width: 150px;
        height: 150px;
        background: linear-gradient(180deg, #903aff 0%, #150e28 100%);
        filter: blur(60px);
      }
    }
    .right {
      &::before {
        display: none;
      }
    }
  }
}
</style>
