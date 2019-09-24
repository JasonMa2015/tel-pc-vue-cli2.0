<template>
  <div class="list-tab">
    <Switch v-model="switch1" @on-change="change" />
    <div class="attendees-table">
      <div class="attendees-info">
        <table>
          <tr>
            <th
            v-for="(item, index) in attendees"
            :class="'th ' + item.class"
            :key="index">
              {{item.title}}
            </th>
          </tr>
          <tr
          v-for="(item, index) in attendeesData"
          :key="index">
            <td class="td">{{item.templateName}}</td>
            <td class="td">{{item.templateDesc}}</td>
            <td class="td">{{item.createUserName}}</td>
            <td class="td">{{item.createTime}}</td>
            <td class="td">
               <a href="javascript:;" @click="disableConfirmation(item.id)">禁用</a>
               <a href="javascript:;" @click="delConfirmation(item.id, index)">删除</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <Modal v-model="delModal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>确认删除</span>
      </p>
      <div style="text-align:center">
        <p>删除后无法恢复，是否要继续删除？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="del_loading" @click="del">删除</Button>
      </div>
    </Modal>
    <Modal v-model="disableModal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>确认禁用</span>
      </p>
      <div style="text-align:center">
        <p>禁用后可以重新开启，是否要继续禁用？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="disable_loading" @click="disable">禁用</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { getListTemplate, disableTemplate, delTemplate } from '@/api/data.js';
export default {
  name: 'Home',
  data () {
    return {
      switch1: false,
      id: '',
      index: '',
      delModal: false, // 删除
      del_loading: false, // 删除
      disableModal: false, // 禁用
      disable_loading: false, // 禁用
      attendees: [
        {
          title: '会议室布局模板名称',
          class: 'edit-no'
        }, {
          title: '会议室描述',
          class: 'editable'
        }, {
          title: '创建人',
          class: 'editable'
        }, {
          title: '创建时间',
          class: 'editable'
        }, {
          title: '操作选项',
          class: 'editable'
        }
      ],
      attendeesData: []
    };
  },
  //
  created () {
    this.getListTemplate();
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status);
    },
    // 获取列表
    getListTemplate () {
      getListTemplate({
        page: '1',
        pageSize: '20'
      }).then(res => {
        let data = res.data.data;
        this.attendeesData = data.list;
      });
    },
    // 禁用模板
    disableConfirmation (id) {
      this.disableModal = true;
      this.id = id;
    },
    disable () {
      this.disable_loading = true;
      disableTemplate({id: this.id}).then(res => {
        this.disable_loading = false;
        this.disableModal = false;
        if (res.status === 200) {
          this.$Message.success('禁用成功');
        } else {
          this.$Message.success(res.message);
        }
      }).catch(err => {
        console.log(err);
        this.disable_loading = false;
        this.disableModal = false;
        this.$Message.error('禁用失败，请刷新重试');
      });
    },

    // 删除模板
    delConfirmation (id, index) {
      this.delModal = true;
      this.id = id;
      this.index = index;
    },
    del () {
      this.del_loading = true;
      delTemplate({id: this.id}).then(res => {
        this.del_loading = false;
        this.delModal = false;
        if (res.status === 200) {
          this.attendeesData.splice(this.index, 1);
          this.$Message.success('删除成功');
        } else {
          this.$Message.success(res.message);
        }
      }).catch(err => {
        console.log(err);
        this.del_loading = false;
        this.delModal = false;
        this.$Message.error('删除失败，请刷新重试');
      });
    }
  }
};
</script>

<style scoped>
.list-tab{margin-left: 200px;}
.attendees-table{overflow: hidden;clear: both;}
.attendees-table table{width: 100%;border-collapse:collapse;}
.td,.th{border:1px #ddd solid;height: 26px;line-height: 26px;text-align: center;color: #000;}
.th{background: #e9edf1}
.title{font-size: 18px;color: #000;font-weight: bold;margin-bottom: 15px;border-left: 6px solid #ff0000;padding-left: 10px;}
.attendees-info-page{position: relative;margin-top: 20px;text-align: center;}
.create-template{display: block;width: 86px;margin-bottom: 10px;text-align: center;height: 30px;line-height: 30px;color: #fff;background: #ff0000;padding: 0 6px;border-radius: 4px;}
</style>
