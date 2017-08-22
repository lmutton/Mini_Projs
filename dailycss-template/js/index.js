var list = [
    {
			id: 1,
        title: "Bear Cub :: 01",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503387225/bear_gwfqix.png",
        link: "#"
    },
	{
        id: 2,
        title: "Elephant :: 02",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503387225/ele_f8tyul.png",
        link: "#"
    },
    {
        id: 3,
        title: "Beaver :: 03",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503387225/beaver_iykyis.png",
        link: "#"
    },
	{
        id: 4,
        title: "Laptop :: 04",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503387225/laptop_zkslb9.png",
        link: "#"
    },
        
	{
        id: 5,
        title: "Space Mascot :: 05 ",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503387225/space_oypgyz.png",
        link: "#"
    },
	
	{
        id: 6,
        title: "Phone :: 06 ",
        img: "http://res.cloudinary.com/drwqdcmyx/image/upload/v1503406559/phone_mg2qss.png",
        link: "#"
    }
	
];

for (i=0; i < list.length; i++) {
    $('.wrapper').append('<figure class="gallery-item"><a href="'+list[i].link+'"><img src="'+list[i].img+'"/></a><figcaption class="img-title"><p id="text">'+list[i].title+'</p></figcaption></figure>');
}