<template>
    <div style="width: 40%;margin-left: 30%;text-align: center">
    <h1 style="color: lightskyblue">文章管理</h1>
    <el-table
            :data="allPassage"
            border
            stripe>
        <el-table-column
                fixed
                label="序号"
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
            </template>
        </el-table-column>
    </el-table>
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
  methods: {
    deleteRow: async function(row) {
      let id = this.allPassage[row].id;
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
    }
  }
};
</script>

<style scoped>
</style>
