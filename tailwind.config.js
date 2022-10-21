module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        headerBg: "rgba(32, 39, 48, 0.7);",

        aboutMeBg: "#202730",

        screenBorderBottom: "rgba(32, 39, 48, 0.7);",

        contactsCoating: "rgba(32, 39, 48, 0.91)",

        imgZelimBorderBottom: "rgba(14, 14, 14, 0.9);",

        productBg: "rgba(180, 179, 179, 0.15);",

        flatsAddressBg: "rgba(0, 0, 0, 0.5);",

        QuotesBg: "#202730",

        bullets: "#284264",

        formCoating: "rgba(248, 245, 245, 0.88);",

        inputFormBorderColor: "#797878",

        formTextColor: "#474747",

        formBtnColor: "#1B1A1A",

        screenBtnBg: "#384A63",

        seeMoreBg: "rgba(255, 255, 255, 0.67);",

        footerCoating: "rgba(255, 255, 255, 0.95)",

        contactsColor: "#ECE7E4",
      },
      screens: {
        mb: "0",
        tl: "768px",
        dt: "1200px",
      },
      maxWidth: {
        480: "480px",
        650: "650px",
        mobileContainer: "480px",

        tabletContainer: "768px",

        desktopContainer: "1200px",
      },
      width: {
        21: "21px",

        34: "34px",

        50: "50px",

        140: "140px",

        160: "160px",

        186: "186px",

        200: "200px",

        240: "240px",

        250: "250px",

        284: "284px",

        280: "280px",

        300: "300px",

        320: "320px",

        330: "330px",

        360: "360px",

        380: "380px",

        400: "400px",

        424: "424px",

        450: "450px",

        464: "464px",

        452: "452px",

        480: "480px",

        500: "500px",

        640: "640px",

        700: "700px",

        730: "730px",

        768: "768px",

        1070: "1070px",

        1160: "1160px",

        1200: "1200px",

        "60%": "60%",

        "100%": "100%",
      },
      height: {
        520: "350px",
        21: "21px",

        27: "27px",

        33: "33px",

        34: "34px",

        46: "46px",

        40: "40px",

        52: "52px",

        58: "58px",

        61: "61px",

        63: "63px",

        80: "80px",

        100: "100px",

        215: "215px",

        300: "300px",

        305: "305px",

        309: "309px",

        310: "310px",

        320: "320px",

        321: "321px",

        350: "350px",

        380: "380px",

        391: "391px",

        400: "400px",

        412: "412px",

        420: "420px",

        440: "440px",

        450: "450px",

        480: "480px",

        488: "488px",

        493: "493px",

        500: "500px",

        544: "544px",

        580: "580px",

        600: "600px",

        679: "679px",

        700: "700px",

        773: "773px",

        786: "786px",

        834: "834px",

        "100%": "100%",
      },
      backgroundImage: {
        screenImage: "url('../src/assets/screen/images/screen-image.jpg')",

        aboutMeImage: "url('../src/assets/aboutMe/svg/svg-stripes.svg')",

        mobileMenuBg:
          "url('../src/components/mobileMenu/images/mobile-menu_bg.jpg')",

        reviewBg: "url('../src/assets/review/svg/svg-stripes.svg')",

        contactsBg: "url('../src/assets/contacts/images/contactsBg.jpg')",

        formImage: "url('../src/assets/form/images/formBg.png')",

        whyUsImage: "url('../src/assets/whyUs/images/WhyUsBg.jpg')",

        footerBg: "url(../src/assets/footer/images/footerBg.jpg)",
      },
      spacing: {
        margin85: "85px",

        m160: "-160px",

        m320: "-320px",

        240: "240px",

        245: "245px",

        250: "50px",

        297: "297px",

        300: "300px",

        330: "330px",

        360: "360px",

        361: "361px",

        424: "424px",
      },
      boxShadow: {
        numShadow:
          "2px 0 #3A4D5A, -2px 0 #3A4D5A, 0 2px #3A4D5A, 0 -2px #3A4D5A, 1px 1px #3A4D5A, -1px -1px #3A4D5A, 1px -1px #3A4D5A, -1px 1px #3A4D5A;",
      },
    },
  },
  plugins: [],
};
