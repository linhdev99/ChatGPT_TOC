javascript:(function () {
  if (document.getElementById("toc-panel") || document.getElementById("toc-handle")) return;

  var style = document.createElement("style");
  style.textContent = `
    #toc-panel {
      position: fixed;
      top: 50px;
      right: 0;
      width: 250px;
      max-height: 80vh;
      overflow-y: auto;
      background: #2c2c2c;
      color: #fff;
      border-left: 1px solid #444;
      font-family: sans-serif;
      font-size: 14px;
      z-index: 9999;
      box-shadow: -2px 0 5px rgba(0,0,0,0.5);
    }
    #toc-panel.collapsed {
      right: -250px;
    }
    #toc-handle {
      position: fixed;
      top: 50%;
      right: 250px;
      background: #555;
      color: #fff;
      padding: 5px 10px;
      cursor: pointer;
      z-index: 10000;
      transform: translateY(-50%);
    }
    #toc-list {
      list-style: none;
      padding: 10px;
      margin: 0;
    }
    #toc-list li {
      cursor: pointer;
      padding: 3px 5px;
    }
    #toc-list li:hover {
      background: #444;
    }
    .toc-sub {
      margin-left: 15px;
      font-size: 13px;
      color: #ccc;
    }
    #toc-header {
      background: #1f1f1f;
      padding: 10px;
      font-weight: bold;
      border-bottom: 1px solid #444;
    }
  `;
  document.head.appendChild(style);

  var panel = document.createElement("div");
  panel.id = "toc-panel";
  panel.innerHTML = '<div id="toc-header">Conversation TOC</div><ul id="toc-list"></ul>';
  document.body.appendChild(panel);

  var handle = document.createElement("div");
  handle.id = "toc-handle";
  handle.textContent = "TOC";
  document.body.appendChild(handle);

  handle.onclick = () => panel.classList.toggle("collapsed");

  function buildTOC() {
    const tocList = document.getElementById("toc-list");
    tocList.innerHTML = "";

    const turns = document.querySelectorAll("article[data-testid^='conversation-turn-']");
    turns.forEach((turn, index) => {
      const isAI = turn.querySelector("svg") !== null;
      const author = isAI ? "AI" : "You";

      const li = document.createElement("li");
      li.textContent = `Turn ${index + 1} (${author})`;
      li.onclick = () => turn.scrollIntoView({ behavior: "smooth" });
      tocList.appendChild(li);

      if (isAI) {
        turn.querySelectorAll("h3").forEach(h3 => {
          const sub = document.createElement("li");
          sub.textContent = `↳ ${h3.textContent}`;
          sub.classList.add("toc-sub");
          sub.onclick = (e) => {
            e.stopPropagation();
            h3.scrollIntoView({ behavior: "smooth" });
          };
          tocList.appendChild(sub);
        });
      }
    });
  }

  const observerTarget = document.querySelector("main") || document.body;
  const observer = new MutationObserver(buildTOC);
  observer.observe(observerTarget, { childList: true, subtree: true });

  buildTOC();
})();
