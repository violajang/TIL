# Custom Video Player

<pre>
<code>
// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video['this.name'] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// Hook up the envent listners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
</code>
</pre>

## What I learn?
- currentTime : 현재 재생 시간을 초 단위로 나타냅니다. 이 값을 설정하면 미디어를 새로운 시간으로 검색합니다.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

- timeupdate : timeupdate 이벤트는 currentTime 특성으로 표시된 시간이 업데이트되면 시작됩니다.
https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate

- parseFloat : 문자열 인수를 파싱하고 부동 소수점 숫자를 반환합니다. 이 메소드는 전역 함수 parseF와 동일하게 작동합니다.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat

- textContent : 해당 프로퍼티는 노드와 그 자손의 텍스트 내용을 표시한다.
https://developer.mozilla.org/ko/docs/Web/API/Node/textContent



