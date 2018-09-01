# Array Explorer

## 자바스크립트 배열 탐색기
### 문서를 뒤지지 않고 필요한 배열 메서드를 찾습니다.
---
> 한가지 요소 또는 다른 배열을 가지고 있다.
1. Array.splice() : 배열에서 요소를 추가하거나 제거합니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.splice(2, 0, 'tacos');
// (요소를 추가할 인덱스, delete 인덱스, 추가할 요소)
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[5, 1, "tacos", 8]
</code>
</pre>


2. Array.splice() : <b>배열 끝에</b> 한가지 이상의 요소를 추가하고 배열의 새로운 길이를 반환합니다.
<pre>
<code>
let arr = [5, 1, 8];
arr.push(2);
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[5, 1, 8, 2]
</code>
</pre>

3. Array.unshift() : 한가지 이상의 요소를 배열 앞에 추가하고 배열의 새로운 길이를 반환합니다.
<pre>
<code>
let arr = [5, 1, 8];
arr.unshift(2, 7);
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[2, 7, 5, 1, 8]
</code>
</pre>

4. Array.concat() : 다른 배열 및 / 또는 값과 결합된 새로운 배열을 반환합니다.
<pre>
<code>
let arr = [5, 1, 8];
let arr2 = ['a', 'b', 'c'];
let arr3 = arr.concat(arr2);
//arr3.concat(arr); 는 배열의 순서가 바뀜.
console.log(arr3);
</code>
</pre>

<pre>
<code>
//result

[5, 1, 8, "a", "b", "c"]
</code>
</pre>


---
> 요소 제거하기
1. Array.splice() : 배열에서 요소를 추가하거나 제거합니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.splice(2, 1);
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[5, 1]
</code>
</pre>

2. Array.pop() : 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.pop();
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[5, 1]
</code>
</pre>

3. Array.shift() : 배열에서 첫번째 요소를 제거하고 그 요소를 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.shift();
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[1, 8]
</code>
</pre>

4. Array.slice() : slice() 메서드는 배열의 일부에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 시작 요소만 지정하거나 시작과 끝(여기서 끝은 배열 길이로 기본 설정됩니다) 모두 쉼표로 구분하여 지정할 수 있습니다. 원래 배열은 수정되지 않습니다.

<pre>
<code>
let arr = [5, 1, 8];
//첫번째부터 지운다
let slicedArr = arr.slice(1);
console.log(arr);
console.log(slicedArr);
</code>
</pre>

<pre>
<code>
//result

[5, 1, 8]
[1, 8]
</code>
</pre>

---
> 요소 찾기 (한가지 요소)
- 특정 요소가 존재하는 경우 출력하기
1. Array.includes() : 배열에 특정 요소가 포함되는지 판별하여 적절하게 true 또는 false를 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.includes(1));
</code>
</pre>

<pre>
<code>
//result

true
</code>
</pre>

- 특정 항목의 첫번째 인덱스 찾기
1. Array.indexOf() : 지정된 요소가 배열 내에 있는 최초의 인덱스를 돌려줍니다. 존재하지 않는 경우는 -1을 리턴합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.indexOf(5));
</code>
</pre>

<pre>
<code>
//result

0
</code>
</pre>

- 특정 항목의 마지막 인덱스 찾기
1. Array.lastIndexOf() : 지정된 값과 동일한 배열 내의 요소의 마지막 (최대의) 인덱스를 돌려줍니다. 발견되지 않는 경우는 -1을 리턴합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.lastIndexOf(5));
</code>
</pre>

<pre>
<code>
//result

0
</code>
</pre>

- 조건을 만족시키는 첫번째 요소 찾기
1. Array.find() : 배열의 요소가 제공된 테스트 함수를 충족하거나 찾지 못한 경우 undefined를 반환하며 배열에 있는 경우 발견된 값을 반환합니다. findIndex()와 유사하지만 인덱스 대신 요소를 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
let isTiny = (el) => el < 2;
console.log(arr.find(isTiny));
</code>
</pre>

