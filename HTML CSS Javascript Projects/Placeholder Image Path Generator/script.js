const baseURL =
  "https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#fff&t=lkj";
const inputAll = document.querySelectorAll("input");
const myImg = document.querySelector("img");
const textarea = document.querySelector("textarea");
const urlObj = {};
console.log(inputAll);
const removeHashtag = (str) => {
  return str.replace("#", "");
};
const createImagePath = () => {
  urlObj.width = inputAll[0].value;
  urlObj.height = inputAll[1].value;
  urlObj.text = inputAll[2].value;
  urlObj.bg_color = removeHashtag(inputAll[3].value);
  urlObj.text_color = removeHashtag(inputAll[4].value);
  let urlPath = `http://via.placeholder.com/${urlObj.width}x${urlObj.height}/${urlObj.bg_color}/${urlObj.text_color}?text=${urlObj.text}`;
  myImg.src = urlPath;
  textarea.value = urlPath;
};
inputAll.forEach((currInput) => {
  currInput.addEventListener("change", createImagePath);
});

const copyText = () => {
  textarea.select();
  navigator.clipboard.writeText(textarea.value);
};

textarea.addEventListener("click", copyText);
