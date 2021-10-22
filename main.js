import Vue from "./src/core/index.js"

const vm = new Vue({
  el: "#App",
  setup() {},
  render() {
    const container = document.createElement("div");
    container.innerHTML = "Hello world."
    return container;
  }
});