# Topic2: 프로그래밍의 기본 문장을 출력할 수 있을까요?
## C언어의 문법

C 언어는 프로그램을 작성하는 데 사용되는 프로그래밍 언어입니다. C와 같은 프로그래밍 언어는 굉장히 구체적인 문법(Syntax)을 사용하여 프로그램을 작성할 것을 요구합니다. 여기서 구체적인 문법이란 완벽한 프로그램으로 동작하는 문장들을 작성하기 위해 필요한 단어와 기호들(소괄호, 중괄호 등)을 어떻게 배열할 것인지에 대한 규칙입니다. C의 문법은 처음에는 복잡해 보일 수 있지만 연습을 하다 보면 익숙해질 것입니다.





## 첫 번째 C 프로그램
<pre>
<code>
#include <stdio.h>

int main(void) 
{
	printf("hello world\n");
}

</code>
</pre>
왼쪽에 있는 코드는 “hello, world”를 출력하는 간단한 C 프로그램 예시입니다. 줄 번호는 왼편에 표시되어 있지만, 실제 코드에 포함되는 것은 아닙니다.

1행에서, #include <stdio.h>는 이 프로그램이 stdio.h라는 파일 안에 들어 있는 미리 작성된 함수들에 접근할 수 있도록 합니다. 여기에서 함수는 특정 기능을 수행하기 위한 문장들을 모아놓은 것을 말합니다. stdio.h를 포함함으로써, 프로그램은 다른 사람들이 이전에 미리 작성해 둔 함수에 접근할 수 있습니다. 이로 인해 화면에 문자를 보여주는 역할을 하는 printf라는 함수를 가져다 사용할 수 있습니다.

3행의 int main(void)는 스크래치와 엔트리에서 “초록 깃발을 클릭했을 때” 혹은 “시작하기 버튼을 클릭했을 때＂의 기능과 같은 기능으로, 프로그램의 시작점을 정의합니다. 4~6행의 중괄호는 main 함수의 코드를 묶어주는 역할을 합니다. 중괄호 안의 내용이 어떠한 것이든 main 함수의 한 부분이 됩니다.

이 프로그램에서, main 함수는 printf(“hello, world \n”)이라는 하나의 프로그래밍 문장만 포함하고 있습니다. printf는 문자열을 화면에 출력하는 함수입니다. C에서 문자열은 항상 큰따옴표 안에 작성해야 합니다.

printf를 위해 사용된 괄호 안에는 화면에 보여주고자 하는 문자열을 입력값으로 넣어줄 수 있습니다. 이 경우 문자열은 “hello, world\n”입니다. \n 문자는 줄 바꿈 문자로 “hello, world!”를 출력하고 줄이 바뀌게 됩니다. printf문 마지막의 세미 콜론(;)은 프로그램 명령의 마지막이 어디인지를 알려줍니다.


<img src="https://cphinf.pstatic.net/mooc/20171017_166/1508233668589gs8bc_PNG/1.png">
 


## 컴파일하여 프로그램 실행하기

C 프로그램을 작성한 후, .c로 끝나는 파일로 소스코드를 저장해야 합니다. 여기에서는 hello.c라는 이름의 파일로 저장합니다. 이것은 여러분이 만든 소스 코드 파일입니다. 하지만 컴퓨터는 C 코드를 바로 이해하지는 못합니다. 컴퓨터는 0과 1만 이해하기 때문에, 우리는 소스코드를 0과 1로 만드는 작업인 컴파일(compile)을 해야 합니다.

컴파일이란, 소스 코드를 일련의 0과 1들로 이루어진 오브젝트 코드(object code)로 전환해주는 것입니다. 소스 코드가 오브젝트로 코드로 변환되면, 컴퓨터가 이해하고 실행 가능한 0과 1의 형태로 만들어집니다.

그러나 문장 중 //이나 /* 와 */ 안에 작성되어있는 코드는 컴파일러에 의해 완전히 무시됩니다. 이것을 주석이라고 부릅니다. 이 주석은 프로그래머들이 코드에 대한 설명을 기록함으로써 나중에 보는 사람들이 쉽게 이해할 수 있도록 하는 데 자주 사용됩니다.

만약 clang 컴파일러를 사용한다면, make hello 명령어를 입력함으로써 프로그램을 컴파일 할 수 있습니다. 만약 에러 없이 성공적으로 컴파일 되면, 우리는 ./hello라고 명령어를 입력하여 프로그램을 실행할 수 있습니다. 만약 프로그램이 제대로 작동한다면 화면에 hello, world라고 출력될 것입니다.

---
## [코딩실습과제] printf 함수를 사용하여 문장 출력하기

<pre>
<code>
#include <stdio.h> //printf 함수가 포함된 라이브러리입니다.

int main() 
{
  //이 아래부터 코드를 작성합니다.
  //printf 함수를 이용하여 Hello CS50! 을 출력합니다.
  
  printf("Hello CS50!");
    
  
  return 0; //main 함수를 종료합니다.
}
</code>
</pre>

<pre>
<code>
//result

Hello CS50!
</code>
</pre>