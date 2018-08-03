# Array Cardio Day 1

## Array.prototype.filter()
### 1. 1500 년대에 태어난 사람들을 위해 Inventors 목록을 필터링하십시오.
<pre>
<code>
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
</code>
</pre>

## Array.prototype.map()
### 2. Invetros 이름과 성을 나열 해주세요.
<pre>
<code>
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
</code>
</pre>

## Array.prototype.sort()
### 3. Inventors 생년까지, 가장 오래 된 것부터 가장 어린 것까지 분류하십시오.
<pre>
<code>
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
</code>
</pre>

## Array.prototype.reduce()
### 4. Inventors가 몇 년이나 살았습니까?
<pre>
<code>
const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0);
</code>
</pre>

### 5. Inventors를 수년 동안 분류해라.
<pre>
<code>
const oldest = invent.sort (함수 (a, b) {
       const lastInventor = a.passed - a.year;
       const nextInventor = b.passed - b.year;
       return lastInventor> nextInventor? -1 : 1;
     });
</code>
</pre>

### 6. Sort Exercise
#### 성을 알파벳 순서로 정렬
<pre>
<code>
const alpha = people.sort((lastOne, nextOne) => {
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      return aLast > bLast ? 1 : -1;
    });
</code>
</pre>

### 7. Reduce Exercise
#### 각 인스턴스의 합계
<pre>
<code>
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

    const transportation = data.reduce(function(obj, item) {
      if (!obj[item]) {
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    }, {});
</pre>