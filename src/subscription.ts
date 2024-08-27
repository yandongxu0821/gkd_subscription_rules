import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 126958963,
  name: 'Subscription',
  version: 1.0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/yandongxu0821/gkd_subscription_rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
