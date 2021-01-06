import io from './socket.io.min.js';
import store from '../../../store/index.js';
import toast from './../toast.js';
export default () => {
	// 初始化
	let socket = null;
	let msg_mp_tip = null
    /* let gznum=0
	let dznum=0
	let plnum=0
	let slnum=0
	let allnum=0 */

	// 连接
	connect()

	function connect() {
		socket = io.connect(store.state.basturlsocket);
		/* socket = io.connect('http://gaotong.shwshop.com:2022'); */
		// 是否连接成功
		if (!socket) {
			return toast('连接失败')
		} else {
			console.log(123)
			send_login()
			return toast('连接成功')
		
		}
	}




	// 登录
		socket.on('login', res => {
			console.log(222)
			console.log(res)
			if(!res.code==0){
			send_login()	
			}else return toast('聊天登录成功')
			
		})
	
		function send_login() {
			console.log(233)
			console.log(uni.getStorageSync('userid'))
			socket.emit('login', {
				user_id: uni.getStorageSync('userid')
			})
		}
		// 登录回调
		socket.on('return_login', res => {
			console.log(res)
			toast(res.msg);
			if (res.code == 200) {
				store.dispatch('socket_online', true);
				store.dispatch('notice', {
					show: false,
					type: 'squeezetheline'
				})
			} else if (res.code == 300) {
				store.dispatch('notice', {
					show: true,
					type: 'squeezetheline'
				})
			}
		})
	 //关注
	 
	function focus(userd_id){
		 console.log("focus")
		 socket.emit('focus', {
		 	user_id: uni.getStorageSync('userid'),
			userd_id:userd_id
		 })
	 }
	 socket.on('focus', res => {
	 	
	 	console.log(res)
		if(res.code==0){
			let data=res.data
			store.commit('set_gznum',true)
			
		}else 
		return toast("失败")
	 	
	 	
	 })
	 //点赞
	  
	 function click(dynamic_id){
	 	 console.log("click")
	 	 socket.emit('click', {
	 	 	user_id: uni.getStorageSync('userid'),
	 		dynamic_id:dynamic_id
	 	 })
	  }
	  socket.on('click', res => {
	  	
	  	console.log(res)
	 	if(res.code==0){
	 		let data=res.data
	 		store.commit('set_dznum',true)
	 	}else 
	 	return toast("失败")
	  	
	  	
	  })
	 //评论动态
	  
	 function say(dynamic_id,text){
	 	 console.log("say")
	 	 socket.emit('say', {
	 	 	user_id: uni.getStorageSync('userid'),
	 		dynamic_id:dynamic_id,
			text:text
	 	 })
	  }
	  socket.on('say', res => {
	  	
	  	console.log(res)
	 	if(res.code==0){
	 		let data=res.data
	 		store.commit('set_plnum',true)
	 	}else 
	 	return toast("失败")
	  	
	  	
	  })
	  //私聊
	   
	  function chat(user_id,userd_id,content,type){/* userd_id,content,type */
	  	 console.log("chat")
	  	 socket.emit('chat', {
	  	 	user_id:user_id,
			userd_id:userd_id,
			content:content,
			type:type
	  	 })
	   }
	   socket.on('chat', res => {
	   	
	   	console.log(res)
	  	if(res.code==0){
	  		let data=res.data
	  		store.commit('set_slnum',true)
	  	}else 
	  	return toast("失败")
	   	
	   	
	   })

/* // 关注
	let send_guanzhu_retuen = function() {}

	function send_guanzhu(userd_id,res) {
		send_guanzhu_retuen = res && typeof res == 'function' ? res : send_guanzhu_retuen
		console.log('关注')
		socket.emit('focus', {
			buddy_id
		})
	}
	// 关注回调
	socket.on('focus', res => {
		console.log('关注回调', res)
		uni.toast.showInfo(res.msg);
		if (res.code == 200) send_guanzhu_retuen(res.data)
	}) */

	/**
	 * 断开连接
	 */
	socket.on('disconnect', res => {
		console.log('断开连接', res)
		store.dispatch('socket_online', false);
		if (res != 'io client disconnect') toast('重新连接中', 'load');
		else toast();
	})



	/**
	 * 主动断开连接
	 */
	function onclose() {
		socket.disconnect();
	}



	return {
		connect, // 连接
		onclose, // 关闭
		send_login,
		focus,
		click,
		say,
		chat,
	}
}
