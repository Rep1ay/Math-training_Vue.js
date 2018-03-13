<template>
 <div class="alert" :class="'alert-' + type">
   <h2>{{text}}</h2>
   <hr>
   <button @click="$emit('onNext')" class="btn btn-primary">Continue</button>
 </div>
</template>

<script>
export default{
  props:["type","text"]
}

</script>

<style scoped>
.alert{
    text-align: center;
    padding-top: 20px;
    /* background: #eee; */
}
.buttons{
    display: flex;
    justify-content: space-around;
}
.btn{
    margin: 20px 0;
}

</style>

