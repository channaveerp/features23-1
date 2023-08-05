export const ReviewData = [
    {
      id: 1,
      title: "Technical Test 1",
      data: [
        {
          id: 1,
          test: "App Size Matches memory requirements",
          status: false,
        },
        {
          id: 2,
          test: "Number of Vertices",
          status: false,
        },
        {
          id: 3,
          test: "App ID Check",
          status: false,
        },
        {
          id: 4,
          test: "Simulation Video Check",
          status: false,
        },
        {
          id: 5,
          test: "Functionality Check",
          status: false,
          ischild: true,
          data: [
            {
              id: 1,
              test: "Internal Usage",
              status: false,
            },
            {
              id: 2,
              test: "Play/Pause Automatically",
              status: false,
            },
            {
              id: 3,
              test: "Sensors Used",
              status: false,
            },
          ],
        },
      ],
    },
  ];