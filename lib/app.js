const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev')); // http logging
app.use('/api/v1/auth', require('./controllers/Practice'));
// app.use('/api/v1/main', require('./controllers/MainData'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

//Back-End should:
//take user data from front and make calls to supabase to use Auth.
//make fetch calls to APIs and munge data for Front-End

// app.get('/signup', async (req, res) => {
//   try {
//        const data = await signUpUser();
//     );

//     res.json(data.rows);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

module.exports = app;
