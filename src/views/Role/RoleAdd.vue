<template>
    <div>
        <!-- model绑定数据   rules绑定校验规则-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="角色编号" prop="id">
                <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
            
            <el-form-item label="角色名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">清空</el-button>
                <el-button @click="test">test</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import qs from 'qs';
import Axios from 'axios';
  export default {
    data() {
      return {
        ruleForm: {
            id: '',
            name: '',
        },
        rules: {
            id: [
                { required: true, message: '请输入角色编号', trigger: 'blur' },
            ],
            name: [
                { required: true, message:'请输入角色名',trigger: 'blur'}
            ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) { //valid为校验结果
            console.log(_this.ruleForm);
            Axios.post('http://localhost:8888/role/addrole',qs.stringify(_this.ruleForm)).then(function(resp){
                console.log(resp);
                if(resp.data.data == 1){
                    _this.$message.success("添加成功")
                }else{
                    _this.$message.error("添加失败")
                }
                _this.$refs[formName].resetFields();
            })
          } else {
            alert('error submit!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      test(){
          console.log(this.ruleForm);
      }
    }
  }
</script>