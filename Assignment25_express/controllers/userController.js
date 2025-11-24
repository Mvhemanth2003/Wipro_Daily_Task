let users = [];

exports.getUsers = (req, res) => {
    res.status(200).json(users);
};

exports.createUser = (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
};