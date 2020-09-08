<template>
    <div>
        <el-checkbox-group v-model="checkList" @change="change">
            <el-checkbox v-for="(auth) in authList" :label="auth.permissionurl" :key="auth.id">{{auth.permissionurl}}</el-checkbox><br>
        </el-checkbox-group>
        <el-button type="primary" @click="authHandler">确定授权</el-button>
    </div>
  
</template>

<script>
  import Axios from 'axios'
  import qs from 'qs'
  export default {
    data () {
      return {
        // checkList: [{id: 1,
        //           permissionname: "userqueryall",
        //           permissionurl: "/user/queryall"}],
        checkList: [],
        authList:[{id: 1,
                  permissionname: "userqueryall",
                  permissionurl: "/user/queryall"}],

        // checkList:['/role/queryall','/user/queryall'],
        // authList:['/role/queryall','/user/queryall','/user/add','/role/delete'],
      };
    },
    created(){
      const _this = this;
      Axios.post("http://localhost:8888/permission/queryall").then(resp=>{
            console.log(resp.data);
            if(resp.data.data != 0){
              _this.authList = resp.data.data
            }else{
              _this.$message.warning("权限不足")
              _this.authList = null
            }
        })

      console.log(_this.$route.query);
      Axios.post("http://localhost:8888/permission/queryrolepermissions",qs.stringify(_this.$route.query.row)).then(resp=>{
        console.log(resp.data.data[0].permissionurl);
        for(let i=0;i<resp.data.data.length;i++){
          _this.checkList.push(resp.data.data[i].permissionurl)
        }
        console.log(_this.checkList);
      })
    },
    methods:{
        change(){
            console.log(this.checkList);
        },
        authHandler(){
            console.log(this.checkList);
        }
    }
  };
</script>