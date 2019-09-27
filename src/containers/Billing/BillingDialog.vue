<template>
  <div class="ct_billing_dialog">
    <el-button
      class="ct_billing_dialog__btn-add"
      type="primary"
      @click="setDialogStatus(true)"
    >新增紀錄</el-button>
    <el-dialog
      title="新增紀錄"
      :visible="openDialog"
    >
      <el-form
        :model="form"
        label-width="80px"
      >
        <el-form-item label="金額">
          <el-input
            v-model.number="form.dollar"
            placeholder="請輸入金額"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="類別">
          <el-select
            v-model="form.type"
            placeholder="请選擇類別"
          >
            <el-option
              label="早餐"
              value="breakfast"
            ></el-option>
            <el-option
              label="午餐"
              value="lunch"
            ></el-option>
            <el-option
              label="晚餐"
              value="dinner"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="帳戶">
          <el-select
            v-model="form.account"
            placeholder="请選擇帳戶"
          >
            <el-option
              label="現金"
              value="cash"
            ></el-option>
            <el-option
              label="信用卡"
              value="credit-card"
            ></el-option>
            <el-option
              label="電子支付"
              value="pay"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="項目">
          <el-input
            v-model="form.title"
            placeholder="請輸入項目內容"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="setDialogStatus(false)">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
        >儲存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'BillingDialog',
    computed: {
      ...mapState({
        openDialog: state => state.billing.openDialog,
        dialogData: state => state.billing.dialogData
      })
    },
    data() {
      return {
        form: {
          dollar: '',
          type: '',
          title: '',
          account: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // TODO: validation
        this.$store.dispatch('billing/addExpense', this.form)
        this.setDialogStatus(false)
        this.form = {
          dollar: '',
          type: '',
          title: '',
          account: ''
        }
      },
      setDialogStatus(status) {
        this.$store.commit('billing/SET_OPEN_DIALOG', status)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ct_billing_dialog {
    &__btn-add {
      display: block;
      margin-left: auto;
    }
  }
</style>