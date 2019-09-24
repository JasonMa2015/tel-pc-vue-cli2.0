<template>
  <Modal
    v-model="modal1"
    :title="this.modelData.title"
    @on-cancel="cancel('formValidate')">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="姓名" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
      </FormItem>
      <FormItem label="年龄">
        <Input v-model="formValidate.age" placeholder="请输入年龄"></Input>
      </FormItem>
      <FormItem label="地址">
        <Input v-model="formValidate.address" placeholder="请输入地址"></Input>
      </FormItem>
    </Form>
    <div slot="footer">
      <Button size="large" @click="cancel('formValidate')">取消</Button>
      <Button type="primary" size="large" @click="ok('formValidate')">确定</Button>
    </div>
  </Modal>
</template>
<script>
export default {
  name: 'AddList',
  props: ['modelData'],
  data () {
    return {
      modal1: false,
      formValidate: {
        name: '',
        age: '',
        address: '',
        index: '',
        isEdit: false
      },
      ruleValidate: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }]
      }
    };
  },
  mounted () {

  },
  computed: {
    getModeal () {
      return this.modelData;
    }
  },
  watch: {
    getModeal: {
      handler (value) {
        let edit = {};
        this.modal1 = value.isShow;
        if (!value.isEdit) {
          this.formValidate.name = '';
          this.formValidate.age = '';
          this.formValidate.address = '';
        } else {
          edit = JSON.parse(value.edit);
          this.formValidate = edit;
        }
        this.formValidate.isEdit = value.isEdit;
        this.formValidate.index = value.index;
      },
      deep: true
    }
  },
  methods: {
    ok (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          let data = JSON.stringify(this.formValidate);
          this.$Message.success('Success!');
          this.$emit('addData', data);
          this.$emit('setAddListModal', false);
        }
      });
    },
    cancel (name) {
      this.$emit('setAddListModal', false);
    }
  }
};
</script>
