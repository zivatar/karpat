Constant = {};

Constant.PAGE_NAME = "Kárpát-medence útikönyv";
Constant.API_URL = "http://www.zivatar.hu/api.php";
Constant.API_ENDPOINT = {
	RECENT_ARTICLES: "recent-articles",
	ARTICLE_TYPES: "article-types"
};
Constant.state = {
	BEFORE_REQUEST: "before_request",
	WAITING: "waiting",
	HAVE_DATA: "have_data",
	NO_DATA: "no_data"
};
Constant.sideBar = [
	{
		title: "Gyorslinkek",
		elem: [
			{glyphicon: "camera", text: "Fényképtár"},
			{glyphicon: "list-alt", text: "Összes cikk"},
			{glyphicon: "user", text: "Bejelentkezés"}
		]
	}, {
		title: "Zivatar.hu",
		elem: [
			{glyphicon: "edit", text: "Blog"},
			{glyphicon: "heart", text: "Kedvenc cikkek"}
		]
	}, {
		title: "Csabai chili",
		elem: [
			{glyphicon: "edit", text: "Blog"},
			{glyphicon: "camera", text: "Fotók"}
		]
	}
]

Dummy = {};

Dummy.LATEST_ARTICLES = [
	{url: "aggtelek", text: "Aggtelek2", url:"http://localhost:8000/#!/cikk/aggtelek", img: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok1.jpg", title: "Aggtlel"}
];

Dummy.MAIN_IMG = [
	{text: "Bányák", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/banyak_212px.jpg"},
	{text: "Barlangok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok_212px.jpg"},
	{text: "Geodéziai mérőtornyok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/geodeziai-merotornyok_212px.jpg"},
	{text: "Bányák", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/banyak_212px.jpg"},
	{text: "Barlangok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/barlangok_212px.jpg"},
	{text: "Geodéziai mérőtornyok", url: "http://www.karpat-medence.hu/img/ikonok_fooldal/geodeziai-merotornyok_212px.jpg"},
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