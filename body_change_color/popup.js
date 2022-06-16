const originalBodyColor = document.body.style.backgroundColor;

function onRun(bgColor) {
  document.body.style.backgroundColor = bgColor;
}

document.getElementById("btn_dark").addEventListener("click", async () => {
  let bgColor = "#333";
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: onRun,
    args: [bgColor]
  });
});

document.getElementById("btn_bright").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  const color = "#fff";
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: onRun,
    args: [color]
  });
});

document.getElementById("btn_reset").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  const color = originalBodyColor;
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: onRun,
    args: [color]
  });
});
