import { createContext } from "react";

const mockUser = {
  id: 123456,
  firstName: "Barry",
  lastName: "Smith",
  username: "TheOG",
  email: "barrysmith@fake-emails.com",
  password: "password123",
  favourites: [
    { id: "63acbe82e9f5e8160675818d", slug: "medicine-bakery" },
    { id: "63acbe82e9f5e816067581b3", slug: "la-m-c" },
    { id: "63acbe82e9f5e816067581c4", slug: "the-indian-streatery" },
    { id: "63acbe82e9f5e816067581bc", slug: "the-lost-and-found-birmingham" },
    { id: "63acc4550381be083018b5d4", slug: "salt-dog-slim's" },
    { id: "63acc4550381be083018b602", slug: "scouse-bird-shop" },
  ],
};

export default mockUser;
