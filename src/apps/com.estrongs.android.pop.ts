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
          quickFind: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告2（修改1）',
      key: 2,
      desc: '关闭',
      rules: [
        {
          matches: [
            '@FrameLayout -2 FrameLayout < FrameLayout - FrameLayout <<3 [id="android:id/content"]',
          ],
          quickFind: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
    {
      name: '主页广告2（修改2）',
      key: 21,
      desc: '关闭',
      rules: [
        {
          matches: [
            '@FrameLayout -2 ImageView < FrameLayout - FrameLayout <<3 [id="android:id/content"]',
          ],
          quickFind: true,
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
          quickFind: true,
          activityIds: ['com.estrongs.android.pop.view.FileExplorerActivity'],
        },
      ],
    },
  ],
});
