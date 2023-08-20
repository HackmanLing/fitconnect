const font = {
    bold: { fontFamily: "Bold"},
    medium: { fontFamily: "Medium"},
    light: { fontFamily: "Light"},
    regular: { fontFamily: "Regular"},
    semiBold: { fontFamily: "SemiBold"},
}

const Slides = [
    {
        id: 1,
        title: "Connect, Share, and Learn",
        description: "Welcome to Hoogle, the versatile platform for sharing, collaborating, and learning. Whether you're a programmer, creative enthusiast, or knowledge seeker, Hoogle offers a space to connect with others, share diverse content, and expand your horizons",
        image: require("./../assets/104.png")
    },
    {
        id: 2,
        title: "Share Content and Resources",
        description: "Hoogle empowers you to share an array of content. Share code snippets, files, tutorials, artwork, music, writing, and more. Showcase your talents, inspire others, and explore the vast spectrum of creativity and knowledge within the Hoogle community",
        image: require("./../assets/437.png")
    },
    {
        id: 3,
        title: "Join the\n Hoogle Community Today!",
        description: "Ready to embark on a journey of connection, creativity, and learning? Join Hoogle today and become part of a diverse and thriving community. Share your passions, collaborate with others, and uncover a world of endless possibilities. Let Hoogle be your platform for exploration and inspiration",
        image: require("./../assets/5.png")
    },
    {
        id: 4,
        title: "Secure Payment",
        description: "Your safety and security are our top priority. That's why we exclusively accept Bitcoin, ensuring encrypted and decentralized transactions. Enjoy a secure and anonymous payment experience, free from traditional risks",
        image: require("./../assets/469.png")
    }
]

const todayPosts = [
    {
      id: 1,
      images: ["https://m.media-amazon.com/images/I/71DuopUHwPL._AC_UL400_.jpg"],
      image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkFOS3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: "How to Become a Mobile App Designer",
      createdAt: "2023-07-21 08:23",
      status: "active",
      views: 10,
      likes: [],
      downs: [],
      reviews: [],
      user: {userID: 1001, name: 'Scratch'},
      sold: 0,
      rating: 400000,
      category: "Networking",
      price: 5.00,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lectus non dui rhoncus condimentum. Vivamus eu bibendum ipsum, vel volutpat purus. Integer lacinia, leo at finibus fringilla, lorem metus vestibulum sem, in commodo mi orci at nisi."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QkFOS3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: "Mastering the Art of Mobile App Design",
      createdAt: "2023-07-21 08:23",
      status: "active",
      views: 20,
      likes: ['John', 'Alice', 'Bob'],
      downs: ['Alice', 'Bob'],
      reviews: [],
      user: {userID: 1001, name: 'Rossenburg'},
      sold: 0,
      rating: 400000,
      price: 150.00,
      description: "In consequat nulla sit amet tincidunt lacinia. Integer vitae nisl vel diam cursus semper vitae vitae nunc. Ut bibendum dapibus libero id rutrum. Suspendisse sed elit id mi bibendum euismod."
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1509233631037-deb7efd36207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENISU1FfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      title: "Mobile App Design: From Beginner to Pro",
      createdAt: "2023-07-15T10:25:43.511Z",
      status: "active",
      views: 10,
      likes: [],
      downs: [],
      reviews: [],
      user: {userID: 1001, name: 'Troy'},
      sold: 0,
      rating: 400000,
      price: 50.00,
      description: "Donec tincidunt, nunc non congue laoreet, orci enim consequat enim, sed convallis nisl diam vitae ex. Etiam condimentum, massa vitae feugiat consectetur, lectus orci facilisis tortor, id consequat ligula purus id metus."
    }
];

const profiles = [
    {
        id: 1,
        image: require("./../assets/icons/1.png")
    },
    {
        id: 2,
        image: require("./../assets/icons/2.png")
    },
    {
        id: 3,
        image: require("./../assets/icons/3.png")
    },
    {
        id: 4,
        image: require("./../assets/icons/4.png")
    },
    {
        id: 5,
        image: require("./../assets/icons/5.png")
    },
    {
        id: 6,
        image: require("./../assets/icons/6.png")
    },
    {
        id: 7,
        image: require("./../assets/icons/7.png")
    },
    {
        id: 8,
        image: require("./../assets/icons/8.png")
    },
]


