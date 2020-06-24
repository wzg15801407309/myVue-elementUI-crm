<script>
export default {
  created() {
    console.log(1233)
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
    console.log('/' + path)
  },
  render: (h) => {
    return h() // avoid warning message
  }
}
</script>
