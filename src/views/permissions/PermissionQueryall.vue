<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
            <el-table-column
            prop="id"
            label="权限编号"
            width="200">
            </el-table-column>
            <el-table-column
            prop="permissionname"
            label="权限名"
            width="250">
            </el-table-column>
            <el-table-column
            prop="permissionurl"
            label="权限路由"
            width="250">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="250">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改权限信息</el-button>
                <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Axios from "axios";
//import qs from "qs";
export default {
    methods: {
        handleClick(row) {
        console.log(row);
        //this.$router.push({path:"/role/update",query:{row}})
        },
        del(row){
            console.log(row);
            // const _this = this
            // Axios.post("http://localhost:8888/role/delete",qs.stringify(row)).then(resp=>{
            // console.log(resp);
            //         if(resp.data.data == 1){
            //             _this.$message.success("删除成功")
            //             window.location.reload();
            //         }else{
            //             _this.$message.error("删除失败")
            //         }
            // })
        }
    },
    created(){
        const _this = this
        console.log(_this.$route.query);
        Axios.post("http://localhost:8888/permission/queryall").then(resp=>{
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