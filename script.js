const api = "https://randomuser.me/api/?results=8";

let userList = [];

const userListCard = document.getElementById("list");

const count = document.getElementById("userCount");

const fetchUsers = async (url = api) => {
  //promise method
  //   fetch(api).then((response) => {
  //     console.log(response);
  //    return response.json()
  //   })
  // .then((data)=>{
  // console.log(data.results);
  // }).catch((error)=>{
  // console.log(error);
  // })

  //async/await
  try {
    const response = await fetch(url);
    const data = await response.json();
    userList = data.results;

    display(userList);

  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

const display = (userList) => {
  let userCard = "";

  userList.forEach((user) => {
    userCard += `
    <div class="card" style="width: 18rem">
    <img
      src="${user.picture.large}"
      class="card-img-top"
      alt="Female"
    />
    <div class="card-body">
      <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
      <ul class="list-unstyled"
        <li>6564</li>
        <li>dfhbfhd@yahoo.col</li>
        <li>1 george st</li>
      </ul>
    </div>
    </div>`;
  });

  userListCard.innerHTML = userCard;

  count.innerText = userCard.length;
};

const handleOnGenderSelect = (e) => {
  const g = e.value;
  const urlg = api + "&gender=" + g;
  fetchUsers(urlg);
  console.log(e);
};

document.getElementById("search").addEventListener("keyup",(e)=>{
const searchedName = e.target.value.toLocaleLowerCase();

const filteredUser = userList.filter((user)=>{
    const fullName = (user.name.first + "" + user.name.last).toLocaleLowerCase();
    return fullName.includes(searchedName)
});
display(filteredUser)
})