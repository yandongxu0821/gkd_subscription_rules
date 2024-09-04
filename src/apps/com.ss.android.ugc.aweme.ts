import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '广告视频下方广告',
      desc: '对已声明的广告直接关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches: '[id="com.ss.android.ugc.aweme:id/close"]',
        },
      ],
    },
  ],
});
