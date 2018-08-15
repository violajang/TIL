1. 함수와 메서드의 차이
- function : 자바스크립트에서 메서드는 함수로 동작하는 객체의 프로퍼티일 뿐이다.
<pre>
<code>
function myFunc(theObject) {
   theObject.brand = "Toyota";
 }
</code>
</pre>


- method : 메서드는 특정 객체에서 호출되는 함수에 불과하다.
<pre>
<code>
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
// 키(속성) 계산값과도 함께:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
// ES5 getter/setter 구문과 비교해 보세요:
  get property() {},
  set property(value) {}
};
</code>
</pre>

2. 함수 선언문과 함수 표현식의 차이
- 함수선언문 : Function Statement 라고도 하며 말그대로 함수 문장이란 뜻이다. <b>이는 곧 실행가능한 코드블럭이</b> 아니며 함수의 정의를 나타내는 문장으로 해석되며 따라서 코드해석에 따른 수행결과가 존재하지 않는다는 것을 의미한다.

<pre>
<code>
//Function Declarations
function foo() {
    console.log('hello');
}
</code>
</pre>

이러한 statement 는 console 에서 실행을 시켜도 아무런 결과를 반환하지 않는다.

- 함수표현식 : Function Literal 라고도 하며 이는 실행 가능한 코드로 해석 되어지거나 변수나 데이터구조에 할당되어지고 있음을 의미한다. <br>즉 해당 코드블럭이 실행코드로서 해석되어지며 동시에 코드실행에 따른 결과값을 가지거나 특정 변수에 할당된 값으로 존재한다.

<pre>
<code>
//anonymous function expression
var foo = function() {
    console.log('hello');
};

//named function expression
var foo = function foo() {
    console.log('hello');
};

// self invoking function expression
(function foo() {
    console.log('hello');
})();
</code>
</pre>

위 코드에서named function expression는 매우 특이하다. <br>foo 라는 변수에 이름있는 함수를 할당하고 있다. 흔히 알고 있는 함수리터럴과는 좀 거리가 있다. <br>하지만 이 named function expression에는 한가지 특징이 있다.<br> 바로 해당 함수의 이름은 함수밖에서는 사용할수 없다는 것이다.

<pre>
<code>
var foo = function A() {
    A(); // 실행가능 
}

A(); //  Syntax Error
</code>
</pre>

즉 재귀호출외에는 그다지 쓸때가 없다. 하지만 이런 표현식이 가능하다는 것은 알고 있다고 나쁠것은 없지 않은가? 함수표현은 자기호출함수을 이용하여 콘솔에서 실행결과를 받을 수 있다.


<br>
3. IIFE (즉시 실행 함수표현)
즉시 실행 함수 표현(IIFE, Immediately Invoked Function Expression)은 정의되자마자 즉시 실행되는 Javascript Function 를 말한다.

이는 Self-Executing Anonymous Function 으로 알려진 디자인 패턴이고 크게 두 부분으로 구성된다. <br>첫 번째는 괄호((), Grouping Operator)로 둘러싸인 익명함수(Anonymous Function)이다. <br>이는 전역 스코프에 불필요한 변수를 추가해서 오염시키는 것을 방지할 수 있을 뿐 아니라 IIFE 내부의 변수에 접근하지 못하도록 막을 수 있는 방법이다.

두 번째 부분은 즉시 실행 함수를 생성하는 괄호()이다. <br>이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다.

<pre>
<code>
(function () { 
    var aName = "Barry";
})();
// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
aName // throws "Uncaught ReferenceError: aName is not defined"
</code>
</pre>

IIFE를 변수에 할당하면 IIFE 자체는 저장되지 않고, 함수가 실행된 결과만 저장된다.
<pre>
<code>
var result = (function () { 
    var name = "Barry"; 
    return name; 
})(); 
// 즉시 결과를 생성한다.
result; // "Barry"
</code>
</pre>
<br>
4. 실행 컨텍스트별 this

함수의 this 키워드는 다른 언어와 비교하여 JavaScript에서 약간 다르게 동작합니다. <br>엄격 모드와 비 엄격 모드 간에는 몇 가지 차이점이 있습니다. 대부분의 경우이 값은 함수가 호출되는 방식에 따라 결정됩니다. <br>실행 중에 할당으로 설정할 수 없으며 함수가 호출 될 때마다 다를 수 있습니다. <br>ES5에서는 호출 방식에 관계없이 함수의 값을 설정하는 bind 메소드를 도입했으며 ES2015에서는 이러한 바인딩을 제공하지 않는 화살표 함수를 도입했습니다.<br>이 함수는 둘러싸는 어휘 컨텍스트의 값을 유지합니다.

> Browser => window<br>
함수내부 => window<br>
Method => 바로 윗단계, 객체<br>
 call, apply, bind => scope 조작