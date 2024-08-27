import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vivo.appfilter',
  name: 'vivo防拉起服务',
  groups: [
    {
      name: '防拉起服务',
      key: 0,
      desc: '取消',
      rules: [
        {
          matches: ['[id="com.vivo.appfilter:id/vbutton_title"][text="取消"]'],
          fastQuery: true,
          activityIds: ['com.vivo.appfilter.activity.AppJumpPromptActivity'],
        },
      ],
    },
  ],
});
