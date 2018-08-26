1. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- map() 메소드는 배열 내의 모든 요소 각각에 대하여 제공된 함수(callback)를 호출하고, 그 결과를 모아서 새로운 배열을 반환합니다.

<pre>
<code>
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
</code>
</pre>
- 구문
<pre>
<code>
var new_array = arr.map(function callback(currentValue[, index[, array]]) { // new_array의 새 요소 반환 }[, thisArg])
</code>
</pre>

- map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값(결과값)으로 새로운 배열을 만듭니다. callback 함수는 (undefined도 포함해서) 배열 값이 들어있는 인덱스에 대해서만 호출됩니다. 즉, 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다.

2. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">Array.prototype.sort()</a>

- sort () 메서드는 배열의 요소를 적절한 위치에 정렬하고 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열 유니 코드 코드 포인트에 따릅니다.
정렬 속도와 복잡도는 각 구현방식에 따라 다를 수 있습니다.
<pre>
<code>
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// 10이 2,
// Unicode 코드 포인트 순서에서 '10'이 '2'앞에 오기 때문에.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// 유니 코드에서 숫자는 대문자 앞에옵니다.
// 소문자 앞에옵니다.
</code>
</pre>

- compareFunction이 제공되면 배열 요소는 compare 함수의 반환 값에 따라 정렬됩니다. a와 b가 비교되는 두 요소라면,

- compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
- compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다. 참고 : ECMAscript 표준은 이러한 동작을 보장하지 않으므로 모든 브라우저(예 : Mozilla 버전은 적어도 2003 년 이후 버전 임)가 이를 존중하지는 않습니다.
- compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
- compareFunction(a, b)은 요소 a와 b의 특정 쌍이 두 개의 인수로 주어질 때 항상 동일한 값을 반환해야합니다. 일치하지 않는 결과가 반환되면 정렬 순서는 정의되지 않습니다.

<pre>
<code>
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
</code>
</pre>

3. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.prototype.filter()</a>
- filter() 메소드는 제공된 함수로 구현된 테스트를 통과하는 모든 요소가 있는 새로운 배열을 만듭니다.
<pre>
<code>
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
</code>
</pre>

- filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성합니다.<br> callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다.<br> 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않습니다. <br>callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않습니다.

4. <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.prototype.reduce()</a>

- 누산기(accumulator)와 배열의 각 요소(왼쪽에서 오른쪽으로)에 대해 하나의 단일 값(single value)으로 줄이는 함수를 적용합니다.
<pre>
<code>
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
</code>
</pre>

reduce는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 콜백(callback) 함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받습니다:

- accumulator
- currentValue
- currentIndex
- array
콜백이 처음으로 호출될 때, accumulator와 currentValue는 두 가지 값 중 하나를 가질 수 있습니다. 만약 reduce() 함수 호출에서 initialValue가 주어진 경우에는 accumulator는 initialValue와 같고 currentValue는 배열의 첫 번째 값과 같습니다. initialValue가 주어지지 않은 경우라면, accumulator는 배열의 첫 번째 값과 같고 currentValue는 두 번째와 같습니다.

> 참고: 초기값(initialValue)이 주어지지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고, 첫 번째 인덱스는 건너 뛸 것입니다. 초기값(initialValue)이 주어진 경우라면, 인덱스 0에서 시작할 것입니다.

빈 배열에 초기값(initialValue)이 주어지지 않은 경우, TypeError가 발생합니다. 배열의 요소가 (위치와 관계없이) 하나 뿐이면서 초기값(initialValue)이 제공되지 않은 경우나 초기값(initialValue)은 주어졌으나 배열이 빈 경우, 그 단독 값이 callback 호출 없이 반환됩니다.