// JSON database. Create a variable called "friends"--Create an Array of Objects:


var friends = [
  {
    name: "Professor X",
    photo: "https://scoopsquare24.com/wp-content/uploads/2020/01/X-Men-696x375.jpg",
    scores: [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    name: "Magneto",
    photo: "https://upload.wikimedia.org/wikipedia/en/e/e9/Magneto_%28Marvel_Comics_character%29.jpg",
    scores: [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    name: "Cyclops",
    photo: "https://i.pinimg.com/originals/72/c0/22/72c02201a81f82a438751eb5a3d3f8f5.jpg",
    scores: [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    name: "Jean Grey",
    photo: "https://vignette.wikia.nocookie.net/marveldatabase/images/1/10/Jean_Grey_Vol_1_3_Dauterman_Variant_Textless.jpg/revision/latest/top-crop/width/360/height/450?cb=20170321200117",
    scores: [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    name: "Mystique",
    photo: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Jean-Grey-and-Mystique-in-Dark-Phoenix.jpg",
    scores: [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    name: "Storm",
    photo: "https://i.annihil.us/u/prod/marvel/i/mg/6/10/542ae1f26901f/standard_incredible.jpg",
    scores: [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  }

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;