const users = [
    {
      id: 1,
      firstName: "John",
      otherName: "",
      lastName: "Doe",
      address: "123 Main St, City",
      dob: "1995-07-15",
      gender: "male",
      weight: 70,
      height: 175,
      email: "john@example.com",
      phone: "+1234567890",
      profileImage: require("./../assets/icons/8.png"),
      membershipType: "Member"
    },
    {
      id: 2,
      firstName: "Jane",
      otherName: "",
      lastName: "Smith",
      address: "456 Elm St, Town",
      dob: "1986-02-28",
      gender: "female",
      weight: 58,
      height: 160,
      email: "jane@example.com",
      phone: "+9876543210",
      membershipType: "Member"
    },
    {
      id: 3,
      firstName: "Michael",
      otherName: "",
      lastName: "Johnson",
      address: "789 Oak St, Village",
      dob: "1990-11-10",
      gender: "male",
      weight: 85,
      height: 183,
      email: "michael@example.com",
      phone: "+4567890123",
      membershipType: "Member"
    },
    {
      id: 4,
      firstName: "Emily",
      otherName: "",
      lastName: "Brown",
      address: "234 Pine St, Suburb",
      dob: "1988-09-20",
      gender: "female",
      weight: 62,
      height: 165,
      email: "emily@example.com",
      phone: "+7890123456",
      profileImage: require("./../assets/icons/8.png"),
      membershipType: "Member"
    },
    {
      id: 5,
      firstName: "David",
      otherName: "",
      lastName: "Williams",
      address: "567 Cedar St, Hamlet",
      dob: "1998-03-05",
      gender: "male",
      weight: 78,
      height: 180,
      email: "david@example.com",
      phone: "+2345678901",
      membershipType: "Member"
    },
    {
        id: 6,
      firstName: "Olivia",
      otherName: "",
      lastName: "Jones",
      address: "890 Birch St, Countryside",
      dob: "1992-12-12",
      gender: "female",
      weight: 53,
      height: 158,
      email: "olivia@example.com",
      phone: "+6789012345",
      membershipType: "Member"
    },
    {
      id: 7,
      firstName: "Daniel",
      otherName: "",
      lastName: "Martinez",
      address: "123 Walnut St, City",
      dob: "1985-06-18",
      gender: "male",
      weight: 72,
      height: 178,
      email: "daniel@example.com",
      phone: "+8901234567",
      membershipType: "Official"
    },
    {
        id: 8,
      firstName: "Sophia",
      otherName: "",
      lastName: "Davis",
      address: "456 Maple St, Town",
      dob: "1993-04-30",
      gender: "female",
      weight: 60,
      height: 162,
      email: "sophia@example.com",
      phone: "+1234509876",
      membershipType: "Official",
      profileImage: require("./../assets/icons/8.png"),
    },
    {
        id: 9,
      firstName: "Christopher",
      otherName: "",
      lastName: "Wilson",
      address: "789 Oak St, Village",
      dob: "1997-08-25",
      gender: "male",
      weight: 68,
      height: 176,
      email: "christopher@example.com",
      phone: "+9876540123",
      membershipType: "Official",
      stories: [
            {
                comment: 'comment Story',
                image: require("./../assets/104.png"),
                viewed: [],
                // sentTo: [],
                replies: [
                    {
                        id: 1,
                        message: ""
                    }
                ],
                timePosted: "",
                status: "active"
            },
            {
                comment: 'shadman@_96',
                image: require("./../assets/104.png"),
                viewed: [],
                // sentTo: [],
                replies: [
                    {
                        id: 2,
                        message: ""
                    }
                ],
                timePosted: "",
                status: "active"
            },
            {
                comment: 'Shaanay_45@',
                image: require("./../assets/104.png"),
                viewed: [],
                // sentTo: [],
                replies: [
                    {
                        id: 3,
                        message: ""
                    }
                ],
                timePosted: "",
                status: "active"
            }
        ]
    },
    {
        id: 10,
      firstName: "Ava",
      otherName: "",
      lastName: "Jackson",
      address: "234 Pine St, Suburb",
      dob: "1991-01-08",
      gender: "female",
      weight: 55,
      height: 160,
      email: "ava@example.com",
      phone: "+3456789012",
      membershipType: "Official"
    }
]

const clubs = [
    {
        id: "club1",
        name: "FitZone Gym",
        location: "123 Main St, City",
        description: "A modern gym with state-of-the-art equipment and experienced trainers.",
        membersCount: 120,
        logoUrl: "https://example.com/fitzone-logo.png"
    },
    {
        id: "club2",
        name: "Yoga Harmony",
        location: "456 Elm St, Town",
        description: "Discover tranquility and balance through yoga practice at Yoga Harmony.",
        membersCount: 80,
        logoUrl: "https://example.com/yoga-harmony-logo.png"
    },
    {
        id: "club3",
        name: "Running Tribe",
        location: "789 Oak St, Village",
        description: "Join Running Tribe to explore scenic routes and achieve your running goals.",
        membersCount: 150,
        logoUrl: "https://example.com/running-tribe-logo.png"
    }
]


