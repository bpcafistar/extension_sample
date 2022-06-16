const originalBodyColor = document.body.style.backgroundColor;

function setColors(bgColor) {
  document.body.style.backgroundColor = bgColor;
}

async function onRun(color) {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    func: setColors,
    args: [color]
  });
}

document.getElementById("btn_dark").addEventListener("click", async () => {
  await onRun("#333");
});

document.getElementById("btn_bright").addEventListener("click", async () => {
  await onRun("#fff");
});

document.getElementById("btn_reset").addEventListener("click", async () => {
  await onRun(originalBodyColor);
});
