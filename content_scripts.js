window.onload = function(){
  const sleepTime=60000 // 60 sec
  // first time
  updateValueWrapper();

  // loop
  setInterval("updateValueWrapper()", sleepTime);
}

// update GitHub date(xxx ago) to human readable date
function updateDataValue(tagName) {
  let elements = document.getElementsByTagName(tagName);

  /**
  update value from same elem's title

  sample:

  <time-ago
    datetime="2021-12-08T04:54:25Z"
    data-view-component="true"
    class="no-wrap"
    title="2021年12月8日 13:54 JST">
  2 months ago
  </time-ago>
  **/

  for (const elem of elements) {
    elem.innerText = elem.title;
  }
}

// GitHub date tag
function updateValueWrapper() {
  updateDataValue('time-ago');
  updateDataValue('relative-time');
}
