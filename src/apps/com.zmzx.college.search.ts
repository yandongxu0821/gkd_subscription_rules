import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 1,
      name: '开屏广告（漏网之鱼）',
      desc: '点击跳过',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zmzx.college.search.ad.resume.ResumeSplashActivity',
          matches: '[id="com.zmzx.college.search:id/ms_skipView"]',
          exampleUrls: 'https://e.gkd.li/undefined',
          snapshotUrls: 'https://i.gkd.li/i/18003525',
        },
      ],
    },
  ],
});
