import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { doc, setDoc, updateDoc } from "@firebase/firestore";

import { auth, db } from "../firebase";

const defaultFavourites = [
  {
    location: {
      type: "Point",
      coordinates: [-1.9014, 52.47938],
      formattedAddress: "69a New Street, Birmingham, ENG B2 4, GB",
      city: "Birmingham",
      state: "ENG",
      zipcode: "B2 4",
      country: "GB",
    },
    _id: "63acbe82e9f5e8160675818d",
    placename: "Medicine Bakery",
    description:
      "Medicine Bakery is a small, family-run bakery located in the city of Birmingham. The bakery specializes in creating delicious, wholesome, and nutritious baked goods, all of which are made with only the freshest ingredients. From savory pies and tarts to sweet treats like muffins and cupcakes, Medicine Bakery has something to delight every palate. The bakery also offers vegan and gluten-free options, making it the perfect spot to enjoy a guilt-free snack or treat. Stop by and try something from Medicine Bakery today!",
    contactNumber: "0121 643 1188",
    averageRating: "4.2",
    address: "69a New St, Birmingham B2 4DU",
    googleMapsLink: "https://www.google.com/maps?cid=6899044746176410383",
    category: "Bakery",
    priceRange: ["£"],
    openingHours:
      "Wednesday:[8:30am-5:30pm], Thursday:[8:30am-5:30pm], Friday:[8:30am-5:30pm], Saturday:[8:30am-5:30pm], Sunday:[8:30am-5:30pm], Monday:[8:30am-5:30pm], Tuesday:[8:30am-5:30pm]",
    featuredImage:
      "https://lh5.googleusercontent.com/p/AF1QipNzYNiJOAVPb-I_hf7SNZ5zXsHzhyf0VaMaDJuy=w122-h92-k-no",
    website: "http://www.medicinebakery.co.uk/",
    slug: "medicine-bakery",
    __v: 0,
  },
  {
    location: {
      type: "Point",
      coordinates: [-1.89778, 52.48226],
      formattedAddress: "5 Great Western Arcade, Birmingham, ENG B3 2, GB",
      city: "Birmingham",
      state: "ENG",
      zipcode: "B3 2",
      country: "GB",
    },
    _id: "63acbe82e9f5e816067581b3",
    placename: "La M C",
    description:
      "A ladies' clothes shop offering a wide range of fashionable pieces.",
    contactNumber: "0121 236 8964",
    averageRating: "4.8",
    address: "5 N Western arcade, Birmingham B2 5LH",
    googleMapsLink: "https://www.google.com/maps?cid=6564925263352620750",
    category: "Ladies' Clothes Shop",
    priceRange: ["££"],
    openingHours:
      "Wednesday:[11am-5pm], Thursday:[11am-5pm], Friday:[11am-5pm], Saturday:[10am-6pm], Sunday:[Closed], Monday:[11am-5pm], Tuesday:[11am-5pm]",
    featuredImage:
      "https://lh5.googleusercontent.com/p/AF1QipN6dL0iWsPKBBa-X36zkNVLmklwcGRAf-_F1zsu=w80-h106-k-no",
    website: "",
    slug: "la-m-c",
    __v: 0,
  },
  {
    location: {
      type: "Point",
      coordinates: [-1.90029, 52.47965],
      formattedAddress: "21a Bennetts Hill, Birmingham, ENG B2 5, GB",
      city: "Birmingham",
      state: "ENG",
      zipcode: "B2 5",
      country: "GB",
    },
    _id: "63acbe82e9f5e816067581c4",
    placename: "The Indian Streatery",
    description:
      "A restaurant and Indian restaurant known for its delicious food and authentic flavors.",
    contactNumber: "0121 643 5334",
    averageRating: "4.2",
    address: "21a Bennetts Hill, Birmingham B2 5QP",
    googleMapsLink: "https://www.google.com/maps?cid=6205728425048899965",
    category: "Restaurant,Indian restaurant",
    priceRange: ["£££"],
    openingHours:
      "Wednesday:[11:30am-9:30pm], Thursday:[11:30am-9:30pm], Friday:[12-10pm], Saturday:[12-10pm], Sunday:[Closed], Monday:[11:30am-9:30pm], Tuesday:[11:30am-9:30pm]",
    featuredImage:
      "https://lh5.googleusercontent.com/p/AF1QipNAzZwrr-etYeZgN04tGMKIb2W1byy2tJ_OQ3wR=w122-h92-k-no",
    website: "https://www.theindianstreatery.co.uk/",
    slug: "the-indian-streatery",
    __v: 0,
  },
  {
    location: {
      type: "Point",
      coordinates: [-1.9004, 52.48022],
      formattedAddress: "8 Bennetts Hill, Birmingham, ENG B2 5, GB",
      city: "Birmingham",
      state: "ENG",
      zipcode: "B2 5",
      country: "GB",
    },
    _id: "63acbe82e9f5e816067581bc",
    placename: "The Lost & Found Birmingham",
    description:
      "A pub, bar, and more, offering a wide range of drinks and a fun atmosphere.",
    contactNumber: "0121 643 9293",
    averageRating: "4.2",
    address: "8 Bennetts Hill, Birmingham B2 5RS",
    googleMapsLink: "https://www.google.com/maps?cid=8107518212415710682",
    category: "Pub,Bar",
    priceRange: ["£££"],
    openingHours:
      "Wednesday:[12-11pm], Thursday:[12-11pm], Friday:[12pm-1am], Saturday:[11am-1am], Sunday:[11am-11pm], Monday:[12-11pm], Tuesday:[12-11pm]",
    featuredImage:
      "https://lh5.googleusercontent.com/p/AF1QipPjD3GGMKasjk-e9nrxTaJPkO8WDlPFMSWSwuEn=w122-h92-k-no",
    website: "http://www.the-lostandfound.co.uk/restaurant/birmingham",
    slug: "the-lost-and-found-birmingham",
    __v: 0,
  },
  {
    location: {
      type: "Point",
      coordinates: [-2.97655, 53.4011],
      formattedAddress: "79 Seel Street, Liverpool, ENG L1 4BB, GB",
      city: "Liverpool",
      state: "ENG",
      zipcode: "L1 4BB",
      country: "GB",
    },
    _id: "63acc4550381be083018b5d4",
    placename: "Salt Dog Slim's",
    description:
      "This is a lively bar and restaurant that serves a variety of beers, wines, and cocktails, as well as classic pub food like burgers, sandwiches, and wings. It has a fun, casual atmosphere and is a popular spot for watching sports.",
    contactNumber: null,
    averageRating: "4.4",
    address: "79 Seel St, Liverpool L1 4BB",
    googleMapsLink: "https://www.google.com/maps?cid=6471419920284917276",
    category: "Cocktail bar,Bar,Beer hall,Hot dog restaurant",
    priceRange: ["£"],
    openingHours:
      "Wednesday:[5pm-2am], Thursday:[5pm-2am], Friday:[3pm-3am], Saturday:[3pm-3am], Sunday:[5pm-2am], Monday:[5pm-2am], Tuesday:[5pm-2am]",
    website: "https://saltdogslims.com/salt-dog-slims-liverpool/",
    slug: "salt-dog-slim's",
    __v: 0,
  },
  {
    location: {
      type: "Point",
      coordinates: [-2.98377, 53.40621],
      formattedAddress: "31 Tarleton Street, Liverpool, ENG L1 1DS, GB",
      city: "Liverpool",
      state: "ENG",
      zipcode: "L1 1DS",
      country: "GB",
    },
    _id: "63acc4550381be083018b602",
    placename: "Scouse Bird Shop",
    description:
      "A fun and quirky shop featuring a range of products and gifts inspired by local culture and humor.",
    contactNumber: "0151 708 7115",
    averageRating: "4.5",
    address: "31-33 Tarleton St, Liverpool L1 1DS",
    googleMapsLink: "https://www.google.com/maps?cid=14235302740343254363",
    category: "Gift shop,Clothing Shop,Coffee shop,Off Licence",
    priceRange: ["£££"],
    openingHours:
      "Wednesday:[11am-5pm], Thursday:[11am-5pm], Friday:[11am-5pm], Saturday:[11am-5pm], Sunday:[11am-5pm], Monday:[11am-5pm], Tuesday:[11am-5pm]",
    website: "http://www.scousebirdshop.com/",
    slug: "scouse-bird-shop",
    __v: 0,
  },
];

export const registerUser = async (
  email,
  password,
  firstName,
  lastName,
  username
) => {
  const auth = getAuth();

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const docRef = doc(db, "users", user.uid);

    await setDoc(docRef, {
      id: auth.currentUser.uid,
      firstName,
      lastName,
      username,
      email,
      favourites: defaultFavourites,
    });
  } catch ({ code, message }) {
    console.error(`Error code: ${code}. Error message: ${message}`);
  }
};

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log({ error });
  }
};

export const handleUserFavouritesUpdate = async (
  arrayToUpdateWith,
  { id, firstName, lastName, username, email }
) => {
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    await setDoc(docRef, {
      id,
      firstName,
      lastName,
      username,
      email,
      favourites: arrayToUpdateWith,
    });
  } catch (error) {
    console.log({ error });
  }

  return;
};
export const handleAddToUserFavourites = async (
  cardId,
  { id, firstName, lastName, username, email, favourites }
) => {
  const updatedFavourites = favourites.push(cardId);
  try {
    const docRef = doc(db, "users", auth.currentUser.uid);
    await updateDoc(docRef, {
      id,
      firstName,
      lastName,
      username,
      email,
      favourites: updatedFavourites,
    });
  } catch (error) {
    console.log({ error });
  }
};
