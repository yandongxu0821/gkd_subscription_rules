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
    {
      key: 4,
      name: '开屏后的摇一摇广告0',
      desc: '点击跳过',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches: '@ViewGroup > [text="跳过"]',
        },
      ],
    },
    {
      key: 2,
      name: '开屏后的摇一摇广告1',
      desc: '点击跳过',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -2 ImageView <<6 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 3,
      name: '主页广告0',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            'ImageView < @FrameLayout - FrameLayout <<5 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 5,
      name: '百度广告',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView -3 RelativeLayout <<4 [id="android:id/content"]',
        },
      ],
    },
  ],
});

// TODO: key=3 处规则可合并为全局规则, fix ID: 0x01
