1. Function
- Function 생성자(constructor)는 새 Function 객체를 만듭니다. 
- 모든 자바스크립트 함수는 사실 Function 객체입니다. 
- 함수의 매개변수
> new Function ([arg1[, arg2[, ...argN]],] functionBody)<br>

<b>arg1, arg2, ... argN</b><br>
함수에서 형식 인수 이름으로 사용할 이름입니다.<br> 각 이름은 자바스크립트 식별자로 유효한 문자열이거나 쉼표(comma)로 구분된 그러한 문자열의 목록이어야 합니다. <br>예를 들어, "x", "theValue" 또는 "a,b".

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function

2. Callback
- 프로그래밍에서 콜백(callback)은 다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말한다. <br>콜백을 넘겨받는 코드는 이 콜백을 필요에 따라 즉시 실행할 수도 있고, 아니면 나중에 실행할 수도 있다.
- Callback 함수는 인수로 다른 함수에 전달 된 함수로 외부 함수 내부에서 호출되어 일종의 루틴이나 동작을 완료합니다.
<pre>
<code>
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
</code>
</pre>

- https://developer.mozilla.org/ko/docs/Glossary/Callback_function

3. Closure
- 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
- 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.

<pre>
<code>
function init() {
  var name = "Mozilla"; // name은 init 에 의해 생성된 지역변수다
  function displayName() { // displayName() 은 내부 함수이며,클로저다
    alert(name); // 부모 함수에서 선언된 변수를 사용한다
  }
  displayName();
}
init();
</code>
</pre>