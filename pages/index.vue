<template>
  <div class="bg">
    <v-container>
      <div class="text-center">
        <h2 class="text-uppercase h1">🧔🏒</h2>
        <h1 class="my-title">Motivuj-se</h1>
      </div>

      <div v-for="cat in mapT" :key="cat.title">
        <h2 class="ml-3 mt-5 mb-2">{{ cat.title }}</h2>
        <v-row no-gutters>
          <v-col
            v-for="c in cat.cards"
            :key="c.sound"
            cols="12"
            xs="12"
            sm="6"
            md="4"
            lg="2"
            @click="play(c.sound)"
          >
            <audio :id="c.sound" :src="`/${c.sound}.mp3`"></audio>
            <div class="card pa-3 pl-6">
              <div>{{ c.icon }}</div>
              <div class="mt-1">{{ c.title }}</div>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="mt-10">
        <p class="mb-0 text-center bottom-text">
          Pana trenéra neznám, ❤ jeho řeč a chtěl jsem motivovat ostatní.
          <br />
          Pokud web porušuje nějakou právní náležitost,
          <a href="mailto:trenerovarec@seznam.cz"> kontaktujte </a> mě a web
          vymažu. Děkuji.
          <br />
          <a
            href="https://www.youtube.com/watch?v=8N6uTzjwCqI&t=407s"
            target="_blank"
            rel="noopener noreferrer"
            >Zdroj
          </a>
        </p>
        <br />
      </div>
    </v-container>
  </div>
</template>

<script>
const categories = {
  top: "TOP",
  jidlo: "Jídlo",
  zemepis: "Zeměpis"
};

