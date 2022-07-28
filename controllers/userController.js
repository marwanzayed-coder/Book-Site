//  To import schema & models
import userSchema from "../models/userSchema.js";
import bookSchema from "../models/bookSchema.js";
import bcrypt from "bcrypt";

export const get_user_details = async (req, res) => {
  let name = "";
  userSchema
    .findById(req.params.id)
    .then((result) => {
      console.log(result);
      name = result.name;
    })
    .catch((err) => {
      console.log(err);
    });
  const userFound = await bookSchema.find({ user: req.params.id }).populate();
  if (!userFound) {
    return res
      .status(401)
      .json({ msg: "This Email Does not exist Please Register" });
  } else {
    res.render("user", {
      myTitle: "Book Site",
      name,
      userFound,
    });
  }
};

export const authController = {
  register: async (req, res) => {
    try {
      const { username, name, password, email } = req.body;
      // remove white space and return username lowercase
      let newUserName = username.replace(/ /g, "");
      // check username in database or no
      const usernameHere = await userSchema.findOne({ username, newUserName });
      if (usernameHere) {
        return res.status(400).json({ msg: "User Name already exists !" });
      }

      // check Email in database or no
      const emailHere = await userSchema.findOne({ email });
      if (emailHere) {
        return res.status(400).json({ msg: "Email already exists !" });
      }

      // check Password less 6
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters." });
      }

      // make Hashing password
      const passwordHash = await bcrypt.hash(password, 12);

      // Create User in database
      const newUser = await new userSchema({
        username: newUserName,
        name,
        email,
        password: passwordHash,
      });

      // Save User in database
      await newUser.save();
      res.cookie("user_data", newUser);
      res.redirect("/book");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check user In Database or now and populte
      const userFound = await userSchema.findOne({ email }).populate();
      if (!userFound) {
        return res
          .status(401)
          .json({ msg: "This Email Does not exist Please Register" });
      }

      // return real password
      const matchPassword = await bcrypt.compare(password, userFound.password);
      if (!matchPassword) {
        return res.status(401).json({ msg: "Password is incorrect" });
      }

      res.cookie("user_data", userFound);

      res.redirect("/user/" + userFound._id);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  new_book: async (req, res) => {
    try {
      const { name, writer } = req.body;

      const newBook = await new bookSchema({
        user: req.cookies.user_data._id,
        name,
        writer,
      });
      await newBook.save();
      res.cookie("books", newBook);
      res.redirect("/user/" + req.cookies.user_data._id);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
