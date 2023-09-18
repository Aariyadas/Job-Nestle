// import { WhatsApp, Twitter, Spotify, Youtube, Linkedin, Instagram, Google, Facebook } from "../assets";

  export const jobTypes = ["Full-Time", "Part-Time", "ContracT", "Intern"];
  
  export const experience = [
    { title: "Under 1 Year", value: "0-1" },
    { title: "1 -2 Year", value: "1-2" },
    { title: "2 -6 Year", value: "2-6" },
    { title: "Over 6 Years", value: "6" },
  ];
  
  export const popularSearch = [
    "Software Engineer",
    "Developer",
    "Full-Stack Developer",
    "Data Scientist",
    "Remote",
    "Full-Time",
    "Sales",
    "Office Assistant",
  ];
  
  export const jobs = [
    {
      id: "1",
      company: {
        name: "Microsoft Corporation",
        location: "Califonia",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl:"https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Twitter.png" ,
      },
      jobTitle: "Software Engineer",
      location: "West US",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "2",
      company: {
        name: "Google Corporation",
        location: "Califonia",
        email: "support@google.com",
        contact: "support@google",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
      },
      jobTitle: "System Analyst",
      location: "New York",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "3",
      company: {
        name: "LinkedIn Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl:"https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png" ,
      },
      jobTitle: "Social Meia Manager",
      location: "India, Mumbai",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "4",
      company: {
        name: "Spotify Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: "https://developer.spotify.com/images/guidelines/design/icon1@2x.png",
      },
      jobTitle: "CFO",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "5",
      company: {
        name: "Facebook Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/Vuo0AzIJVro.png",
      },
      jobTitle: "CFO",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "6",
      company: {
        name: "WhatsApp Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/WhatsApp_Logo.svg/1200px-WhatsApp_Logo.svg.png",
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "7",
      company: {
        name: "Instagram Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl:"data:image/jpeg;base64,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" ,
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "8",
      company: {
        name: "Youtube Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl:"data:image/png;base64,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" ,
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "9",
      company: {
        name: "CodeWave Solutions",
        location: "India",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        profileUrl: "data:image/jpeg;base64,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",
      },
      jobTitle: "Subscribe Please",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  
          requirement:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const companies = [
    {
      _id: 1,
      name: "Microsoft Corporation",
      location: "Califonia",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADMCAMAAABp5J6CAAAAclBMVEUdm/D///8Alu8Al+8AlO8VmfD4/P/7/v/t9/7y+f7i8v2z2vnK5fui0fjc7/38///U6/xWsPOVy/fA4PpHqvIinfA3pfGIxfa22/ltufR2vfXQ6fxgtPMtofF+wPVDqfKOyPap1ficzvfE4/tstfNfsfPWKkv6AAALw0lEQVR4nOWd6YKqNhiGIQsCAoICioqKztz/LRZ0VMISErIAp++fttZBH7N9WxLD/J/KmPoLMMk+7daF7/vFehfach45d3DLu2cpQAi8hRC+Hn3PEn3wnMFX4TaGAEKjKQgRjO7BSuTh8wUPbimCuAX9FoYo3brjHz9TcGsdAdAL/Wl58Lvj7PPr9281S3DHT0F/WxPtDtKCA/0Upe93zxDc8vPhxv6qRGcc7EEG0P39H/MD3115sJ/oscfwXPeIoZF8ZoW5gdsZYyevC4Pj0OoeHI3y94Q/nxc6wIWXSAGtE97mfgnmO9pjvTN+LhDw2zXa4F4sn4dRq+M47Epg3/dUp4jByxbA0ffVNvgVXJRQDctO27YKB3nc2d3DS/IZPODxfb0FvkMG8NXBUeRh/tFdF0zC5iPdewq/RlC9wdvgaTVXHJQSduswvpt/0ImB7vpX0tyFp9r/bYJ7qPpp8MnULR+JtXclDNZ/T9s8bjloGLwgq39eEzx6vTkJ9OB+VIi395t85fkRahu82HDqH9gAd9Hfu3JJbi+j5HBXfTVLUbOpX/r0hpca4Nv3F4CpY+rTjuKG8aL3vA7P5Ec2wPPvG2N95KEsaoqShl1Ggoe1HgdjXSacnUtr716B5nRNgm/rQw1Gesg3Z0kDnMbdMk1I8JR4tybyrQbutjFKgNuNLqelt59E7FRG7nP7YwnwXfO31zC3W1flA7yz5xLg+1ang6nq9Vx9Rwdt7mBLgsftHx8rtuFceSt4H/e5wW3tfkFIgG+Sjr/DCUtcZ7Qy1SMcHEnucJ9D5JNd3e3+U0zaelJ1QmqxMdjWPy4o3VRQjnmTBPe6f30M7qYqRWo7OoY1B/t0S19uamI3wFuT+lvgqIg7VNvgIH0HVd11ZvzFnwzwHLt18HvveAOKDPez0hEObtVnrE7+2ah5bOhlxNXB26vZRzBREZqwlTb41XMP95eXWhtQ8C8cUQc/0n5/UMgHvylt8ASgdqr1Y4zWwelLC8qk26+9zrMy4bwraTiwpsK0FcUUk+q1rEufEcsBXq5rhVTwi3r3pAFQC8PygJfd/SzTdNfd04mGY57cXoIJNUfFpVC9H06KiEYwLme1vx5MTLLK19zTSeuVzYAh/j6XlGdRbK62vjfBTYCzJnFgJlB081WiFRyR3KSTwjroYCIhrRho7emo6WjVwQPmx2CYCnvpvS6RAmFUND++Dm5xdD4MM8FJjm1GkSPQXouGQk/9gvAmVFrIsHhKUmfylwDnNKWgUQiAa5vUQd41FxPgvLl5DJLxS1s+/HwpAlFnxyTAXe5GwCAdi94V2VSgvqIgMoU0phVK9M0Ibp6ZdLxwr4lNgjMZrS2B1OePTNk6wHHca2qR4MwmTEMgufEaczrAcd7fII3CgLHfBkOYeVyrm63DKWUH349fXCG4+hw2jQ5wnPR/oQZ4IBINKle3zGMd7Y6Orp70D8BmuZdY0hZDkO9PbEFJDcsZD7h4fSEA6Y2FXYMBwwMuxUuGMD0+hvo8l2MwTlzgkkrtIEx+C2pqXYOTwgUub+xhYORZP7wGt5QPfC0zzA8BTs53r2tV0RCI4FjOKsmuximNG5ict7uANOk1hJ44wZVkdsqFDoAk2hffXbEaFnJ2y+2pi6pOiCt8hBBOo/Nlq6GQM+9fVrvALfVfqez+I7ZZcSvtdx86952ddCd3VCnt5e7ZcKehvFSHMGUnWc9OQw0FxRqEO2pYB8Cdq+7ctQpBSrVW397SQMOcq1z9uw8pm2pPenN6SgQpKb4auEXO/d7UX1tcHZmjLvAgJt/nLb7NIaU4rw5ugJgIkYeLJ6f4xTVwN8EY5H7Nk3PTRa9qNB+lDv6KdAPjfPi83zpPUIomT3k/dx3ceUXBymbHsX/6m+nuCyanGW7EcvbdfFW50NdL8QissrtP+NXFRLNfCHAy/Pf0oBFK0sXOcNQDAAYL/AS38U8p+OjFHlPntiDRorx18MeiF6+WcHMDcS94zy6kxYoShmg4KbrKUvSIOqmT4Mp3v2kVvbqeAJd1UsM81Nor3w+ut7xUtTA1ZUvbOL9wUee25lEJ/1CTQ/qRVSR48A8N8oFzmxoxN/Xb97UJ0AvQGuD/zryOEyp3K8qqfAO/LtHNlza42u2eGjV0NFsT3FlwxIUQGig2bCUUBGob56ShId4GdxYceagJUrJH3eCm/09M7Ghol1RH7my5Qbaa4AB3F/jYovU5CWZtrkFwdcU/+jR8zmgXuLP8zg4Gq8c78+Ph0u034uhZDvDFm+xg+JSmnoqIhQ/z4Z7eB776XbIBVztGnRfcdOIFk7OcHd1b/CN25vekwgbDzpD+qwSWSz7kig+Al8v5Qmc4xHIgF+3yiE20TPIry5ZH+q0ZFx211bLFduDgwHUhxfLIscG00XPonpRgcQOdaWpjuCBms1+Y4U7PFbKDly5LvKRGxzHb+QVMVwKtF9TfGfwTdvDnhVQL6fAp4wGLrJdAPe/VWQA78+G57LdfrbxjMn92Wt3uSPBSziFLaPcMTq/BcPo48FJWeM80HV0zQrTtwzzgTiuQsQket3hqvH6xNzgdPATpee8fdg/Pe+wOxS27JpjhcsnJhA3202joXT1/ljADWKn658zzahwNPgCu+yBNMTG6Jyzgzoz7dVvwxs49NKsvqsiTWq3MCS50EpBm8d1IOLSOaz41VkS0PUf84IpvOZAoxHcq9KDlpvaaA3liyBPygbsLmdgHChn5wc3bIshpW8VHgms4I0SCEt7DcRm8syVsTuKc2djAR57dqVPDtT6jwK25p4y5jHQO8NlvSGsfIi4JXOtZ6Pxq3sUqEdz0Z2zAjeno7DG3Ga/maNRFdMzBxtnWQY2Y0bnA50pOO19ZDnjZ22dowmE48hYLnrj6HCvZR9+3yJVQ2Om/oGxAo1YyfnDTvc6r0XE++s4SzhTSaj+ngd55D4ga8NJXm1GRgMjFc9zgpnNr3ZA4kTpuFVcJbppBBuaADjmjbOLgpnn6nR4dU06bVQZumuFx4rQphmKXro0FN037nqIJm52pUlcJeKnwVl2AOw236KWSQuCl7PUxR9VVuBjrNOvGxFzkgldahYf75Ryn+g4Oal3UNw34n2xtxTGAJxHeI3nga23GrJDh8pYscOu4LG5Z4J6+nTtyuOWAWzd95Y6SuKWAexodNu6saJ/EwW19o9vAjQuGBSQKvikSfaYbhoUM5qcEwR9aY1FQ0j3YlcRs9bPOQBQ2BP0SQgLgQaY1FAM7L5wdrdHgQYa1+mUgEoo7tDQS3DtrdkeRpOX7ozHgmyLVHWQWd0PFwYM91h10gkkom5sX3PFTpD2lAKJxCVFp4HYRIf0RRonW2hjwVXiP9Le1UV2bLnP15gO3guKYT7TfDB7lrmKs4Ja922b5VKFUQ+RG+0Fw2+74TS3HDnb3yzmttiBNA11xZ6OzwAzgQZZGP8f97X73i8K/b7f748/vNTeeMePJmI3KRhWNndPBTfNQDmAI4HeLGZ7B/jIMLgoWMRLcdPbG5DnAhkCsZjInwU3TzeZU6VCuYQVv/flI8NLtmM9JEBDvlfZyEtzcHOZR5AFBJtXxHgSvvK7pT4LA6CzfIRkCLw1TP5m01TGK9GB3WG7r6dAhihRP5TTwcllPp7BQMUAZ9YZ69eCmeTrrLnDBwNirM0+Zwct1fZ/os1cxBNdCkRPWq17vbHWI9JhzGCRHfUP7I5pb6m5TqLjLY2hEa719/E8D/vhpnysb7rgc2PFd54RW12AExvL2KVRwHEjZl6LJqE3G0FN4ixOJSxwuZ7P8Z63DMO0Xa7DR3V2qaIxww5f9GyS/N2+ScV0XR3jZcteXGI4PRVUNjfLf22Ny6EqcCYUq+PiTAs62L5FL5iS6FIF6f5NRY3Jnlu35l98coNcP0PsT4OeNt+Xb8ui43bkO22GKmjQ+P25ZwaO4ZdE1AQhVv8ErZPf3L9VLSRpl+/v6ZFuzQn5JQtXTauW4obc7rNdF4ZcqisPucXKdlerokZAk1rIuS/9b8P8ABQeukkyIrV0AAAAASUVORK5CYII=",
      jobPosts: ["1", "2"],
    },
    {
      _id: 2,
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" ,
      jobPosts: ["1", "2"],
    },
    {
      _id: 3,
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
      jobPosts: ["1", "2"],
    },
    {
      _id: 4,
      name: "Spotify Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl:"https://w7.pngwing.com/pngs/144/728/png-transparent-spotify-social-media-soundcloud-music-social-media-television-logo-vector-icons.png" ,
      jobPosts: ["1", "2"],
    },
    {
      _id: 5,
      name: "Facebook Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "data:image/jpeg;base64,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",
      jobPosts: ["1", "2"],
    },
    {
      _id: 6,
      name: "WhatsApp Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png",
      jobPosts: ["1", "2"],
    },
    {
      _id: 7,
      name: "Instagram Corporation",
      location: "India",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "data:image/jpeg;base64,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",
      jobPosts: ["1", "2"],
    },
    {
      _id: 8,
      name: "Youtube Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg",
      jobPosts: ["1", "2"],
    },
    {
      _id: 9,
      name: "CodeWave Solutions",
      location: "Ghana",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg",
      jobPosts: ["1", "2"],
    },
  ];
  
  export const users = [
    {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg",
      jobPosts: ["1", "2"],
      token: "Google",
    },
    {
      firstName: "CodeWaver",
      lastName: "Solutions",
      email: "support@code.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg",
      accountType: "seeker",
      cvUrl: "",
      token: "Coders",
    },
  ];