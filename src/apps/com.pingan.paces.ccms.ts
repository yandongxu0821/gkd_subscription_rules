import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.paces.ccms',
  name: '平安口袋银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗广告',
      desc: '关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.pingan.launcher.activity.LauncherActivity',
          matches: '[id="com.pingan.paces.ccms:id/bottom_close_image"]',
        },
      ],
    },
  ],
});
