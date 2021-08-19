/*
 * @Author: wkpan2
 * @Date: 2021-08-15 22:26:53
 * @LastEditTime: 2021-08-15 22:38:28
 * @Description:
 */
export default {
  pageTitle: 'Nest.js Monitoring Page1',
  port: 3000,
  path: '/status',
  ignoreStartsWith: '/healt/alive',
  spans: [
    {
      interval: 1, // Every second
      retention: 60, // Keep 60 datapoints in memory
    },
    {
      interval: 5, // Every 5 seconds
      retention: 60,
    },
    {
      interval: 15, // Every 15 seconds
      retention: 60,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  healthChecks: [],
};
