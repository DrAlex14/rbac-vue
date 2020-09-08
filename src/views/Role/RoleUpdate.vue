<template>
    <div>
        <!-- model绑定数据   rules绑定校验规则-->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  label="角色编号" prop="roleid">
                <el-input disabled v-model="ruleForm.roleid"></el-input>
            </el-form-item>
            
            <el-form-item label="角色名" prop="name">
                <el-input  v-model="ruleForm.name"></el-input>
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
          roleid:'1',
          name: '王小虎',
        },
        rules: {
          roleid:[
            { required: true, message:'请输入角色编码',trigger: 'blur'}
          ],
          name:[
            { required: true, message:'请输入角色编码',trigger: 'blur'}
          ]
        }
      };
    },
    created(){
        console.log(this.$route.query);
        let data = this.$route.query.row
        this.ruleForm.roleid = data.id;
        this.ruleForm.name = data.name;
        console.log(this.ruleForm);
    },
    methods: {
      submitForm(formName) {
        const _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) { //valid为校验结果
            console.log(_this.ruleForm);
            Axios.post('http://localhost:8888/role/update',qs.stringify(_this.ruleForm)).then(function(resp){
                console.log(resp);
                if(resp.data.data == 1){
                    _this.$message.success("修改成功")
                    setTimeout(()=>{
                        _this.$router.push("/role/queryall")
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