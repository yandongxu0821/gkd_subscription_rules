import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.keepmobi.duidiedalu.vivo',
  name: '堆叠大陆',
  groups: [
    {
      key: 1,
      name: '奖励视频广告',
      desc: '完成后跳过（测试）',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.vivo.mobilead.unified.reward.RewardVideoActivity',
          matches: '[text*="已"] +2 @[text="关闭"]',
        },
      ],
    },
  ],
});
