import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ygkj.chelaile.standard',
  name: '车来了',
  groups: [
    {
      name: '首页穿插广告0',
      key: 0,
      desc: '×',
      rules: [
        {
          matches: [
            '@[id="com.ygkj.chelaile.standard:id/cll_all_pic_close_1"]',
          ],
          fastQuery: true,
          activityIds: ['dev.xesam.chelaile.app.module.PanelHostActivity'],
        },
      ],
    },
    {
      name: '线路详情页穿插广告0',
      key: 1,
      desc: '×',
      rules: [
        {
          matches: [
            '@[id="com.ygkj.chelaile.standard:id/cll_all_pic_close_container_1"]',
          ],
          fastQuery: true,
          activityIds: [
            'dev.xesam.chelaile.app.module.line.gray.LineDetailActivity',
          ],
        },
      ],
    },
  ],
});
