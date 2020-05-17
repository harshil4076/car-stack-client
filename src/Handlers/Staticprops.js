export const allMakes = [
    {
        make: "Honda",
        model: ["civic", "crv", "pilot"]
    },
    {
        make: "Toyota",
        model: ["corolla", "rav4", "prius"]
    }
  ];

  export const year = ["2015", "2016", "2017", "2018", "2019", "2020"];
  const LocationList = ["Toronto", "Mississauga", "Hamilton", "Oakville", "Burlington"]

  //function to extract models from specific make
  export const MakesList =[];
  export const makesList = allMakes.map(i => {
   return MakesList.push(i.make);
  });


  export const radioItems = [
    "New",
    "Used",
    "Certified Pre-Owned"
  ]
  export const categoryList = ["sedan", "suv", "coupe", "truck", "hatchback", "convertible", "minivan", "wagon", "electric"]
  export const transmission = ["auto", "manual"]
  export const fuelType = ["gasoline", "diesel", "propane", "electric"]
  export const doors = ["2", "3", "4", "5", "6", "7"]