const announcements = [
    {
        id: 1,
        clubName: "FitZone Gym",
        userName: "John Doe",
        datetime: "2023-08-15T09:00:00Z",
        subject: "Important Event",
        title: "Upcoming Event",
        likes: ['John', 'Alice', 'Bob'],
        downs: ['Alice', 'Bob'],
        membershipType: "Official",
        image: require("./../assets/icons/4.png"),
        content: "Join us for an exciting event on August 15th! We will have group workouts, guest speakers, and healthy snacks. Don't miss out!",
    },
    {
        id: 2,
        clubName: "Yoga Harmony",
        userName: "Jane Smith",
        datetime: "2023-08-10T14:30:00Z",
        subject: "App Update",
        title: "New Features Added",
        likes: ['John', 'Alice', 'Bob', 'cha'],
        downs: ['Alice'],
        membershipType: "Member",
        image: require("./../assets/icons/2.png"),
        content: "We've added new features to enhance your experience. You can now track your yoga sessions, set meditation goals, and share your progress with the community.",
    },
    {
        id: 3,
        clubName: "Running Tribe",
        userName: "Michael Johnson",
        datetime: "2023-08-05T17:45:00Z",
        subject: "Maintenance",
        title: "Maintenance Notice",
        likes: ['John', 'Bob'],
        downs: ['Alice'],
        membershipType: "Official",
        image: require("./../assets/icons/6.png"),
        content: "Our platform will be undergoing maintenance on August 5th. During this time, the app may experience brief periods of downtime. We apologize for any inconvenience.",
    }
]

const post = [
    {
        id: 1,
        firstName: "John",
        otherName: "",
        lastName: "Doe",
        address: "123 Main St, City",
        dob: "1995-07-15",
        gender: "male",
        weight: 70,
        height: 175,
        email: "john@example.com",
        phone: "+1234567890",
        profileImage: require("./../assets/icons/7.png"),
        membershipType: "Member",
        clubName: "Running Tribe",
        likes: ['John', 'Bob'],
        downs: ['Alice'],
        createdAt: "2023-08-05T17:45:00Z",
    },
    {
        id: 4,
        firstName: "Emily",
        otherName: "",
        lastName: "Brown",
        address: "234 Pine St, Suburb",
        dob: "1988-09-20",
        gender: "female",
        weight: 62,
        height: 165,
        email: "emily@example.com",
        phone: "+7890123456",
        profileImage: require("./../assets/icons/3.png"),
        membershipType: "Official",
        clubName: "Yoga Harmony",
        likes: ['John', 'Bob'],
        downs: ['Alice'],
        createdAt: "2023-08-05T17:45:00Z",
    },
]

const userData = {
    id: 1,
    firstName: "Barbara",
    otherName: "Apphia",
    lastName: "Owusu",
    address: "123 Main St, City",
    dob: "1995-07-15",
    gender: "male",
    weight: 70,
    height: 175,
    email: "john@example.com",
    phone: "+1234567890",
    profileImage: require("./../assets/icons/8.png"),
    membershipType: "Member",
    clubName: "Yoga Harmony",
    likes: ['John', 'Bob'],
    downs: ['Alice'],
    createdAt: "2023-08-05T17:45:00Z",
}


const testPost = [{
    id: 1,
    user: {
      fName: "Mari",
      oName: "",
      lname: "Jane",
      clubName: "One Heart",
      memberShipType: "official",
    },
    comment: "Hello",
    image_url: "",
    video_url: ""
  },
  {
    id: 2,
    user: {
      fName: "",
      oName: "",
      lname: "",
      clubName: "",
      memberShipType: "",
    },
    comment: "",
    image_url: "",
    video_url: ""
  },
  {
    id: 3,
    user: {
      fName: "",
      oName: "",
      lname: "",
      clubName: "",
      memberShipType: "",
    },
    comment: "",
    image_url: "",
    video_url: ""
  }]


  // Videos Data

