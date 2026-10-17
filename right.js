// right.js - 右側選單 (42px × 425px 方框黑底，內含 6 顆 #6c6c6c 30×65 膠囊，點擊亮紅燈)
document.addEventListener("DOMContentLoaded", function () {
  // 1. 建立右側邊欄主體
  const sidebar = document.createElement("div");
  sidebar.id = "right-sidebar-container";

  Object.assign(sidebar.style, {
    position: "fixed",
    right: "0px",
    top: "0px",
    width: "42px",
    height: "425px",
    backgroundColor: "#000000",
    color: "#ffffff",
    zIndex: "99999",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 0", // 上下各 5px 空白
    boxSizing: "border-box",
    userSelect: "none",
    "-webkit-tap-highlight-color": "transparent"
  });

  // 2. 6 個選單對應的檔名與文字
  const rightCapsules = [
    { text: "分佈", url: "分佈.html" },
    { text: "尾數", url: "尾數.html" },
    { text: "三分", url: "三分.html" },
    { text: "遺漏", url: "遺漏.html" },
    { text: "拖牌", url: "拖牌.html" },
    { text: "統計", url: "統計.html" }
  ];

  // 3. 自動辨識當前網址檔名
  const currentPath = decodeURIComponent(window.location.pathname);
  let currentFile = currentPath.split("/").pop();

  if (!currentFile || currentFile === "" || currentFile === "index.html") {
    currentFile = "遺漏.html"; // 預設頁面
  }

  // 4. 渲染 6 顆右側膠囊按鈕
  rightCapsules.forEach(function (item) {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.text;

    Object.assign(a.style, {
      width: "30px",
      height: "65px",
      backgroundColor: "#6c6c6c", // 預設深灰膠囊
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: "bold",
      textAlign: "center",
      writingMode: "vertical-lr",
      letterSpacing: "1px",
      cursor: "pointer",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative", // 讓內部指示燈可絕對定位
      textDecoration: "none",
      boxSizing: "border-box",
      transition: "background-color 0.15s, color 0.15s",
      "-webkit-tap-highlight-color": "transparent"
    });

    // 建立紅燈指示燈（預設暗色）
    const light = document.createElement("div");
    light.className = "indicator-light";
    Object.assign(light.style, {
      position: "absolute",
      bottom: "4px",
      width: "6px",
      height: "6px",
      backgroundColor: "#222222",
      borderRadius: "50%",
      boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
      transition: "background-color 0.15s, box-shadow 0.15s"
    });
    a.appendChild(light);

    // 判斷是否為當前頁面，若是則直接亮紅燈
    const isActive = (currentFile === item.url || window.location.href.includes(encodeURIComponent(item.url)));
    if (isActive) {
      a.style.backgroundColor = "#a40000"; // 紅色背景
      a.style.color = "#ffffff";
      light.style.backgroundColor = "#ff0000"; // 亮紅燈
      light.style.boxShadow = "0 0 6px #ff0000, inset 0 1px 2px rgba(0,0,0,0.2)";
    }

    // 點擊事件：點擊時亮紅燈並跳轉
    a.onclick = function (e) {
      e.stopPropagation();

      // 清除所有右側按鈕狀態
      document.querySelectorAll('#right-sidebar-container > a').forEach(b => {
        b.style.backgroundColor = '#6c6c6c';
        b.style.color = '#ffffff';
        const l = b.querySelector('.indicator-light');
        if (l) {
          l.style.backgroundColor = '#222222';
          l.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.5)';
        }
      });

      // 設定當前點擊按鈕為紅燈
      a.style.backgroundColor = '#a40000';
      a.style.color = '#ffffff';
      light.style.backgroundColor = '#ff0000';
      light.style.boxShadow = '0 0 6px #ff0000, inset 0 1px 2px rgba(0,0,0,0.2)';
    };

    sidebar.appendChild(a);
  });

  // 自動掛載至 HTML 中的 #rightSidebar 或 document.body
  const target = document.getElementById("rightSidebar") || document.body;
  if (!document.getElementById("right-sidebar-container")) {
    target.appendChild(sidebar);
  }
});
