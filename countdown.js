function countDown(opts){
	
	var noop = function(){};

	var self = this;

	var o = {

		step: 100,

		onProcess: function(a, b){
			console.log(remainingTime);
			console.log(b);
		}
	};

	var timerId;

	var remainingTime = 2000;

	var startTimestamp;


	var util = {

	};

	/*

	{
		from: 0,
		to: 4000,
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
		var t = new Date().getTime();
		return t;
	}

	function step(){
		remainingTime -= o.step;
		o.onProcess.call(self, 123, 456);
	}

	function start(){
		startTimestamp = getTimestamp();
	}

	function pause(){
		step();
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

		//停止
		stop: function(){

		},

		//重新开始
		restart: function(){

		}
	}

}