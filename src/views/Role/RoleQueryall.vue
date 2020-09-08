<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
            <el-table-column
            prop="id"
            label="角色编号"
            width="200">
            </el-table-column>
            <el-table-column
            prop="name"
            label="角色名"
            width="200">
            </el-table-column>
            <el-table-column
            prop="roleid"
            label="角色权限"
            width="250">
              <template slot-scope="scope">
                <el-button @click="queryPremission(scope.row)" type="primary" size="small">角色权限</el-button>
                <el-button @click="authManage(scope.row)" type="primary" size="small">授权</el-button>
              </template>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改角色信息</el-button>
                <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Axios from "axios";
import qs from "qs";
export default {
    methods: {
      authManage(row){
        console.log(row);
        this.$router.push({path:"/permissions/authorization",query:{row}})
      },
      queryPremission(row){
        console.log(row);
        this.$router.push({path:"/role/querypermissons",query:{row}})
      },
      handleClick(row) {
        console.log(row);
        this.$router.push({path:"/role/update",query:{row}})
      },
      del(row){
        console.log(row);
        const _this = this
        Axios.post("http://localhost:8888/role/delete",qs.stringify(row)).then(resp=>{
          console.log(resp);
                if(resp.data.data == 1){
                    _this.$message.success("删除成功")
                    window.location.reload();
                }else{
                    _this.$message.error("删除失败")
                }
        })
      }
    },
    created(){
        const _this = this
        Axios.get("http://localhost:8888/role/queryall").then(resp=>{
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
            id: 1,
            name: '王小虎',
            roleid: 1,
        },],
      }
    }
}
</script>