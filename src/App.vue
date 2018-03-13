<template>
  <div class="training">
    <h1>Math Training Level {{ level + 1}}</h1>
      <hr>
      <div class="progress">
        <div class="progress-bar" :style = 'progressStyles'></div>
      </div>
      <div class="box">
        <transition name = 'flip' mode="out-in">
          <app-start-screen v-if="state == 'start'" @onStart="onStart"></app-start-screen>
          <app-question @success = "onQuestionSuccess" 
          :settings =" levels[level]"
          @error = "onQuestionError" v-else-if="state == 'question'"></app-question>
          <app-message @onNext= "onNext" :type= "message.type" :text = "message.text" v-else-if="state == 'message'"></app-message>
          <app-result-screen v-else-if="state == 'result'"
                              :stats = 'stats'
                              @repeat = 'onStart'
                              @nextLevel = 'onNextLevel'
          
          ></app-result-screen>
          <div v-else>Unknown state</div>
        </transition>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      state: 'start',
      stats:{
        success: 0,
        error: 0
      },
      message:{
        type : '',
        text: ''
      },
      questionMax: 3,
      level: 0,
      levels : [
        {
          variants :2,
          from: 10,
          to: 40,
          range: 5
        },
        {
          variants : 4,
          from: 100,
          to: 200,
          range: 20
        },{
          variants : 6,
          from: 500,
          to: 600,
          range: 40
        }
      ]
    }
  },
  computed:{
    questDone(){
   return this.stats.success + this.stats.error
    },
    progressStyles(){
      // debugger
      return {
        width : (this.questDone / this.questionMax * 100) + '%'
      }
    }
  },
  methods:{
    onStart(){
      this.state = 'question';
      this.stats.success = 0;
      this.stats.error = 0;
    },
    onQuestionSuccess(){
       this.state = 'message';
       this.message.text = 'Good Job!';
        this.message.type = 'success'; 
        this.stats.success++;
    },
     onQuestionError(msg){
       this.state = 'message';
       this.message.text = msg;
       this.message.type = 'warning';
       this.stats.error++;
      

    },
    onNext(){
     
       if(this.questDone < this.questionMax){
        this.state = 'question';
       }else{
        this.state = 'result'
       }
    },
    onNextLevel(){
      this.level++;
      this.onStart();
    }
  }
}
</script>

<style>
.training{
  max-width: 700px;
  margin: 20px auto;
}
.flip-enter{

}
.flip-enter-active{
  animation: flipInX 0.3s linear;
}
.flip-leave{
  
}
.flip-leave-active{
   animation: flipOutX 0.3s linear;
}
.progress-bar{
  transition: 0.5s
}

@keyframes flipInX {
  from{transform: rotateX(90deg);}
  to{transform: rotateX(0deg);}
}
@keyframes flipOutX {
  from{transform: rotateX(0deg);}
  to{transform: rotateX(90deg);}
}
</style>
