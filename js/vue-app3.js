new Vue({
    el:"#vue-app3",
    data:{
		name:"",
		psd:""
    },
    methods:{
		tagName:function(){
			//console.log("你正在输入名字！");
			this.name = this.$refs.name.value;
			
		},
		tagPwd:function(){
			//console.log("你正在输入密码！")
			this.psd = this.$refs.psd.value;
		}
    }
});
/*
 *键盘事件，可以在键盘事件后跟一些修饰符
 *  .ctrl
	.alt
	.shift
	.meta
 * 
 * 
 * 
 * */