import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useBackendLoginStore = defineStore('storeBackendLogin', {
  state: () => ({
    formState: reactive({
      userName: '',
      passWord: '',
      c: '',
      remember: true,
      isShowCreateAccountForm: false
    })
  }),
  actions: {}
})
