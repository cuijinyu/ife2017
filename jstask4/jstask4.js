window.onload=function(){
	//获取四个按钮
		var leftin=document.getElementById("leftin");
		var rightin=document.getElementById("rightin");
		var leftout=document.getElementById("leftout");
		var rightout=document.getElementById("rightout");


		//获取数字
		var getNumber=function(){
			var text=document.getElementById("text");
			var textnumber=text.value;
			if(isNaN)
			{
				alert("请输入一个可用的数字");
				return false;
			}
			else{
			return textnumber;
			}
		}


		//从右侧入
		var createNodeRight=function(number){
			var node=document.createElement("div");
			var value=document.createTextNode(number);
			var display=document.getElementById("display");
			//var li=document.getElementsByTagName("li");
			node.setAttribute("class","box");
			node.appendChild(value);
			display.appendChild(node);
		}


		//从左侧入
		var createNodeLeft=function(number){
			var node=document.createElement("div");
			var value=document.createTextNode(number);
			var display=document.getElementById("display");
			var childs=display.childNodes;
			node.setAttribute("class","box");
			node.appendChild(value);
			display.insertBefore(node,childs[0]);
		}


		//从左侧出
		var removeNodeLeft=function(){
			var display=document.getElementById("display");
			var childs=display.childNodes;
			display.removeChild(childs[0]);
		}


		//从右侧出
		var removeNodeRight=function(){
			var display=document.getElementById("display");
			var childs=display.childNodes;
			display.removeChild(childs[childs.length-1]);
		}


		//给右侧入绑定事件
		rightin.onclick=function(){
			var number=getNumber();
			if(number!=false)
			createNodeRight(number);
		}


		//给左侧入绑定事件
		leftin.onclick=function(){
			var number=getNumber();
			if(number!=false)
			createNodeLeft(number);
		}


		//给左侧出绑定事件
		leftout.onclick=function(){
			removeNodeLeft();
		}


		//给右侧出绑定事件
		rightout.onclick=function(){
			removeNodeRight();
		}
}