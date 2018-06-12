export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changAccount (state, account) {
    console.log(account)
  }
}
