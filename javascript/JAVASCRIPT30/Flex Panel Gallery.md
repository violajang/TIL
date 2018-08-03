# Flex Panel Gallery

<pre>
<code>
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      console.log('Hello');
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
</code>
</pre>

## What I learn?
- toggleOpen<br>
this.classList.toggle('open');

- transitionend <br>
(Link - https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)