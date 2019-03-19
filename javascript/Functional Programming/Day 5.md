# 코드를 값으로 다루어 표현력 높이기

### 1. go
- 결과값이 연속적일 때 하나의 일을 하는 함수.
- reduce와 비슷하다.
<pre>
<code>
const go = (...args) => reduce((a, f) => f(a), args);
go(add(0, 1), (a) => a + 10, (a) => a + 100, console.log);

//result
11
</code>
</pre>

<hr />

### 2. pipe
- go 함수와 다르게 함수를 리턴하는 함수
- 함수들이 나열되어 있는 합성 된 함수를 만드는 함수.
- 내부적으로 go함수를 사용함.

<pre>
<code>
  const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
  const f = pipe(
    (a, b) => a + b,
    (a) => a + 10,
    (a) => a + 100,
  );

  console.log(f(0, 1));

  //result
  11
</code>
</pre>

<hr />

### 3. go를 사용하여 읽기 좋은 코드로 만들기
<pre>
<code>
//before

console.log(
  reduce(
    add,
    map(p => p.price,
      filter(p => p.price < 20000, products))));
</code>
</pre>
<pre>
<code>
//after

  go(
    products,
    (products) => filter((p) => p.price < 20000, products),
    (products) => map((p) => p.price, products),
    (prices) => reduce(add, prices),
    console.log,
  );
</code>
</pre>

<hr />

### 4. go+curry를 사용하여 더 읽기 좋은 코드로 만들기

- 함수를 값으로 받으면서 받아둔 함수를 내가 원하는 시점에 평가시키는 함수.
- 함수를 받아 리턴하고 인자를 받아 원하는 갯수만큼의 인자가 들어왔을때 원할 때 받아 둔 함수를 원하는 때에 리턴한다.

<pre>
<code>
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
</code>
</pre>

- map, filter, reduce 로 짠 코드도 더 읽기 좋게 만들기

<pre>
<code>
  const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  });

  const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
      if (f(a)) res.push(a);
    }

    return res;
  });

  const reduce = curry((f, acc, iter) => {
    if (!iter) {
      iter = acc[Symbol.iterator]();
      acc = iter.next().value;
    }
    for (const a of iter) {
      acc = f(acc, a);
    }

    return acc;
  });

go(
  products,
  products => filter(p => p.price < 20000, products),
  products => map(p => p.price, products),
  prices => reduce(add, prices),
  console.log
);

</code>
</pre>
<pre>
<code>
go(
  products,
  filter(p => price < 20000),
  map(p => p.price),
  reduce(add),
  console.log
)
</code>
</pre>

<hr />

### 5. 함수 조합으로 함수 만들기
- 고차함수들을 함수 조합으로 만들면서 중복을 제거한다.

<pre>
<code>  const total_price = pipe(
    map((p) => p.price),
    reduce(add),
  );

  const base_total_price = (predi) =>
    pipe(
      filter(predi),
      total_price,
    );

  go(products, base_total_price((p) => p.price < 20000), console.log);
  go(products, base_total_price((p) => p.price >= 20000), console.log);
</code>
</pre>