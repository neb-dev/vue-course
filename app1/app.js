function attackDmg(min, max) {
  // calculate a random number between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

const game = {
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
    };
  },
  methods: {
    playerAttack() {
      const pVal = attackDmg(2, 10);
      this.monsterHp -= pVal;
      this.monsterAttack();
    },
    monsterAttack() {
      const mVal = attackDmg(5, 20);
      this.playerHp -= mVal;
    },
  },
  computed: {},
  watch: {},
};
const app = Vue.createApp(game);
app.mount('#game');
