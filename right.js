// right.js
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.createElement("div");
  sidebar.id = "right-sidebar-container";

  Object.assign(sidebar.style, {
    position: "fixed",
    right: "0px",
    top: "0px",
    width: "calc((100vw - 1125px) / 2)", // 动态缩放宽度，填满右侧剩余空间
    minWidth: "39.855px",                // 确保最小宽度
    height: "100%",
    minHeight: "535px",
    backgroundColor: "#000000",
    color: "#ffffff",
    zIndex: "99999",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    boxSizing: "border-box",
    userSelect: "none"
  });

  const rightCapsules = [
    { text: "分佈", url: "分佈.html" },
    { text: "尾數", url: "尾數.html" },
    { text: "三分", url: "三分.html" },
    { text: "遺漏", url: "遺漏.html" },
    { text: "拖牌", url: "拖牌.html" },
    { text: "統計", url: "統計.html" }
  ];

  const currentPath = decodeURIComponent(window.location.pathname);
  let currentFile = currentPath.split("/").pop();
  if (!currentFile || currentFile === "" || currentFile === "index.html") {
    currentFile = "遺漏.html";
  }

  rightCapsules.forEach(function (item) {
    const a = document.createElement("a");
    a.href = item.url;
    a.textContent = item.text;

    Object.assign(a.style, {
      width: "28px",
      height: "65px",
      backgroundColor: "#6c6c6c",
      color: "#ffffff",
      fontSize: "11px",
      fontWeight: "bold",
      textAlign: "center",
      writingMode: "vertical-lr",
      letterSpacing: "1px",
      cursor: "pointer",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      textDecoration: "none",
      boxSizing: "border-box",
      transition: "background-color 0.15s, color 0.15s",
      "-webkit-tap-highlight-color": "transparent"
    });

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

    const isActive = (currentFile === item.url || window.location.href.includes(encodeURIComponent(item.url)));
    if (isActive) {
      a.style.backgroundColor = "#a40000";
      a.style.color = "#ffffff";
      light.style.backgroundColor = "#ff0000";
      light.style.boxShadow = "0 0 6px #ff0000, inset 0 1px 2px rgba(0,0,0,0.2)";
    }

    a.onclick = function (e) {
      e.stopPropagation();
      document.querySelectorAll('#right-sidebar-container > a').forEach(b => {
        b.style.backgroundColor = '#6c6c6c';
        b.style.color = '#ffffff';
        const l = b.querySelector('.indicator-light');
        if (l) {
          l.style.backgroundColor = '#222222';
          l.style.boxShadow = 'inset 0 1px 2px rgba(0,0,0,0.5)';
        }
      });
      a.style.backgroundColor = '#a40000';
      a.style.color = '#ffffff';
      light.style.backgroundColor = '#ff0000';
      light.style.boxShadow = "0 0 6px #ff0000, inset 0 1px 2px rgba(0,0,0,0.2)";
    };

    sidebar.appendChild(a);
  });

  const target = document.getElementById("rightSidebar") || document.body;
  if (!document.getElementById("right-sidebar-container")) {
    target.appendChild(sidebar);
  }
  document.body.appendChild(sidebar);
});
