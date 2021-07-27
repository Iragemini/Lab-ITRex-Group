const fetch = require('node-fetch');

const API = 'https://randomuser.me/api/';

class User {
  constructor(numberOfUsers) {
    this.numberOfUsers = numberOfUsers;
  }

  async getUsers() {
    try {
      const response = await fetch(`${API}/?results=${this.numberOfUsers}`);
      if (!response.ok) {
        throw new Error('Failed to load');
      }
      const { results } = await response.json();
      for (let i = 0; i < results.length; i += 1) {
        const {
          gender,
          name,
          dob,
          login,
          location,
          email,
          phone,
        } = results[i];
        const {
          country,
          state,
          city,
          street,
        } = location;
        const { username, password } = login;
        console.log(`${i + 1}) ${name.title} ${name.first} ${name.last}, ${dob.age} y.o.`);
        console.log(`Gender: ${gender}`);
        console.log(`Login information: username: ${username}, psw: ${password}`);
        console.log(`Address: ${country}, ${state}, ${city}, ${street.name}-${street.number}`);
        console.log(`email: ${email}`);
        console.log(`phone: ${phone}`);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = User;
