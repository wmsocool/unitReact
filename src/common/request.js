// /**
//  * request 网络请求工具
//  * 更详细的 api 文档: https://github.com/umijs/umi-request
//  */
// import { extend } from 'umi-request';
// import { notification, message } from 'antd';
// import { setLoginCookie, removeLoginCookie, getAccessToken } from './cookie'
// import { navigatorToUnitLogin } from './utils'

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };
// /**
//  * 异常处理程序
//  */

// const errorHandler = error => {
//   const { response, data } = error;
//   if (response && response.status) {
//     const errorText = codeMessage[response.status] || response.statusText;
//     const { status, url } = response;
//     // notification.open({
//     //   message: `请求错误 ${status}: ${url}`,
//     //   description: data.error_description || errorText,
//     // });

//     // message.config({
//     //   top: 100,
//     //   duration: 2,
//     //   maxCount: 3,
//     // });
//     // console.log(data.error_description)
//     if (data.error_description && data.error_description.indexOf('Access token expired') != -1) {
//       removeLoginCookie()
//       message.error('登录已过期，请重新登录', 2.5).then(() => {
//         navigatorToUnitLogin()
//       })
//       return
//     }

//     message.error(data.error_description || errorText, 2)

//     throw error.data
//   }
// };
// /**
//  * 配置request请求时的默认参数
//  */

// const request = extend({
//   // prefix: window.REQUEST_URL,
//   errorHandler,
//   // 默认错误处理
//   credentials: 'include', // 默认请求是否带上cookie
// });

// let access_token = '';

// // handle request
// request.interceptors.request.use((url, options) => {
//   // console.log(url);
//   // console.log(options);

//   if (url.indexOf('gdy') >= 0) {
//     url = window.REQUEST_URL + url
//   }

//   if (url.indexOf('gdy-basic-login/oauth/token') < 0) {
//     if (!access_token) {
//       access_token = getAccessToken();
//     }
//     options.headers['Authorization'] = 'bearer ' + access_token
//   }

//   return (
//     {
//       url: `${url}`,
//       options: { ...options, interceptors: true },
//     }
//   );
// });
// // handle response
// request.interceptors.request.use((response, options) => {
//   // console.log(options)
//   return response;
// });

// // use middleware, handling request and response
// // request.use(async (ctx, next) => {
// //   const { req } = ctx;
// //   const { url, options } = req;
// //   // add prefix
// //   ctx.req.url = `api/v1/${url}`;
// //   ctx.req.options = {
// //     ...options,
// //   };
// //   await next();

// //   const { res } = ctx;
// //   const { success = false } = res;
// //   if (!success) {
// //     // Handle fail request here
// //   }
// // })

// export default request;
var request = function() {}
export default request
