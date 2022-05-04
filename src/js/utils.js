// wrapper for querySelector...returns matching element
export function qs(selector) {
  return document.querySelector(selector);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}


export function renderWithTemplate(template, parent, data, callback) {
  let clone = template.content.cloneNode(true);

  if(callback) {
    clone = callback(clone, data);
  }

  parent.appendChild(clone);
}

function convertToText(resource) {
  if (resource.ok){
    return resource.text();
  } else {
    return new Error("Error: Couldn't convert resource to text.")
  }
}

export async function loadTemplate(path) {
  const newElement = document.createElement("template");
  newElement.innerHTML = await fetch(path).then(convertToText);

  return newElement;
}

export async function loadHeaderFooter() {
  const header = await loadTemplate("../partials/header.html");
  const footer = await loadTemplate("../partials/footer.html");

  const headerElement = document.querySelector("header");
  const footerElement = document.querySelector("footer");

  renderWithTemplate(header, headerElement);
  renderWithTemplate(footer, footerElement);


}

export function renderListWithTemplate(template, parent, list, callback){
  list.forEach(item => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  })
}