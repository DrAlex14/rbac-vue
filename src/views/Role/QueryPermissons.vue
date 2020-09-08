<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
            <el-table-column
            prop="id"
            label="角色权限编号"
            width="200">
            </el-table-column>
            <el-table-column
            prop="permissionname"
            label="角色权限名"
            width="250">
            </el-table-column>
            <el-table-column
            prop="permissionurl"
            label="角色权限路由"
            width="250">
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="back">回到角色一览</el-button>
    </div>
</template>

<script>
import Axios from "axios";
import qs from "qs";
export default {
    methods: {
        back(){
            this.$router.push("/role/queryall")
        }
    },
    created(){
        const _this = this
        console.log(_this.$route.query);
        Axios.post("http://localhost:8888/permission/queryrolepermissions",qs.stringify(_this.$route.query.row)).then(resp=>{
            console.log(resp.data);
            if(resp.data.data != 0){
              _this.tableData = resp.data.data
            }else{
              _this.$message.warning("权限不足")
              _this.tableData = null
            }
        })
    },
    data() {
      return {
        tableData: [{
            id: '1',
            permissionname:'',
            permissionurl:''
        },],
      }
    }
}
</script>