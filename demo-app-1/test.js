const GET_URL = "http://localhost:3000/get-profile";
const POST_URL = "http://localhost:3000/update-profile";

// Call an API to get the user profile

const getProfile = (userid) => {
  const url = GET_URL + "/" + userid;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

// Call an API to update the user profile

const updateProfile = (userid, name, email) => {
  fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userid, name, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

var userid = "1";

console.log("Get profile with userid: " + userid);

getProfile(userid);

console.log("Update profile with userid: " + userid);

updateProfile(userid, "John1", "jode@gmail.com");
