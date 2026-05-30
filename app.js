const siteData = window.SITE_DATA;

const siteTitle = document.getElementById("site-title");
const siteSubtitle = document.getElementById("site-subtitle");
const currentDate = document.getElementById("current-date");
const prioritiesList = document.getElementById("priorities-list");
const remindersList = document.getElementById("reminders-list");
const toolsGrid = document.getElementById("tools-grid");
const categoriesGrid = document.getElementById("categories-grid");
const focusMantra = document.getElementById("focus-mantra");
const editorHelpContent = document.getElementById("editor-help-content");
const timerDisplay = document.getElementById("timer-display");
const startTimerButton = document.getElementById("start-timer");
const resetTimerButton = document.getElementById("reset-timer");
const focusModeToggle = document.getElementById("focus-mode-toggle");

let timerId = null;
let remainingSeconds = (siteData.focusTimer?.defaultMinutes || 25) * 60;
let focusModeEnabled = false;

function renderTextContent() {
  siteTitle.textContent = siteData.title;
  siteSubtitle.textContent = siteData.subtitle;
  focusMantra.textContent = siteData.focusMantra;
  currentDate.textContent = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  }).format(new Date());
}

function renderList(items, container) {
  container.innerHTML = "";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    container.appendChild(listItem);
  });
}

function createLinkCard({ label, url, note }, className) {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer noopener";

  const title = document.createElement("span");
  title.className = className === "tool-link" ? "tool-title" : "link-title";
  title.textContent = label;

  const noteText = document.createElement("span");
  noteText.className = className === "tool-link" ? "tool-note" : "link-note";
  noteText.textContent = note || "直接打开目标页面";

  anchor.append(title, noteText);
  return anchor;
}

function renderTools() {
  toolsGrid.innerHTML = "";

  siteData.tools.forEach((tool) => {
    const wrapper = document.createElement("article");
    wrapper.className = "tool-card";
    wrapper.appendChild(createLinkCard(tool, "tool-link"));
    toolsGrid.appendChild(wrapper);
  });
}

function renderCategories() {
  categoriesGrid.innerHTML = "";

  siteData.categories.forEach((category) => {
    const card = document.createElement("article");
    card.className = "category-card";

    const heading = document.createElement("h3");
    heading.textContent = category.name;

    const description = document.createElement("p");
    description.className = "category-description";
    description.textContent = category.description;

    const linksContainer = document.createElement("div");
    linksContainer.className = "link-list";

    category.links.forEach((link) => {
      linksContainer.appendChild(createLinkCard(link, "link-item"));
    });

    card.append(heading, description, linksContainer);
    categoriesGrid.appendChild(card);
  });
}

function renderEditorHelp() {
  editorHelpContent.innerHTML = "";

  const intro = document.createElement("p");
  intro.className = "editor-help-intro";
  intro.textContent = siteData.editorHelp.intro;

  const grid = document.createElement("div");
  grid.className = "editor-help-grid";

  siteData.editorHelp.sections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "editor-help-block";

    const heading = document.createElement("h3");
    heading.textContent = section.title;

    const list = document.createElement("ul");

    section.items.forEach((item) => {
      const listItem = document.createElement("li");
      const code = document.createElement("code");
      code.textContent = item;
      listItem.appendChild(code);
      list.appendChild(listItem);
    });

    block.append(heading, list);
    grid.appendChild(block);
  });

  editorHelpContent.append(intro, grid);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(remainingSeconds);
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  startTimerButton.textContent = "开始专注";
}

function startTimer() {
  if (timerId) {
    stopTimer();
    return;
  }

  startTimerButton.textContent = "暂停";
  timerId = window.setInterval(() => {
    if (remainingSeconds <= 0) {
      stopTimer();
      timerDisplay.textContent = "完成";
      return;
    }

    remainingSeconds -= 1;
    updateTimerDisplay();
  }, 1000);
}

function resetTimer() {
  stopTimer();
  remainingSeconds = (siteData.focusTimer?.defaultMinutes || 25) * 60;
  updateTimerDisplay();
}

function toggleFocusMode() {
  focusModeEnabled = !focusModeEnabled;
  document.body.classList.toggle("focus-mode", focusModeEnabled);
  focusModeToggle.textContent = focusModeEnabled ? "退出聚焦模式" : "开启聚焦模式";
  focusModeToggle.setAttribute("aria-pressed", String(focusModeEnabled));
}

function initializeDashboard() {
  renderTextContent();
  renderList(siteData.priorities, prioritiesList);
  renderList(siteData.reminders, remindersList);
  renderTools();
  renderCategories();
  renderEditorHelp();
  updateTimerDisplay();

  focusModeToggle.setAttribute("aria-pressed", "false");

  startTimerButton.addEventListener("click", startTimer);
  resetTimerButton.addEventListener("click", resetTimer);
  focusModeToggle.addEventListener("click", toggleFocusMode);
}

initializeDashboard();
