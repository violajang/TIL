# 장바구니 예제

### 1. 총 수량, 총 가격
- 수량과 가격을 구할 데이터
- go, filter, reduce, curry 함수를 사용하여 구한다.
- 중복되는 계산은 함수에 담는다. (add, sum 이라는 함수를 만들어 사용)
- 추상화 레벨을 높여 다른곳에 사용할 수 있는 함수를 만든다.

<pre>
<code>
const products = [
    { name: '반팔티', price: 15000, quantity: 1, is_selected: true },
    { name: '긴팔티', price: 20000, quantity: 2, is_selected: false },
    { name: '핸드폰케이스', price: 15000, quantity: 3, is_selected: true },
    { name: '후드티', price: 30000, quantity: 4, is_selected: false },
    { name: '바지', price: 25000, quantity: 5, is_selected: false },
  ];
</code>
</pre>

<pre>
<code>
const add = (a, b) => a + b;
const sum = curry((f, iter) => go(iter, map(f), reduce(add)));
</code>
</pre>

<pre>
<code>
//총 수량
const total_quantity = sum((p) => p.quantity);

//총 금액
const total_price = sum((p) => p.price * p.quantity);
</code>
</pre>

<hr />

### 2. HTML로 출력하기

- 총 수량, 가격을 구하는 함수를 미리 만들고 각 HTML 태그에 전달한다.


<pre>
<code>
document.querySelector('#cart').innerHTML = 
  `<table>
  <tr>
    <th>상품 이름</th>
    <th>가격</th>
    <th>수량</th>
    <th>총 가격</th>
  </tr>
  ${go(
    products,
    sum(
    (p) => `
    <tr>
      <td><input type="checkbox" ${p.is_selected ? 'checked' : ''}></td>
      <td>${p.name}</td>
      <td>${p.price}</td>
      <td><input type="number" value="${p.quantity}"></td>
      <td>${p.price * p.quantity}</td>
    </tr>`,
    ),
  )}
  <tr>
    <td colspan="2">합계</td>
    <td>${total_quantity(filter((p) => p.is_selected, products))}</td>
    <td>${total_price(filter((p) => p.is_selected, products))}</td>
  </tr>
  </table>;
</code>
</pre>

- result

![](images/total_price_capture.jpg)