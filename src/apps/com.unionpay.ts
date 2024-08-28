import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '主页右下角推广',
      desc: '关闭（耗时较高）',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.unionpay.activity.UPActivityMain',
          matches: '[id="com.unionpay:id/close_view"]',
          position: {
            right: 'width*0.2031',
            bottom: 'height*0.2770',
          },
        },
      ],
    },
  ],
});
