import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      name: '主页透明广告1',
      key: 0,
      desc: '关闭',
      rules: [
        {
          matches: ['[id="com.chinamobile.mcloud:id/iv_close"]'],
          fastQuery: true,
          activityIds: ['com.chinamobile.mcloud.client.ui.MenuActivity'],
        },
      ],
    },
  ],
});
