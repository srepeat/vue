/**
 * 组件的第一认识
 *     组件的模板
 * 1、data使用带有返回值类型  传递参数和data:相同
 *    ==>其他方法相同
 */
Vue.component("greet",{
	template:'<p>{{name}}:大家好我叫鱼羊 <button v-on:click="getName">改名</button></p>',
	data:function(){
		return{
			name:"Hennry"
		}
	},
	methods:{
		getName:function(){
			this.name="鹿晗";
		}
	}
});



var one = new Vue({
	el:"#Vue-one"
});

var two = new Vue({
	el:"#vue-two"
});

