let data = [];
let currentSize = data.length;
let max = 5;
function push(newVal) {
  if (currentSize >= max) {
    console.warn("Stack is full you can not add" + newVal);
    return;
  }
  data[currentSize] = newVal;
  currentSize += 1;
}

function pop() {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(20);
push(30);
push(10);
push(2);
push(100);
push(200);
pop();
pop();
push(300);

console.warn(data);
