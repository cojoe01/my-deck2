module.exports = {
  style: 'elastic-web',
  name: 'my-deck2',
  title: 'my-deck2',
  repo: 'cojoe01/my-deck2',            // powers slide comments (GitHub issues)
  gateway: 'https://api.fslides.dev',   // sign-in broker for commenting on the published deck
  slidesDir: 'slides',

  slides: [
    'cover.html',
    'platform.html',
    'stats.html',
    'closing.html',
  ],

  labels: [
    'Cover',
    'Search AI Platform',
    'Proof point',
    'Thank you',
  ],
};
