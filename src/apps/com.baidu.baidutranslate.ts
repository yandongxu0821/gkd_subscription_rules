import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.baidutranslate',
  name: '百度翻译',
  groups: [
    {
      key: 1,
      name: '弹出广告',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.baidu.baidutranslate.activity.MainActivity',
          matches: '[id="com.baidu.baidutranslate:id/iv_close"]',
        },
      ],
    },
  ],
});
