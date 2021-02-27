window.onload=function(){
//	初始化表格
	const rows=20;
	const cols=20;
//	创建表格上树
	const tab=document.getElementById('tab');
//	用循环创建行
	for (var i=0;i<rows;i++) {
		const tr=document.createElement('tr');
		tab.appendChild(tr);
//		创建列
		for (var j=0;j<cols;j++) {
			const td=document.createElement('td');
			tr.appendChild(td);
		}
	}
//	创建蛇的构建函数
	function Snake(){
//		初始化蛇身体的长度
		this.body=[
		{row:3,col:6},
		{row:3,col:5},
		{row:3,col:4},
		{row:3,col:3}
		],
//		改变方向0上1右2下3左
		this.keys=1;
	}
	
	const snake=new Snake();
//		渲染蛇的方法
		Snake.prototype.rande=function(row,col,color){
			document.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.backgroundColor=color;
		}
//		点击方向键改变方向
//		获取方向键
	Snake.prototype.gai=function(){
		const up=document.getElementById('key');
		up.addEventListener('click',function(e){
			if(e.target==up.children[0]){
					snake.keys=0;
			}else if(e.target==up.children[1]){
				snake.keys=1;
			}else if(e.target==up.children[2]){
				snake.keys=2;
			}else if(e.target==up.children[3]){
				snake.keys=3;
			}
		})
	}
	snake.gai();
//		蛇的初始化长度
	function chang(){
//		头部长度
		snake.rande(snake.body[0].row,snake.body[0].col,'blue');
//		身体长度
		for (var i=1;i<snake.body.length;i++) {
			snake.rande(snake.body[i].row,snake.body[i].col,'red');
		}
}
	chang();
//	食物
	function Foot(){
}
		const foot=new Foot();
		Foot.prototype.eat=function(){
		this.rowran=Math.floor(Math.random()*(20-0+1))+0;
		this.colran=Math.floor(Math.random()*(20-0+1))+0;
			document.getElementsByTagName('tr')[foot.rowran].getElementsByTagName('td')[foot.colran].innerHTML='&diams;&diams;';
		}
		foot.eat();
//		蛇的运动
	const sport=setInterval(function(){
//清空画布
		for (var i=0;i<rows;i++) {
			for (var j=0;j<cols;j++) {
				snake.rande(i,j,'white');
			}
		}
//吃到食物
	if(snake.body[0].row==foot.rowran && snake.body[0].col==foot.colran){
//		清空所有食物
		for (var i=0;i<rows;i++) {
			for (var j=0;j<cols;j++) {
				document.getElementsByTagName('tr')[foot.rowran].getElementsByTagName('td')[foot.colran].innerHTML='';
			}
		}
		foot.eat();
//		加一颗心
		const xin=document.getElementById('xin');
		xin.innerHTML+='&hearts;';
	}else{
//	删除尾部
		snake.body.pop();
	}
		switch(snake.keys){
				case 0:
				snake.body.unshift({row:snake.body[0].row-1,col:snake.body[0].col});
				break;
				case 1:
				snake.body.unshift({row:snake.body[0].row,col:snake.body[0].col+1});
				break;
				case 2:
				snake.body.unshift({row:snake.body[0].row+1,col:snake.body[0].col});
				break;
				case 3:
				snake.body.unshift({row:snake.body[0].row,col:snake.body[0].col-1});
				break;
		}	
		chang();
//		如果碰到自己游戏结束
		for (var m=1;m<snake.body.length;m++) {
			if(snake.body[0].row==snake.body[m].row && snake.body[0].col==snake.body[m].col){
				alert('Game over你是个憨憨');
				clearInterval(sport);
				clearInterval(over);
			}
		}
		
	},500)
	//	判断死亡
	const over=setInterval(function(){
//		如果撞到边界游戏结束
		if(snake.body[0].row>rows-1||snake.body[0].col>cols-1||snake.body[0].row<0||snake.body[0].col<0){	
			alert('Game over你是个憨憨');
			clearInterval(sport);
			clearInterval(over);
		}

	},100)



}
