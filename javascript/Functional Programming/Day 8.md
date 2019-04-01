# 지연성2

### 결과를 만드는 함수 reduce, take
- map, filter 계열의 함수는 배열이나 iterable 안의 값의 안쪽에 있는 원소들을 함수로 합성하는 역할이라면 (지연성을 가짐), reduce나 take 계열의 함수는 iterable나 배열의 안에 값을 더하거나 꺼내서 결과를 만드는 함수이다.(시작점을 알림)
- 함수를 만들때 map 계열의 함수를 반복하다가 특정지점에서 reduce 같은 함수로 깨트려서 연산을 하고 함수를 종료하거나 그 다음 로직을 구성하는 역할을 한다.
- take 계열의 함수는 실제로 몇 개로 떨어질지 모르는 배열에서 값을 축약하고 리턴하는 성질을 가지고 있다. 

<hr />

### QueryStr 함수 만들기

- 객체로부터 쿼리스트링을 만들어내는 함수를 만들어보자.
- Object.entries는 배열을 key와 value를 entries 단위로 보여준다.

<pre>
<code>
  const queryStr = pipe(
    L.entries,
    L.map(([k, v]) => `${k}=${v}`),
  );

  //result

  limit=10&offset=10&type=notice
</code>
</pre>

<hr/>

### Array.prototype.join 보다 다형성이 높은 join 함수

- Array.prototype.join은 이터러블 객체에서는 사용할 수 없으니 join 함수를 reduce 계열의 함수를 통해 재사용 가능하도록 만들어보자.
- ${sep}의 경우 기본값을 미리 지정해준다.
- reduce를 통해 join 함수를 만들면 이터러블 프로토콜을 따르고 있고 지연성이 있기 때문에 Array.prototype.join 보다 훨씬 조합성이 있다.

<pre>
<code>
  L.entries = function*(obj) {
    for (const k in obj) yield [k, obj[k]];
  };

  const join = curry((sep = ',', iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

  const queryStr = pipe(
    L.entries,
    L.map(([k, v]) => `${k}=${v}`),
    join('&'),
  );

  console.log(queryStr({ limit: 10, offset: 10, type: 'notice' }));

  //result

  limit=10&offset=10&type=notice
</code>
</pre>