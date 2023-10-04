<template>
  <section class="contact register">
    <div class="grid container">
      <div class="left">
        <h4 class="section_maintext text-primary">Get in touch</h4>
        <p class="section_paragraph main text-white">
          Contact <br />
          Information
        </p>
        <p class="section_paragraph main text-white">
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>
        <p class="section_paragraph main text-white">Call Us : 07067981819</p>
        <p class="section_paragraph main text-white">
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>

        <p class="">
          <span class="text-primary terms"> Share on</span>
          <span style="gap: 1rem" class="row items-center">
            <img
              style="width: 24px; height: 24px; flex-shrink: 0"
              src="../assets/ig.svg"
              alt="" />
            <img
              style="width: 24px; height: 24px; flex-shrink: 0"
              src="../assets/x.svg"
              alt="" />
            <img
              style="width: 24px; height: 24px; flex-shrink: 0"
              src="../assets/fb.svg"
              alt="" />
            <img
              style="width: 24px; height: 24px; flex-shrink: 0"
              src="../assets/in.svg"
              alt=""
          /></span>
        </p>
      </div>
      <div class="right">
        <h4 class="section_maintext">
          <span class="text-primary"> Questions or need assistance?</span>
        </h4>
        <h4 class="section_maintext">
          <span class="text-primary"> Let us know about it!</span>
        </h4>

        <form @submit.prevent="contact">
          <div class="inputs">
            <div class="input">
              <input
                v-model="data.first_name"
                required
                placeholder="First Name"
                type="text"
              />
            </div>
            <div class="input">
              <input
                v-model="data.email"
                required
                placeholder="Mail"
                type="email"
              />
            </div>
            <div class="input">
              <input
                v-model="data.phone_number"
                required
                placeholder="Phone number"
                type="text"
              />
            </div>
            <div class="input">
              <textarea
                required
                placeholder="Message"
                cols="30"
                rows="10"
                v-model="data.message"
              ></textarea>
            </div>
          </div>

          <div class="q-mt-md row justify-center">
            <q-btn :loading="loading" type="submit" flat no-caps class="btn">
              Submit
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
import axios from "axios";
import { ref } from "vue";
import { Notify } from "quasar";

let val = ref(false);
let dialog = ref(false);
let loading = ref(false);
let data = ref({});

let contact = () => {
  loading.value = true;
  axios
    .post("https://backend.getlinked.ai/hackathon/contact-form", data.value)
    .then((response) => {
      console.log(response);
      Notify.create({
        message: "Successful",
        color: "green",
        position: "top",
      });
      loading.value = false;
      data.value = {};
      dialog.value = true;
    })
    .catch(({ response }) => {
      // console.log(response);
      loading.value = false;
      Notify.create({
        message: "Please recheck credentials",
        color: "red",
        position: "bottom",
        actions: [{ icon: "close", color: "white" }],
      });
    });
};
</script>

<style lang="scss" scoped>
h5.create {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.left p {
  margin: 1rem 0;
}

.inputs .input {
  margin: 1.5rem 0;
}
.inputs .input input::placeholder,
.inputs .input textarea::placeholder {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.inputs .input textarea {
  height: auto;
}

@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
    place-items: center;
    text-align: center;
    gap: 0rem;

    .left {
      order: 2;
      .section_maintext,
      .section_paragraph {
        display: none;
      }
      &::before {
        display: none;
      }
    }
    .right {
      order: 1;
      padding-bottom: 2rem;

      .section_maintext {
        text-align: left;
      }
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
  }

  .inputs .input input::placeholder,
  .inputs .input textarea::placeholder {
    font-size: 13px;
  }
}
</style>
