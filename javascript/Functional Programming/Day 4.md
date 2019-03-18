# map, filter, reduce

### 1. map
  - 외부의 값에 영향을 주고 싶을 때.
  - 함수형 프로그래밍에서는 인자를 받아 처리하는 것이 기본이기 때문에 map 함수에서 인자를 받을 때 받을 데이터를 미리 추상화 한다.
  - 인자에 전달 될 배열 또는 iterable 안에 있는 값에 1:1로 매칭되는 어떠한 값을 수집하겠다고 보조함수에 전달한다. 
  - 고차함수임.
<pre>
<code>
const products = [
    { name: '반팔티', price: 15000 },
    { name: '긴팔티', price: 20000 },
    { name: '핸드폰케이스', price: 15000 },
    { name: '후드티', price: 30000 },
    { name: '바지', price: 25000 },
  ];

//before

  let names = [];
  for (const p of products) {
    names.push(p.name);
  }


//after

  const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };

  console.log(map((p) => p.price, products));

//before

  let prices = [];
  for (const p of products) {
    prices.push(p.price);
  }

//after

  console.log(map((p) => p.name, products));
</code>
</pre>

### 2. 이터러블 프로토콜을 따른 map의 다형성 1


<pre>
<code>
document.querySelectorAll("*");
</code>
</pre>

- 위 코드는 Array 에서 상속받은 값이 아니기 때문에 map 함수를 쓸 수 없다.
- 위 코드는 iterable 프로토콜을 따르고 있다.

<hr />

<pre>
<code>
map(el => el.nodeName, document.querySelectorAll("*")));
const it = document.querySelectorAll("*")[Symbol.iterator]();

it.next();
it.next();
it.next();
it.next();

//result

["HTML", "HEAD", "SCRIPT", "SCRIPT", "BODY", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT", "SCRIPT"]
</code>
</pre>

- iterable 프로토콜을 따르는 map 함수를 이용하면 내부 데이터를 순회할 수 있다.
- 이외의 많은 함수 사용가능.

<pre>
<code>
  function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
  }

  console.log(map2((a) => a * a, gen()));

//result

  [4, 9, 16]
</code>
</pre>

- 앞으로 많은 헬퍼함수들과 조합성이 좋아 질 전망이 있음.
- 프로토타입, 클래스 기반으로 카테고리 안에 있는 값만 사용하고 다른 함수의 기법보다 유연하고 다형성이 높다.

<hr/>

### 3. 이터러블 프로토콜을 따른 map의 다형성 2

<pre>
<code>
let m = new Map();
  m.set('a', 10);
  m.set('b', 20);

  console.log(new Map(map2(([k, a]) => [k, a * 2], m)));

//result

  Map(2) {"a" => 20, "b" => 40}
</code>
</pre>

- 구조분해가 되어 보조함수를 통해 key와 값을 entry로 표현해 줌.
- map 객체를 다시 map 객체로의 조합이 가능함.

<hr />

### 4. filter

  - 특정 상품 이상, 이하의 조건의 데이터만 걸러낼 때 씀.
  - 내부에 있는 값에 대한 다형성은 보조함수를 통해서 구현을 해주고 외부의 값은 iterable 프로토콜을 따르는것을 통해서 구현해 줄 수 있다.

<pre>
<code>
//before

  let under20000 = [];
  for (const p of products) {
    if (p.price < 20000) under20000.push(p);
  }


//after 

const filter = (f, iter) => {
    let res2 = [];
    for (const a of iter) {
      if (f(a)) res2.push(a);
    }

    return res2;
  };

  console.log(...filter((p) => p.price < 20000, products));

//result

{name: "반팔티", price: 15000}name: "반팔티"price: 15000__proto__: Object {name: "핸드폰케이스", price: 15000}


//before

  let over20000 = [];
  for (const p of products) {
    if (p.price >= 20000) over20000.push(p);
  }


//after

  console.log(...filter((p) => p.price >= 20000, products));

//result

{name: "긴팔티", price: 20000} {name: "후드티", price: 30000} {name: "바지", price: 25000}

</code>
</pre>
<pre>
<code>
//another practice

  console.log(filter((n) => n % 2, [1, 2, 3, 4]));

//result

  [1, 3]

  console.log(
    filter(
      (n) => n % 2,
      (function*() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
      })(),
    ),
  );

//result

  [1, 3, 5]

  </code>
  </pre>

  <hr />

  ### 5. reduce
  - 값을 축약하는 함수
  - 재귀적으로 받은 보조함수를 이용하여 하나의 값으로 축약한다.

  - reduce의 내부 모습
  <pre>
  <code>
  console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5));</code>
  </pre>

<pre>
<code>
const nums = [1, 2, 3, 4, 5];
  let total = 0;
  for (const n of nums) {
    total = total + n;
  }

  console.log(total);

//result

  15

//after

  const reduce = (f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }

    return acc;
  };

//result

  15

  const add = (a, b) => a + b;

  console.log(reduce(add, 0, [1, 2, 3, 4, 5]));//result

//result
  
  15


  console.log(add(add(add(add(add(0, 1), 2), 3), 4), 5));//result

//result
  
  15

  console.log(reduce(add, [1, 2, 3, 4, 5]));//result

//result
  
  15

  </code>
  </pre>

  <hr />

  ### 6. reduce 2

  <pre>
  <code>
  reduce((total_price, product) => total_price + product.price, 0, products)

  //result

  105000
  </code>
  </pre>

  <hr />

  ### 7. map+filter+reduce 중첩 사용과 함수형 사고

  1. 가격들을 뽑는 map 함수 제작

  <pre>
  <code>
  map(p => p.price, products));</code>
  </pre>

  2. filter 함수를 사용하여 20000원 미만의 상품 추출 

  <pre>
  <code>
  map(p => p.price, filter(p => p.price < 20000, products)));</code>
  </pre>

  3. reduce 함수를 통해 20000원 미만의 상품 가격 모두 합산

  <pre>
  <code>
  const add = (a, b) => a + b;

  reduce(
    add, 
    map(p => p.price, 
    filter(p => p.price < 20000, products))));
    

  //version 2
  reduce(
    add,
    filter(n => n < 20000,
    map(p => p.price, products))));</code>
  </pre>

  - 코드가 평가되었을때 숫자가 되어있는 배열로 평가될것을 기대하면서 reduce 와 add 함수로 작성.
  - 값이 평가가 된 후 log로 전달 할것을 예상.