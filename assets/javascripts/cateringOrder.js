let email = {
    "franchiseInq" : {
      "-LHjAr6D0CRyEi8u18Hm" : {
        "email" : "fran@fran.com",
        "message" : "Inquiry about franchise.",
        "name" : "franName",
        "tel" : "2814547511"
      }
    },
    "orders" : {
      "-LHjAhjjHA3c3PQbYFVu" : {
        "email" : "test@catering.com",
        "guests" : "50",
        "loc" : "Houston",
        "message" : "Please call me for my event.",
        "name" : "Test Catering Name",
        "tel" : "2814547511",
        "time" : "2018-08-01T14:00"
      },
      "-LI209DXVMJ-rkJAgNda" : {
        "email" : "iramkazimi@gmail.com",
        "guests" : "400",
        "loc" : "Catering",
        "message" : "Tabaruk for majlis.",
        "name" : "Iram Kazimi",
        "tel" : "8324667359",
        "time" : "2018-07-28T19:00:36"
      },
      "-LI20C25nuzbM_I4Vu1f" : {
        "email" : "iramkazimi@gmail.com",
        "guests" : "400",
        "loc" : "Catering",
        "message" : "Tabaruk for majlis.",
        "name" : "Iram Kazimi",
        "tel" : "8324667359",
        "time" : "2018-07-28T19:00:36"
      },
      "-LI20UhVANqvyYKRkKKS" : {
        "email" : "iramkazimi@yahoo.com",
        "guests" : "400",
        "loc" : "Masjid delievery",
        "message" : "Tabaruk for majlis",
        "name" : "Iram Kazimi",
        "tel" : "8324667359",
        "time" : "2018-07-28T19:00:36"
      },
      "-LI20Wl6ClFVtq2azrET" : {
        "email" : "iramkazimi@yahoo.com",
        "guests" : "400",
        "loc" : "Masjid delievery",
        "message" : "Tabaruk for majlis",
        "name" : "Iram Kazimi",
        "tel" : "8324667359",
        "time" : "2018-07-28T17:00:36"
      }
    },
    "users" : {
      "-LHjAV5Ew11d5gnHY6ny" : {
        "emailAdd" : "onaseer07@gmail.com"
      }
    }
  };
  let obj = JSON.parse(email);
console.log(obj[0]);