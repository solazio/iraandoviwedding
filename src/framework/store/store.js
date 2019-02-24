import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    drawerItems: [
      { title: "HOME", icon: "home", path: "/" },
      { title: "INFO", icon: "info", path: "/info" },
      { title: "REGISTER", icon: "thumb_up", path: "/register" },
      { title: "FAQ", icon: "question_answer", path: "/FAQ" }
    ],

    userDetails: {
      firstName: "",
      lastName: "",
      email: "",
      selectWine: null,
      selectLiquor: null,
      selectDiet: null,
      selectAllergy: null,
      selectKievTour: null,
      selectCernobylTour: null,
      date: null,
      accessKey: ""
    },

    wineSelect: ["None", "White wine", "Red wine"],
    hardLiquorSelect: ["None", "Rum", "Wiskey", "Gin"],
    dietaryRequirements: ["Omnivore", "Vegetarian", "Vegan"],
    allergySelect: ["None", "Soya", "Nuts", "Dairy", "Gluten", "Eggs"],
    tourKievSelect: ["Yes", "No"],
    tourCernobylSelect: ["Yes", "No"],
    qas: [
      {
        id: 1,
        question: "When should we arrive to Kiev? ",
        answer:
          "Our recommendation is to arrive to Kiev on Wednesday evening, if you want to attend our oraganised tour on Thursday morning. On Friday, July 12th we will have a church wedding ceremony and if you wish to witness it, would be good to arrive on Thursday evening. In case you're not interested in the events mentioned earlier, it is best to arrive on Friday evening."
      },
      {
        id: 2,
        question: "How to get to the city center from airport?",
        answer:
          "Please keep in mind there are two airports in Kiev. KBP - is the main one where BA, Ukrainian International, and Ryanair fly to. And IEV - which is inside the city where Wizzair fly to. There are official taxis which you can book on arrival as soon as you pick up your luggage and get to meet and greet point. Outside of the airport you will see lined up taxis. For the most part they take cards but drivers might prefer cash. The other option is to use Uber in case you have internet connection on your phone."
      },
      {
        id: 3,
        question: "Where to exchange money?",
        answer:
          "Local currency is UAH , Ukrainian Hryvna. There is a possibility to exchange money at the airport at a decent rate. Once you pick up your luggage and get out to the greet and meet point please turn left. Right away on the left you will see 3 money exchanging booths. Please DON'T change money there and walk another 50 meters and you will see a bank branch: ПУМБ. Feel free to exchange money there."
      },
      {
        id: 4,
        question: "Where should we stay?",
        answer:
          "We recommend staying in the city center around Golden Gate Monument or Khreshatyk street (metro stations: Khreshatyk, Zolotye Vorota, Maidan Nezalezhnosti). Booking.com and Airbnb have many good options and we will be happy to help with language if needed."
      },
      {
        id: 5,
        question: "What’s a tradition when it comes to wedding gifts?",
        answer:
          "We made a commitment, some time ago, together through life, we were destined to go. To save you looking, shopping and buying, here is an idea, we hope you’ll like trying! Come to our wedding, to wish us both well, and please make a donation to our wishing well, now that we have saved you all the fuss. We can’t wait for you to celebrate with us."
      },
      {
        id: 6,
        question: "How to get to the venue?",
        answer:
          "Uber is very easy, common, and affordable. Local taxi is not recommended!"
      },
      {
        id: 7,
        question: "What is the dress code?",
        answer:
          "There is no strict dress code as long as it’s not jeans and running shoes. We want everybody to feel comfortable."
      },
      {
        id: 8,
        question: "Where to do hair and make up?",
        answer:
          "For the ladies we recommend <a href='https://gbar.com.ua'>G-Bar</a> or <a href='http://dreambar.com.ua/'>Dream Bar</a>. It offers hair and make up all in one. For the guys use <a href='https://m15.ua/'>M15</a> and you won't be dissapointed. Please let us know if you need help making a booking."
      },
      {
        id: 9,
        question: "Where to eat Ukranian food?",
        answer:
          "<a href='http://pervak.kiev.ua/en/'>Pervak</a>, <a href='http://borisov.com.ua/en/kanapa'>Kanapa</a>, <a href='http://borisov.com.ua/en/ostannya-barykada'>Ostannya Barykada/Last Barricade</a> are amoung our favorites. If you access their websites' you can find the location in their contact section."
      },
      {
        id: 10,
        question: "What to visit in Kiev?",
        answer:
          "Kiev Pechersk Lavra Monastery - there are underground caves you can walk through, Saint Sophia Cathedral. Saint Michael’s Golden Domed Monastery, Andriyvsky Uzviz & Andriyvska Church - pedestrian street with many locals selling hand made souvenirs, Maidan Nezalezhnosti - Independence Square, Khreshatyk - main boulevard, Goden Gate Monument, also you shoul take a ride on the funicular - cable car."
      },
      {
        id: 11,
        question: "Can you recommend some bars?",
        answer:
          "<a href='https://m.facebook.com/barmandictat'>Barmen Dictat</a> is located <a href='https://www.google.co.uk/maps/place/Barman+Dictat/@50.4438394,30.5174143,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce560ed8127f:0x589eb630013eb6b3!8m2!3d50.443836!4d30.519603'>here</a> and is our favorite - try tickle balls cocktail. <a href='https://m.facebook.com/AlchemistBarKiev/'>Alchemist Bar</a> is located <a href='https://www.google.co.uk/maps/place/Alchemist+Bar/@50.4395854,30.5186938,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cefe55d68037:0x8ce3bd1856510bfd!8m2!3d50.439582!4d30.5208825'>here</a> and you can find <a href='https://m.facebook.com/dogsandtailskiev/'>Dogs & Tails</a> right <a href='https://www.google.co.uk/maps/place/Dogs+%26+Tails/@50.4382291,30.5176651,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cefe6309d867:0x8de1948ab192de40!8m2!3d50.4382257!4d30.5198539'>here</a>."
      }
    ]
  }
});
