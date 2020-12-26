<!--  -->
<template>
  <div class="tab-con">
   <div class="tab-con-item"><slot name="left"></slot></div> 
    <div class="tab-con-item center"><slot name="Center"></slot></div> 
    <div class="tab-con-item"><slot name="right"></slot></div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  .tab-con {
    display: flex;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #E1E1E2;
    line-height: 50px;
    color: #000;
  }
  .tab-con-item {
    flex: 1;
  }
  .center {
    flex: 70%;
    text-align: center;
  } 
</style>
