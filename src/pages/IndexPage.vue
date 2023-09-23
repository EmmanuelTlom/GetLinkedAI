<template>
  <q-page class="">
    <section class="hero">
      <div class="container">
        <div class="row text justify-end">
          <h3 class="underline_text">
            Igniting a Revolution in HR Innovation
            <img src="../assets/underline.svg" alt="" />
          </h3>
        </div>
        <div class="grid">
          <div class="left">
            <h1 class="maintext">
              getlinked Tech
              <img
                class="creative"
                style="width: 53px; height: 73px; object-fit: contain"
                src="../assets/creative.svg"
                alt=""
              />
              <span class="row items-center no-wrap"
                >Hackathon
                <span class="text-primary q-ml-sm"> 1.0 </span>
                <img
                  style="width: 86px; height: 86px; object-fit: contain"
                  src="../assets/chain.svg"
                  alt="" />
                <img
                  style="width: 58px; height: 58px; object-fit: contain"
                  src="../assets/bomb.svg"
                  alt=""
              /></span>
            </h1>

            <p class="subtext q-mt-md">
              Participate in getlinked tech Hackathon 2023 stand <br />
              a chance to win a Big prize
            </p>

            <div class="q-mt-xl">
              <router-link to="/register" class="btn"> Register </router-link>
            </div>

            <div class="q-my-xl">
              <vue-countdown
                :time="2 * 24 * 60 * 60 * 1000"
                v-slot="{ hours, minutes, seconds }"
              >
                <!-- <span>{{ days }}D</span>, -->
                <span class="timer_scan">{{ hours }}<span>H</span></span>
                <span class="timer_scan">{{ minutes }}<span>M</span></span>
                <span class="timer_scan">{{ seconds }}<span>S</span></span>
              </vue-countdown>
            </div>
          </div>
          <div class="right">
            <img src="../assets/herobg.svg" alt="" />
            <!-- <star-blink /> -->
            <img src="../assets/stars.svg" alt="" />
          </div>
        </div>

        <div class="stars_">
          <img
            style="width: 26px; height: 32px"
            class="stars"
            src="../assets/whitestar.svg"
            alt=""
          />
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
        </div>
      </div>
    </section>

    <section class="about">
      <div class="grid container">
        <div class="left">
          <img src="../assets/bigidea.svg" alt="" />
        </div>
        <div class="right">
          <h4 class="section_maintext">
            Introduction to getlinked <br />
            <span class="text-primary"> tech Hackathon 1.0 </span>
          </h4>
          <p class="section_paragraph">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
        <img
          style="width: 89.43px; height: 67.974px"
          class="stars"
          src="../assets/arrowcurve.svg"
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
    <section class="rules">
      <div class="grid alt container">
        <div class="left">
          <img src="../assets/rules.svg" alt="" />
        </div>
        <div class="right">
          <h4 class="section_maintext">
            Rules and <br />
            <span class="text-primary"> Guidelines </span>
          </h4>
          <p class="section_paragraph">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
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
          src="../assets/whitestar.svg"
          alt=""
        />
      </div>
    </section>
    <section class="judge">
      <div class="grid container">
        <div class="left">
          <img src="../assets/judge.svg" alt="" />
        </div>
        <div class="right">
          <h4 class="section_maintext">
            Judging Criteria <br />
            <span class="text-primary"> Key attributes </span>
          </h4>
          <div>
            <p class="section_paragraph">
              <span class="section_paragraph main">
                Innovation and Creativity: </span
              >Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p class="section_paragraph">
              <span class="section_paragraph main"> Functionality: </span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
            <p class="section_paragraph">
              <span class="section_paragraph main">
                Impact and Relevance:
              </span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p class="section_paragraph">
              <span class="section_paragraph main">
                Technical Complexity:
              </span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p class="section_paragraph">
              <span class="section_paragraph main">
                Adherence to Hackathon Rules:
              </span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>

          <div class="judge_ q-mt-xl">
            <router-link to="/register" class="btn"> Read More </router-link>
          </div>
        </div>
      </div>

      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
      </div>
    </section>

    <section class="faq">
      <div class="grid alt container">
        <div class="left">
          <img src="../assets/faq.svg" alt="" />
          <div class="qmarks">
            <img
              style="width: 114px; height: 71px"
              src="../assets/mark1.svg"
              alt=""
            />
            <img
              style="width: 114px; height: 71px"
              src="../assets/mark.svg"
              alt=""
            />
            <img
              style="width: 114px; height: 71px"
              src="../assets/mark1.svg"
              alt=""
            />
          </div>
        </div>
        <div class="right">
          <h4 class="section_maintext">
            Frequently Ask <br />
            <span class="text-primary"> Question </span>
          </h4>
          <p class="section_paragraph">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <ul class="accordion">
            <li v-for="(faqItem, index) in faqItems" :key="index">
              <div
                style="gap: 1rem"
                class="row justify-between items-center no-wrap"
              >
                <p class="section_paragraph">
                  {{ faqItem.title }}
                </p>
                <q-btn
                  @click="toggleFaqItem(index)"
                  color="primary"
                  class="text-primary"
                  flat
                  no-caps
                >
                  <i class="fa-solid fa-plus"></i>
                </q-btn>
              </div>
              <!-- {{ faqItem.open }} -->
              <div v-if="faqItem.open">
                <p class="terms q-mt-md">
                  {{ faqItem.content }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/blurstar.svg"
          alt=""
        />
        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
      </div>
    </section>

    <section class="timeline_sec_">
      <div class="text-center">
        <h4 class="section_maintext">Timeline</h4>
        <p class="section_paragraph">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
      </div>
      <timeline-comp />
      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/blurstar.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
      </div>
    </section>

    <section class="sec_prizes">
      <div class="grid container">
        <div class="left">
          <img src="../assets/trophy.svg" alt="" />
        </div>
        <div class="right">
          <div class="head_text">
            <h4 class="section_maintext">
              Prizes and <br />
              <span class="text-primary"> Rewards </span>
            </h4>
            <p class="section_paragraph">
              Highlight of the prizes or rewards for winners and <br />
              for participants.
            </p>
          </div>

          <div class="prizes q-mt-xl">
            <div>
              <img src="../assets/silvermedal.svg" alt="" />
              <h3>
                2nd <br />
                <span>Runner</span>
              </h3>

              <p class="pricetext">N300,000</p>
            </div>
            <div>
              <img src="../assets/goldmedal.svg" alt="" />
              <h3>
                1st <br />
                <span>Runner</span>
              </h3>

              <p class="pricetext">N400,000</p>
            </div>
            <div>
              <img src="../assets/bronzemedal.svg" alt="" />
              <h3>
                3rd <br />
                <span>Runner</span>
              </h3>

              <p class="pricetext">N150,000</p>
            </div>
          </div>
        </div>
      </div>

      <div class="stars_">
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
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/blurstar.svg"
          alt=""
        />
      </div>
    </section>

    <section class="sec_partners">
      <div class="text-center">
        <h4 class="section_maintext">Partners and Sponsors</h4>
        <p class="section_paragraph">
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
      </div>

      <div class="partners">
        <div class="partner">
          <img src="../assets/liberty.svg" alt="" />
        </div>
        <div class="partner">
          <img src="../assets/libertypay.svg" alt="" />
        </div>
        <div class="partner">
          <img src="../assets/winwise.svg" alt="" />
        </div>
        <div class="partner">
          <img src="../assets/whisper.svg" alt="" />
        </div>
        <div class="partner">
          <img src="../assets/liberty.svg" alt="" />
        </div>
        <div class="partner">
          <img src="../assets/vizualpins.svg" alt="" />
        </div>
      </div>

      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
      </div>
    </section>

    <section class="privacy_section">
      <div class="grid alt container">
        <div class="left">
          <img src="../assets/privacykey.svg" alt="" />
          <img src="../assets/privacyshield.svg" alt="" />
        </div>
        <div class="right">
          <h4 class="section_maintext">
            Privacy Policy and <br />
            <span class="text-primary"> Terms </span>
          </h4>

          <p class="section_paragraph q-mb-lg color">
            Last updated on September 12, 2023
          </p>
          <p class="section_paragraph">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div class="privacy">
            <p class="section_paragraph">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h4 class="section_paragraph main">Licensing Policy</h4>
            <p class="section_paragraph q-mb-lg text-weight-bold">
              Here are terms of our Standard License:
            </p>

            <ul>
              <li>
                <div style="gap: 1rem" class="row no-wrap items-start">
                  <div class="q-mt-sm">
                    <img
                      style="width: 17px; height: 17px; flex-shrink: 0"
                      src="../assets/smalltick.svg"
                      alt=""
                    />
                  </div>
                  <p class="section_paragraph">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
              </li>
              <li>
                <div style="gap: 1rem" class="row no-wrap items-start">
                  <div>
                    <img
                      style="width: 17px; height: 17px; flex-shrink: 0"
                      src="../assets/smalltick.svg"
                      alt=""
                    />
                  </div>
                  <p class="section_paragraph">
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </li>
            </ul>

            <div class="row q-mt-lg justify-center">
              <q-btn flat no-caps class="btn"> Read More </q-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="stars_">
        <img
          style="width: 26px; height: 32px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />

        <img
          style="width: 20px; height: 26px"
          class="stars"
          src="../assets/sata.svg"
          alt=""
        />
        <img
          style="width: 15px; height: 20px"
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
          style="width: 16px; height: 22px"
          class="stars"
          src="../assets/whitestar.svg"
          alt=""
        />
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
      </div>
    </section>

    <FooterComp />
  </q-page>
</template>

<script setup>
import FooterComp from "src/components/FooterComp.vue";
import TimelineComp from "src/components/TimelineComp.vue";
import { ref } from "vue";
// import StarBlink from "src/components/StarBlink.vue";
const toggleFaqItem = (index) => {
  console.log(index);
  faqItems.value[index].open = !faqItems.value[index].open;
};
const faqItems = ref([
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus vel a corrupti quia necessitatibus asperiores vero deserunt sint doloremque.",
    open: false,
  },
  {
    title: "What happens if I need help during the hackathon?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus vel a corrupti quia necessitatibus asperiores vero deserunt sint doloremque.",
    open: false,
  },
  {
    title: " What happens if I don't have an idea for a project?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus vel a corrupti quia necessitatibus asperiores  vero deserunt sint doloremque.",
    open: false,
  },
  {
    title: " Can I join a team or do I have to come with one?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Minus ducimus vel a corrupti quia necessitatibus asperiores vero deserunt sint doloremque.",
    open: false,
  },
  {
    title: "What happens after the hackathon ends",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus vel a corrupti quia necessitatibus asperiores  vero deserunt sint doloremque.",
    open: false,
  },
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Minus ducimus vel a corrupti quia necessitatibus asperiores  vero deserunt sint doloremque.",
    open: false,
  },
]);
</script>
