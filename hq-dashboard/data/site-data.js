window.SITE_DATA = {
  title: "个人执行工作台",
  subtitle: "把今天要推进的任务、常开工具和核心工作入口集中到一个能直接开工的首页。",
  heroQuote: {
    text: "Here’s to the crazy ones.",
    author: "Steve Jobs / Apple"
  },
  priorities: [
    "先写下今天必须推进的 3 个动作，再开始打开页面。",
    "每次只推进一个结果：发送、整理、提交或输出。",
    "高频入口只保留真正能立刻帮助你开工的页面。"
  ],
  reminders: [
    "打开新标签前，先确认下一步动作是什么。",
    "如果一个页面不能帮助推进当前任务，就立刻关闭。",
    "先完成交付，再回消息，再做补充优化。",
    "一个专注周期结束后，只安排一个明确的下一步。"
  ],
  tools: [
    { label: "得到", url: "https://www.dedao.cn/", note: "进入得到学习内容" },
    { label: "小鹅通", url: "https://study.xiaoe-tech.com/t_l/learnIndex?type=wx#/muti_index", note: "进入课程学习页面" },
    { label: "任务板", url: "https://www.notion.so/", note: "查看待办与推进状态" },
    { label: "文档", url: "https://docs.google.com/", note: "快速进入正在写的内容" }
  ],
  categories: [
    {
      id: "execution",
      name: "执行项目",
      description: "任务推进、项目状态与交付入口。",
      links: [
        { label: "Obsidian", url: "obsidian://", note: "打开本地 Obsidian" },
        { label: "Trello", url: "https://trello.com/", note: "轻量任务看板" },
        { label: "有机化学习题", url: "https://organic.cpu.edu.cn/lesson/", note: "课程练习入口" }
      ]
    },
    {
      id: "research",
      name: "研究检索",
      description: "查资料、看论文、补事实依据。",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/", note: "快速检索论文" },
        { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", note: "医学与生命科学" },
        { label: "arXiv", url: "https://arxiv.org/", note: "前沿预印本" }
      ]
    },
    {
      id: "writing",
      name: "写作输出",
      description: "起草内容、整理观点、完成可交付成果。",
      links: [
        { label: "Google Docs", url: "https://docs.google.com/", note: "长文与协作文档" },
        { label: "Claude", url: "https://claude.ai/", note: "整理思路与草稿" },
        { label: "DeepL", url: "https://www.deepl.com/translator", note: "翻译与表达校正" }
      ]
    },
    {
      id: "development",
      name: "开发维护",
      description: "代码、版本控制与技术排查入口。",
      links: [
        { label: "GitHub", url: "https://github.com/", note: "仓库与 issue" },
        { label: "Stack Overflow", url: "https://stackoverflow.com/", note: "技术问题检索" },
        { label: "Vercel", url: "https://vercel.com/", note: "部署与预览" }
      ]
    }
  ],
  focusTimer: {
    defaultMinutes: 10,
    shortBreakMinutes: 5
  },
  focusMantra: "先推进当前任务，再决定要不要打开下一个入口。",
  editorHelp: {
    intro: "以后要继续维护这个首页，优先直接说你想改哪一块：布局、链接、分类、提醒语或专注区。",
    sections: [
      {
        title: "替换内容",
        items: [
          "使用 hq-dashboard-editor，把示例工具换成我真实常用的网站",
          "使用 hq-dashboard-editor，按我的工作流重排分类和链接",
          "使用 hq-dashboard-editor，把提醒语改成更像我的执行习惯"
        ]
      },
      {
        title: "调整布局与样式",
        items: [
          "Use hq-dashboard-editor to make the dashboard denser and more workbench-like.",
          "Use hq-dashboard-editor to redesign the priorities, timer, and categories layout.",
          "Use hq-dashboard-editor to simplify the homepage and remove anything low-value."
        ]
      },
      {
        title: "优化专注区",
        items: [
          "使用 hq-dashboard-editor，优化专注计时和聚焦模式的视觉层级",
          "Use hq-dashboard-editor to make focus mode hide secondary sections more aggressively.",
          "使用 hq-dashboard-editor，让提醒区更适合执行型工作流"
        ]
      }
    ]
  }
};
