<template>
  <NavbarModal></NavbarModal>
  <div class="container-fluid">
 <router-view/>
  </div>
</template>

<script>
 import NavbarModal from '../components/NavbarModal.vue';

export default {
  components: {
    NavbarModal,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
this.$http.defaults.headers.common.Authorization = token;
const api = `${process.env.VUE_APP_API}api/user/check`;
this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('login');
        this.$router.push('/login');
      }
    });
  },
}