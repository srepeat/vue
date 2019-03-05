new Vue({
	el:"#demo",
	data:{
		health:100,
		send:false
	},
	methods:{
		//减少方法
		push:function(){
			this.health -=10;
			//判断数值是否小于等于0，如果为0就讲send设置为true
			if(this.health <=0){
				this.send=true;
			}
		},
		//恢复初始值
		resetr:function(){
			this.health =100;
			this.send=false;
		}
	},
	components:{
		
	}
});