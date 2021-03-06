# Topic6: 2진수로 표현하기엔 너무 길어요. 좋은 방법이 없을까요?

## 16진수

컴퓨터과학에서는 숫자를 10진수나 2진수 대신 16진수(Hexadecimal)로 표현하는 경우가 많습니다. 컴퓨터에서 데이터를 처리하기 위해 16진수를 사용할 때 장점이 있기 때문입니다. 16진수와 일상생활에서 우리가 사용하는 10진수와 비교하면 그 차이를 알 수 있습니다. 16진수를 사용하면 10진수보다 2진수를 간단하게 나타낼 수 있습니다. 16진수로 값을 표현하는 방법을 이해하고 나면 16진수, 2진수, 10진수를 변환하는 프로그램을 만들어볼 수 있습니다.





## 10진수를 16진수로 바꾸어보기

JPG 이미지 파일은 항상 255 216 255 로 시작되고 이것은 10진수입니다. 하지만 실제 컴퓨터 내에서는 10진수를 사용하지 않습니다. 컴퓨터는 0과 1만을 이해할 수 있기 때문입니다.

<img src="https://cphinf.pstatic.net/mooc/20170807_218/1502072784893AgAug_PNG/5.4_-01.png?type=w760">

그림 1
먼저 255 216 255를 2진수로 나타내보면 <그림 1>과 같습니다. 2진수로 모든 데이터를 표현하기에는 너무 길어지기 때문에 16진수로 바꾸어 보겠습니다. 2^42
4
 

이 16이기 때문에 4bits씩 두 덩어리로 나누어 보면 0000 부터 1111까지는 16진수로 표현할 수 있다는 것을 알 수 있습니다.

그렇다면 16진수에서 10부터 15까지는 어떻게 표기할까요? 10은 a, 11은 b, …, 15는 f를 대입하여 사용합니다. 4bits씩 16진수로 변환 후 0x를 붙혀 뒤에 오는 문자들이 16진수임을 알려줍니다.



## 16진수의 유용성

ASCII 코드에 의해 “A, B, C”는 10진수로 65, 66, 67에 해당합니다. 컴퓨터는 10진수를 이해할 수 없으므로 2진수로 표현해보면  "01000001 01000010 01000011＂이 됩니다. 컴퓨터가 처리할 수 있어야 하기 때문에 어쩔 수 없지만 그 길이가 너무 긴 것을 알 수 있습니다.

하지만 16진수로 표현하면 2진수로 표현했을 때 보다 훨씬 간단해집니다. 또한 컴퓨터는 8개의 비트가 모인 바이트 단위로 정보를 표현합니다. 2개의 16진수는 1byte의 2진수로 변환되기 때문에 정보를 표현하기 매우 유용합니다.

 
<img src="https://cphinf.pstatic.net/mooc/20170807_161/1502072871106NqRxw_PNG/5.4_-02.png?type=w760">