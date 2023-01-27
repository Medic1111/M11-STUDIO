const mongoose = require("mongoose");
const id = mongoose.Types.ObjectId();

// FILL THIS WITH USER ID:
const postid = "fill this with user id from compass";

const mockProducts = [
  {
    title: ".FUN-ALLEY.",
    price: 9999,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1542772144-515ddfae17e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0cmVldCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    identity: 0,
    artist: "Milley School",
    location: "Wynnwood",
    view: "portrait",
  },
  // {
  //   title: "Family",
  //   price: 22289,
  //   description:
  //     "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
  //   url: "https://images.unsplash.com/photo-1580052305579-798aba758a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  //   identity: 7,
  //   artist: "Elias Bezerro",
  //   location: "North Beach",
  //   view: "landscape",
  // },
  {
    title: ".STAR-WAY.",
    price: 11999,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1592795694700-d3ac8a1e2f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN0cmVldCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    identity: 1,
    artist: "D'Azevedo",
    location: "Wynnwood",
    view: "portrait",
  },
  {
    title: ".HEROES-MEET.",
    price: 18768,
    description:
      "R.I.P The king. An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1588172322851-f706729f9df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 2,
    artist: "Mil Armstrong",
    location: "Las olas",
    view: "landscape",
  },
  {
    title: ".LHAMA.",
    price: 14598,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1553685353-8783b52a4750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 4,
    artist: "Edd Dutra",
    location: "North Beach",
    view: "portrait",
  },
  {
    title: ".DAY-FACE.",
    price: 12358,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1522080406259-930a07a15a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    identity: 5,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
  },
  // TEST
  {
    title: ".DEEP-JAM.",
    price: 6722,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1568578728608-3606b14e85fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
    identity: 8,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
  },
  {
    title: ".ALIVE.",
    price: 22289,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1548457782-67c976e1e7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    identity: 7,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
  },
  {
    title: ".OHM.",
    price: 12389,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1572280935179-bad2474e2646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 3,
    artist: "Lindor Fauwn",
    location: "Las olas",
    view: "portrait",
  },
  {
    title: ".ZÖE.",
    price: 42722,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1580214686817-877a60a021bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    identity: 9,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
  },
];

const mockUsers = [
  {
    _id: id,
    username: "seeduser",
    email: "med@med.com",
    password: "seeduser",
  },
];

module.exports = { mockProducts, mockUsers };
