Constant = {};

Constant.PAGE_NAME = "Kárpát-medence útikönyv";
Constant.API_URL = "http://www.zivatar.hu/api.php";
Constant.state = {
	BEFORE_REQUEST: "before_request",
	WAITING: "waiting",
	HAVE_DATA: "have_data",
	NO_DATA: "no_data"
}

Dummy = {};

Dummy.MAIN_IMG = [
	{text: "Bányák", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/banyak1.jpg"},
	{text: "Barlangok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok1.jpg"},
	{text: "Geodéziai mérőtornyok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/geodeziai-merotornyok1.jpg"},
	{text: "Bányák", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/banyak1.jpg"},
	{text: "Barlangok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok1.jpg"},
	{text: "Geodéziai mérőtornyok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/geodeziai-merotornyok1.jpg"},
];

Dummy.ARTICLE = {
	aggtelek: {
		title: "Aggtelek ikh", 
		text: "klk", 
		img: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok1.jpg", 
		url:"http://localhost:8000/#!/cikk/aggtelek", 
		foreignName: null, 
		text: "mkfdm kdfdmfldkm fdlmfdlmfd lkdmfldkm flkdmf dlkfdmdlkmfd lkdmf dkldmkfdl", 
		galleryUrl: "http://www.karpat-medence.hu/keptar/index.php?/category/1564", 
		sources: "fdélk édkfdékfd éf", 
		vmID: 'bekes', 
		mID: 'pest', 
		cityID: 'miskolc', 
		createdDate: Date.now(), 
		modifiedDate: Date.now(), 
		user: {name: "jannesz", email: "hagelgewitter@gmail.com"}, 
		coordinate: {lat: 47, lon: 19}, 
		comments: [
			{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odv djopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "macgyver1024@gmail.com", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Halott ejtőernyősök emlékműve"},
			{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odv djopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "macgyver1023@gmail.com", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Óbudai esernyős szobor"},
			{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odvdjopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Aggtelek"},
		]},
	josvafo: {title: "Jósvafő", text: "jjkjk", img: "http://www.karpat-medence.hu/img/ikonok_fooldal/banyak1.jpg", url:"http://localhost:8000/#!/cikk/josvafo"},
};

Dummy.COMMENTS = [
	{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odv djopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "macgyver1024@gmail.com", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Halott ejtőernyősök emlékműve"},
	{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odv djopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "macgyver1023@gmail.com", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Óbudai esernyős szobor"},
	{name: "jozsi", date: "2015.01.01. 12:12", text: "vjvjdo pdovjvdp vdpoj vpdojdv pdoj vdopvjd povjd opv djvdp odvdjopdv dopdj vdpojdjv dpo vjdopvdj odjv dopodpvj dpdov dpvdo", email: "", url:"http://localhost:8000/#!/cikk/aggtelek", articleTitle:"Aggtelek"},
];