import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      name: '主页右下角广告',
      key: 0,
      desc: '关闭',
      rules: [
        {
          matches: ['[id="com.sinovatech.unicom.ui:id/home_xuanfu_close"]'],
          fastQuery: true,
          activityIds: ['com.sinovatech.unicom.basic.ui.activity.MainActivity'],
        },
      ],
    },
  ],
});
