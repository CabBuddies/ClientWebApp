try{
	//alert('quill-resize added');
	//document.body.addEventListener("load", function(){
		//console.log('body loaded');
		let toolbar = document.getElementsByClassName("ql-toolbar")[0];
		console.log(toolbar);
		let container = document.getElementsByClassName("ql-container")[0];
		console.log(container);
		let editor = document.getElementById("editor-container");
		console.log(editor);
		window.addEventListener("resize", function(){
			let totalheight = editor.offsetHeight ;
			let toolbarheight = toolbar.offsetHeight ;
			console.log((totalheight-toolbarheight));
			container.style.height = (totalheight-toolbarheight) + 'px';
		});
	//});
}catch(e){
	alert(e);
	console.log(e);
}