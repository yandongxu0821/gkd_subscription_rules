import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      name: '首页弹窗1',
      key: 0,
      desc: '关闭',
      rules: [
        {
          fastQuery: true,
          matches: ['@ImageView - ImageView <<6 [id="android:id/content"]'],
          activityIds: ['com.onethingcloud.android.MainActivity'],
        },
      ],
    },
  ],
});
