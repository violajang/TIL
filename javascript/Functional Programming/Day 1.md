# 함수형 프로그래밍 기본기
## 평가와 일급

### 1. 평가

- 코드가 계산되어 값을 만드는 것.
<br/>

### 2. 일급

- 값으로 다룰 수 있다.
- 변수에 담을 수 있다.
- 함수의 인자로 사용될 수 있다.
- 함수의 결과로 사용될 수 있다.
<br/>
<pre>
<code>
const a = 10
const add10 = a => a + 10;
const r = add10(a);
console.log(r)
</code>
</pre>

### 3. 일급 함수

- 함수를 값으로 다룰 수 있다.
- 변수에 함수를 값으로 받아서 담을 수 있다는 뜻.
- 조합성과 추상화의 도구

<pre>
<code>
const add5 = a => a + 5;
console.log(add5);
console.log(add5(5));

const f1 = () => () => 1;
console.log(f1());

const f2 = f1();
console.log(f2());
</code>
</pre>
<br/>

- 함수가 일급이라는 성질을 이용해서 많은 조합성을 만들어내고 추상화에 좋은 도구로 함수형 프로그래밍이 사용된다.
<hr />
<br/>

### 4. 고차 함수

- 함수를 값으로 다루는 함수

<pre>
<code>

const apply1 = f => f(1); // const apply1 = f => (a => a + 2)(1);
const add2 = a => a + 2;
console.log(apply1(add2));
console.log(apply1(a => a - 1));

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(1);
}

times(log, 3);

times(a => console.log(a + 10), 3);

// 함수를 값으로 받고 인자로 받아서 안에서 실행하면서 원하는 인자를 적용하는 함수. applicative programming.

</code>
</pre>

<br />

- 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수).
  + 함수이자 클로저를 기억하는 함수. 클로저를 리턴하는 함수. 함수가 함수를 만들어 리턴할 때는 클로저를 만들어서 리턴하기 위해서 사용함.

<pre>
<code>
const addMaker = a => b => a + b;
const add10 = addMaker(10);

console.log(add10(5));
</code>
</pre>
