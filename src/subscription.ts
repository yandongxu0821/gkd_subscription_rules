import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 126958963,
  name: 'Subscription of Signal APPs',
  version: 1.0,
  author: 'yandongxu0821',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/yandongxu0821/gkd_subscription_rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
