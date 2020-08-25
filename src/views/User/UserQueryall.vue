<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
            <el-table-column
            prop="id"
            label="用户编号"
            width="250">
            </el-table-column>
            <el-table-column
            prop="username"
            label="姓名"
            width="250">
            </el-table-column>
            <el-table-column
            prop="roleid"
            label="身份编号"
            width="250">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
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
      handleClick(row) {
        console.log(row);
      },
      del(row){
        console.log(row);
        const _this = this
        Axios.post("http://localhost:8888/user/delete",qs.stringify(row)).then(resp=>{
          console.log(resp);
                if(resp.data.data == 1){
                    _this.$message.success("删除成功")
                    window.location.reload();
                }else{
                    _this.$message.error();("删除失败")
                }
        })
      }
    },
    created(){
        const _this = this
        Axios.get("http://localhost:8888/user/queryall").then(resp=>{
            console.log(resp.data);
            _this.tableData = resp.data.data
        })
    },
    data() {
      return {
        tableData: [{
            id: 1,
            username: '王小虎',
            roleid: 1,
        },]
      }
    }
}
</script>