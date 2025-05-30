

let CarouselData = [];

let FightWithAIData = [
  {
    title: "Shrimp Jesus ",
    description: "Surreal images like this have gone viral, fooling many people into believing they were real.",
    stats: {
      likes: "53K",
      views: "2.9M"
    },
    sources: [
      "https://www.forbes.com/sites/danidiplacido/2024/04/28/facebooks-surreal-shrimp-jesus-trend-explained/",
      "https://www.linkedin.com/pulse/shrimp-jesus-ai-tsunami-navigating-sea-digital-sanzana-ph-d--4ubyc/",
      "https://manofmany.com/tech/shrimp-jesus-explained",
      "https://www.youtube.com/watch?v=nFsZ-mOw4Sc",
      "https://x.com/TheHornetsFury/status/1767792068947329106?lang=en"
    ],
    images: {
         small: "images/fightingwithAI/Shrimp-Jesus.jpg",
        medium: "images/Thumbnails/Shrimp-Jesus.jpg"
    }
  },
  {
    title: "Baby Skydiving ",
    description: "A digital creator introduced his series of images featuring babies skydiving on Facebook. ",
    stats: {
      likes: "21K",
      shares: "91K"
    },
    sources: [
      "https://www.boredpanda.com/ai-generated-images-of-babies-skydiving-timothy-j-nemeth/"
    ],
    images: {
         small: "images/fightingwithAI/baby.jpg",
        medium: "images/Thumbnails/baby.jpg"
    }
  },
  {
    title: "David Attenborough Fighting Polar Bear",
    description: "This AI generated image was created by MidJourney proving how crazy AI images are getting ",
    stats: {
      likes: "16K",
      shares: 791
    },
    sources: [
      "https://cheezburger.com/19000069/_",
      "https://www.reddit.com/r/weirddalle/comments/zlptxd/david_attenborough_wrestling_a_polar_bear/",
      "https://x.com/weirddalle/status/1603338506939645957"
    ],
    images: {
        small: "images/fightingwithAI/david.jpg",
        medium: "images/Thumbnails/david.jpg"
    }
  },
  {
    title: "'The Electrician'",
    description: "This AI generated image was submitted by photographer Boris Eldagsen for a major photography competition and won the top prize.",
    stats: {
        publications: "Winner of Sony World Photography Award in 2023"
    },
    sources: [
      "https://www.scientificamerican.com/article/how-my-ai-image-won-a-major-photography-competition/"
    ],
    images: {
       small: "images/fightingwithAI/sony.webp",
        medium: "images/Thumbnails/sony.jpg"
    }
  },
  {
    title: "Grannies skateboarding",
    description: "Mumbai-based artist Ashish Jose has employed AI to generate hyper-realistic images of elderly women skating on the street. ",
    stats: {
      likes: "3.6M"
    },
    sources: [
      "https://www.ndtv.com/offbeat/ai-generated-pics-show-elderly-women-skating-on-streets-internet-stunned-3962123",
      "https://www.instagram.com/p/CrGRxuAMo7R/?utm_source=ig_embed&img_index=1"
    ],
    images: {
  small: "images/fightingwithAI/oldwomen.jpg",
        medium: "images/Thumbnails/oldwomen.jpg"
    }
  },
  {
    title: "Queen Elizabeth Dancing",
    description: "Part of a viral series of images rendered by AI. This one depicts the late Queen Elizabeth II breaking it down on the dance floor.",
    stats: {
      publications: "Featured in New York Post article"
    },
    sources: [
      "https://nypost.com/2023/05/17/want-to-see-queen-elizabeth-get-low-on-the-dance-floor-thank-ai-for-that/"
    ],
    images: {
       small: "images/fightingwithAI/Elizabeth.jpg",
        medium: "images/Thumbnails/Elizabeth.jpg"
    }
  } ,

  {
    title: "Man with giant strawberry",
    description: "Part of a trend of making images featuring huge fruits and vegetables. People even travelled to try and see these fruits.",
    stats: {
      likes: "587K",
      shares: "108K"
    },
    sources: [
      "https://au.news.yahoo.com/amen-facebook-boomers-praising-jesus-143102189.html",
      "https://www.facebook.com/photo.php?fbid=647860824022116&id=100063946122079&set=a.480235930784607"
    ],
    images: {
      small: "images/fightingwithAI/Giant.jpg",
        medium: "images/Thumbnails/Giant.jpg"
    }
  },
  {
    title: "Man Eating Pizza",
    description: "Example of realistic photo that stands out as fake because of distorted fingers and missing watch features.",
    stats: {
      publications: "Kellogg Insight"
    },
    sources: [
      "https://insight.kellogg.northwestern.edu/article/ai-photos-identification"
    ],
    images: {
       small: "images/fightingwithAI/Pizza.jpg",
        medium: "images/Thumbnails/Pizza.jpg"
    }
  },
  {
    title: "Pope in Designer Coat",
    description: "This image of the Pope in a designer jacket was first published on Reddit and went viral because of how real it looks.",
    stats: {
      views: "28M",
      shares: "28K",
      likes: "184K"
    },
    sources: [
      "https://www.cbsnews.com/news/pope-francis-puffer-jacket-fake-photos-deepfake-power-peril-of-ai/"
    ],
    images: {
      small: "images/fightingwithAI/Pope.jpg",
        medium: "images/Thumbnails/Pope.jpg"
    }
  },
  {
    title: "Will Smith eating Spaghetti",
    description: "Part of a series of AI content showing Will Smith eating spaghetti over a number of years. The images got more and more realistic as the AI software improved. Will Smith himself even parodied the videos.",
    stats: {
      views: "700K"
    },
    sources: ["https://x.com/unclescrooch/status/1833230482341027880"],
    images: {
   small: "images/fightingwithAI/WillSmith.jpg",
        medium: "images/Thumbnails/WillSmith.jpg"
    }
  },
  {
    title: "Mark Zuckerberg peeping",
    description: "This meme was popularized in July 2023 after the launch of Meta's new text-based app Threads.",
    stats: {
      views: "144K"
    },
    sources: ["https://x.com/DeFiDobby/status/1677016136259362824"],
    images: {
   small: "images/fightingwithAI/Zuckerberg.jpg",
        medium: "images/Thumbnails/Zuckerberg.jpg"
    }
  },
    {
    title: "Harry Potter Partying",
    description: "This was part of a series of images, showing different Harry Potter characters partying.",
    stats: {
      likes: "18.8K",
      shares: "3.8K"
    },
    sources: [
      "https://www.threads.com/@90skidthrowbacks/post/DIPuEEnyr1T/when-you-ask-ai-to-create-the-cast-of-harry-potter-partying-and-this-was-the-res"
    ],
    images: {
       small: "images/fightingwithAI/Harry_Potter.jpg",
        medium: "images/Thumbnails/Harry_Potter.jpg"
    }
  },
  {
    title: "90s Mike Tyson playing video game",
    description: "Part of a series of AI images depicting celebrities playing their own video games.",
    stats: {
      views: "3K",
      likes: "1.7K"
    },
    sources: [
      "https://www.threads.net/@theaipage/post/DIQPdVTyQlP/this-new-ai-image-trend-reimagines-iconic-game-characters-as-if-they-were-real-p"
    ],
    images: {
     small: "images/fightingwithAI/Tyson.jpg",
        medium: "images/Thumbnails/Tyson.jpg"
    }
  },
    {
    title: "Jair Bolsonaro Drinking",
    description: "Images like these of the former Brazilian president were spread to attack him by his political opponents.",
    stats: {
      views: "1M"
    },
    sources: [
      "https://oglobo.globo.com/english/noticia/2024/12/26/ai-generated-images-surge-on-x-amplifying-concerns-about-misinformation-risks.ghtml"
    ],
    images: {
       small: "images/fightingwithAI/Bolsonaro.jpg",
        medium: "images/Thumbnails/Bolsonaro.jpg"
    }
  },
  {
    title: "Polaroids of Friends at Party 1",
    description: "A developer on X went viral after sharing what appeared to be vintage-style snaps at a house party.",
    stats: {
      views: "32.2M",
      shares: "12K",
      likes: "18K"
    },
    sources: [
      "https://nypost.com/2023/01/16/ai-generated-party-pics-look-eerily-real-unless-you-can-spot-these-tells/",
      "https://x.com/mileszim/status/1613965684937224192"
    ],
    images: {
  small: "images/fightingwithAI/Party.jpg",
        medium: "images/Thumbnails/Party.jpg"
    }
    },
    {
        title: "Polaroids of Friends at Party 2",
        description: "A developer on X went viral after sharing what appeared to be vintage-style snaps at a house party.",
        stats: {
            views: "32.2M",
            shares: "12K",
            likes: "18K"
        },
        sources: [
            "https://nypost.com/2023/01/16/ai-generated-party-pics-look-eerily-real-unless-you-can-spot-these-tells/",
            "https://x.com/mileszim/status/1613965684937224192"
        ],
        images: {
            small: "images/fightingwithAI/Party1.jpg",
            medium: "images/Thumbnails/Party1.jpg"
        }
    },
  {
    title: "Katy Perry at the Met Gala",
    description: "This image of Katy Perry at the Met Gala went viral. Even Katy Perry’s mother thought it was real. But she wasn’t even at the event.",
    stats: {
      views: "17.9M",
      likes: "2.7M",
      comments: "18K"
    },
    sources: [
      "https://www.nbcnews.com/tech/tech-news/katy-perrys-rihanna-met-gala-fake-ai-images-spread-rcna151163",
      "https://www.nytimes.com/2024/05/07/style/katy-perry-met-gala-ai.html",
      "https://x.com/jxries/status/1787603212075233371"
    ],
    images: {
      small: "images/fightingwithAI/Katy.jpg",
        medium: "images/Thumbnails/Katy.jpg"
    }
  },
  {
    title: "Bud Light commercial",
    description: "This image was from the first viral AI commercial. A great example of how far AI has evolved since its early days.",
    stats: {
      views: "78K"
    },
    sources: [
      "https://www.dailymail.co.uk/sciencetech/article-12038987/Still-better-Bud-Lights-campaign-Realistic-AI-generated-advert-fictional-beer-goes-viral.html",
      "https://x.com/businessblurbb/status/1653163752282521600",
      "https://www.facebook.com/DailyMail/videos/ultra-realistic-ai-generated-advert-for-fictional-beer-goes-viral/695773945635673/"
    ],
    images: {
        small: "images/fightingwithAI/Bud.jpg",
        medium: "images/Thumbnails/Bud.jpg"
    }
  },
  {
    title: "Little girl with dog during Hurricane Helene",
    description: "This image went viral during Hurricane Helene. It was used by right wing MAGA supporters to criticize president Biden's disaster response.",
    stats: {
      views: "420K",
      likes: "21K",
      shares: "7.1K"
    },
    sources: [
      "https://www.rollingstone.com/culture/culture-news/ai-girl-maga-hurricane-helene-1235125285/",
      "https://x.com/GuntherEagleman/status/1841814492499374251?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1841830168794411268%7Ctwgr%5E997622021576733fe80a6893a1daa9e1d97f75cc%7Ctwcon%5Es2_&ref_url=https%3A%2F%2Fwww.rollingstone.com%2Fculture%2Fculture-news%2Fai-girl-maga-hurricane-helene-1235125285%2F"
    ],
    images: {
      small: "images/fightingwithAI/girl_cry.jpg",
        medium: "images/Thumbnails/girl_cry.jpg"
    }
  },
    {
    title: "Earthquake that happened in 2001",
    description: "Images like this, depicting a 2001 earthquake that never actually occurred, went viral in 2023.",
    stats: {
      views: "4M",
      likes: "9.8K",
      shares: "2.7K"
    },
    sources: [
      "https://www.rollingstone.com/culture/culture-news/ai-girl-maga-hurricane-helene-1235125285/",
      "https://x.com/GuntherEagleman/status/1841814492499374251?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1841830168794411268%7Ctwgr%5E997622021576733fe80a6893a1daa9e1d97f75cc%7Ctwcon%5Es2_&ref_url=https%3A%2F%2Fwww.rollingstone.com%2Fculture%2Fculture-news%2Fai-girl-maga-hurricane-helene-1235125285%2F"
    ],
    images: {
      small: "images/fightingwithAI/earthquake.jpg",
        medium: "images/Thumbnails/earthquake.jpg"
    }
  },
    {
    title: "Man smoking at McDonald's",
    description: "The curious image, which has the overall tone and feel of a film photo taken in the late 1980s, was shared on X, where it racked up over 22 million views in just two days.",
    stats: {
      views: "22M"
    },
    sources: ["https://petapixel.com/2024/02/29/this-viral-photo-taken-in-1989-of-a-man-smoking-in-mcdonalds-is-not-all-it-seems/"],
    images: {
      small: "images/fightingwithAI/McDonalds.jpg",
        medium: "images/Thumbnails/McDonalds.jpg"
    }
  },
    {
    title: "Mr. Bean in the woods",
    description: "This featured as part of a viral series of pop culture characters in strange situations.",
    stats: {
      shares: "6.9K",
      likes: "4.6K"
    },
    sources: ["https://www.boredpanda.com/funny-weird-ai-images/"],
    images: {
       small: "images/fightingwithAI/mrBean.jpg",
        medium: "images/Thumbnails/mrBean.jpg"
    }
  },
    {
    title: "Warren Buffett in poverty",
    description: "This image was part of a trend that showed the world’s richest people as if they were living in developing countries ",
    stats: {
      views: "4K"
    },
    sources: ["https://x.com/CommerceGuruu/status/1645334004177190912"],
    images: {
     small: "images/fightingwithAI/Warren.jpg",
        medium: "images/Thumbnails/Warren.jpg"
    }
  },
  {
    title: "Turkish Ministers in Syria",
    description: "The spread of misinformation about the Middle East conflict on social media makes it even harder for people to stay accurately informed — and AI-generated images like this only add to the confusion.",
    stats: {
      views: "19.5K"
    },
    sources: [
      "https://x.com/aryjeay/status/1868034685542289471?s=46&t=TdE3zE227tnZVuZ31bFzOg"
    ],
    images: {
        small: "images/fightingwithAI/Turkish.jpg",
        medium: "images/Thumbnails/Turkish.jpg"
    }
  },
    {
    title: "Woman being dragged away at a Colombian Protest",
    description: "When Amnesty International shared AI-generated images of protests in Colombia there was outcry, as these images weren't real depictions of the events.",
    stats: {
      publications: "Featured on The Guardian"
    },
    sources: ["https://www.theguardian.com/world/2023/may/02/amnesty-international-ai-generated-images-criticism"],
    images: {
     small: "images/fightingwithAI/amnesty.jpg",
        medium: "images/Thumbnails/amnesty.jpg"
    }
  },
    {
    title: "Julian Assange in Prison Hospital",
    description: "An image of Julian Assange looking sick in Belmarsh prison went viral at the end of 2023.",
    stats: {
      views: "500K",
      shares: "4.5K"
    },
    sources: ["https://news.sky.com/story/fake-ai-images-keep-going-viral-here-are-eight-that-have-caught-people-out-13028547"],
    images: {
small: "images/fightingwithAI/Julian.jpg",
        medium: "images/Thumbnails/Julian.jpg"
    }
  },
    {
    title: "Israeli March",
    description: "This was part of a series of images showing massive crowds supporting Israel in 2023. People quickly started calling it out that they were AI-generated.",
    stats: {
      views: "217K",
      shares: "1.2K",
      likes: "11K"
    },
    sources: ["https://www.snopes.com/fact-check/fake-photo-israel-crowds/"],
    images: {
   small: "images/fightingwithAI/Israeli.jpg",
        medium: "images/Thumbnails/Israeli.jpg"
    }
  },
    {
    title: "Luxor Temple",
    description: "This image was part of a growing trend of fabricated images and videos of historical events — blurring the line between fact and fiction.",
    stats: {
      views: "33.1M",
      shares: "101K",
      likes: "1.2M"
    },
    sources: ["https://www.tiktok.com/@weltmysterien/video/7484792399395360022?_r=1&_t=ZT-8vERrsDWL0A"],
    images: {
   small: "images/fightingwithAI/Luxor.jpg",
        medium: "images/Thumbnails/Luxor.jpg"
    }
  },
    {
    title: "Swifties at a Trump rally",
    description: "Trump posted these images on his Truth account as part of his campaign, not realizing the creator of these AI-generated images were created for satire.",
    stats: {
      views: "3.2M",
      shares: "16K",
      likes: "91K"
    },
    sources: ["https://petapixel.com/2024/12/30/donald-trump-ai-generated-images-and-deepfakes-had-little-effect-on-2024-elections/"],
    images: {
   small: "images/fightingwithAI/Swifties.jpg",
        medium: "images/Thumbnails/Swifties.jpg"
    }
  },
  
   {
    title: "Flood in Bangladesh",
    description: "A set of images went viral, claiming to be from the recent floods reportedly caused by relentless monsoon rains and overflowing rivers in Bangladesh.",
    stats: {
      shares: "2.4K"
    },
    sources: ["https://newschecker.in/fact-check/ai-generated-images-falsely-shared-as-bangladesh-floods/"],
    images: {
       small: "images/fightingwithAI/Flood.jpg",
        medium: "images/Thumbnails/Flood.jpg"
    }
  },
    {
    title: "Ukranian girl in warzone",
    description: "This image and others like it were widely shared in response to attacks on Ukraine by Russia.",
    stats: {
      publications: "Medium, Washington Post"
    },
    sources: ["https://readwrite.com/deepfake-ai-generated-images-that-went-viral-in-2023/"],
    images: {
     small: "images/fightingwithAI/Ukraine.jpg",
        medium: "images/Thumbnails/Ukraine.jpg"
    }
  },
    {
    title: "Man rescuing a polar bear",
    description: "Late last year this video went viral. It showed people rescuing a young polar bear that was stranded on a melting iceberg.",
    stats: {
      views: "133.6M",
      shares: "1.1M",
      likes: "9.5M"
    },
    sources: ["https://gulfnews.com/world/offbeat/fact-check-viral-video-of-polar-bear-cub-stranded-on-melting-iceberg-is-ai-1.1732199790309"],
    images: {
   small: "images/fightingwithAI/Rescuing.jpg",
        medium: "images/Thumbnails/Rescuing.jpg"
    }
  },

  {
    title: "Jesus built with Coca-Cola bottles",
    description: "In early 2024, a wave of images hit social media inexplicably centered on themes involving Jesus.  Intricate artistic renditions of Jesus, whether built with plastic bottles or carved out of sand, are among the most common images.",
    stats: {
      likes: "34K",
      shares: "10K"
    },
      sources: ["https://www.nbcnews.com/tech/tech-news/facebook-users-say-amen-bizarre-ai-generated-images-jesus-rcna143965"],
    images: {
small: "images/fightingwithAI/Kid.jpg",
        medium: "images/Thumbnails/Kid.jpg"
    }
  },
  {
    title: "Gaza woman hugging skeletal remains of son",
    description: "A woman in Gaza hugging the remains of her son found amidst the rubble of her home devastated by an Israeli attack, after a year-long search. Images like this have been shared widely on social media, adding to the ongoing debate about the war in Gaza.",
    stats: {
      views: "681K",
      shares: "8.5K",
      likes: "17K",
      comments: "1.2K"
    },
    sources: ["https://x.com/vikingwarior20/status/1903622730664251590?s=46&t=TdE3zE227tnZVuZ31bFzOg"],
    images: {
     small: "images/fightingwithAI/Cryingwoman.jpg",
        medium: "images/Thumbnails/Cryingwoman.jpg"
    }
  },

  {
    title: "Heavily armed men at fast food restaurant",
    description: "This image went viral because of how realistic it looked, sparking online debate about guns in public spaces.",
    stats: {
      views: "1.9M",
      shares: "5.6K",
      likes: "37K"
    },
    sources: ["https://leadstories.com/hoax-alert/2024/09/fact-check-fake-photo-shows-two-heavily-armed-men-in-line-at-fast-food-restaurant.html#google_vignette"],
    images: {
   small: "images/fightingwithAI/Armed.jpg",
        medium: "images/Thumbnails/Armed.jpg"
    }
  },

    {
    title: "Macron at a riot in France",
    description: "When riots were happening in France, images like these depicting the French leader, went viral on social media.",
    stats: {
      views: "3.3M",
      likes: "164K",
      shares: "4.6K"
    },
    sources: ["https://x.com/nocontextfre/status/1638306997274591235"],
    images: {
  small: "images/fightingwithAI/Macron.jpg",
        medium: "images/Thumbnails/Macron.jpg"
    }
  },
  
    {
    title: "Eaton Fire in Los Angeles",
    description: "Images like this, depicting a fire that never actually occurred, recently went viral. ",
    stats: {
      views: "52.9K",
      likes: 349
    },
    sources: ["https://x.com/ai_for_success/status/1878068646125154815"],
    images: {
  small: "images/fightingwithAI/LAfire.jpg",
        medium: "images/Thumbnails/LAfire.jpg"
    }
  },
    {
    title: "Tornado over city",
    description: "This clip shows the formation of a huge tornado over the city. Upon closer inspection, there are clear inconsistencies in the video.",
    stats: {
      views: "4.2M",
      shares: "21.7K",
      likes: "336K"
    },
    sources: ["https://www.tiktok.com/@disastervibes7/video/7424867960700800299"],
    images: {
  small: "images/fightingwithAI/Hurricane.jpg",
        medium: "images/Thumbnails/Hurricane.jpg"
    }
  },
    {
    title: "Hurricane Idalia",
    description: "These images went viral, showing houses on the shore being swamped by waves in the wake of the hurricane.",
    stats: {
      views: "4.7M",
      likes: "11K"
    },
    sources: ["https://petapixel.com/2023/09/20/tv-station-calls-out-fake-ai-images-of-hurricane-idalia/"],
    images: {
  small: "images/fightingwithAI/Wave.jpg",
        medium: "images/Thumbnails/Wave.jpg"
    }
  },
      {
    title: "Paris covered in trash",
          description: "After the Olympics these images went viral, showing the filthy streets caused by the crowds.",
    stats: {
      views: "450K"
    },
    sources: ["https://petapixel.com/2023/08/22/fake-ai-images-of-paris-covered-in-trash-go-viral/"],
    images: {
  small: "images/fightingwithAI/Trash.jpg",
        medium: "images/Thumbnails/Trash.jpg"
    }
  },
        {
    title: "Cubans crossing to Florida",
    description: "A photographer used AI to create a series of AI images that showed events in Cuba as modern day photos. This image depicts the perilous 90-mile journey from Havana to Florida that some Cubans attempt.",
    stats: {
      likes: "13.5K"
    },
    sources: ["https://petapixel.com/2023/05/15/photojournalist-controversially-turns-to-ai-to-illustrate-inaccessible-stories/"],
    images: {
  small: "images/fightingwithAI/florida.jpg",
        medium: "images/Thumbnails/florida.jpg"
    }
  },
    {
    title: "Whale Swallowing a Yacht",
    description: "A viral video claiming to show a whale swallowing a yacht went viral but it was revealed to be an AI-generated hoax.",
    stats: {
      views: "28M",
      likes: "32K",
      shares: "26.4K"
    },
    sources: ["https://x.com/RealXavier011/status/1895042084232401143"],
    images: {
  small: "images/fightingwithAI/whale.webp",
        medium: "images/Thumbnails/whale.jpg"
    }
  },
    {
    title: "Explosion at the Pentagon",
    description: "Multiple verified X accounts shared images like this showing an explosion near the Pentagon. People believed it and the stock market even dipped as a result.",
    stats: {
      views: "2M"
    },
    sources: ["https://www.cnn.com/2023/05/22/tech/twitter-fake-image-pentagon-explosion/index.html"],
    images: {
        small: "images/fightingwithAI/Pentagon.jpg",
        medium: "images/Thumbnails/Pentagon.jpg"
    }
  },
  {
    title: "Pikachu at Turkish protest",
    description: "Images like these, depicting Pikachu at a Turkish protest, recently went viral across social media.",
    stats: {
      likes: "164K"
    },
    sources: ["https://x.com/Songulmtt/status/1905229246458388510"],
    images: {
  small: "images/fightingwithAI/Pikachu.jpg",
        medium: "images/Thumbnails/Pikachu.jpg"
    }
  },
  {
    title: "Hollywood sign in flames",
    description: "During the LA fire videos like this went viral, convincing people that the fires had spread to the city.",
    stats: {
      likes: "4.3K"
    },
    sources: ["https://www.reuters.com/fact-check/ai-generated-video-purports-show-apocalyptic-scenes-los-angeles-wildfires-2025-01-16/"],
    images: {
   small: "images/fightingwithAI/hollywood.jpg",
        medium: "images/Thumbnails/hollywood.jpg"
    }
  },
  {
    title: "Mysterious UFO Crash",
    description: "This is a still from viral AI-generated video of a UFO crash site in Arizona. Many on TikTok believed it to be real.",
    stats: {
      views: "120.8M",
      shares: "588K",
      likes: "3.7M"
    },
    sources: ["https://www.tiktok.com/@sybervisions_/video/7454549599106223368"],
    images: {
    small: "images/fightingwithAI/Mysterious.jpg",
        medium: "images/Thumbnails/Mysterious.jpg"
    }
  }
];

 

  
$(document).ready(function () {
    const batchSize = 12;
    const totalBatches = Math.ceil(FightWithAIData.length / batchSize);
    let currentBatchIndex = 0;

    // Create consistent batches ONCE (no shuffle per click)
    const batches = Array.from({ length: totalBatches }, (_, i) => {
        const start = i * batchSize;
        return FightWithAIData.slice(start, start + batchSize);
    });

    // Render the current batch in the grid
    function renderBatch() {
        const batch = batches[currentBatchIndex];
        const container = $('#imageGrid');
        container.empty();

        const placedImages = [];
        const containerWidth = container.width();
        const containerHeight = container.height();

        const preparedBatch = batch.map((tip, index) => ({ ...tip, displayIndex: index }));
        const bigImages = preparedBatch.slice(0, Math.floor(preparedBatch.length * 0.3));
        const smallImages = preparedBatch.slice(Math.floor(preparedBatch.length * 0.3));

        function placeImage(tip, isBig, zIndex = 1) {
            let attempt = 0;
            let placed = false;
            let posX, posY, randomScale, randomWidthPX, randomAspectRatio, randomHeightPX;

            while (!placed && attempt < 100) {
                attempt++;

                randomWidthPX = (isBig ? 20 + Math.random() * 10 : 10 + Math.random() * 5) / 100 * containerWidth;
                randomAspectRatio = Math.random() < 0.5 ? 1 : (1.3 + Math.random() * 0.4);
                randomHeightPX = randomWidthPX / randomAspectRatio;
                randomScale = 1 + Math.random() * 0.05;

                const scaledWidth = randomWidthPX * randomScale;
                const scaledHeight = randomHeightPX * randomScale;

                posX = 20 + Math.random() * (containerWidth - scaledWidth - 40);
                posY = 20 + Math.random() * (containerHeight - scaledHeight - 40);

                let overlapFound = false;

                for (let placedImg of placedImages) {
                    const dx = placedImg.x - posX;
                    const dy = placedImg.y - posY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const minAllowedDistance = Math.max(scaledWidth, scaledHeight) * 1.2;

                    if (distance < minAllowedDistance) {
                        overlapFound = true;
                        break;
                    }

                    // ✅ NEW RULE: For small images only, ensure center is NOT fully inside any big image
                    if (!isBig && placedImg.isBig) {
                        const centerX = posX + scaledWidth / 2;
                        const centerY = posY + scaledHeight / 2;
                        const margin = 10; // optional buffer around the big image

                        if (
                            centerX > placedImg.x + margin &&
                            centerX < placedImg.x + placedImg.w - margin &&
                            centerY > placedImg.y + margin &&
                            centerY < placedImg.y + placedImg.h - margin
                        ) {
                            overlapFound = true;
                            break;
                        }
                    }
                }

                if (!overlapFound) {
                    placedImages.push({ x: posX, y: posY, w: scaledWidth, h: scaledHeight, isBig });
                    placed = true;

                    const posXPercent = (posX / containerWidth) * 100;
                    const posYPercent = (posY / containerHeight) * 100;
                    const widthPercent = (randomWidthPX / containerWidth) * 100;
                    const heightPercent = (randomHeightPX / containerHeight) * 100;

                    container.append(`
                    <a class="image-popup-vertical-fit" href="javascript:void(0)" data-index="${tip.displayIndex}"
                       style="
                       position:absolute;
                       z-index:${zIndex};
                       top:${posYPercent}% ;
                       left:${posXPercent}% ;
                       width:${widthPercent}% ;
                       height:${heightPercent}% ;
                       transform: scale(${randomScale});
                       ">
                      <img src="${tip.images.small}" class="img-fluid" style="width:100%; height:100%; object-fit: cover;">
                    </a>
                `);
                }
            }
        }

        // Place big images first (lower z-index), then small images (higher z-index)
        bigImages.forEach((tip) => placeImage(tip, true, 1));
        smallImages.forEach((tip) => placeImage(tip, false, 2));
  $('#imageGrid a').removeClass('active')
      setTimeout(() =>{
            $('#imageGrid a').addClass('active')
      },300)
       

    }






    // Open the modal on the clicked image (relative to current batch)
    function openModalSlider(initialIndex) {
        const batch = batches[currentBatchIndex];
        const $slider = $('.figtingWithAISlider');
        $slider.empty();

        batch.forEach((tip) => {
            const sourcesHtml = tip.sources.map((url, i) => `<a href="${url}" target="_blank" class="dark_cta">SOURCE LINK</a>`).join('');

            let statsHtml = '';
            if (tip.stats?.views) statsHtml += `<li>${tip.stats.views} <span class="text-dark-orange">views</span></li>`;
            if (tip.stats?.likes) statsHtml += `<li>${tip.stats.likes} <span class="text-dark-orange">likes</span></li>`;
            if (tip.stats?.shares) statsHtml += `<li>${tip.stats.shares} <span class="text-dark-orange">shares</span></li>`;
            if (tip.stats?.publications) statsHtml += `<li> ${tip.stats.publications} </li>`;
            

            $slider.append(`
        <div class="slide-item">
          <div class="row flex-lg-row-reverse">
            <div class="col-md-12 col-lg-12 col-xl-6">
              <div class="img-container">
                <img src="${tip.images.medium}" class="img-fluid"/>
              </div>
            </div>
            <div class="col-md-12 col-lg-12 col-xl-6">
              <div class="slide-content">
                <h2 class="heading-5 text-orange text-uppercase mr-5">${tip.title}<BR>-</h2>
                <h2 class="heading-4 text-black text-uppercase mt-0">Context:</h2>
                <p class="popd">${tip.description}</p>
                <ul class="viral-stats p-0 m-0 mt-4">
                  <li class="d-flex gap-2 align-items-center">
                    <img src="images/fightingwithAI/ICON_04.svg" />
                    <span class="text-dark-orange">Virality:</span>
                  </li>
                  ${statsHtml}
                </ul><br>
                <div class="d-flex gap-2 align-items-center mt-0 btn_links-list flex-wrap">
                  ${sourcesHtml}
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
        });

        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }

        setTimeout(() => {
            $slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
                dots: false,
                speed: 1000,
                fade: true,
                initialSlide: initialIndex,
                prevArrow: $('.customPopup .slider_arrow_left'),
                nextArrow: $('.customPopup .slider_arrow_right'),
            });

            $('.customPopup').addClass('show');
            $('html, body').addClass('overflow-hidden');
        }, 0);
    }

    // --- Event bindings ---
    $(document).on('click', '.image-popup-vertical-fit', function () {
        const index = $(this).data('index');
        openModalSlider(index);
    });

    $('#refreshBtn').on('click', function () {
        currentBatchIndex = (currentBatchIndex + 1) % totalBatches;
        renderBatch();
        $('.customPopup').removeClass('show');
    });

    $('.btn-close').on('click', function () {
        $('.customPopup').removeClass('show');
        $('html, body').removeClass('overflow-hidden');
    });

    // Initial render
    renderBatch();
   
   
   async function loadSpotAICards() {
    try {
        const response = await fetch('./data/carouselData.json');
        const carouselData = await response.json();

        const cardsContainer = $('#cardsContainer');
        cardsContainer.empty();

        carouselData.forEach((item, index) => {
            const card = `
                <div class="card" data-index="${index}" data-bs-toggle="modal" data-bs-target="#carouselModal">
                    <img src="${item.images.small}" alt="Card ${index + 1}" class="img-fluid" />
                    <div class="card-body">
                        <h3 class="card-title mt-3">${item.title || ''}</h3>
                        <h3 class="heading-3">${item.subtitle}</h3>
                    </div>
                </div>
            `;
            cardsContainer.append(card);
        });

        cardsContainer.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            draggable: false,
            infinite: false,
            prevArrow: $('.how-tospot-ai-sec .slider_arrow_left'),
            nextArrow: $('.how-tospot-ai-sec .slider_arrow_right'),
            responsive: [
                { breakpoint: 1600, settings: { slidesToShow: 5 } },
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ]
        });

        function openModal(slickIndex) {
            const item = carouselData[slickIndex];
            const slide = `
                <div class="slick-slide1">
                    <div class="ti_img-thumbnail">
                        <img src="${item.images.medium}" class="img-fluid" alt="Image" />
                        <div class="tip_content para-box-wrapper">
                            <h3>${item.title}</h3>
                            <h4 class="heading-2">${item.subtitle || ''}</h4>
                            <hr class="opacity-1" />
                            <p class="popd mb-5">${item.description}</p>
                            <div class="corner-square orange tl"></div>
                            <div class="corner-square orange tr"></div>
                            <div class="corner-square orange bl"></div>
                            <div class="corner-square orange br"></div>
                        </div>
                    </div>
                </div>
            `;
            $('.modalSlider').empty().append(slide);
        }

        $(document).on('click', '#cardsContainer .card', function () {
            const slickIndex = $(this).closest('.slick-slide').data('slick-index');
            openModal(slickIndex);
        });

        $('#carouselModal').on('shown.bs.modal', function () {
            setTimeout(() => {
                // $('.modalSlider').slick('setPosition');
            }, 300);
        });

        $('#carouselModal').on('hidden.bs.modal', function () {
            $('.modalSlider').empty();
        });

        // Optional: Truncate text on smaller screens
        function textTrim() {
            $('#cardsContainer .card .card-body p').each(function () {
                const text = $(this).text();
                if (text.length > 50) {
                    $(this).text(text.substring(0, 50) + '...');
                }
            });
        }

        if (window.innerWidth < 1600) textTrim();
        $(window).on('resize', textTrim);

    } catch (error) {
        console.error('Failed to load Spot AI data:', error);
    }
}

// Inside your existing $(document).ready(function() { ... })
loadSpotAICards();

       var lastScrollTop = 0;
  $(window).on("scroll", function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > lastScrollTop) {
      // Scrolling down - hide header
      $("header").addClass("hide-header");
      $("header").removeClass("stretched-header");

    } else {
      // Scrolling up - show header
      $("header").removeClass("hide-header");
      $("header").addClass("stretched-header");


    }
    lastScrollTop = currentScroll;

    if(currentScroll < 100) {
      $("header").removeClass("stretched-header");
    }
  });
    
});

$('#imageGrid').on('mousemove', function (e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    $('#imageGrid a').each(function () {
   
        const img = $(this);
 
        const offset = img.offset();
        const imgX = offset.left + img.width() / 2;
        const imgY = offset.top + img.height() / 2;

        const dx = mouseX - imgX;
        const dy = mouseY - imgY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) { // only if mouse is within 200px radius
            const repelX = -dx / distance * (200 - distance) * 0.1;
            const repelY = -dy / distance * (200 - distance) * 0.1;

            img.css('transform', `translate(${repelX}px, ${repelY}px) scale(1.05)`);
        } else {
            img.css('transform', `translate(0,0) scale(1)`);
        }
    });
});


window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.whyThis-matter-sec').forEach(section => {
        section.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    });
});


// Trigger everything when withAI enters viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            triggerGSAPGlitch(entry.target);
            triggerFallbackGlitch(entry.target);
            animateFightingAICards(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the section
document.querySelectorAll('.withAI').forEach(section => {
    observer.observe(section);
});

// GSAP glitch burst with chaos
function triggerGSAPGlitch(target) {
    gsap.fromTo(target, 
        { filter: 'none', clipPath: 'inset(0% 0% 0% 0%)' }, 
        { 
            filter: 'contrast(250%) brightness(180%) hue-rotate(20deg)',
            clipPath: 'inset(20% 0% 20% 0%)',
            duration: 0.05,
            repeat: 5,
            yoyo: true,
            ease: 'steps(1)',
            onComplete: () => {
                target.style.filter = 'none';
                target.style.clipPath = 'none';
            }
        }
    );

    gsap.fromTo(target, { x: -5 }, { x: 5, duration: 0.05, repeat: 10, yoyo: true, ease: 'power1.inOut' });
}

// CSS fallback glitch (adds and removes the class)
function triggerFallbackGlitch(target) {
    target.classList.add('withAI-glitch');
    setTimeout(() => {
        target.classList.remove('withAI-glitch');
    }, 1200);
}

// Animate the AI fighting cards with chaotic stagger + floating
function animateFightingAICards(section) {
    const cards = section.querySelectorAll('#imageGrid .image-popup-vertical-fit');
    if (!cards.length) return; // no cards yet (important safeguard for your dynamic rendering)

    gsap.from(cards, {
        opacity: 0,
        y: () => Math.random() * 200 - 100,
        x: () => Math.random() * 200 - 100,
        rotation: () => Math.random() * 30 - 15,
        stagger: 0.1,
        duration: 1.5,
        ease: "power3.out"
    });

    cards.forEach(card => {
        gsap.to(card, {
            x: '+=10',
            y: '+=5',
            rotation: '+=2',
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    });
}
