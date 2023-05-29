const data = {
  data: [
    {
      users: [
        {
          id: 1,
          name: "SAFSFSA Gwendoline",
          email: "davina.gwendoline@publicisgroupe.com",
          password: "bfsbw53",
        },
        {
          id: 2,
          name: "Jaylah Suz",
          email: "jaylah.suz@publicisgroupe.com",
          password: "th3tg3ht3",
        },
        {
          id: 3,
          name: "Margie Jeremiah",
          email: "margie.jeremiah@publicisgroupe.com",
          password: "8jnjnvqaa5",
        },
        {
          id: 4,
          name: "Lenard Nita",
          email: "lenard.nita@publicisgroupe.com",
          password: "6t4n64h75j43",
        },
        {
          id: 5,
          name: "Leann Adamina",
          email: "leann.adamina@publicisgroupe.com",
          password: "asa533g3",
        },
        {
          id: 6,
          name: "Abilene Bevis",
          email: "abilene.bevis@publicisgroupe.com",
          password: "l66kj5ggcxz",
        },
        {
          id: 7,
          name: "Evonne Isadora",
          email: "evonne.isadora@publicisgroupe.com",
          password: "vdava3fe2",
        },
        {
          id: 8,
          name: "Madeleine Anson",
          email: "madeleine.anson@publicisgroupe.com",
          password: "hnjnmszzsr43ww",
        },
        {
          id: 9,
          name: "Jennifer Christy",
          email: "jennifer.christy@publicisgroupe.com",
          password: "53b4ehrwb35",
        },
      ],
      clients: [
        {
          id: 1,
          name: "Apple",
          defaultCampaignManager: {
            id: 1,
            name: "Davina Gwendoline",
            email: "davina.gwendoline@publicisgroupe.com",
            password: "bfsbw53",
          },
        },
        {
          id: 2,
          name: "Amazon",
          defaultCampaignManager: {
            id: 3,
            name: "Margie Jeremiah",
            email: "margie.jeremiah@publicisgroupe.com",
            password: "8jnjnvqaa5",
          },
        },
        {
          id: 3,
          name: "Microsoft",
          defaultCampaignManager: {
            id: 6,
            name: "Abilene Bevis",
            email: "abilene.bevis@publicisgroupe.com",
            password: "l66kj5ggcxz",
          },
        },
        {
          id: 4,
          name: "Google",
          defaultCampaignManager: {
            id: 2,
            name: "Jaylah Suz",
            email: "jaylah.suz@publicisgroupe.com",
            password: "th3tg3ht3",
          },
        },
        {
          id: 5,
          name: "Samsung",
          defaultCampaignManager: {
            id: 5,
            name: "Leann Adamina",
            email: "leann.adamina@publicisgroupe.com",
            password: "asa533g3",
          },
        },
        {
          id: 6,
          name: "Coca-Cola",
          defaultCampaignManager: {
            id: 7,
            name: "Evonne Isadora",
            email: "evonne.isadora@publicisgroupe.com",
            password: "vdava3fe2",
          },
        },
        {
          id: 7,
          name: "Toyota",
          defaultCampaignManager: {
            id: 8,
            name: "Madeleine Anson",
            email: "madeleine.anson@publicisgroupe.com",
            password: "hnjnmszzsr43ww",
          },
        },
        {
          id: 8,
          name: "Mercedes-Benz",
          defaultCampaignManager: {
            id: 7,
            name: "Evonne Isadora",
            email: "evonne.isadora@publicisgroupe.com",
            password: "vdava3fe2",
          },
        },
        {
          id: 9,
          name: "McDonald’s",
          defaultCampaignManager: {
            id: 3,
            name: "Margie Jeremiah",
            email: "margie.jeremiah@publicisgroupe.com",
            password: "8jnjnvqaa5",
          },
        },
        {
          id: 10,
          name: "Disney",
          defaultCampaignManager: {
            id: 4,
            name: "Lenard Nita",
            email: "lenard.nita@publicisgroupe.com",
            password: "6t4n64h75j43",
          },
        },
        {
          id: 11,
          name: "BMW",
          defaultCampaignManager: {
            id: 5,
            name: "Leann Adamina",
            email: "leann.adamina@publicisgroupe.com",
            password: "asa533g3",
          },
        },
        {
          id: 12,
          name: "Intel",
          defaultCampaignManager: {
            id: 4,
            name: "Lenard Nita",
            email: "lenard.nita@publicisgroupe.com",
            password: "6t4n64h75j43",
          },
        },
        {
          id: 13,
          name: "Facebook",
          defaultCampaignManager: {
            id: 9,
            name: "Jennifer Christy",
            email: "jennifer.christy@publicisgroupe.com",
            password: "53b4ehrwb35",
          },
        },
        {
          id: 14,
          name: "NIKE",
          defaultCampaignManager: {
            id: 5,
            name: "Leann Adamina",
            email: "leann.adamina@publicisgroupe.com",
            password: "asa533g3",
          },
        },
        {
          id: 15,
          name: "American Express",
          defaultCampaignManager: {
            id: 2,
            name: "Jaylah Suz",
            email: "jaylah.suz@publicisgroupe.com",
            password: "th3tg3ht3",
          },
        },
      ],
      campaigns: [
        {
          id: 1,
          name: "Magic Keyboard winter 2022",
          campaignManager: {
            id: 1,
            name: "Davina Gwendoline",
            email: "davina.gwendoline@publicisgroupe.com",
            password: "bfsbw53",
          },
          client: {
            id: 1,
            name: "Apple",
            defaultCampaignManager: {
              id: 1,
              name: "Davina Gwendoline",
              email: "davina.gwendoline@publicisgroupe.com",
              password: "bfsbw53",
            },
          },
          type: "SEARCH_ENGINE",
          startDate: "2022-01-05",
          endDate: "2022-02-11",
          budget: 100000,
        },
        {
          id: 2,
          name: "iPad Pro june 2022",
          campaignManager: {
            id: 1,
            name: "Davina Gwendoline",
            email: "davina.gwendoline@publicisgroupe.com",
            password: "bfsbw53",
          },
          client: {
            id: 1,
            name: "Apple",
            defaultCampaignManager: {
              id: 1,
              name: "Davina Gwendoline",
              email: "davina.gwendoline@publicisgroupe.com",
              password: "bfsbw53",
            },
          },
          type: "SOCIAL_MEDIA",
          startDate: "2022-06-12",
          endDate: "2022-06-18",
          budget: 850000,
        },
        {
          id: 3,
          name: "Big Mac Week 32 - 33",
          campaignManager: {
            id: 3,
            name: "Margie Jeremiah",
            email: "margie.jeremiah@publicisgroupe.com",
            password: "8jnjnvqaa5",
          },
          client: {
            id: 9,
            name: "McDonald’s",
            defaultCampaignManager: {
              id: 3,
              name: "Margie Jeremiah",
              email: "margie.jeremiah@publicisgroupe.com",
              password: "8jnjnvqaa5",
            },
          },
          type: "TV",
          startDate: "2022-08-03",
          endDate: "2022-08-17",
          budget: 1170000,
        },
        {
          id: 4,
          name: "Disney Plus - ALWAYS ON",
          campaignManager: {
            id: 4,
            name: "Lenard Nita",
            email: "lenard.nita@publicisgroupe.com",
            password: "6t4n64h75j43",
          },
          client: {
            id: 10,
            name: "Disney",
            defaultCampaignManager: {
              id: 4,
              name: "Lenard Nita",
              email: "lenard.nita@publicisgroupe.com",
              password: "6t4n64h75j43",
            },
          },
          type: "DISPLAY",
          startDate: "2022-12-01",
          endDate: "2023-11-30",
          budget: 5000000,
        },
        {
          id: 5,
          name: "Windows 11 launch",
          campaignManager: {
            id: 6,
            name: "Abilene Bevis",
            email: "abilene.bevis@publicisgroupe.com",
            password: "l66kj5ggcxz",
          },
          client: {
            id: 3,
            name: "Microsoft",
            defaultCampaignManager: {
              id: 6,
              name: "Abilene Bevis",
              email: "abilene.bevis@publicisgroupe.com",
              password: "l66kj5ggcxz",
            },
          },
          type: "DISPLAY",
          startDate: "2023-01-15",
          endDate: "2023-02-15",
          budget: 2500000,
        },
      ],
    },
  ],
};

export default data;
