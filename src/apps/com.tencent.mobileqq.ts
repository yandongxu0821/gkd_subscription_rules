import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      name: '右上角推广1',
      key: 0,
      desc: '关闭',
      rules: [
        {
          position: {
            top: 'height*0.2626',
            right: 'width*0.1094',
          },
          matches: ['[id="com.tencent.mobileqq:id/yxk"]'],
          fastQuery: true,
          activityIds: ['com.tencent.mobileqq.activity.SplashActivity'],
        },
      ],
    },
    {
      name: '开屏广告1',
      key: 1,
      desc: '跳过广告',
      rules: [
        {
          matches: ['[id="com.tencent.mobileqq:id/dzp"]'],
          fastQuery: true,
          activityIds: ['com.tencent.mobileqq.activity.SplashActivity'],
        },
      ],
    },
    {
      name: '搜索栏上方横幅广告',
      key: 2,
      desc: '关闭',
      rules: [
        {
          matches: ['[id="com.tencent.mobileqq:id/dij"]'],
          fastQuery: true,
          activityIds: ['com.tencent.mobileqq.activity.SplashActivity'],
        },
      ],
    },
    {
      name: '右上角推广0',
      key: 3,
      desc: '关闭',
      rules: [
        {
          position: {
            top: 'height*0.2626',
            right: 'width*0.1094',
          },
          matches: ['[id="com.tencent.mobileqq:id/z2y"]'],
          fastQuery: true,
          activityIds: ['com.tencent.mobileqq.activity.SplashActivity'],
        },
      ],
    },
  ],
});
