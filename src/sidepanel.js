document.getElementById('copy-btn').onclick = function() {
  const prompt = generatePrompt();
  if (!prompt) return;

  navigator.clipboard.writeText(prompt).then(() => {
    const btn = document.getElementById('copy-btn');
    btn.innerText = "✅ 指令已复制";
    setTimeout(() => btn.innerText = "复制防剧透 Prompt", 2000);
  });
};

document.getElementById('jump-btn').onclick = function() {
  const prompt = generatePrompt();
  if (!prompt) return;

  // 复制内容
  navigator.clipboard.writeText(prompt);
  // 跳转到 Gemini 网页版
  window.open('https://gemini.google.com/app', '_blank');
};

function generatePrompt() {
  const show = document.getElementById('showName').value || "当前剧集";
  const ep = document.getElementById('episode').value || "当前进度";
  const question = document.getElementById('userQuestion').value;
  const isLore = document.getElementById('loreMode').checked;

  if (!question) {
    alert("请输入您想问的问题");
    return null;
  }

  return `你现在是一个专业的防剧透剧迷助手。
用户进度：看完了《${show}》的 ${ep}。
回答原则：
1. 严禁提及 ${ep} 之后的任何情节、人物生死、真相。
2. ${isLore ? "【深度模式】：允许结合原著背景回答，但严禁剧透当前剧集后续。" : "【纯净模式】：仅限基于已播情节回答。"}
3. 如果问题涉及未来剧透，请拒绝并引导我观察当前线索。

我的问题是：${question}`;
}