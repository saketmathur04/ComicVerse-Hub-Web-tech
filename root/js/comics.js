// comics.js — Enhanced master comic data with additional properties
window.COMICS = [
  // ---------------------- NEW RELEASES ----------------------
  {
    id: 1,
    title: "Spider-Man: New Dawn",
    publisher: "Marvel",
    price: 299,
    cover: "assets/marvel/spiderman.jpg",
    category: "new",
    characters: ["Spider-Man", "Mary Jane", "Green Goblin"],
    creators: "Stan Lee, Steve Ditko",
    synopsis: "A new era begins for Spider-Man as he faces his greatest challenge yet.",
    release: "2024-03-15"
  },
  {
    id: 2,
    title: "Batman: Shadows",
    publisher: "DC",
    price: 349,
    cover: "assets/dc/bat.jpg",
    category: "new",
    characters: ["Batman", "Joker", "Catwoman"],
    creators: "Bob Kane, Bill Finger",
    synopsis: "Darkness falls over Gotham as Batman confronts a new threat from the shadows.",
    release: "2024-03-10"
  },
  {
    id: 3,
    title: "Invincible: Reborn",
    publisher: "Image",
    price: 399,
    cover: "assets/marvel/invincible.jpg",
    category: "new",
    characters: ["Invincible", "Omni-Man", "Atom Eve"],
    creators: "Robert Kirkman, Cory Walker",
    synopsis: "Mark Grayson returns with new powers and greater responsibilities.",
    release: "2024-03-05"
  },
  {
    id: 4,
    title: "Thor: Godbreaker",
    publisher: "Marvel",
    price: 330,
    cover: "assets/marvel/thor.jpg",
    category: "new",
    characters: ["Thor", "Loki", "Odin"],
    creators: "Stan Lee, Larry Lieber, Jack Kirby",
    synopsis: "Thor must prove his worthiness once more in the face of cosmic threats.",
    release: "2024-02-28"
  },
  {
    id: 5,
    title: "Wonder Woman: Divine War",
    publisher: "DC",
    price: 360,
    cover: "assets/dc/wonder woman.jpg",
    category: "new",
    characters: ["Wonder Woman", "Ares", "Cheetah"],
    creators: "William Moulton Marston",
    synopsis: "The gods themselves declare war, and Wonder Woman stands in the middle.",
    release: "2024-02-25"
  },
  {
    id: 6,
    title: "Saga: Starfall",
    publisher: "Image",
    price: 350,
    cover: "assets/image/saga.jpg",
    category: "new",
    characters: ["Alana", "Marko", "Hazel"],
    creators: "Brian K. Vaughan, Fiona Staples",
    synopsis: "The epic space opera continues with new worlds and new dangers.",
    release: "2024-02-20"
  },

  // ---------------------- POPULAR SERIES ----------------------
  {
    id: 7,
    title: "X-Men: Phoenix Rising",
    publisher: "Marvel",
    price: 299,
    cover: "assets/marvel/x men.jpg",
    category: "popular",
    characters: ["X-Men", "Jean Grey", "Cyclops"],
    creators: "Stan Lee, Jack Kirby",
    synopsis: "The Phoenix Force returns, and the X-Men must face its destructive power.",
    release: "2024-01-15"
  },
  {
    id: 8,
    title: "Superman: Legacy",
    publisher: "DC",
    price: 399,
    cover: "assets/dc/superman.jpg",
    category: "popular",
    characters: ["Superman", "Lois Lane", "Lex Luthor"],
    creators: "Jerry Siegel, Joe Shuster",
    synopsis: "Superman confronts his Kryptonian heritage while protecting Earth.",
    release: "2024-01-10"
  },
  {
    id: 9,
    title: "Avengers: Eternal Storm",
    publisher: "Marvel",
    price: 399,
    cover: "assets/marvel/avengers.jpg",
    category: "popular",
    characters: ["Avengers", "Iron Man", "Captain America"],
    creators: "Stan Lee, Jack Kirby",
    synopsis: "The Avengers assemble to face a threat that could unravel reality itself.",
    release: "2024-01-05"
  },
  {
    id: 10,
    title: "Flash: Velocity Surge",
    publisher: "DC",
    price: 320,
    cover: "assets/dc/Flash.jpg",
    category: "popular",
    characters: ["The Flash", "Reverse Flash", "Iris West"],
    creators: "Gardner Fox, Harry Lampert",
    synopsis: "Barry Allen pushes the limits of the Speed Force like never before.",
    release: "2023-12-20"
  },
  {
    id: 11,
    title: "Spawn: Hell Rises",
    publisher: "Image",
    price: 380,
    cover: "assets/image/Spawn.jpg",
    category: "popular",
    characters: ["Spawn", "Violator", "Twitch Williams"],
    creators: "Todd McFarlane",
    synopsis: "Al Simmons battles the forces of Heaven and Hell for his very soul.",
    release: "2023-12-15"
  },
  {
    id: 12,
    title: "The Walking Dead: Afterlife",
    publisher: "Image",
    price: 320,
    cover: "assets/image/walking dead.jpg",
    category: "popular",
    characters: ["Rick Grimes", "Michonne", "Negan"],
    creators: "Robert Kirkman, Tony Moore, Charlie Adlard",
    synopsis: "The survivors face new threats in a world forever changed by the walkers.",
    release: "2023-12-10"
  },

  // ---------------------- MARVEL ----------------------
  {
    id: 13,
    title: "Iron Man: Armored Vengeance",
    publisher: "Marvel",
    price: 350,
    cover: "assets/marvel/iron man.jpg",
    category: "regular",
    characters: ["Iron Man", "War Machine", "Mandarin"],
    creators: "Stan Lee, Larry Lieber, Don Heck, Jack Kirby",
    synopsis: "Tony Stark upgrades his armor to face a technologically advanced enemy.",
    release: "2023-11-25"
  },
  {
    id: 14,
    title: "Black Panther: Wakanda Legacy",
    publisher: "Marvel",
    price: 320,
    cover: "assets/marvel/black panther.jpg",
    category: "regular",
    characters: ["Black Panther", "Shuri", "Killmonger"],
    creators: "Stan Lee, Jack Kirby",
    synopsis: "T'Challa protects Wakanda while navigating his role as king.",
    release: "2023-11-20"
  },
  {
    id: 15,
    title: "Hulk: Gamma Rage",
    publisher: "Marvel",
    price: 280,
    cover: "assets/marvel/hulk.jpg",
    category: "regular",
    characters: ["Hulk", "Bruce Banner", "Betty Ross"],
    creators: "Stan Lee, Jack Kirby",
    synopsis: "The angrier Hulk gets, the stronger he becomes in this explosive adventure.",
    release: "2023-11-15"
  },
  {
    id: 16,
    title: "Doctor Strange: Mystic Realms",
    publisher: "Marvel",
    price: 360,
    cover: "assets/marvel/doctot strange.jpg",
    category: "regular",
    characters: ["Doctor Strange", "Wong", "Dormammu"],
    creators: "Stan Lee, Steve Ditko",
    synopsis: "The Sorcerer Supreme defends Earth from mystical threats beyond comprehension.",
    release: "2023-11-10"
  },

  // ---------------------- DC ----------------------
  {
    id: 17,
    title: "Aquaman: Abyssal Crown",
    publisher: "DC",
    price: 310,
    cover: "assets/dc/aquaman.jpg",
    category: "regular",
    characters: ["Aquaman", "Mera", "Ocean Master"],
    creators: "Paul Norris, Mort Weisinger",
    synopsis: "Arthur Curry must reclaim his throne to prevent an underwater war.",
    release: "2023-10-25"
  },
  {
    id: 18,
    title: "Green Lantern: Cosmic Oath",
    publisher: "DC",
    price: 350,
    cover: "assets/dc/Green Lantern.jpg",
    category: "regular",
    characters: ["Green Lantern", "Sinestro", "Carol Ferris"],
    creators: "John Broome, Gil Kane",
    synopsis: "Hal Jordan takes the oath to protect the universe from interstellar threats.",
    release: "2023-10-20"
  },
  {
    id: 19,
    title: "Shazam: Thunder Born",
    publisher: "DC",
    price: 330,
    cover: "assets/dc/shazam.jpg",
    category: "regular",
    characters: ["Shazam", "Billy Batson", "Dr. Sivana"],
    creators: "C. C. Beck, Bill Parker",
    synopsis: "The power of SHAZAM is tested against ancient magical forces.",
    release: "2023-10-15"
  },
  {
    id: 20,
    title: "Joker: Laughing Madness",
    publisher: "DC",
    price: 340,
    cover: "assets/dc/joker.jpg",
    category: "regular",
    characters: ["Joker", "Harley Quinn", "Batman"],
    creators: "Bill Finger, Bob Kane, Jerry Robinson",
    synopsis: "Gotham's Clown Prince of Crime unleashes his most chaotic scheme yet.",
    release: "2023-10-10"
  },

  // ---------------------- IMAGE ----------------------
  {
    id: 21,
    title: "Witchblade: Bloodline",
    publisher: "Image",
    price: 310,
    cover: "assets/image/Witchblade.jpg",
    category: "regular",
    characters: ["Witchblade", "Sara Pezzini", "Ian Nottingham"],
    creators: "Marc Silvestri, David Wohl, Brian Haberlin, Michael Turner",
    synopsis: "The ancient Witchblade artifact chooses a new bearer with a dark destiny.",
    release: "2023-09-25"
  },
  {
    id: 22,
    title: "Kick-Ass: Rebellion",
    publisher: "Image",
    price: 280,
    cover: "assets/image/Kick ass.jpg",
    category: "regular",
    characters: ["Kick-Ass", "Hit-Girl", "Red Mist"],
    creators: "Mark Millar, John Romita Jr.",
    synopsis: "Ordinary people become real-life superheroes in this violent, gritty series.",
    release: "2023-09-20"
  },
  {
    id: 23,
    title: "Haunt: Phantoms Unleashed",
    publisher: "Image",
    price: 330,
    cover: "assets/image/haunt.jpg",
    category: "regular",
    characters: ["Haunt", "Daniel Kilgore", "Kurt Kilgore"],
    creators: "Robert Kirkman, Todd McFarlane",
    synopsis: "Brothers bound by death become an unstoppable supernatural entity.",
    release: "2023-09-15"
  },
  {
    id: 24,
    title: "The Darkness: Void Rising",
    publisher: "Image",
    price: 350,
    cover: "assets/image/darkness.jpeg",
    category: "regular",
    characters: ["The Darkness", "Jackie Estacado", "Jenny Estacado"],
    creators: "Marc Silvestri, Garth Ennis, David Wohl",
    synopsis: "Jackie Estacado battles demonic forces while wielding the power of Darkness.",
    release: "2023-09-10"
  },
  {
    id: 25,
    title: "Monstress: Dragonspire",
    publisher: "Image",
    price: 360,
    cover: "assets/image/monstress.jpg",
    category: "regular",
    characters: ["Maika Halfwolf", "Kippa", "Ren Mormorian"],
    creators: "Marjorie Liu, Sana Takeda",
    synopsis: "A teenage girl struggles to control the psychic connection to a monster.",
    release: "2023-09-05"
  },
  {
    id: 26,
    title: "Shadowhawk: Night Assault",
    publisher: "Image",
    price: 280,
    cover: "assets/image/shadowhawk.jpg",
    category: "regular",
    characters: ["Shadowhawk", "Eddie Collins", "Alphonse Lymon"],
    creators: "Jim Valentino",
    synopsis: "A vigilante with alien armor fights crime in the darkest corners of the city.",
    release: "2023-08-30"
  },

  // ---------------------- EXTRA ----------------------
  {
    id: 27,
    title: "Captain America: Sentinel",
    publisher: "Marvel",
    price: 300,
    cover: "assets/marvel/captain america.jpg",
    category: "regular",
    characters: ["Captain America", "Bucky Barnes", "Red Skull"],
    creators: "Joe Simon, Jack Kirby",
    synopsis: "The Sentinel of Liberty stands against tyranny in all its forms.",
    release: "2023-08-25"
  },
  {
    id: 28,
    title: "Green Arrow: Silent Hunt",
    publisher: "DC",
    price: 310,
    cover: "assets/dc/greenarrow.jpg",
    category: "regular",
    characters: ["Green Arrow", "Black Canary", "Merlyn"],
    creators: "Mort Weisinger, George Papp",
    synopsis: "Oliver Queen takes aim at corruption in Star City with his trusty bow.",
    release: "2023-08-20"
  },
  {
    id: 29,
    title: "Saga: Moonfall",
    publisher: "Image",
    price: 340,
    cover: "assets/image/sag.jpeg",
    category: "regular",
    characters: ["Alana", "Marko", "Prince Robot IV"],
    creators: "Brian K. Vaughan, Fiona Staples",
    synopsis: "The war-torn galaxy expands with new alliances and betrayals.",
    release: "2023-08-15"
  },
  {
    id: 30,
    title: "Avengers: Titan Assault",
    publisher: "Marvel",
    price: 420,
    cover: "assets/marvel/avengerst.jpg",
    category: "regular",
    characters: ["Avengers", "Thanos", "Nebula"],
    creators: "Stan Lee, Jack Kirby",
    synopsis: "Earth's Mightiest Heroes face their greatest challenge: the Mad Titan.",
    release: "2023-08-10"
  }
];