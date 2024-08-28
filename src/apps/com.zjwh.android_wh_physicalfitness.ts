import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 1,
      name: '全屏广告',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches: '[id="com.zjwh.android_wh_physicalfitness:id/iv_close"]',
        },
      ],
    },
    {
      name: '开屏第二个广告',
      key: 0,
      desc: '关闭',
      rules: [
        {
          matches: ['[id="com.zjwh.android_wh_physicalfitness:id/iv_close"]'],
          fastQuery: true,
          activityIds: [
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          ],
        },
      ],
    },
  ],
});
