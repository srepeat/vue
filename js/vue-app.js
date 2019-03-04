var app = new Vue({
	el:'#vue-app',
	data:{
		name:"米斯特磊",
		message:'页面加载'+new Date().toLocaleString(),
		todos:[
			{text:"学习 JavaScript"},
			{ text: '学习 Vue' },
      		{ text: '整个牛项目' }
		]
	},
	methods:{
		greet:function(tiem){
			return "Good "+tiem+" "+this.name+"!";
		}
	}
});

/*
 *
 * el===>document.getElementById('vue-app');
 *  data ==>要传入的参数 
 * method==>方法
 * 
 * */