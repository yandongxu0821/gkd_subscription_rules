import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      name: '开屏透明广告',
      key: 0,
      desc: '关闭',
      rules: [
        {
          matches: [
            '[id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          ],
          fastQuery: true,
          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
  ],
});
