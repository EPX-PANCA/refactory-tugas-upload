const axios = require('axios')

const urlUser = "http://jsonplaceholder.typicode.com/users";
const urlPost = "http://jsonplaceholder.typicode.com/posts";


axios.get(`${urlUser}`)
.then( response => {
  const result = response.data
  console.log(result);
})
.catch(error => {
  console.log(error);
})

  

 axios.get(`${urlPost}`)
  .then( response => {
    const result = response.data
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })

async () => {
  try {
    const responseUser = await axios.get(`${urlUser}`);
   console.log(responseUser);
    const responsePost = await axios.get(`${urlPost}`);
   console.log(responsePost);

  } catch (error) {
    console.error(error);
  }
}


