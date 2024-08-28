import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.space',
  name: 'vivo官网',
  groups: [
    {
      name: '消息通知请求',
      key: 1,
      desc: '取消',
      rules: [
        {
          matches: ['[id="com.vivo.space:id/vbutton_title"][text="取消"]'],
          fastQuery: true,
          activityIds: ['com.vivo.space.ui.VivoSpaceTabActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '开屏广告',
      desc: '关闭（漏网之鱼）',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.vivo.space.ui.VivoSpaceTabActivity',
          matches: '[id="com.vivo.space:id/timer"]',
        },
      ],
    },
  ],
});
