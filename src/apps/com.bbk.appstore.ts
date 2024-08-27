import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bbk.appstore',
  name: 'vivo应用商店',
  groups: [
    {
      name: '开启通知请求',
      key: 0,
      desc: '点击取消',
      rules: [
        {
          matches: ['[id="com.bbk.appstore:id/vbutton_title"][text="取消"]'],
          fastQuery: true,
          activityIds: ['com.bbk.appstore.ui.AppStoreTabActivity'],
        },
      ],
    },
  ],
});
