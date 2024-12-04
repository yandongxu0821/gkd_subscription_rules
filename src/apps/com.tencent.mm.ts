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
          actionDelay: 500,
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
          matches: 'Image[text*="feedback"][visibleToUser=true]',
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
    {
      key: 2,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      name: '小游戏推广&公众号页底活动推广',
      desc: '点击菜单->不感兴趣->内容太差',
      actionDelay: 1000, // 间隔一段时间防止误触
      rules: [
        {
          key: 1,
          matches: '@TextView -2 [text="广告 "]',
          snapshotUrls: [
            'https://i.gkd.li/i/18003196',
            'https://i.gkd.li/i/18003828',
          ],
        },
        {
          key: 2,
          preKeys: [1],
          matches: '[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18003221',
            'https://i.gkd.li/i/18003836',
          ],
        },
        {
          key: 3,
          preKeys: [2],
          matches: '[text="内容太差"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18003243',
            'https://i.gkd.li/i/18003842',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '公众号页内嵌广告', // byd微信连节点都不做了，找位置这个费劲 :(
      desc: '打开菜单->不感兴趣->内容太差->确定',
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 1,
          matches: '[desc="广告"]',
          position: {
            top: 'height*0.1862',
            left: 'width*0.9130',
          },
          snapshotUrls: 'https://i.gkd.li/i/18003266',
        },
        {
          key: 2,
          preKeys: [1],
          matches: '@View - * >3 [desc="广告"]',
          position: {
            top: 'height*0.4354',
            left: 'width*0.5474',
          },
          snapshotUrls: 'https://i.gkd.li/i/18003384',
        },
        {
          key: 3,
          preKeys: [2],
          matches: '@View - * >3 [desc="广告"]',
          position: {
            top: 'height*0.6332',
            left: 'width*0.1895',
          },
          snapshotUrls: 'https://i.gkd.li/i/18003458',
        },
        {
          key: 4,
          preKeys: [3],
          matches: '@View - * >3 [desc="广告"]',
          position: {
            top: 'height*0.1583',
            left: 'width*0.8631',
          },
          snapshotUrls: 'https://i.gkd.li/i/18003463',
        },
      ],
    },
  ],
});
