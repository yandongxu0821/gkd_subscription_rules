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
    {
      key: 2,
      name: '随机广告（高占用）',
      desc: '关闭（可能占用较多资源）',
      rules: [
        {
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '@View <<2 View -2 View <<2 View - TextView <<4 FrameLayout -3 FrameLayout <<4 FrameLayout -2 FrameLayout <<3 [id="android:id/content"]',
        },
      ],
    },
  ],
});
