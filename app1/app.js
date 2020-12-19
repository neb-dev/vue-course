function attackDmg(min, max) {
  // calculate a random number between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

const game = {
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      gameRound: 0,
    };
  },
  methods: {
    playerAttack() {
      this.gameRound++;
      const pVal = attackDmg(2, 10);
      this.monsterHp -= pVal;
      this.monsterAttack();
    },
    playerSpecialAttack() {
      this.gameRound++;
      const pVal = attackDmg(7, 30);
      this.monsterHp -= pVal;
      this.monsterAttack();
    },
    playerHeal() {
      this.gameRound++;
      const pVal = attackDmg(5, 15);
      if(this.playerHp + pVal > 100) {
        this.playerHp = 100;
      } else {
        this.playerHp += pVal;
      }
      this.monsterAttack();
    },
    monsterAttack() {
      const mVal = attackDmg(5, 20);
      this.playerHp -= mVal;
    },
  },
  computed: {
    playerHpBarWidth() {
      return {width: this.playerHp + '%'}
    },
    getSpecial() {
      return this.gameRound % 3 !== 0;
    },
    monsterHpBarWidth() {
      return {width: this.monsterHp + '%'};
    },
  },
  watch: {},
};
const app = Vue.createApp(game);
app.mount('#game');
