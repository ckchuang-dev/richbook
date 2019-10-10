<template>
  <div class="ct_billing_dialog">
    <el-dialog title="新增紀錄"
               :visible.sync="dialogFormVisible"
               @close="handleClose">
      <el-form ref="billingDialogForm"
               :model="form"
               :rules="rules"
               label-width="80px">
        <el-form-item prop="date"
                      label="日期">
          <el-date-picker v-model="form.date"
                          value-format="yyyy-MM-dd"
                          type="date"
                          disabled
                          placeholder="日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="dollar"
                      label="金額">
          <el-input placeholder="金額"
                    v-model.number="form.dollar"></el-input>
        </el-form-item>
        <el-form-item prop="type"
                      label="類別">
          <el-select v-model="form.type"
                     placeholder="請選擇類別">
            <el-option label="早餐"
                       value="breakfast"></el-option>
            <el-option label="午餐"
                       value="lunch"></el-option>
            <el-option label="晚餐"
                       value="dinner"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="account"
                      label="帳戶">
          <el-select v-model="form.account"
                     placeholder="请選擇帳戶">
            <el-option label="現金"
                       value="cash"></el-option>
            <el-option label="信用卡"
                       value="credit-card"></el-option>
            <el-option label="電子支付"
                       value="pay"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="項目">
          <el-input v-model="form.title"
                    placeholder="請輸入項目內容"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="handleSubmit">儲存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'BillingDialog',
    props: {
      showDialog: {
        type: Boolean,
        required: true
      },
      dialogData: {
        type: Object,
        required: true
      },
      selectedDate: {
        type: String,
        required: true
      },
      isLoading: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        form: {
          dollar: '',
          type: '',
          title: '',
          account: '',
          date: ''
        },
        rules: {
          dollar: [
            { required: true, message: '請輸入金額', trigger: 'blur' },
            { pattern: /^[\d]*$/, message: '金額必須是數字' }
          ],
          type: [{ required: true, message: '請選擇類別', trigger: 'blur' }],
          account: [{ required: true, message: '請選擇帳戶', trigger: 'blur' }],
          date: [{ required: true, message: '請選擇日期', trigger: 'blur' }]
        },
        dialogFormVisible: false
      }
    },
    methods: {
      async handleSubmit() {
        this.$refs.billingDialogForm
          .validate()
          .then(() => {
            this.$emit('update:isLoading', true)
            if (this.dialogData.action === 'ADD') {
              this.$store
                .dispatch('billing/addExpense', this.form)
                .then(() => {
                  this.$emit('update:isLoading', false)
                })
                .catch(status => console.log(status))
            } else {
              this.$store
                .dispatch('billing/updateExpense', this.form)
                .then(() => {
                  this.$emit('update:isLoading', false)
                })
                .catch(status => console.log(status))
            }
            this.handleClose()
          })
          .catch(status => {
            console.log(status)
          })
      },
      handleClose() {
        this.$emit('close')
        this.dialogFormVisible = false
      }
    },
    watch: {
      showDialog: function(newValue) {
        if (newValue) {
          this.dialogFormVisible = true
          if (this.dialogData.action === 'ADD') {
            this.form = {
              dollar: '',
              type: '',
              title: '',
              account: '',
              date: this.selectedDate
            }
          } else {
            this.form = { ...this.dialogData.data }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ct_billing_dialog {
  }
</style>