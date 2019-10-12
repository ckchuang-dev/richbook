<template>
  <div>
    <!-- <h2>吃什麼</h2> -->
    <!-- <el-card>
      <el-button type="primary"
                 size="mini"
                 @click="handleAdd">新增選項</el-button>
      <el-dialog title="新增選項"
                 :visible.sync="dialogFormVisible"
                 @close="handleClose">
        <el-form ref="dialogForm">
          <el-form-item prop="item"
                        label="新項目">
            <el-input v-model="newItem"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary"
                     @click="handleSubmit">儲存</el-button>
        </div>
      </el-dialog>
    </el-card> -->
    <el-card>
      <el-button type="primary"
                 size="medium"
                 @click="handleDraw">吃什麼</el-button>
      <span v-if="drawItem">{{drawItem.name}}</span>
    </el-card>
  </div>
</template>

<script>
  import answerList from '@/static/answer.json'
  export default {
    name: 'Answer',
    data() {
      return {
        dialogFormVisible: false,
        newItem: '',
        answerList: answerList,
        drawItem: null
      }
    },
    methods: {
      handleAdd() {
        this.dialogFormVisible = true
      },
      handleClose() {
        console.log('close')
      },
      handleSubmit() {
        console.log('submit')
      },
      handleDraw() {
        const drawId = Math.floor(Math.random() * 10)
        this.drawItem = this.answerList[drawId]
      }
    }
  }
</script>

<style>
</style>