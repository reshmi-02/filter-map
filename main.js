a=[11,12,34,56,78,90,23,45];
b=["Apple","Orange","Banana","Mango"];
c=[{id:1,
	name:"pen",
	price:10,
	},
	{id:2,
	name:"pen",
	price:15,
	},
	{id:3,
	name:"pen",
	price:25,
	},
	{id:4,
	name:"pencil",
	price:5,
	},
	{id:5,
	name:"pencil",
	price:10,
	}];
	
	
	//for each
	console.log("for Each");
	document.write("for each<br><br>");
	console.log("a="+a);
	document.write("a= "+a+"<br><br>even  umbers are ");
	a.forEach(function(e){
						if(e%2==0){
							console.log(e);
							document.write(e+" "+"<br>");
						}		
						})
						
						
	
	//filter
	console.log("filter");
	document.write("filter<br><br>");
	var output=c.filter(function(e){
								return e.name=="pen";
		
	})
	console.log(output);

	var out=c.map(function(e){
		return e.price;

	})
	document.write(out+"<br>");
	
	//map
	console.log("map");
	document.write("map<br><br>");
	document.write("b= "+b+"<br><br>");
	console.log("b="+b);
	var output=b.map(function(e){
							return e.toUpperCase();
		
	})
	console.log(output);
	document.write(output);
	