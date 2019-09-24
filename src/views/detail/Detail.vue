<template>
  <div class="detail">
    <div class="search-con">
      <Select v-model="searchKey" class="search-col" style="width:200px">
        <Option
        v-for="(item, index) in columns1"
        v-if="index < 3 && item.key"
        :value="item.key"
        :key="index">{{ item.title }}</Option>
      </Select>
      <Input
      style="width:200px"
      @on-click="handleClear"
      placeholder="输入关键字搜索"
      class="search-input"
      v-model="searchValue"/>
      <Button @click="handleSearch" class="search-btn" type="primary">搜索</Button>
    </div>
    <div class="add-con">
      <Button @click="newList" class="add-btn" type="primary">新建</Button>
      <AddList
      :modelData="modelData"
      @setAddListModal='setAddListModal'
      @addData="addData"></AddList>
    </div>
    <Table border ref="selection" :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import { getAcceptData } from '@/api/data.js';
import AddList from './AddList';
export default {
  name: 'Detail',
  components: {
    AddList
  },
  data () {
    return {
      searchKey: '',
      searchValue: '',
      modelData: {
        index: 0,
        title: '',
        isShow: false,
        isEdit: false,
        edit: ''
      },
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              }, '删除'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.update(params.index);
                  }
                }
              }, '修改')
            ]);
          }
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    };
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  watch: {

  },
  methods: {
    handleClear () {

    },
    handleSearch () {

    },
    // 还原isShow的值
    setAddListModal (msg) {
      this.modelData.isShow = msg;
    },
    // 删除
    remove (index) {
      this.data1.splice(index, 1);
    },
    // 修改
    update (index) {
      this.modelData.index = index;
      this.modelData.title = '修改列表';
      this.modelData.isShow = true;
      this.modelData.isEdit = true;
      this.modelData.edit = JSON.stringify(this.data1[index]);
    },
    // 新建
    newList () {
      this.modelData.index = 0;
      this.modelData.title = '新建列表';
      this.modelData.isShow = true;
      this.modelData.isEdit = false;
      this.modelData.edit = '';
    },
    // 新建
    addData (msg) {
      let data = JSON.parse(msg);
      if (data.isEdit) {
        this.data1.splice(data.index, 1, data);
      } else {
        this.data1.unshift(data);
      }
    }
  }
};
</script>

<style scoped>
.detail{margin-left: 200px;}
.add-con{margin: 10px 0;}
</style>
