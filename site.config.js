const CONFIG = {
  // profile setting (required)
  profile: {
    name: "kkr",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Computer Engineering",
    bio: "컴퓨터공학과 3학년",
    email: "kkr010128@icloud.com",
    linkedin: "",
    github: "kkr010128",
    instagram: "kk_0128_",
  },
  projects: [
    {
      name: `Velog`,
      href: "https://velog.io/@kk_0128_/posts",
    },
  ],
  // blog setting (required)
  blog: {
    title: "공부노트",
    description: "전과생의 경험을 기록하는 성장 일기",
  },

  // CONFIG configration (required)
  link: "https://media.discordapp.net/attachments/1068373857578274816/1251481156071854121/thumb.JPG?ex=666ebc27&is=666d6aa7&hm=946ffe1525a30567a6b3ffd587e911973bcbceefd5ec467e6998029d42f9839e&=&format=webp&width=604&height=1074",
  since: "", // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://media.discordapp.net/attachments/1068373857578274816/1251481156071854121/thumb.JPG?ex=666ebc27&is=666d6aa7&hm=946ffe1525a30567a6b3ffd587e911973bcbceefd5ec467e6998029d42f9839e&=&format=webp&width=604&height=1074", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: "google70d826bc20f1e742.html",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: "naverad0aef2b488c88e3d728a064634ff369",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "kkr010128/kelog",
      "issue-term": "pathname",
      label: "💬 Comments",
      theme: "github-dark",
      crossorigin: "anonymous",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 60, // revalidate time for [slug], index
}

module.exports = { CONFIG }
