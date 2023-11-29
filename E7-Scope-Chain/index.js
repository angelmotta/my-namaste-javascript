function a() {
	var b = 10;
	c(); // create Execution Context and push it in Call Stack
	function c() {
		console.log(b);
	}
}

a() // function invocation -> create Execution context and push it in Call Stack