# Key Sequence Detection

<pre>
<code>
      const pressed = [];
      const secretCode = 'wesbos';

      window.addEventListener('keyup', (e) => {
        pressed.push(e.key);
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        if (pressed.join('').includes(secretCode)) {
          cornify_add();
        }
      });
</code>
</pre>

# What I learned?
- .splice : 기존 요소를 제거하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

- .join : 배열의 모든 요소를 ​​문자열로 결합합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join

- .includes : 다른 문자열에서 한 문자열을 찾을 수 있는지 여부를 결정하여 적절하게 true 또는 false를 반환합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes