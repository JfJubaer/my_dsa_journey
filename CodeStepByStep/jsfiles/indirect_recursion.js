let money = 1000;
let apple = 0;

const buyApple = (money) => {
  console.log(`total apple = ${apple}, remaining money = ${money}`);
  if (money >= 50) {
    buyMoreApple(money);
  }
};

const buyMoreApple = (money) => {
  money -= 90;
  apple++;
  buyApple(money);
};

buyApple(money);
