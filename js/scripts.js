document.getElementById('getPosts').addEventListener('click',getPosts);
document.getElementById('abc1').addEventListener('click',isabc);
document.getElementById('bbc1').addEventListener('click',isbbc);
document.getElementById('bbcsports1').addEventListener('click',isbbcs);
document.getElementById('espn1').addEventListener('click',isespn);
document.getElementById('businessinsider1').addEventListener('click',isbi);
document.getElementById('buzzfeed1').addEventListener('click',isbf);
document.getElementById('cnbc1').addEventListener('click',iscnbc);
document.getElementById('cnn1').addEventListener('click',isCnn);
		fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=974f4f5910d14073b1d064c3d0010860').then((res)=>res.json())
			.then(data=>{
				let result=  `<h2>Headline</h2>`;
				for(let i=0;i<=10;i++)
				{
					result+=`<a href=${data.articles[i].url}><h4>Headline  ${data.articles[i].title}</h4></a>
					<!--<img src=${data.articles[i].urlToImage} alt="Not Found!!" width:"100px" height="100px">
					<h6>author  ${data.articles[i].author}</h6>
					<p>des  ${data.articles[i].description}</p>-->
					`;
					 document.getElementById('id1').innerHTML = result;
				 
				 }
				
			});
		function post(url){
		fetch(url).then((res)=>res.json())
			.then(data=>{
				let result=  `<h2>Headline</h2>`;
				for(let i=0;i<data.articles.length;i++)
				{
					result+=`<h4>Headline  ${data.articles[i].title}</h4>
					<img src=${data.articles[i].urlToImage} alt="Not Found!!" width:"100px" height="100px">
					<h6>author  ${data.articles[i].author}</h6>
					<p>des  ${data.articles[i].description}</p>
					`;
				 	document.getElementById('id1').innerHTML = result;
				} 
				
			});
		}
		function getPosts(){
			var a=document.getElementById('id2').value;
			if(a==" ")
			alert("enter value");
			
			else
			{
			
			var arr=[];
			var checkboxs=document.getElementsByClassName('checkbox');
			for(var i=0;i<8;i++)
			{
				if(checkboxs[i].checked===true)
				{
					arr.push(checkboxs[i].value);
				}
			}
			if(a.length > 0 && arr== "")
			{
				url=`https://newsapi.org/v2/everything?q=${a}&apiKey=974f4f5910d14073b1d064c3d0010860`;				
				post(url);
			}
			
			if(a.length > 0 && arr.length >0)
			{
			
				console.log(arr.length);
				console.log(arr);
				console.log(a);
				url=`https://newsapi.org/v2/top-headlines?q=${a}&sources=${arr}&apiKey=974f4f5910d14073b1d064c3d0010860`;
				post(url);
			}
		}
	}
	function isabc(){
		url=	`https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isbbc(){
		url=	`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isbbcs(){
		url=	`https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isespn(){
		url=	`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isbi(){
		url=	`https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isbf(){
		url=	`https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function iscnbc(){
		url=	`https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}
	function isCnn(){
		url=	`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=974f4f5910d14073b1d064c3d0010860`;
		post(url);
	}