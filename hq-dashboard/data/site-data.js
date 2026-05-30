window.SITE_DATA = {
  title: "高质量信息仪表盘",
  subtitle: "把重要入口放在一个清晰、安静的首页里。",
  priorities: [
    "先完成今天最重要的三件事。",
    "让高质量信息先进入你的注意力。",
    "带着明确目的，再打开下一个页面。"
  ],
  reminders: [
    "先想清楚：你现在要找的是什么？",
    "如果一个页面没有价值，可以直接关掉它。",
    "把注意力留给真正重要的内容。",
    "完成关键任务之后，再安排放松。"
  ],
  tools: [
    { label: "邮箱", url: "https://mail.google.com/", note: "重要通信" },
    { label: "日历", url: "https://calendar.google.com/", note: "当天安排" },
    { label: "Notion", url: "https://www.notion.so/", note: "任务与资料" },
    { label: "Claude", url: "https://claude.ai/", note: "思考与整理" }
  ],
  categories: [
    {
      id: "learning",
      name: "学习",
      description: "课程、笔记与持续学习。",
      links: [
        { label: "中国大学 MOOC", url: "https://www.icourse163.org/", note: "系统课程" },
        { label: "Bilibili", url: "https://www.bilibili.com/", note: "只看你主动选择的内容" },
        { label: "Zotero", url: "https://www.zotero.org/", note: "论文整理" }
      ]
    },
    {
      id: "research",
      name: "研究",
      description: "论文、检索与研究资料。",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/", note: "学术检索" },
        { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/", note: "生命科学论文" },
        { label: "arXiv", url: "https://arxiv.org/", note: "前沿论文" }
      ]
    },
    {
      id: "news",
      name: "高质量信息",
      description: "低噪音、长期有价值的信息。",
      links: [
        { label: "少数派", url: "https://sspai.com/", note: "效率与数字生活" },
        { label: "MIT Technology Review", url: "https://www.technologyreview.com/", note: "科技趋势" },
        { label: "36Kr 深度", url: "https://www.36kr.com/", note: "看深度，不刷信息流" }
      ]
    },
    {
      id: "knowledge",
      name: "知识库",
      description: "沉淀、整理与回看。",
      links: [
        { label: "飞书", url: "https://www.feishu.cn/", note: "文档与协作" },
        { label: "GitHub", url: "https://github.com/", note: "代码与项目" },
        { label: "Claude", url: "https://claude.ai/", note: "思考与写作辅助" }
      ]
    }
  ],
  focusTimer: {
    defaultMinutes: 25,
    shortBreakMinutes: 5
  },
  focusMantra: "把注意力留给真正重要的事情。",
  editorHelp: {
    intro: "如果你以后还想继续调整这个页面，可以直接对 Claude 说下面这些话。",
    sections: [
      {
        title: "英文说法",
        items: [
          "Use hq-dashboard-editor to edit my dashboard website.",
          "Use hq-dashboard-editor to replace the starter links with my real websites.",
          "Use hq-dashboard-editor to redesign the homepage layout.",
          "Use hq-dashboard-editor to improve the focus timer and anti-distraction area."
        ]
      },
      {
        title: "中文说法",
        items: [
          "使用 hq-dashboard-editor，帮我修改这个网站",
          "使用 hq-dashboard-editor，把首页示例网站换成我真实常用的网站",
          "使用 hq-dashboard-editor，把页面改得更高级一点",
          "使用 hq-dashboard-editor，增加一个更好的专注模式"
        ]
      }
    ]
  }
};