<pre>
<code>
//result

1
</code>
</pre>

- 조건을 만족시키는 첫번째 인덱스 찾기
1. Array.find() : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소의 인덱스를 반환합니다. 그렇지 않으면 -1이 반환됩니다. find()와 유사하지만 요소 대신 인덱스를 반환합니다.
<pre>
<code>
let arr = [5, 1, 8];
let isBig = (el) => el > 6;
console.log(arr.findIndex(isBig));
</code>
</pre>

<pre>
<code>
//result

2
</code>
</pre>

- 배열의 값을 시작점부터 마지막까지 줄여나가기
1. Array.reduce() : 누적 계산 값과 배열의 각 값에 대해 (왼쪽에서 오른쪽으로) 함수를 적용하여 단일 값으로 줄입니다.
<pre>
<code>
let arr = [5, 1, 8];
let reducer = (a,b) => a + b;
console.log(arr.reduce(reducer));
</code>
</pre>

<pre>
<code>
//result

14
</code>
</pre>

- 배열의 값을 마지막부터 시작값까지 줄여나가기
1. Array.reduceRight() : 누적 계산 값과 배열의 각 값에 대해 (오른쪽에서 왼쪽으로) 함수를 적용하여 단일 값으로 줄입니다.
<pre>
<code>
let arr = [5, 1, 8];
[arr, [0, 1]].reduceRight((a, b) => {return a.concat(b)
}, []);
</code>
</pre>

<pre>
<code>
//result

[0, 1, 5, 1, 8]
</code>
</pre>

> 요소찾기 (한가지 또는 다수의 요소)
- 사용자 정의 조건을 기반으로 한 값
1. Array.filter() : 제공된 필터 함수 참으로 반환되는 배열의 모든 요소를 새로운 배열을 생성합니다.
<pre>
<code>
let arr = [5, 1, 8];
let filtered = arr.filter(el => el > 4);
console.log(filtered);
</code>
</pre>

<pre>
<code>
//result

[5, 8]
</code>
</pre>

- 모든 항목이 조건을 만족하는지 여부
1. Array.every() : 이 배열의 모든 요소가 제공된 테스트 함수를 만족하면 true를 리턴합니다.
<pre>
<code>
let arr = [5, 1, 8];
let isSmall = (el) => el < 10;
console.log(arr.every(isSmall));
</code>
</pre>

<pre>
<code>
//result

true
</code>
</pre>

- 적어도 하나의 항목이 조건을 만족하는지 여부
1. Array.some() : 배열에 적어도 하나의 구성 요소가 제공된 테스트 함수를 만족하는 경우에 true를 리턴합니다.
<pre>
<code>
let arr = [5, 1, 8];
let biggerThan4 = (el) => el > 4;
console.log(arr.some(biggerThan4));
</code>
</pre>

<pre>
<code>
//result

true
</code>
</pre>

---
> 요소 좌지우지하기
- 각 요소에 대해 실행할 함수를 생성하기
1. Array.forEach() : forEach() 메서드는 각 배열 요소마다 한 번씩 제공된 함수를 실행합니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.forEach((element) => {
  console.log(element)
});
</code>
</pre>

<pre>
<code>
//result

5
1
8
</code>
</pre>

- 생성한 함수를 각 요소에서 사용하여 새로운 배열 만들기
1. Array.map() : 배열의 모든 요소에 대해 제공된 함수를 호출한 결과를 통해 새로운 배열을 생성합니다.

<pre>
<code>
let arr = [5, 1, 8];
let map = arr.map(x => x + 1);
console.log(map);
</code>
</pre>

<pre>
<code>
//result

[6, 2, 9]
</code>
</pre>

- 이터레이터 객체 만들기
1. Array.entries() : 배열의 각 인덱스에 대한 키 / 값 쌍을 포함하는 새로운 배열 이터레이터 객체를 반환합니다. 반복자에는 물론 값과 keys와 values 같은 여러 메서드가 결합되어 사용됩니다.

