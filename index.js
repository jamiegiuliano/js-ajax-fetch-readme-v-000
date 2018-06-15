const app = "I don't do much.";

const token = '0aeb85323c666fb81abaf5c60b46766726ab6804'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
