new Vue({
	el:"#vue-app4",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		/*addTagA:function(){
			//console.log("this is a");
			return this.a+this.age;
		},
		addTagB:function(){
			//console.log("this is b");
			return this.b+this.age;
		}*/
	},
	computed:{
		addTagA:function(){
			console.log("this is a");
			return this.a+this.age;
		},
		addTagB:function(){
			console.log("this is b");
			return this.b+this.age;
		}
	}
})