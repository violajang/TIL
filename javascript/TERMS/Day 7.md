1. OOP 
- 객체 지향 프로그래밍(Object-Oriented Programming), 줄여서 OOP.
- 프로그램을 어떻게 설계해야 하는지에 대한 일종의 개념이자 방법론.
- 프로그램을 단순히 데이터와 처리 방법으로 나누는 것이 아니라, 프로그램을 수많은 '객체'라는 기본 단위로 나누고 이 객체들의 상호작용으로 서술하는 방식이다.
- 자바스크립트 배열은 객체다.
- 배열의 모양만 할 뿐이다.
<pre>
<code>
function Person() { }
var person1 = new Person();
var person2 = new Person();
</code>
</pre> 
- 배열안의 객체 : 집단을 구성할때

- getOwnPropertyDescriptors :
주어진 객체의 모든 속성 Descriptors를 반환합니다.
>-  writeable : false = 객체 option 편집 불가
>- freeze : 객체 편집이 불가하게 얼린다.
>- isFrozen : 객체가 편집 불가한지 확인한다.
>-  seal : 객체 내용 변경

- Object.create(null);

2. Prototype
- 생성자 함수는 대문자로 시작함.
- 실체화 되었다.
- 초기화 : setting한다.
- 생성자로 만들어서 배출하면 인스턴스
- ES6 class 참고.

<pre>
<code>
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim  = new Person();
var park = new Person():
console.log(kim.eyes); // => 2
...
</code>
</pre>

3. Constructor(생성자)
- 객체를 생성하는 함수를 생성자 함수라고 부릅니다.
<pre>
<code>
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function() {
    alert(this.name + ' said "hello"');
  }
  this.... // 사람의 속성과 메소드를 더 정의할 수 있습니다.
}
</code>
</pre>