<pre>
<code>
let arr = [5, 1, 8];
let iterator = arr.entries();
console.log(iterator.next().value);
</code>
</pre>

<pre>
<code>
//result

[0, 5]
// 0은 인덱스,
// 5는 첫번째 숫자입니다
</code>
</pre>

---
> 문자열로 반환하기
- 배열의 모든 요소를 결합하여 문자열로 나타내기
1. Array.join() : 배열의 모든 요소를 문자열로 결합합니다. 있는 그대로 또는 요소 사이에 무언가를 넣어서 결합할 수 있습니다. elements.join(' - ')은 foo-bar를 제공합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.join());
</code>
</pre>

<pre>
<code>
//result

"5, 1, 8"
</code>
</pre>

- 배열을 나타내는 문자열을 반환하기
1. Array.join() : 배열과 해당 요소들을 나타내는 문자열을 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.toString());
</code>
</pre>

<pre>
<code>
//result

"5, 1, 8"
</code>
</pre>

- 배열을 나타내는 문자열을 반환하기
1. Array.toLocaleString() : 이것은 좀 터무니없지만 배열 및 해당 요소들을 나타내는 지역화된 문자열을 반환합니다. 이것은 날짜와 통화에 매우 유용하며 약간 이상한 기본 추상화를 가지고 있기 때문에 사용할 때 문서를 참조하는 것이 좋습니다.

<pre>
<code>
let arr = [5, 1, 8];
let date = [new Date()];
const arrString = arr.toLocaleString();
const dateString = date.toLocaleString();
console.log(arrString, dateString);
</code>
</pre>

<pre>
<code>
//result

"5,1,8 2018. 9. 1. 오전 11:59:06"
</code>
</pre>

> 배열 정렬하기
- 배열의 순서 뒤집기
1. Array.reverse() : 배열의 요소의 순서를 반대로 바꿉니다. 첫 번째 요소가 마지막 요소가 되고 마지막 요소가 첫 번째 요소가 됩니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.reverse();
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[8, 1, 5]
</code>
</pre>

- 배열의 순서 뒤집기
1. Array.sort() : 배열의 요소를 정렬하고 배열을 반환합니다.

<b>중요 사항</b>: compareFunction이 제공되지 않은 경우 문자열로 변환하고 유니코드에 코드 포인트 순서의 문자열을 비교하여 요소를 정렬합니다. 예를 들어 "Banana"는 "cherry"보다 앞에 옵니다. 숫자의 경우, 9는 80보다 먼저 나오지만 숫자가 문자열로 변환되기 때문에 "80"은 유니코드 순서로 "9"보다 앞에 옵니다. 문서에 명확한 정보를 가지고 있습니다.
<pre>
<code>
let arr = [5, 1, 8];
arr.sort();
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[1, 5, 8]
</code>
</pre>

> etc
- 배열의 길이 알아내기
1. Array.length : 해당 배열의 요소 수를 반환합니다.

<pre>
<code>
let arr = [5, 1, 8];
console.log(arr.length);
</code>
</pre>

<pre>
<code>
//result

3
</code>
</pre>

- 배열의 모든 요소를 정적 값으로 채우기
1. Array.fill() : 정적 값을 사용하여 시작 인덱스에서 종료 인덱스까지 배열의 모든 요소를 정적 값으로 채웁니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.fill(2);
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[2, 2, 2]
</code>
</pre>

- 배열 내의 배열 요소 시퀀스(배열 값들) 복사하기
1. Array.copyWithin() : 배열 내의 배열 요소 시퀀스(배열 값들) 복사합니다. 시작 부분(begin은 0으로 기본 설정 됨)과 끝부분을 모두 쉼표로 구분하여 지정할 수 있습니다.

<pre>
<code>
let arr = [5, 1, 8];
arr.copyWithin(1);
console.log(arr);
</code>
</pre>

<pre>
<code>
//result

[5, 5, 1]
</code>
</pre>