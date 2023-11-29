const product = { price: 5, quantity: 2 };
let total = 0;
let effect = () => (total = product.price * product.quantity);
// 1.新增依赖收集对象
const dep = new Set();

// 2.新增追踪依赖函数
const track = () => {
  dep.add(effect);
};

// 3.增加依赖触发执行函数
const trigger = () => {
  dep.forEach((effect) => effect());
};

effect();
//4.初始时，触发track收集依赖
track();
console.log(total); // --> 10

product.quantity = 3;
// 5.修改变量后，触发triger执行依赖
trigger();
console.log(total); // --> 15
