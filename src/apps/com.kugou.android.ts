import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      name: '开屏广告',
      key: 0,
      desc: '点击跳过',
      rules: [
        {
          matches: [
            '@View < FrameLayout - FrameLayout <<3 [id="android:id/content"]',
          ],
          fastQuery: true,
          activityIds: ['com.kugou.android.app.splash.SplashActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '未识别的开屏广告',
      desc: '跳过，主订阅的漏网之鱼',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kugou.android.app.splash.SplashActivity',
          matches: '@View[desc="跳过"] -3 View <<2 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 2,
      name: '内测更新提示',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[id="com.kugou.android:id/hno"]',
        },
      ],
    },
    {
      key: 3,
      name: '推荐页内嵌广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.kugou.android.app.MediaActivity',
          matches: '[id="com.kugou.android:id/egj"]',
          snapshotUrls: 'https://i.gkd.li/i/18003869',
        },
      ],
    },
    {
      key: 4,
      name: '评论区内嵌广告',
      desc: '点击菜单->不感兴趣',
      activityIds: 'com.kugou.android.app.MediaActivity',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[id="com.kugou.android:id/rmz"]',
          snapshotUrls: 'https://i.gkd.li/i/18003889',
        },
        {
          key: 2,
          preKeys: [1],
          fastQuery: true,
          matches: '[id="com.kugou.android:id/rmw"]',
          snapshotUrls: 'https://i.gkd.li/i/18003891',
        },
      ],
    },
  ],
});
