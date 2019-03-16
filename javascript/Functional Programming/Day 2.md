# ES6에서의 순회와 이터러블:이터레이터 프로토콜

### 1. 기존과 달라진 ES6에서의 리스트 순회

- ES6가 되면서 리스트 순회가 많이 바뀌었다.
1. ES6 이전의 리스트 순회 
<pre>
<code>
const list = [1, 2, 3];
for(var i = 0; i < list.length; i++){
  console.log(list[i])
}
</code>
</pre>

   + length라는 프로퍼티에 의존하고 숫자라는 키로 내부의 값에 접근하여 순회하도록 함. 
   <br/>
<hr />
2. ES6 리스트 순회 
<pre>
<code>
for (const a of list){
  console.log(a);
}
</code>
</pre>

- 문법적으로 간결해졌고 어떻게 순회하는지 선언적으로 리스트 안에 있는 값을 순회하도록 변경됨. 
<br/>
<hr />

### 2. Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜
1. Symbol.iterator <br/>
ES6에 추가 된 어떤 객체에 key로 사용될 수 있는 것.
for of 문과 연관이 있다.
<br/>
- Array를 통해 알아보기
<pre>
<code>
const arr = [1, 2, 3];
for (const a of arr) console.log(a);

//result
1
2
3
</code>
</pre>

- Set을 통해 알아보기
<pre>
<code>
const set = new Set([1, 2, 3]);
for (const a of set) console.log(a);

//result
1
2
3

</code>
</pre>

- Map을 통해 알아보기
<pre>
<code>
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (const a of map) console.log(a);

//result

["a", 1]
["b", 2]
["c", 3]
</code>
</pre>

<hr/>

### 3. 이터러블/이터레이터 프로토콜
- 이터러블
  + 이터레이터를 리턴하는 [Symbol.iterator] () 를 가진 값
- 이터레이터
  + {value, done} 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜
  + 이터러블을 for ...of, 전개 연산자 등과 함께 동작하도록 한 규약
<br />
<br />
- Array를 통해 알아보기
<pre>
<code>
let iterator = arr[Symbol.iterator]();

//result

iterator.next();
{value: 1, done : false}
iterator.next();
{value: 2, done : false}
iterator.next();
{value: 3, done : false}
iterator.next();
{value: undefined, done : true}
</code>
</pre>

- Set을 통해 알아보기
<pre>
<code>
let a = set[Symbol.iterator]();

//result

a.next();
{value: 1, done : false}
a.next();
{value: 2, done : false}
a.next();
{value: 3, done : false}
a.next();
{value: undefined, done : true}

</code>
</pre>

- Map을 통해 알아보기
<pre>
<code>
let a = map[Symbol.iterator]();

//result

a.next();
{value: Array(2), done : false}
a.next();
{value: Array(2), done : false}
a.next();
{value:  Array(2), done : false}
a.next();
{value: undefined, done : true}
</code>
</pre>

<pre>
<code>
for(const a of map.keys()) console.log(a);
for(const a of map.values()) console.log(a);
for(const a of map.entries()) console.log(a);


//result

a
b
c

1
2
3

["a", 1]
["b", 2]
["c", 3]
</code>
</pre>

<hr/>

### 3. 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의

- 사용자 정의 이터러블을 통해 알아보기

<pre>
<code>

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next(){
        return i === 0 ? { done: true } : { value: i--, done: false }
      },
      [Symbol.iterator](){
        return this;
      } //일정부분 순회가 진행되어 있던 상태에서 계속해서 next 될 수 있도록 하는 구문.
      (well-formed iterator)
    }
  }
}

let iterator = iterable[Symbol.iterator]();
for(const a of iterable) console.log(a);

//result

3
2
1

</code>
</pre>

### 4. 전개 연산자
- set, map 도 가능

<pre>
<code>
const a = [1, 2];
console.log([...a, ...[3, 4]]);

//result

[1, 2, 3, 4]

</code>
</pre>