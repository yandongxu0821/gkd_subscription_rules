import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '腾讯文档',
      desc: '点击“在微信中查看”',
      rules: [
        {
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text="在微信中查看"]',
        },
      ],
    },
    {
      key: 1,
      name: '分段：订阅号中间广告',
      desc: '点击菜单->不感兴趣->内容太差',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 1,
          matches: 'Image[text="feedback"][visibleToUser=true]',
        },
        {
          preKeys: [1],
          key: 2,
          matches: '[text="不感兴趣"]',
        },
        {
          preKeys: [2],
          key: 3,
          matches: '[text="内容太差"]',
        },
      ],
    },
  ],
});