export default {
  head: {
    title:
      "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
    meta: [
      {
        hid: "image",
        name: "image",
        content: "http://motivuj-se.cz/cover.png"
      },
      {
        hid: "title",
        name: "title",
        content:
          "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu."
      },
      { hid: "og:name", name: "og:name", content: "🧔 Motivuj-se" },
      {
        hid: "og:title",
        name: "og:title",
        content: "🧔 Motivuj-se | Budeš bydlet v tvarohárně"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "http://motivuj-se.cz/cover.png"
      }
    ]
  },

  asyncData: function(ctx) {
    ctx.seo({
      name: "🧔 Motivuj-se",
      title:
        "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
      templateTitle:
        "🧔 Motivuj-se | Každodenní motivace do posilovny, na led i do kanceláře",
      description:
        "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu.",
      image: "http://motivuj-se.cz/cover.png",
      url: "http://motivuj-se.cz/",
      language: "Czech",
      "og.name": "🧔 Motivuj-se",
      "og.title": "🧔 Motivuj-se | Budeš bydlet v tvarohárně",
      "og.description":
        "Každodenní motivace do posilovny, na led i do kanceláře jak je znáte z legednárního záznamu.",
      "og.locale": "cs",
      "og.url": "http://motivuj-se.cz/",
      "og.image": "http://motivuj-se.cz/cover.png"
    });
  },

  data() {
    return {
      cats: ["TOP", "Jídlo", "Zeměpis", "Doktor", "Motivace"],
      cards: [
        {
          icon: "🧀",
          title: "Budeš bydlet v tvarohárně",
          sound: "vtvaroharne",
          category: "TOP"
        },
        {
          icon: "❌",
          title: "Neexistuje",
          sound: "neexistuje",
          category: "TOP"
        },
        {
          icon: "🤨",
          title: "Nezajímá mě to",
          sound: "nezajima",
          category: "TOP"
        },
        {
          icon: "😡",
          title: "Vůbec mě to nezajímá",
          sound: "vubecnezajima",
          category: "TOP"
        },
        {
          icon: "👂",
          title: "Nechcu nic slyšet",
          sound: "nechcuslyset",
          category: "TOP"
        },
        {
          icon: "👑",
          title: "Se všema se bude vyhrávat",
          sound: "vyhravat",
          category: "Motivace"
        },
        {
          icon: "❌",
          title: "To je škrklý",
          sound: "skrly",
          category: "TOP"
        },
        {
          icon: "💩",
          title: "Neserte mě, abych vydával energii",
          sound: "vydavalenergii",
          category: "Motivace"
        },
        {
          icon: "✔️",
          title: "Tak to tady bude",
          sound: "taktotadybude",
          category: "TOP"
        },
        {
          icon: "🍑",
          title: "Prdel za Plzní",
          sound: "prdelzaplzni",
          category: "Zeměpis"
        },
        {
          icon: "🗓️",
          title: "Plán tréninku",
          sound: "plantreninku",
          category: "Plán tréninku"
        },
        {
          icon: "✈️",
          title: "Odletím na Floridu",
          sound: "nafloridu",
          category: "Zeměpis"
        },

        {
          icon: "🍲",
          title: "Nemáte energii a blbě žerete",
          sound: "blbezerete",
          category: "Jídlo"
        },
        {
          icon: "🚌",
          title: "Tyhlety píčoviny si řešte v Břeclavi",
          sound: "breclavi",
          category: "Zeměpis"
        },
        {
          icon: "🏠",
          title: "Budeš bydlet kde?",
          sound: "budetekde",
          category: "Jídlo"
        },
        {
          icon: "🤪",
          title: "Jste normální?",
          sound: "jstenormalni",
          category: "TOP"
        },
        {
          icon: "⚙️",
          title: "Teď ke konstruktivní práci",
          sound: "konstruktivnipraci",
          category: "Motivace"
        },
        {
          icon: "🤕",
          title: "Tady je to jak lazaret",
          sound: "lazaret",
          category: "TOP"
        },

        {
          icon: "🦴",
          title: "Vaše tělo nemůže vědět...",
          sound: "nemuzeachilovka",
          category: "Doktor"
        },
        {
          icon: "🛑",
          title: "Pravděbodobně jseš tady naposled",
          sound: "nezajemnaposled",
          category: "TOP"
        },
        {
          icon: "💨",
          title: "Kdybych fókl, odletěl bys do Líšně",
          sound: "odleteldolisne",
          category: "TOP"
        },
        {
          icon: "🦴",
          title: "Ti dám okostici, až ti bude špatně",
          sound: "okostici",
          category: "Doktor"
        },
        {
          icon: "🍕",
          title: "Pizza, no to ani náhodou",
          sound: "pizzu",
          category: "Jídlo"
        },
        {
          icon: "💔",
          title: "Co mě je potom kurva",
          sound: "pomepotom",
          category: "TOP"
        },
        {
          icon: "🍚",
          title: "Dělit stravu, rýže/maso",
          sound: "ryzimaso",
          category: "Jídlo"
        },
        {
          icon: "🐔",
          title: "Kuřecí jenom z farmy",
          sound: "sklizeno",
          category: "Jídlo"
        },
        {
          icon: "🦵",
          title: "Neexistuje aby si stežoval na koleno...",
          sound: "stezoval",
          category: "Doktor"
        },
        {
          icon: "🐷",
          title: "Nejvetší tluštoch, budeš dodržovat",
          sound: "tlustoch",
          category: "Jídlo"
        },
        {
          icon: "⛰️",
          title: "Tak to je vrchol",
          sound: "tojevrchol",
          category: "Motivace"
        },
        {
          icon: "🏋️",
          title: "Trenink může být i pro vás",
          sound: "treninkvas",
          category: "Motivace"
        },
        {
          icon: "🧀",
          title: "Budeš bydlet v tvarohárně",
          sound: "vtvaroharne",
          category: "Jídlo"
        },
        {
          icon: "🧀",
          title: "250g tvarohu 3x v týdnu",
          sound: "tvarohvtydnu",
          category: "Jídlo"
        },
        {
          icon: "🧊",
          title: "Ty na led taky nejdeš",
          sound: "tynejdes",
          category: "TOP"
        },
        {
          icon: "🧊",
          title: "Ti co nemohli běhat, nepůjdou na led",
          sound: "nepujdounaled",
          category: "TOP"
        },
        {
          icon: "🏋️‍♂️",
          title: "Uzdravovat v posilovně",
          sound: "uzdravenivposilovne",
          category: "TOP"
        },
        {
          icon: "👩",
          title: "Nebudu se bavit s vašima matkama",
          sound: "nebudumatky",
          category: "TOP"
        },

        {
          icon: "👩",
          title: "Žádná matka mi nebude volat",
          sound: "zadnamatka",
          category: "TOP"
        },
        {
          icon: "🥔",
          title: "Brambory zapoměntě",
          sound: "zapomenbrambory",
          category: "Jídlo"
        }
      ]
    };
  },
  methods: {
    play(soundId) {
      var audio = document.getElementById(soundId);
      console.log("audio", audio);
      audio.play();
    }
  },
  computed: {
    mapT() {
      return this.cats.map(c => {
        return { title: c, cards: this.cards.filter(ca => ca.category === c) };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background: #f4f9ff;
  padding-bottom: 0px;
}

.my-title {
  font-size: 26px;
}

.h1 {
  font-size: 30px;
}

.card {
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  min-height: 93px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.06);
  font-size: 14px;
  font-weight: 500;
  align-content: center;
  align-items: center;
  color: #2f4082;
  background: white !important;
}

@media only screen and (max-width: 600px) {
  .card {
    min-height: auto;
  }
}

.bottom-text {
  font-size: 12px;
  opacity: 0.7;
}
</style>
