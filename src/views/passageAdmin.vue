<template>
    <div style="width: 60%;margin-left: 20%;text-align: center">
    <h1 style="color: lightskyblue">文章管理</h1>
    <el-table
            :data="allPassage"
            border
            stripe>
        <el-table-column
                fixed
                label="id"
                prop="id"
                width="80">
        </el-table-column>
        <el-table-column
                fixed
                label="标题"
                prop="title">
        </el-table-column>
        <el-table-column
                fixed
                label="日期"
                prop="date">
        </el-table-column>
        <el-table-column
                fixed
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
                <el-button @click="editPassage(scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
        <a href="/"><el-button type="primary" plain style="margin-top: 20px;margin-right: 20px">返回主页</el-button></a>
        <a href="/backStage/publishPassage"><el-button type="primary" plain>发布文章</el-button></a>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { DELETE_PASSAGE, FETCH_ALL_PASSAGE } from "@/store/type/actions";

export default {
  name: "passageAdmin",
  computed: {
    ...mapState({
      allPassage: state => state.passage.allPassage,
      registerResult: state => state.passage.deleteResult
    })
  },
  async mounted() {
    //挂载后拉取数据
    await this.$store.dispatch(FETCH_ALL_PASSAGE);
  },
  beforeCreate() {
    if (localStorage.njuhzl_root !== "ok") {
      this.$message({
        message: "当前非管理员",
        type: "error"
      });
      this.$router.replace("/login");
    }
  },
  methods: {
    deleteRow: async function(row) {
      console.log(row);
      let id = row.id;
      this.allPassage.splice(row, 1);
      await this.$store.dispatch(DELETE_PASSAGE, {
        id: id
      });
      if (this.registerResult === 1) {
        this.$message({
          message: "删除成功",
          type: "success"
        });
      }
    },
      editPassage: function (row) {
          this.$router.push({
              name: "publishPassage",
              params:{
                  passageID: row.id
              }
          });
      }
  }
};
</script>

<style scoped>
</style>
