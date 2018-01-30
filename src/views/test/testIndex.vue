<template>
    <div>
        <div style="margin-bottom:20px"><router-link to="/">返回首页</router-link></div>
        <hr>
        <Card></Card>
        <hr>
        <Table></Table>
    </div>
</template>
<script>
import Card from './card'
import Table from './table'
export default {
  components:{
      Card:Card,
      Table:Table
  }
}
</script>

