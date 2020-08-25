<template>
    <div>
        <!-- model绑定数据   rules绑定校验规则-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  label="用户编号" prop="id">
                <el-input disabled v-model="ruleForm.id"></el-input>
            </el-form-item>
            
            <el-form-item label="用户名" prop="username">
                <el-input disabled v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="用户角色" prop="password">
                <el-input v-model="ruleForm.roleid"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
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
          id: '123',
          username: '王小虎',
          roleid:'',
        },
        rules: {
          roleid:[
            { required: true, message:'请输入角色编码',trigger: 'blur'}
          ]
        }
      };
    },
    created(){
        console.log(this.$route.query);
        let data = this.$route.query.row
        this.ruleForm = data;
    },
    methods: {
      submitForm(formName) {
        const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) { //valid为校验结果
            console.log(_this.ruleForm);
            Axios.post('http://localhost:8888/user/updaterole',qs.stringify(_this.ruleForm)).then(function(resp){
                console.log(resp);
                if(resp.data.data == 1){
                    _this.$message.success("修改成功")
                    setTimeout(()=>{
                        _this.$router.push("/user/queryall")
                    },3000)
                }else{
                    _this.$message.error("修改失败")
                }
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