const vvids = [
    {
      video: 'https://www.shutterstock.com/shutterstock/videos/1106632349/preview/stock-footage-aerial-drone-footage-in-key-biscayne-fl-florida-usa-commercial-area-luxury-residence.webm',
      postProfile: require('./../assets/storage/images/post1.jpg'),
      title: 'Ram_Charan',
      description: 'Feel the buity of nature',
      likes: '245k',
      isLike: false,
    },
    {
      video: 'https://www.shutterstock.com/shutterstock/videos/1011776684/preview/stock-footage-glasgow-united-kingdom-may-a-pedestrian-bridge-with-glass-awnings.webm',
      postProfile: require('./../assets/storage/images/post2.jpg'),
      title: 'The_Groot',
      description: "It's a tea time",
      likes: '656k',
      isLike: false,
    },
    {
      video: 'https://www.shutterstock.com/shutterstock/videos/24105826/preview/stock-footage-cologne-modern-houses-editorial-picture-taken-in-february.webm',
      postProfile: require('./../assets/storage/images/post3.jpg'),
      title: 'loverland',
      description: 'Feel the buity of nature',
      likes: '243k',
      isLike: false,
    },
    {
      video: 'https://www.shutterstock.com/shutterstock/videos/1011776018/preview/stock-footage-glasgow-united-kingdom-may-tradeston-bridge-over-the-river-clyde-in-glasgow.webm',
      postProfile: require('./../assets/storage/images/post4.jpg'),
      title: 'mr. bean',
      description: 'How cute it is !!',
      likes: '876k',
      isLike: false,
    },
  ]
  
  // Friends Profile Data
const FriendsProfileData = [
    {
      name: 'Ram_Charan',
      accountName: 'Ram Charan',
      profileImage: require('./../assets/storage/images/profile4.jpg'),
      posts: 56,
      followers: 6542,
      following: 43,
      follow: false,
    },
    {
      name: 'The_Tom',
      accountName: 'Tom',
      profileImage: require('./../assets/storage/images/profile5.jpg'),
      posts: 24,
      followers: 1253,
      following: 64,
      follow: false,
    },
    {
      name: 'live_long',
      accountName: 'Live Long',
      profileImage: require('./../assets/storage/images/profile2.jpg'),
      posts: 21,
      followers: 7886,
      following: 32,
      follow: false,
    },
    {
      name: 'the_real_hero',
      accountName: 'Ram Charan',
      profileImage: require('./../assets/storage/images/post1.jpg'),
      posts: 123,
      followers: 64253,
      following: 32,
      follow: false,
    },
    {
      name: 'the_jerry',
      accountName: 'The Jerry',
      profileImage: require('./../assets/storage/images/post2.jpg'),
      posts: 56,
      followers: 6542,
      following: 43,
      follow: false,
    },
    {
      name: 'angry_bird',
      accountName: 'Angry Bird',
      profileImage: require('./../assets/storage/images/post3.jpg'),
      posts: 452,
      followers: '564k',
      following: 31,
      follow: false,
    },
    {
      name: 'mr_bean',
      accountName: 'Mr Bean',
      profileImage: require('./../assets/storage/images/post4.jpg'),
      posts: 543,
      followers: '435k',
      following: 22,
      follow: false,
    },
    {
      name: 'the_Jd',
      accountName: 'Mr JD',
      profileImage: require('./../assets/storage/images/post5.jpg'),
      posts: 234,
      followers: '763k',
      following: 332,
      follow: false,
    },
    {
      name: '_don_',
      accountName: 'Don',
      profileImage: require('./../assets/storage/images/post6.jpg'),
      posts: 111,
      followers: 11223,
      following: 1,
      follow: false,
    },
    {
      name: 'black_white',
      accountName: 'blackWhite',
      profileImage: require('./../assets/storage/images/post7.jpg'),
      posts: 121,
      followers: 43213,
      following: 21,
      follow: false,
    },
    {
      name: 'iron_man',
      accountName: 'Iron Man',
      profileImage: require('./../assets/storage/images/post8.jpg'),
      posts: 432,
      followers: '987k',
      following: 24,
      follow: false,
    },
    {
      name: 'funny_videos',
      accountName: 'Funny Video Official',
      profileImage: require('./../assets/storage/images/post9.jpg'),
      posts: '1.2k',
      followers: '1.2M',
      following: 12,
      follow: false,
    },
    {
      name: 'mr_jhon',
      accountName: 'Mr Jhony',
      profileImage: require('./../assets/storage/images/post10.jpg'),
      posts: 533,
      followers: 64322,
      following: 123,
      follow: false,
    },
  ];





export { Slides, todayPosts, profiles, font, users, clubs, announcements, post, userData, vvids, FriendsProfileData }