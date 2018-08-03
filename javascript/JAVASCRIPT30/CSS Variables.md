# CSS Variables

<pre>
<code>
    const inputs = document.querySelectorAll('.controls input');
    
    function handleUpdates(){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdates));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));
</code>
</pre>

## What I learn?
- CSS 구성이 잘 되어있어야 이런것도 가능하다... (휴)
- 역시 또 나오는 data-attribute
- addEventListener <br>
(Link - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- setProperty <br>
(Link - https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)