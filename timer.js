function Timer(opts){
	
	var noop = function(){};

	var self = this;

	var isActive = false;

	var o = {

		step: 100,

		onStart: noop,
		onProcess: noop,
		onpause: noop,
		onComplete: noop,
	};

	var timerId;

	var remainingTime = 2000;

	var startTimestamp;


	var util = {

	};

	/*

	{
		time: 1000,
		step: 1000,
		autostart: false,
		loop: false,

		onStart: function(p){},
		onProcess: function(p){},
		onpause: function(p){},
		onComplete: function(p){}
	}

	*/

	function getTimestamp(){
		var t = (new Date()).getTime();
		return t;
	}

	function run(callback, countdown){
		timerId = setTimeout(function(){
			callback();
		}, countdown);
	}

	function clear(){
		clearTimeout(timerId);
	}



	function step(){
		remainingTime -= o.step;
		o.onProcess.call(self, 123, 456);
	}

	function start(){
		startTimestamp = getTimestamp();
	}

	function pause(){
		var timestamp = getTimestamp();
		remainingTime -= timestamp - startTimestamp;
		console.log(remainingTime);
	}

	function setup(){

	}

	setup();

	return {

		//开始
		start: function(){
			start();
		},

		//暂停
		pause: function(){
			pause();
		},

		toggle: function(){
			if(isActive){
				pause();
			}else{
				start();
			}
		},

		//停止
		stop: function(){
			stop();
		},

		//重新开始
		restart: function(){
			stop();
			start();
		}
	}

}