
document.getElementById('getPosts').addEventListener('click',getPosts);
		//document.getElementById('abc').addEventListener('click',isChecked);
		//document.getElementById('toi').addEventListener('click',isChecked);
		//document.getElementById('bbc').addEventListener('click',isChecked);
		//document.getElementById('espn').addEventListener('click',isChecked);
		//document.getElementById('businessinsider').addEventListener('click',isChecked);
		//document.getElementById('buzzfeed').addEventListener('click',isChecked);
		//document.getElementById('cnbc').addEventListener('click',isChecked);
		//document.getElementById('cnn').addEventListener('click',isChecked);
		//var a=document.getElementById('id2').value;
		//let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=974f4f5910d14073b1d064c3d0010860';
		
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
	

		var butn=document.getElementsByClassName('btn11');
		console.log(butn.length);
		for(let i=0;i<8;i++)
		{
			butn[i].addEventListener('click',function(){
				console.log(this.value);
				buttons(this.value);
			})
		}
			function buttons(clas){
					url=`https://newsapi.org/v2/top-headlines?sources=${clas}&apiKey=974f4f5910d14073b1d064c3d0010860`;
					post(url);
			}