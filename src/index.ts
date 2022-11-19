type Planet = {
  key: string;
  name: string;
  moons: number;
  diameter: number;
  imageUrl: string;
  notes: string | null;
};

const planets: Planet[] = [
  {
    key: "r17cRT2uW",
    name: "Mercury",
    moons: 0,
    diameter: 4879,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/mercury.jpeg",
    notes: "Closest to the Sun",
  },
  {
    key: "os7hesd",
    name: "Venus",
    moons: 0,
    diameter: 12104,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/venus.jpeg",
    notes: null,
  },
  {
    key: "h5wefhyw",
    name: "Earth",
    moons: 1,
    diameter: 12756,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/earth.jpeg",
    notes: "Our world",
  },
  {
    key: "dfgu54ef",
    name: "Mars",
    moons: 2,
    diameter: 6792,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/mars.jpeg",
    notes: "The red planet",
  },
  {
    key: "2sdfe56",
    name: "Jupiter",
    moons: 67,
    diameter: 142984,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/jupiter.jpeg",
    notes: "The largest planet",
  },
  {
    key: "sdfj65erg",
    name: "Saturn",
    moons: 62,
    diameter: 120536,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/saturn.jpeg",
    notes: null,
  },
  {
    key: "dfgj67ess",
    name: "Uranus",
    moons: 27,
    diameter: 51118,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/uranus.jpeg",
    notes: null,
  },
  {
    key: "fgh567egg",
    name: "Neptune",
    moons: 14,
    diameter: 49528,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/neptune.jpeg",
    notes: null,
  },
  {
    key: "dfgtuyi55",
    name: "Pluto",
    moons: 5,
    diameter: 2370,
    imageUrl:
      "https://raw.githubusercontent.com/robwalkerco/planets-data/main/src/pluto.jpeg",
    notes: "Declassified as a planet in 2006",
  },
];

export default planets;
