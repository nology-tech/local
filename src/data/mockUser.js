import { createContext } from "react";

const mockUser = {
  firstName: "Barry",
  username: "TheOG",
  lastName: "Smith",
  email: "barry@email.com",
  favourites: [
    {
      description:
        "Medicine Bakery is a small, family-run bakery located in the city of Birmingham. The bakery specializes in creating delicious, wholesome, and nutritious baked goods, all of which are made with only the freshest ingredients. From savory pies and tarts to sweet treats like muffins and cupcakes, Medicine Bakery has something to delight every palate. The bakery also offers vegan and gluten-free options, making it the perfect spot to enjoy a guilt-free snack or treat. Stop by and try something from Medicine Bakery today!",
      averageRating: "4.2",
      category: "Bakery",
      slug: "medicine-bakery",
      _id: "63acbe82e9f5e8160675818d",
      featuredImage:
        "https://lh5.googleusercontent.com/p/AF1QipNzYNiJOAVPb-I_hf7SNZ5zXsHzhyf0VaMaDJuy=w122-h92-k-no",
      priceRange: ["£"],
      address: "69a New St, Birmingham B2 4DU",
      openingHours:
        "Wednesday:[8:30am-5:30pm], Thursday:[8:30am-5:30pm], Friday:[8:30am-5:30pm], Saturday:[8:30am-5:30pm], Sunday:[8:30am-5:30pm], Monday:[8:30am-5:30pm], Tuesday:[8:30am-5:30pm]",
      placename: "Medicine Bakery",
      website: "http://www.medicinebakery.co.uk/",
      googleMapsLink: "https://www.google.com/maps?cid=6899044746176410383",
      __v: 0,
      contactNumber: "0121 643 1188",
      location: {
        type: "Point",
        coordinates: [-1.9014, 52.47938],
        state: "ENG",
        zipcode: "B2 4",
        formattedAddress: "69a New Street, Birmingham, ENG B2 4, GB",
        city: "Birmingham",
        country: "GB",
      },
    },
    {
      location: {
        coordinates: [-1.89778, 52.48226],
        state: "ENG",
        type: "Point",
        country: "GB",
        formattedAddress: "5 Great Western Arcade, Birmingham, ENG B3 2, GB",
        zipcode: "B3 2",
        city: "Birmingham",
      },
      contactNumber: "0121 236 8964",
      description:
        "A ladies' clothes shop offering a wide range of fashionable pieces.",
      openingHours:
        "Wednesday:[11am-5pm], Thursday:[11am-5pm], Friday:[11am-5pm], Saturday:[10am-6pm], Sunday:[Closed], Monday:[11am-5pm], Tuesday:[11am-5pm]",
      website: "",
      category: "Ladies' Clothes Shop",
      featuredImage:
        "https://lh5.googleusercontent.com/p/AF1QipN6dL0iWsPKBBa-X36zkNVLmklwcGRAf-_F1zsu=w80-h106-k-no",
      _id: "63acbe82e9f5e816067581b3",
      placename: "La M C",
      __v: 0,
      priceRange: ["££"],
      googleMapsLink: "https://www.google.com/maps?cid=6564925263352620750",
      averageRating: "4.8",
      address: "5 N Western arcade, Birmingham B2 5LH",
      slug: "la-m-c",
    },
    {
      averageRating: "4.2",
      featuredImage:
        "https://lh5.googleusercontent.com/p/AF1QipNAzZwrr-etYeZgN04tGMKIb2W1byy2tJ_OQ3wR=w122-h92-k-no",
      description:
        "A restaurant and Indian restaurant known for its delicious food and authentic flavors.",
      googleMapsLink: "https://www.google.com/maps?cid=6205728425048899965",
      address: "21a Bennetts Hill, Birmingham B2 5QP",
      category: "Restaurant,Indian restaurant",
      _id: "63acbe82e9f5e816067581c4",
      priceRange: ["£££"],
      location: {
        zipcode: "B2 5",
        formattedAddress: "21a Bennetts Hill, Birmingham, ENG B2 5, GB",
        type: "Point",
        state: "ENG",
        city: "Birmingham",
        country: "GB",
        coordinates: [-1.90029, 52.47965],
      },
      __v: 0,
      website: "https://www.theindianstreatery.co.uk/",
      placename: "The Indian Streatery",
      slug: "the-indian-streatery",
      openingHours:
        "Wednesday:[11:30am-9:30pm], Thursday:[11:30am-9:30pm], Friday:[12-10pm], Saturday:[12-10pm], Sunday:[Closed], Monday:[11:30am-9:30pm], Tuesday:[11:30am-9:30pm]",
      contactNumber: "0121 643 5334",
    },
    {
      address: "8 Bennetts Hill, Birmingham B2 5RS",
      __v: 0,
      openingHours:
        "Wednesday:[12-11pm], Thursday:[12-11pm], Friday:[12pm-1am], Saturday:[11am-1am], Sunday:[11am-11pm], Monday:[12-11pm], Tuesday:[12-11pm]",
      slug: "the-lost-and-found-birmingham",
      location: {
        zipcode: "B2 5",
        country: "GB",
        type: "Point",
        formattedAddress: "8 Bennetts Hill, Birmingham, ENG B2 5, GB",
        state: "ENG",
        city: "Birmingham",
        coordinates: [-1.9004, 52.48022],
      },
      category: "Pub,Bar",
      featuredImage:
        "https://lh5.googleusercontent.com/p/AF1QipPjD3GGMKasjk-e9nrxTaJPkO8WDlPFMSWSwuEn=w122-h92-k-no",
      description:
        "A pub, bar, and more, offering a wide range of drinks and a fun atmosphere.",
      contactNumber: "0121 643 9293",
      priceRange: ["£££"],
      averageRating: "4.2",
      googleMapsLink: "https://www.google.com/maps?cid=8107518212415710682",
      _id: "63acbe82e9f5e816067581bc",
      website: "http://www.the-lostandfound.co.uk/restaurant/birmingham",
      placename: "The Lost & Found Birmingham",
    },
    {
      priceRange: ["£"],
      __v: 0,
      openingHours:
        "Wednesday:[5pm-2am], Thursday:[5pm-2am], Friday:[3pm-3am], Saturday:[3pm-3am], Sunday:[5pm-2am], Monday:[5pm-2am], Tuesday:[5pm-2am]",
      category: "Cocktail bar,Bar,Beer hall,Hot dog restaurant",
      googleMapsLink: "https://www.google.com/maps?cid=6471419920284917276",
      website: "https://saltdogslims.com/salt-dog-slims-liverpool/",
      description:
        "This is a lively bar and restaurant that serves a variety of beers, wines, and cocktails, as well as classic pub food like burgers, sandwiches, and wings. It has a fun, casual atmosphere and is a popular spot for watching sports.",
      address: "79 Seel St, Liverpool L1 4BB",
      contactNumber: null,
      location: {
        coordinates: [-2.97655, 53.4011],
        type: "Point",
        zipcode: "L1 4BB",
        state: "ENG",
        country: "GB",
        city: "Liverpool",
        formattedAddress: "79 Seel Street, Liverpool, ENG L1 4BB, GB",
      },
      placename: "Salt Dog Slim's",
      slug: "salt-dog-slim's",
      _id: "63acc4550381be083018b5d4",
      averageRating: "4.4",
    },
    {
      priceRange: ["£££"],
      location: {
        coordinates: [-2.98377, 53.40621],
        country: "GB",
        zipcode: "L1 1DS",
        city: "Liverpool",
        type: "Point",
        formattedAddress: "31 Tarleton Street, Liverpool, ENG L1 1DS, GB",
        state: "ENG",
      },
      averageRating: "4.5",
      address: "31-33 Tarleton St, Liverpool L1 1DS",
      category: "Gift shop,Clothing Shop,Coffee shop,Off Licence",
      googleMapsLink: "https://www.google.com/maps?cid=14235302740343254363",
      website: "http://www.scousebirdshop.com/",
      __v: 0,
      openingHours:
        "Wednesday:[11am-5pm], Thursday:[11am-5pm], Friday:[11am-5pm], Saturday:[11am-5pm], Sunday:[11am-5pm], Monday:[11am-5pm], Tuesday:[11am-5pm]",
      placename: "Scouse Bird Shop",
      slug: "scouse-bird-shop",
      description:
        "A fun and quirky shop featuring a range of products and gifts inspired by local culture and humor.",
      contactNumber: "0151 708 7115",
      _id: "63acc4550381be083018b602",
    },
  ],
  id: "O8uijDm5JefnuDyNrNWhIG2NOGN2",
};

export default mockUser;
