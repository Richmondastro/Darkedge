const schoolCodes = [
  {
    SchoolName: "Ananda College Colombo 10",
    Team: "A",
    SchoolCode: "ACC-A",
  },
  {
    SchoolName: "Ananda College Colombo 10",
    Team: "B",
    SchoolCode: "ACC-B",
  },
  {
    SchoolName: "Ananda College Colombo 10",
    Team: "C",
    SchoolCode: "ACC-C",
  },
  {
    SchoolName: "Ananda Maiththreya Central College, Balangoda",
    Team: "A",
    SchoolCode: "AMB-A",
  },
  {
    SchoolName: "Ananda Maiththreya Central College, Balangoda",
    Team: "B",
    SchoolCode: "AMB-B",
  },
  {
    SchoolName: "Ananda Maiththreya Central College, Balangoda",
    Team: "C",
    SchoolCode: "AMB-C",
  },
  {
    SchoolName: "Anula Devi Girls' College",
    Team: "A",
    SchoolCode: "ADG-A",
  },
  {
    SchoolName: "Bandaranayake Central College, Veyangoda",
    Team: "A",
    SchoolCode: "BCV-A",
  },
  {
    SchoolName: "Bandaranayake Central College, Veyangoda",
    Team: "B",
    SchoolCode: "BCV-B",
  },
  {
    SchoolName: "Bandaranayake Central College, Veyangoda",
    Team: "C",
    SchoolCode: "BCV-C",
  },
  {
    SchoolName: "Bandaranayake College, Gampaha",
    Team: "A",
    SchoolCode: "BCG-A",
  },
  {
    SchoolName: "Bandaranayake College, Gampaha",
    Team: "B",
    SchoolCode: "BCG-B",
  },
  {
    SchoolName: "De Mazenod College",
    Team: "A",
    SchoolCode: "DMK-A",
  },
  {
    SchoolName: "De Mazenod College",
    Team: "B",
    SchoolCode: "DMK-B",
  },
  {
    SchoolName: "De Mazenod College",
    Team: "C",
    SchoolCode: "DMK-C",
  },
  {
    SchoolName: "Defence Services College, Colombo 02",
    Team: "A",
    SchoolCode: "DSC-A",
  },
  {
    SchoolName: "Defence Services College, Colombo 02",
    Team: "B",
    SchoolCode: "DSC-B",
  },
  {
    SchoolName: "Defence Services College, Colombo 02",
    Team: "C",
    SchoolCode: "DSC-C",
  },
  {
    SchoolName: "Dharmaraja College, Kandy",
    Team: "A",
    SchoolCode: "DCK-A",
  },
  {
    SchoolName: "Devi Balika Vidyalaya, Colombo 08",
    Team: "A",
    SchoolCode: "DBC-A",
  },
  {
    SchoolName: "Ferguson High School, Ratnapura",
    Team: "A",
    SchoolCode: "FHR-A",
  },
  {
    SchoolName: "G/ Christ Church Boys College",
    Team: "A",
    SchoolCode: "CBG-A",
  },
  {
    SchoolName: "G/ Christ Church Girls College",
    Team: "A",
    SchoolCode: "CGG-A",
  },
  {
    SchoolName: "Girls High School Kandy",
    Team: "A",
    SchoolCode: "GHK-A",
  },
  {
    SchoolName: "Girls High School Kandy",
    Team: "B",
    SchoolCode: "GHK-B",
  },
  {
    SchoolName: "Girls High School Kandy",
    Team: "C",
    SchoolCode: "GHK-C",
  },
  {
    SchoolName: "H/Sri Lanka Singapore Friendship College",
    Team: "A",
    SchoolCode: "SFH-A",
  },
  {
    SchoolName: "H/Sri Lanka Singapore Friendship College",
    Team: "B",
    SchoolCode: "SFH-B",
  },
  {
    SchoolName: "Isipathana College",
    Team: "A",
    SchoolCode: "ICC-A",
  },
  {
    SchoolName: "Kg/St.Josephs Balika M.V.",
    Team: "A",
    SchoolCode: "JBK-A",
  },
  {
    SchoolName: "Kg/St.Josephs Balika M.V.",
    Team: "B",
    SchoolCode: "JBK-B",
  },
  {
    SchoolName: "Kingswood College Kandy",
    Team: "A",
    SchoolCode: "KCK-A",
  },
  {
    SchoolName: "Kingswood College Kandy",
    Team: "B",
    SchoolCode: "KCK-B",
  },
  {
    SchoolName: "Mahamaya Girls' College Kandy",
    Team: "A",
    SchoolCode: "MGK-A",
  },
  {
    SchoolName: "Mahamaya Girls' College Kandy",
    Team: "B",
    SchoolCode: "MGK-B",
  },
  {
    SchoolName: "Mahamaya Girls' College Kandy",
    Team: "C",
    SchoolCode: "MGK-C",
  },
  {
    SchoolName: "Mahinda College Galle",
    Team: "A",
    SchoolCode: "MCG-A",
  },
  {
    SchoolName: "Mahinda Rajapaksha College-Homagama",
    Team: "A",
    SchoolCode: "MRH-A",
  },
  {
    SchoolName: "Nalanda College, Colombo",
    Team: "A",
    SchoolCode: "NCC-A",
  },
  {
    SchoolName: "Nalanda College, Colombo",
    Team: "B",
    SchoolCode: "NCC-B",
  },
  {
    SchoolName: "Nalanda College, Colombo",
    Team: "C",
    SchoolCode: "NCC-C",
  },
  {
    SchoolName: "Piliyandal Central College",
    Team: "A",
    SchoolCode: "PLCC-A",
  },
  {
    SchoolName: "Pinnawala Central College",
    Team: "A",
    SchoolCode: "PNCC-A",
  },
  {
    SchoolName: "Pushpadana Girls' college, kandy",
    Team: "A",
    SchoolCode: "PGK-A",
  },
  {
    SchoolName: "Rahula College Matara",
    Team: "A",
    SchoolCode: "RCM-A",
  },
  {
    SchoolName: "Rahula College Matara",
    Team: "B",
    SchoolCode: "RCM-B",
  },
  {
    SchoolName: "Rahula College Matara",
    Team: "C",
    SchoolCode: "RCM-C",
  },
  {
    SchoolName: "Rathnavali Balika Vidyalaya Gampaha",
    Team: "A",
    SchoolCode: "RBG-A",
  },
  {
    SchoolName: "Royal College Colombo",
    Team: "A",
    SchoolCode: "RCC-A",
  },
  {
    SchoolName: "Sangamitta Balika Vidyalaya",
    Team: "A",
    SchoolCode: "SBG-A",
  },
  {
    SchoolName: "Sangamitta Balika Vidyalaya",
    Team: "B",
    SchoolCode: "SBG-B",
  },
  {
    SchoolName: "Sirimavo Bandaranaike Vidyalaya",
    Team: "A",
    SchoolCode: "SBC-A",
  },
  {
    SchoolName: "Sivali Central College",
    Team: "A",
    SchoolCode: "SCC-A",
  },
  {
    SchoolName: "Southlands College Galle",
    Team: "A",
    SchoolCode: "SCG-A",
  },
  {
    SchoolName: "St.Aloysius' College, Galle",
    Team: "A",
    SchoolCode: "SAG-A",
  },
  {
    SchoolName: "St.Servatius’ College",
    Team: "A",
    SchoolCode: "SSM-A",
  },
  {
    SchoolName: "St.Sylvester's College",
    Team: "A",
    SchoolCode: "SSK-A",
  },
  {
    SchoolName: "St.Sylvester's College",
    Team: "B",
    SchoolCode: "SSK-B",
  },
  {
    SchoolName: "Vidyaloka College Galle",
    Team: "A",
    SchoolCode: "VCG-A",
  },
  {
    SchoolName: "Vidyarathna University College Horana",
    Team: "A",
    SchoolCode: "VUC-A",
  },
  {
    SchoolName: "Viharamahadevi Balika Vidyalaya Kiribathgoda",
    Team: "A",
    SchoolCode: "VBV-A",
  },
  {
    SchoolName: "Visakha Vidyalaya",
    Team: "A",
    SchoolCode: "VVC-A",
  },
  {
    SchoolName: "Zahira College Colombo",
    Team: "A",
    SchoolCode: "ZCC-A",
  },
];

const results = [
  {
    Place: "1",
    SchoolName: "Richmond College, Galle",
    Team: "A",
    TeamCode: "xxx-xxx-xx",
    Marks: 100,
  },
];
