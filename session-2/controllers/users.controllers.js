const usersData = require("./users.json");

const getUsers = (req, res) => {
  res.send(usersData.data);
};

const searchUsers = (req, res) => {
  const { gender, age } = req.query;
  
  // Validation
  if (gender && !["male", "female"].includes(gender))
    return res
      .send(400)
      .send({ message: "Gender must be either 'male' or 'female'" });
  if (age && isNaN(age))
    return res.send(400).send({ message: "Age must be an Integer" });
  
  // Logic
  if (gender && age) {
    res.send(
      usersData.data.filter(
        (user) => user.gender === gender && user.dob.age === parseInt(age)
      )
    );
  } else if (gender) {
    res.send(usersData.data.filter((user) => user.gender === gender));
  } else if (age) {
    res.send(usersData.data.filter((user) => user.dob.age === parseInt(age)));
  } else {
    res.status(400).send({
      message: "At least one query parameter: [gender or age] must be passed!",
    });
  }
};

const getUserById = (req, res) => {
  const { uuid } = req.params;
  const requestedUser = usersData.data.find((user) => user.login.uuid === uuid);
  if (requestedUser) return res.send(requestedUser);
  //   res.send(404).send({ message: "User not found" });
  res.sendStatus(404);
};

module.exports = { getUsers, searchUsers, getUserById };
