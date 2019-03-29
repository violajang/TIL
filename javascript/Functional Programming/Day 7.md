# 지연성 1

### range와 느긋한 L.range

- range : 숫자 하나를 받고 숫자 크기만한 배열을 리턴하는 함수
- 느긋한 L.range : range와 비슷하지만 조금 다르다.
이터러블을 이터레이터로 만들고 안에 있는 값을 하나씩 조회하면서 결과를 만든다.
- range는 즉시 값이 배열로 평가가 되고 L.range는 내부의 값을 최초로 순회할 때 값이 평가된다. 
- 배열안에 있는 값을 순회할 때 조건이 만족하기 전 까지는 모든 값을 하나씩 평가 할 필요가 없다. <br/> 그런면에서 L.range가 조금 더 실용적이다.


<pre>
<code>
    const range = (l) => {
      let i = -1;
      let res = [];
      while (++i < l) {
        res.push(i);
      }
      return res;
    };

    console.log(range(5));
    console.log(range(2));

    //result
    [0, 1, 2, 3, 4]
    [0, 1]

    var list = range(4);
    console.log(reduce(add, list));

    //result
    6
</code>
</pre>

- L.range 예제

<pre>
<code>
    const L = {};
    L.range = function*(l) {
      let i = -1;
      while (++i < l) {
        yield i;
      }
    };

    var list = L.range(4);
    console.log(list);
    console.log(reduce(add, list));

    //result
    L.range { < suspended > }
    6
</code>
</pre>

<hr>

### range와 느긋한 L.range 테스트
- 두 함수의 성능 차이를 확인해보자.
- 큰 차이는 나지 않지만 L.range가 필요한 값만 리턴하기 때문에 처리속도가 빠르다.

<pre>
<code>
    function test(name, time, f) {
      console.time(name);
      while (time--) f();
      console.timeEnd(name);
    }

    test('range', 10, () => reduce(add, range(1000000)));
    test('L.range', 10, () => reduce(add, L.range(1000000)));

    //result
    range: 473.246826171875ms
    L.range: 249.583984375ms
</code>
</pre>

<hr/>

### take
- 2개의 인자를 받는다. (limit 값, iterable) limit 값만큼만 리턴한다.
- iterable 프로토콜을 따르고 있고 iterable을 받아서 그 안에 next()를 통해 값을 꺼낸 후 
배열에 집어넣는 단순한 로직의 함수다.
- 지연성을 가지는 값을 iterable 프로토콜만 따른다면 조합이 가능하고 자바스크립트 고유의 프로토콜을 통해서 잘 구성할 수 있다는것이 장점이다.

<pre>
<code>
    const take = (l, iter) => {
      let res = [];
      for (const a of iter) {
        res.push(a);
        if (res.length == l) return res;
      }
    };

    console.log(take(5, range(100)));
    console.log(take(5, L.range(100)));

    //result
    [0, 1, 2, 3, 4]
    [0, 1, 2, 3, 4]
</code>
</pre>

- go 함수와 조합해보자.
<pre>
<code>
    go(range(10000), take(5), reduce(add), console.log);
    go(L.range(10000), take(5), reduce(add), console.log);
</code>
</pre>

<hr/>

### 이터러블 중심 프로그래밍에서의 지연 평가 (Lazy Evaluation)
- 제때 계산법
- 느긋한 계산법 (느긋하지만 영리한 계산법이라고도 볼수 있다.)
- 제너레이터/이터레이터 프로토콜을 기반으로 구현

<hr/>

### L.map
- 제너레이터/이터레이터 프로토콜을 기반으로 구현되는 map 함수.
- 평가를 미루는 성질을 가지고 평가순서를 달리 조작할 수 있는 준비가 되어있는 이터레이터를 반환하는 제너레이터 함수.

<pre>
<code>
    L.map = function*(f, iter) {
      for (const a of iter) yield f(a);
    };

    var it = L.map((a) => a + 10, [1, 2, 3]);
</code>
</pre>

<hr/>

### L.filter
- 제너레이터 함수를 통해 구현한다.
- 함수안에 조건문을 사용하여 필터링 하는 함수
- it.next() 를 할때마다 해당하는 값을 리턴하게끔 만들어야 한다.

<pre>
<code>
    L.fiter = function*(f, iter) {
      for (const a of iter) if(f(a)) yield a;
    };

    var it = L.map((a) => a % 2, [1, 2, 3, 4]);
</code>
</pre>

<hr/>

### map, filter 계열 함수들이 가지는 결합 법칙

- 사용하는 데이터가 무엇이든지
- 사용하는 보조 함수가 순수 함수라면 무엇이든지
- 아래와 같이 결합한다면 둘 다 결과가 같다.

  -  [[mapping mapping], [filtering filtering], [mapping mapping]]
=
  -  [[mapping, filtering, mapping], [mapping, filtering, mapping]]

<hr/>

### ES6의 기본 규악을 통해 구현하는 지연 평가의 장점

- 이전의 자바스크립트에서는 위와 같은 코드를 짠다면 복잡, 지저분하거나 했다면<br> 전혀 다른 형태의 규약들을 만들어서 해당하는 라이브러리 안에서만 동작할 수 있는 지연평가를 구현했어야 했고<br> 자바스크립트에서의 공식 값을 통해서 함수와 함수가 리턴을 통해서 지연을 원하는 시점에 평가해야겠다는 것을 만들어갈 수 있게 ES6에서 만들어졌다.

- 이러한 방식으로 구현한 지연성은 서로 다른 라이브러리던지 함수라던지 자바스크립트의 기본 값, 기본객체로 소통하기 때문에 조합성이 높고 안전하게 합성이 가능하다.