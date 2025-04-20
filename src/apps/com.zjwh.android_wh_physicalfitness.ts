import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 1,
      name: '开屏后广告0',
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
      name: '开屏后广告1',
      key: 0,
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
      key: 4,
      name: '摇一摇广告0',
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
      name: '摇一摇广告1',
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
      name: '开屏后广告2',
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
    {
      key: 6,
      name: '开屏后广告3',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/beizi_interstitial_ad_close_container_rl"]',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告/视频',
      desc: '点击跳过',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
          matches:
            '@ImageView < ViewGroup -4 ViewGroup <<5 [id="com.zjwh.android_wh_physicalfitness:id/splash_full_tk_play_card_view"]',
        },
      ],
    },
    {
      key: 8,
      name: '开屏后广告4',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -5 ViewGroup < ViewGroup - ImageView <<8 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 9,
      name: '开屏后广告5',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/beizi_interstitial_ad_close_container_rl"]',
        },
      ],
    },
    {
      key: 10,
      name: '摇一摇广告2',
      desc: '关闭(可能缓慢查询)',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -4 ViewGroup < ViewGroup - ImageView <<4 ViewGroup -2 ViewGroup <<4 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 11,
      name: '开屏后广告6',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -2 ViewGroup <<2 ViewGroup -2 ViewGroup <<4 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 12,
      name: '摇一摇广告3',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -4 ViewGroup < ViewGroup - ImageView <<8 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 13,
      name: '开屏广告0',
      desc: '跳过',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
          matches: '@ViewGroup > [text="跳过"]',
        },
      ],
    },
    {
      key: 14,
      name: '摇一摇广告4',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup -5 ViewGroup < ViewGroup - ImageView <<4 ViewGroup -2 ViewGroup <<4 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 15,
      name: '摇一摇广告5',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches:
            '@ViewGroup < ViewGroup - ImageView < ViewGroup - ImageView <<4 ViewGroup - ViewGroup <<4 [id="com.zjwh.android_wh_physicalfitness:id/ksad_tk_view"]',
        },
      ],
    },
    {
      key: 16,
      name: '摇一摇广告6',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView - TextView <<4 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 17,
      name: '开屏广告',
      desc: '跳过',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
          matches: '@ImageView + * > [text="跳过"]',
        },
      ],
    },
    {
      key: 18,
      name: '开屏后广告666',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
          matches: '[id="com.zjwh.android_wh_physicalfitness:id/ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19824665',
        },
      ],
    },
  ],
});

// TODO: key=3 处规则可合并为全局规则, fix ID: 0x01
