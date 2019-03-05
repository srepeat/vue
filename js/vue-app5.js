new Vue({
	el:"#vue-app5",
	data:{
		changeColor:false,
		changeLenght:false,
		erron:false,
		success:false
	},
	methods:{
		
	},
	computed:{
		compClass:function(){
			return {
				changeColor:this.changeColor,
				changeLenght:this.changeLenght
			}
		}
	}
});