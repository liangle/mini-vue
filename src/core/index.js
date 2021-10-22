export default function Vue(App) {
  const appContainer = document.querySelector(App.el)
  appContainer.appendChild(App.render());

  return {
    sayHello() {
      console.log("Hello world.");
    }
  }
}