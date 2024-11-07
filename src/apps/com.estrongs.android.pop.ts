import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.estrongs.android.pop',
  name: 'ES文件浏览器',
  groups: [
    {
      name: '主页广告0',
      key: 0,
      desc: '关闭',
      rules: [
        {
          matches: [
            'FrameLayout > ViewGroup > ViewGroup > ViewGroup > ViewGroup > ViewGroup > ViewGroup > @ViewGroup[clickable=true] > ImageView',
          ],
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告1',
      key: 1,
      desc: '关闭',
      rules: [
        {
          matches: ['@ImageView[id="com.estrongs.android.pop:id/iv_close"]'],
          fastQuery: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告2（修改）',
      key: 2,
      desc: '关闭',
      rules: [
        {
          matches: [
            '@FrameLayout -2 * < FrameLayout - FrameLayout <<3 [id="android:id/content"]',
          ],
          fastQuery: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告3',
      key: 3,
      desc: '关闭',
      rules: [
        {
          matches: [
            'FrameLayout[id="android:id/content"] > FrameLayout > FrameLayout > FrameLayout > @FrameLayout > ImageView',
          ],
          activityIds: [
            'com.fighter.activities.ReaperTranslucentInteractionActivity',
          ],
        },
      ],
    },
    {
      name: '主页广告4',
      key: 4,
      desc: '关闭',
      rules: [
        {
          matches: [
            'ImageView < @ViewGroup < ViewGroup - ViewGroup - View - ImageView - ImageView - ViewGroup - ImageView - ViewGroup <<7 FrameLayout - FrameLayout <<4 [id="android:id/content"]',
          ],
          fastQuery: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告5',
      key: 5,
      desc: '关闭',
      rules: [
        {
          matches: ['@FrameLayout - ImageView <<4 [id="android:id/content"]'],
          fastQuery: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '主页广告6',
      desc: '关闭(需要模拟点击)',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            'ImageView - @FrameLayout - ImageView <<4 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 7,
      name: '主页广告7',
      desc: '关闭(需要模拟点击)',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            'ImageView < @FrameLayout - FrameLayout <<5 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 8,
      name: '主页广告8',
      desc: '关闭(需要模拟点击)',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches: '@FrameLayout - ImageView <<5 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 9,
      name: '主页广告9',
      desc: '关闭(需要模拟点击)',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches: '@FrameLayout - FrameLayout <<4 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 10,
      name: '主页广告10',
      desc: '关闭（需要模拟点击）',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches: '@FrameLayout - * <<4 [id="android:id/content"]',
        },
      ],
    },
    {
      key: 11,
      name: '首页插图广告',
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches:
            '[id="com.estrongs.android.pop:id/close_b_i_a_t_b_no_compliance"]',
        },
      ],
    },
    {
      key: 12,
      name: '傻逼3s广告（beta）',
      desc: '等待3s后点击关闭',
      rules: [
        {
          matches: ['@* -3 * <<4 [id="android:id/content"]'],
          actionDelay: 3500,
          fastQuery: true,
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '摇一摇广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.estrongs.android.pop.view.FileExplorerActivity',
          matches: '@FrameLayout -2 * <<2 * - * <<3 [id="android:id/content"]',
        },
      ],
    },
  ],
});

// TODO: key=7 处规则可合并为全局规则, fix ID: 0x01
