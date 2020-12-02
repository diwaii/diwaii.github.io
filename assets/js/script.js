new TypeIt("#offering", {
    speed: 80,
    cursor: false,
    lifeLike: true,
    waitUntilVisible: true
  })
    .pause(4000)
    .type("Here. ")
    .pause(400)
    .type("Have some matcha.")
    .go();

new TypeIt("#breathe", {
    speed: 80,
    lifeLike: true,
    cursor: false,
    waitUntilVisible: true
  })
    .pause(7500)
    .type("Breathe in. ", {delay: 300})
    .pause(2000)
    .delete(12)
    .pause(500)
    .type("Breathe out.")
    .pause(2500)
    .delete(12)
    .pause(500)
    .type("Let's talk about tea.")
    .go();

