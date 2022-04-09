import "./index.css";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";

// ----- header btn interaction-----
function renderHeaderPanel() {
  const plusBtn = document.getElementById("plusBtn");
  const msgBtn = document.getElementById("msgBtn");
  const alertBtn = document.getElementById("alertBtn");
  const moreBtn = document.getElementById("moreBtn");

  const plusPanel = document.getElementById("plusPanel");
  const msgPanel = document.getElementById("msgPanel");
  const alertPanel = document.getElementById("alertPanel");
  const morePanel = document.getElementById("morePanel");

  const headerBtnArr = [plusBtn, msgBtn, alertBtn, moreBtn];
  const headerPanelArr = [plusPanel, msgPanel, alertPanel, morePanel];

  function openPanel(index) {
    headerPanelArr.forEach((panel, i) => {
      if (index < 0) {
        panel.classList.add("hidden");
        return;
      }

      if (index === i) {
        panel.classList.toggle("hidden");
        return;
      }

      if (index !== i) {
        panel.classList.add("hidden");
        return;
      }
    });
  }

  headerBtnArr.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPanel(index);
    });
  });

  window.addEventListener("click", () => {
    openPanel(-1);
  });

  headerPanelArr.forEach((panel) => {
    panel.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
}

renderHeaderPanel();

// -----header input content listen-----
const headerSearchBar = document.getElementById("headerSearchBar");
const headerSearchBarDiv = headerSearchBar.parentElement.parentElement;

function headerSearchBarEvent() {
  if (headerSearchBar.value) {
    headerSearchBarDiv.classList.add("bg-fb-popover");
  } else {
    headerSearchBarDiv.classList.remove("bg-fb-popover");
  }

  headerSearchBar.addEventListener("change", () => {
    if (headerSearchBar.value) {
      headerSearchBarDiv.classList.add("bg-fb-popover");
    } else {
      headerSearchBarDiv.classList.remove("bg-fb-popover");
    }
  });
}

headerSearchBarEvent();

// -----leftside navigation-----
const leftNav = document.getElementById("leftNav");

function renderLeftNavItem(imgUrl, title) {
  let item = `
    <a href="" class="flex items-center p-2 mb-1 rounded hover:bg-fb-input">
        <div class="w-[32px] h-[32px] rounded-full overflow-hidden mr-4">
        <img src="${imgUrl}" />
        </div>
        <p class="text-[0.9rem]">${title}</p>
    </a>
    `;

  return item;
}

function renderLeftNavBlock() {
  let leftItemHTML = "";
  const itemArr = [
    { title: "布魯斯", imgUrl: "https://bruce-fe-fb.web.app/image/avator.png" },
    {
      title: "活動",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      title: "天氣",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
    },
    {
      title: "災害應變中心",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
    },
    {
      title: "新冠病毒資訊中心",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    },
    {
      title: "社團",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      title: "企業管理平台",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      title: "Messenger",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      title: "近期廣告動態",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/pay.png",
    },
    {
      title: "朋友名單",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      title: "最愛",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
    {
      title: "Marketplace",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      title: "Watch",
      imgUrl: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
  ];

  itemArr.forEach((item) => {
    leftItemHTML = leftItemHTML + renderLeftNavItem(item.imgUrl, item.title);
  });
  leftNav.innerHTML = leftItemHTML;
}

renderLeftNavBlock();

// -----rightside friend area-----
const rightFriend = document.getElementById("rightNav");

function renderFriendItem() {
  let item = `
    <a href="" class="flex items-center p-2 mb-1 rounded hover:bg-fb-input">
        <div class="relative mr-4">
        <div class="w-[32px] h-[32px] rounded-full overflow-hidden">
            <img src="https://bruce-fe-fb.web.app/image/avator.png" />
        </div>
        <div
            class="w-[10px] h-[10px] rounded-full bg-green-600 absolute bottom-0 right-0 ring ring-fb-bg""
        ></div>
        </div>
        <p class="text-[0.9rem]">布魯斯</p>
    </a>
    `;

  return item;
}

function renderFriendBlock() {
  let rightItemHTML = `<p class="text-lg">聯絡人</p>`;
  for (let i = 0; i < 6; i++) {
    rightItemHTML = rightItemHTML + renderFriendItem();
  }

  rightFriend.innerHTML = rightItemHTML;
}

renderFriendBlock();

// -----story area-----
const storyArea = document.getElementById("storyArea");

function renderStoruItem(num) {
  for (let i = 0; i < num; i++) {
    const storyItem = document.createElement("div");
    storyItem.classList = `flex flex-col w-[120px] flex-none relative mr-2`;
    storyItem.innerHTML = `
          <div class="flex flex-col w-[120px] flex-none relative mr-2">
              <div
                  class="w-full h-full bg-gradient-to-b from-black/40 to-transparent absolute z-[1] pointer-events-none"
              ></div>
              <div
                  class="flex justify-center items-center w-10 h-10 absolute top-2 left-2 bg-fb-card rounded-full border-fb border-4 z-[2]"
              >
                  <p class="p-2">布</p>
              </div>
              <div class="overflow-hidden">
                  <img
                      class="duration-300 hover:scale-105 h-full"
                      src="https://bruce-fe-fb.web.app/image/story.png"
              />
              </div>
          </div>
      `;
    storyArea.appendChild(storyItem);
  }
}

renderStoruItem(10);

// -----detect story width & story button event-----
const storyRightBtn = document.getElementById("storyRightBtn");
const storyLeftBtn = document.getElementById("storyLeftBtn");

function detectStoryWidth() {
  let scrollWidth = storyArea.scrollWidth;
  let clientWidth = storyArea.clientWidth;

  if (scrollWidth > clientWidth) {
    storyRightBtn.classList.remove("hidden");
  }
}

function storyBtnEvent() {
  storyRightBtn.addEventListener("click", () => {
    let scrollPosition = storyArea.scrollLeft;
    storyArea.scrollTo({ left: scrollPosition + 300, behavior: "smooth" });
  });

  storyLeftBtn.addEventListener("click", () => {
    let scrollPosition = storyArea.scrollLeft;
    storyArea.scrollTo({ left: scrollPosition - 300, behavior: "smooth" });
  });

  storyArea.addEventListener("scroll", () => {
    if (storyArea.scrollLeft < 40) {
      storyLeftBtn.classList.add("hidden");
    } else {
      storyLeftBtn.classList.remove("hidden");
    }
  });
}

detectStoryWidth();
storyBtnEvent();

// -----Swiper initialize-----
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// -----render create room item-----
function renderRoomItem() {
  const roomItem = document.getElementById("roomItem");
  for (let i = 0; i < 10; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("swiper-slide");

    let html = ``;
    let item = `
      <div class="w-10 h-10 relative mr-3">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img
            class="w-10 h-10"
            src="https://bruce-fe-fb.web.app/image/avator.png"
          />
        </div>
        <div
          class="w-2.5 h-2.5 bg-green-600 rounded-full ring ring-fb-header absolute bottom-0 right-0"
        ></div>
      </div>
  `;

    itemDiv.innerHTML = item;

    roomItem.appendChild(itemDiv);
  }
}

renderRoomItem();

// -----room Prev/Next button show/hide event-----
swiper.on("activeIndexChange", () => {
  if (swiper.isBeginning) {
    swiper.navigation.prevEl.style = "visibility: hidden;";
  }
  if (!swiper.isBeginning) {
    swiper.navigation.prevEl.style = "visibility: visible;";
    swiper.navigation.nextEl.style = "visibility: visible;";
  }
});

swiper.on("reachEnd", () => {
  swiper.navigation.nextEl.style = "visibility: hidden;";
});
