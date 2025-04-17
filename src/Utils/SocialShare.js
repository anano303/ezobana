/**
 * Social media sharing text content for Ezobana
 */

export const socialShareContent = {
  ge: {
    title: "ეზობანა - ბავშვთა გასართობი ცენტრი",
    description:
      "თქვენი პატარას ჯადოსნური სამყარო! ეზობანა - სივრცე, სადაც ყველა ბავშვი ლაღია, შემოქმედია, უპირობოდ მიღებულია. შემოგვიერთდით სახალისო ვორქშოფებზე, პროგრამებში და თამაშებში!",
    hashtags: "#ეზობანა #ბავშვები #თამაშები #ვორქშოფები #თბილისი",
    callToAction:
      "ესტუმრეთ ეზობანას - ადგილს სადაც ბავშვობა ჯადოსნურია! 🧒👧✨",
  },
  en: {
    title: "Ezobana - Children's Entertainment Center",
    description:
      "A magical world for your little ones! Ezobana is a space where every child is free, creative, and unconditionally accepted. Join us for fun workshops, programs, and games!",
    hashtags: "#Ezobana #Children #Games #Workshops #Tbilisi",
    callToAction: "Visit Ezobana - where childhood is magical! 🧒👧✨",
  },
};

/**
 * Function to share content on Facebook
 */
export const shareOnFacebook = (language = "ge") => {
  const content = socialShareContent[language];
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(
    `${content.title}\n\n${content.description}\n\n${content.hashtags}`
  );

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,
    "_blank"
  );
};

/**
 * Function to share content on Twitter
 */
export const shareOnTwitter = (language = "ge") => {
  const content = socialShareContent[language];
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(
    `${content.title}\n\n${content.description}\n\n${content.hashtags}`
  );

  window.open(
    `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    "_blank"
  );
};

/**
 * Function to share via WhatsApp
 */
export const shareOnWhatsApp = (language = "ge") => {
  const content = socialShareContent[language];
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(
    `${content.title}\n\n${content.description}\n\n${content.callToAction}\n\n${shareUrl}`
  );

  window.open(`https://api.whatsapp.com/send?text=${shareText}`, "_blank");
};
