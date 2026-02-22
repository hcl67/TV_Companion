// 监听插件图标点击事件
chrome.action.onClicked.addListener((tab) => {
  // 在当前窗口打开侧边栏
  chrome.sidePanel.open({ windowId: tab.windowId });
});

// 设置点击图标时不要弹出默认 popup，而是执行上面的监听函数
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
});