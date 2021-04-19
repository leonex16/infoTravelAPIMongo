const { app } = require('../App');

app.listen(app.get('PORT'), () => console.log(`app Listening at http://localhost:${app.get('PORT')}`));
