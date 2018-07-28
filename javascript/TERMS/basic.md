1. truthy, falsy
- truthy

<pre>
<code>
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
</code>
</pre>

https://developer.mozilla.org/en-US/docs/Glossary/Truthy

- falsy
<pre>
<code>
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all)
</code>
</pre>

https://developer.mozilla.org/en-US/docs/Glossary/Falsy

<pre>
<code>
function checkLogin(id, password){
	var isLogin = id && password;
	return isLogin &&  '로그인성공';
}
</code>
</pre>

console.log(checkLogin('id', 'password'));

console.log('id','pw');

2. and(&&), or(||)
- and(&&)
조건의 둘이 모두 true 일때만 true.

- or(||)
조건의 둘중 하나만 true면 true.

