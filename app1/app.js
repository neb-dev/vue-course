function attackDmg(min, max) {
  // calculate a random number between min and max
  return Math.floor(Math.random() * (max - min)) + min;
}

function isGameOver() {

}

const game = {
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      gameRound: 0,
      victory: null,
    };
  },
  methods: {
    newGame() {
      this.playerHp = 100;
      this.monsterHp = 100;
      this.victory = null;
      this.gameRound = 0;
    },
    surrender() {
      this.victory = 'monster';
    },
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
      const pVal = attackDmg(10, 35);
      if (this.playerHp + pVal > 100) {
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
      if(this.playerHp < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHp + '%' };
    },
    getSpecial() {
      return this.gameRound % 3 !== 0;
    },
    monsterHpBarWidth() {
      if(this.monsterHp < 0) {
        return { width: '0%' };
      }
      return { width: this.monsterHp + '%' };
    },
  },
  watch: {
    playerHp(val) {
      if(val <= 0 && this.monsterHp <= 0) {
        // draw
        this.victory = 'draw';
      } else if(val <= 0) {
        // monster wins
        this.victory = 'monster';
      }
    },
    monsterHp(val) {
      if(val <= 0 && this.playerHp <= 0) {
        // draw
        this.victory = 'draw';
      } else if(val <= 0) {
        // player wins
        this.victory = 'player';
      }
    }
  },
};
const app = Vue.createApp(game);
app.mount('#game');
