import "./index.css";

function renderList(id, num, dark) {
  const targetUl = document.querySelector(id);

  let svgColor = "stroke-primary";

  if (dark) {
    svgColor = "stroke-secondary";
  }

  const templateLi = `
  <li class="flex items-center mb-4">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="mr-2 ${svgColor}"
    >
        <path
          d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
        />
        <path
          d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
        /></svg
    >item 1 Lorem, ipsum.
  </li>`;

  let subscribeLi = "";

  for (let i = 0; i < num; i++) {
    subscribeLi = subscribeLi + templateLi;
  }

  targetUl.innerHTML = subscribeLi;
}

function renderLoginModal() {
  const loginModal = document.querySelector("#loginModal");
  const modalBody = document.querySelector("#modalBody");
  const loginBtn = document.querySelector("#loginBtn");
  const closeModal = document.querySelector("#closeModal");

  loginBtn.addEventListener("click", () => {
    loginModal.classList.remove("opacity-0");
    loginModal.classList.remove("pointer-events-none");
  });

  closeModal.addEventListener("click", () => {
    loginModal.classList.add("opacity-0");
    loginModal.classList.add("pointer-events-none");
  });

  loginModal.addEventListener("click", () => {
    loginModal.classList.add("opacity-0");
    loginModal.classList.add("pointer-events-none");
  });

  modalBody.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

renderList("#list1", 3);
renderList("#list2", 4, true);
renderList("#list3", 5);
renderLoginModal();
