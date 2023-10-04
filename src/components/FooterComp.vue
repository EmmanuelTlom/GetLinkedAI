<template>
  <footer class="container q-pt-xl">
    <div class="footer_grid">
      <div class="left">
        <h2 data-reveal class="footer_main">
          get<span class="text-primary">linked</span>
        </h2>
        <p data-reveal class="terms q-mt-sm">
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>

        <p class="terms q-mt-xl">
          Terms of Use <span class="q-mx-md text-primary">|</span> Privacy
          Policy
        </p>
      </div>
      <div class="middle">
        <h5 class="section_paragraph text-primary">Useful Links</h5>
        <div class="links">
          <ul>
            <li data-reveal>
              <q-btn flat no-caps @click="goto('overview')" class="terms">
                Overview
              </q-btn>
            </li>
            <li data-reveal>
              <q-btn flat no-caps @click="goto('timeline')" class="terms">
                Timeline
              </q-btn>
            </li>
            <li data-reveal>
              <q-btn flat no-caps @click="goto('faq')" class="terms">
                FAQs
              </q-btn>
            </li>
            <li data-reveal>
              <router-link :to="{ name: 'register' }" class="terms">
                Register
              </router-link>
            </li>
            <li style="gap: 1rem" class="row items-center no-wrap">
              <span style="white-space: nowrap" class="text-primary terms">
                Follow us</span
              >
              <span style="gap: 1rem" class="row no-wrap items-center">
                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/ig.svg"
                    alt=""
                /></a>
                <a href="">
                  <img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/x.svg"
                    alt=""
                /></a>

                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/fb.svg"
                    alt=""
                /></a>
                <a href=""
                  ><img
                    style="width: 24px; height: 24px; flex-shrink: 0"
                    src="../assets/in.svg"
                    alt=""
                /></a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <h5 data-reveal class="section_paragraph text-primary">Contact Us</h5>
        <div class="links">
          <ul>
            <li data-reveal style="gap: 1rem" class="row items-center no-wrap">
              <img
                style="width: 12px; height: 12px; flex-shrink: 0"
                src="../assets/call.svg"
                alt=""
              />
              <a href="" class="terms"> +234 679 81819 </a>
            </li>
            <li data-reveal style="gap: 1rem" class="row no-wrap">
              <img
                style="width: 12px; height: 12px; flex-shrink: 0"
                src="../assets/location.svg"
                alt=""
              />
              <address class="terms">
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="q-my-lg terms text-center">
      All rights reserved. © getlinked Ltd.
    </p>

    <div class="stars_">
      <img
        style="width: 20px; height: 26px"
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
        style="width: 16px; height: 22px"
        class="stars"
        src="../assets/whitestar.svg"
        alt=""
      />
      <img
        style="width: 15px; height: 20px"
        class="stars"
        src="../assets/blurstar.svg"
        alt=""
      />
    </div>
  </footer>
</template>

<script setup>
const goto = (arg) => {
  document.getElementById(arg).scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="sass" scoped></style>
