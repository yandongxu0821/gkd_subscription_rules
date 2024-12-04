import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ichano.athome.camera',
  name: '掌上看家',
  groups: [
    {
      key: 1,
      name: '主页横幅广告中',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ichano.athome.camera.AtHomeCameraLiveOneCid_',
            'com.ichano.athome.camera.AtHomeMain',
          ],
          matches: '[id="com.ichano.athome.camera:id/iv_close_ad"]',
          snapshotUrls: 'https://i.gkd.li/i/18002907',
        },
      ],
    },
    {
      key: 2,
      name: '主页横幅广告下',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ichano.athome.camera.AtHomeCameraLiveOneCid_',
            'com.ichano.athome.camera.AtHomeMain',
          ],
          matches: '[id="com.ichano.athome.camera:id/iv_close_ad_bottom"]',
          snapshotUrls: 'https://i.gkd.li/i/18003015',
        },
      ],
    },
    {
      key: 3,
      name: '主页横幅广告上',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.ichano.athome.camera.AtHomeCameraLiveOneCid_',
            'com.ichano.athome.camera.AtHomeMain',
          ],
          matches: '[id="com.ichano.athome.camera:id/iv_close_ad_top"]',
          snapshotUrls: 'https://i.gkd.li/i/18003009',
        },
      ],
    },
  ],
});
