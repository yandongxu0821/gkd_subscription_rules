import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 1,
      name: '消息通知请求',
      desc: '直接关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'cmb.pb.app.mainframe.container.PBMainActivity',
          matches: '[id="cmb.pb:id/close_btn"]',
        },
      ],
    },
  ],
});
