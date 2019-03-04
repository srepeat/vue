var app = new Vue({
	el:'#vue-app2',
	data:{
		age:30,
		x:0,
		y:0,
		app_path:"http://www.baidu.com",
		website:"<a href='http://www.baidu.com'>点击跳转</a>"
	},
	methods:{
		add:function(num){
			this.age +=num;
		},
		
		reduce:function(num){
			this.age -= num;
		},
		
		updataXY:function(event){
			//console.log(event);
			this.x=event.offsetX;
			this.y=event.offsetY;
		},
		stopMoving:function(event){
			event.stopPropagation();
		},
		alert:function(){
			alert("Hello A标签");
		}
	}
});

/*
 *
 * el===>document.getElementById('vue-app');
 *  data ==>要传入的参数 
 * method==>方法
 * 
 * <!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
 * 
 * */