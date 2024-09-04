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
  ],
});
