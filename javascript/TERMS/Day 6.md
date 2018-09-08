1. Array
- [Array Explorer](https://github.com/violajang/TIL/blob/master/javascript/practice/array-explorer.md)
- 배열에서 index는 프로퍼티라고 볼 수 있다.
<pre>
<code>
      const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 },
      ];
</code>
</pre>
- [전개연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator) [... Object] <br>
전개 연산자(spread operator)는 표현식(expression)은 2개 이상의 인수arguments(함수 호출 용)나 2개 이상의 요소elements(배열 리터럴 용) 또는 2개 이상의 변수(비구조화 할당 용)가 예상되는 곳에 확장될 수 있도록 합니다.


2. Ajax
- Ajax란 Asynchronous JavaScript and XML의 약자입니다.<br>
Ajax는 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나입니다.

- Ajax는 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있습니다.<br>
즉 Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분에만 표시할 수 있습니다.

<br>이때 서버와는 다음과 같은 다양한 형태의 데이터를 주고받을 수 있습니다.

 - JSON

 - XML

 - HTML

 - 텍스트 파일 등


 - [fetch API](https://blog.perfectacle.com/2017/01/25/es6-ajax-with-fetch/)
 <pre>
 <code>

 </code>
 </pre>


 3. JSON
 -  Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다. 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용한다(서버에서 클라이언트로 데이터를 전송하여 표현하려거나 반대의 경우).

 - 객체 문법을 따르는 문자 기반의 데이터 포맷입니다. <br>
 JSON이 Javascript 객체 문법과 매우 유사하지만 딱히 Javascript가 아니더라도  JSON을 읽고 쓸 수 있는 기능이 다수의 프로그래밍 환경에서 제공됩니다.

- JSON은 문자열 형태로 존재합니다 — 네트워크를 통해 전송할 때 아주 유용하죠.<br> 데이터에 억세스하기 위해서는 네이티브 JSON 객체로 변환될 필요가 있습니다. <br>별로 큰 문제는 아닌 것이 Javascript는 JSON 전역 객체를 통해 문자열과 JSON 객체의 상호변환을 지원합니다.

<pre>
<code>
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
</code>
</pre>