import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hj119.sygjx',
  name: '实用工具箱',
  groups: [
    {
      name: '主页视频广告1（测试）',
      key: 0,
      desc: '关闭，如异常请禁用或删除此规则',
      rules: [
        {
          matches: [
            'ImageView < @ViewGroup < ViewGroup - FrameLayout - View - ImageView - ViewGroup - ViewGroup < ViewGroup - ImageView <<8 FrameLayout[id="com.hj119.sygjx:id/ksad_tk_view"]',
          ],
          fastQuery: true,
          activityIds: ['com.e4a.runtime.android.mainActivity'],
        },
      ],
    },
    {
      name: '主页广告0',
      key: 1,
      desc: '关闭',
      rules: [
        {
          matches: [
            '@FrameLayout - FrameLayout < FrameLayout - FrameLayout <<3 [id="android:id/content"]',
          ],
          fastQuery: true,
          activityIds: ['com.e4a.runtime.android.mainActivity'],
        },
      ],
    },
  ],
});
