# 제너레이터와 이터레이터

### 1. 제너레이터와 이터레이터

- 제너레이터
  + 이터레이터이자 이터러블을 생성하는 함수
  + 순회할 값을 문장으로 표현하는것

<pre>
<code>

function *gen(){
  yield 1;
  if(false) yield 2;
  yield 3;
  return 100;
}

let iter = gen();

//result

iter.next();
{value: 1, done : false}
iter.next();
{value: 3, done : false}
iter.next();
{value: undefined, done : true}
iter.next();
{value: undefined, done : true}

</code>
</pre>

<hr />

### 2. odds
<pre>
<code>

function *infinity (i = 0){
  while (true) yield i++;
}

function *limit (l, iter){
  for (const a of iter){
    yield a;
    if(a == l) return;
  }
}

function *odds(l){
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
...

//result
1
3
5
7
9
...
39

</code>
</pre>

### 3. for…of, 전개 연산자, 구조 분해, 나머지 연산자

- 자바스크립트에서는 이터레이터 프로토콜을 가지고 활용할 수 있는 기능들과 문법들이 많고 그것이 잘 동작하고 있음.
- 많은 라이브러리들과 함수들도 이터러블 프로토콜을 따르도록 구성이 되어있다면 활용을 잘할 때 조합성이 높은 프로그래밍을 할 수 있다.

<pre>
<code>
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

//result

1 3 5 7 9
[1, 3, 5, ... 17, 19]

const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);

//result

1
[3, 5]

const [a, b, ...rest] = odds(10);
console.log(a);
console.log(b);
console.log(rest);

// result
1
3
[5, 7, 9]
</code>
</pre>