/**
 * 请求后端接口数据
 */
import axios from '@/libs/api.request';

// 保存后的会议列表
export const getListQueryAllStaffSeat = (meetingId) => {
  return axios.request({
    url: '/staff/list_query_all_staff_seat?meetingId=' + meetingId,
    method: 'get'
  });
};

// 查询模板列表（分页）
export const getListTemplate = (data) => {
  return axios.request({
    url: '/templates/list_template',
    method: 'get',
    params: data
  });
};

// 禁用模板
export const disableTemplate = (data) => {
  return axios.request({
    url: '/templates/disable_template',
    method: 'PUT',
    data
  });
};

// 逻辑删除模板
export const delTemplate = (data) => {
  return axios.request({
    url: '/templates/delete_template',
    method: 'PUT',
    data
  });
};

// 初始化排序接口
export const getAcceptData = (templateId, meetingId, isReset, uid) => {
  return axios.request({
    url: '/staff/accept_data?templateId=' + templateId + '&meetingId=' + meetingId + '&isReset=' + isReset + '&uid=' + uid,
    method: 'post'
  });
};

// 重新自动排序
export const getQueryStaffSeatInitData = (meetingId) => {
  return axios.request({
    url: '/staff/query_staff_seat_init_data?meetingId=' + meetingId,
    method: 'get'
  });
};

// 保存排序后的人员列表
export const saveData = (data) => {
  return axios.request({
    url: '/staff/save_data',
    method: 'post',
    data
  });
};

// 导出人员列表
export const exportExcel = (meetingId) => {
  return axios.request({
    url: '/staff/export_excel?meetingId=' + meetingId,
    method: 'get'
  });
};

// 显示模板详情
export const getTemplateDetail = (data) => {
  return axios.request({
    url: '/templates/show_template_detail?templateId=' + data.id,
    method: 'get'
  });
};

// 参会人员接口
export const getlistQueryStaff = (meetingId) => {
  return axios.request({
    url: '/staff/list_query_staff?meetingId=' + meetingId,
    method: 'get'
  });
};

// 搜索机构人员
export const searchUser = (searchName) => {
  return axios.request({
    url: '/staff/search_staff?searchName=' + searchName,
    method: 'get'
  });
};

// 上传图片
export const uploadImg = (data) => {
  return axios.request({
    url: '/staff/save_meeting_url',
    method: 'post',
    data
  });
};

// 获取染色数据
export const getMeetingInfo = (userId, meetingId) => {
  return axios.request({
    url: '/staff/list_staff_seat_data?userId=' + userId + '&meetingId=' + meetingId,
    method: 'get'
  });
};

// 获取坐标值
export const getEventData = (data) => {
  return axios.request({
    url: '/staff/seat_data',
    method: 'post',
    data
  });
};
