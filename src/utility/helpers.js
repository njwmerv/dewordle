export function setBrowserTitle(title){
  if(!document.getElementsByTagName('title')[0]){
    let createTitleTag = document.createElement("title");
    document.head.appendChild(createTitleTag);
  }

  document.getElementsByTagName("title")[0].text = title;
}