<template>
    <!-- Llamado al componente -->
    <data-table-art></data-table-art>
</template>

<script>
import DataTableArt from '../components/DataTableArt.vue'
export default {
    components:{
        DataTableArt
    },
    created(){
    this.$store.dispatch("autoLogin");
  },
}
</script>