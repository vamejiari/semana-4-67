<template>
    <!-- Llamado al componente -->
    <data-table-cat></data-table-cat>
</template>

<script>
import DataTableCat from '../components/DataTableCat.vue' 
export default {
    components:{
        DataTableCat
    },
    created(){
    this.$store.dispatch("autoLogin");
  },
}
</script>
