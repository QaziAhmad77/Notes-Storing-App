const Notes = require("../models/Notes");
const jwt = require("jsonwebtoken");

module.exports = {
  createNote: async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const { user } = req.user;
      if (!title || !description || !tag) {
        throw { status: 409, message: "Required fields cannot be empty" };
      }
      const newNote = await Notes.create({
        user: user._id,
        title,
        description,
        tag,
      });
      res.status(200).send({ newNote });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "Sorry something went wrong");
    }
  },
  updatenote: async (req, res) => {
    try {
      const { id } = req.params;
      const { user } = req.user;
      const { title, description, tag } = req.body;
      const note = await Notes.findById(id);
      if (!note) {
        throw { status: 500, message: "notes does not exist" };
      }
      console.log(note.user.toString());
      if (note.user.toString() !== user._id) {
        throw { status: 500, message: "post does not belong to user" };
      }
      const updateNote = await Notes.findByIdAndUpdate(
        {
          _id: note._id,
        },
        {
          $set: {
            title: title ? title : note.title,
            description: description ? description : note.description,
            tag: tag ? tag : note.tag,
          },
        }
      );
      res.status(200).send({ updateNote });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "something went wrong");
    }
  },
  getAllNotes: async (req, res) => {
    try {
      const { user } = req.user;
      const notes = await Notes.find({ user: user._id });
      res.status(200).send({ notes });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "something went wrong");
    }
  },
  deletenote: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { user } = req.user;
      console.log(user);
      const note = await Notes.findById(noteId);
      if (!note) {
        throw { status: 500, message: "note does not exist" };
      }
      if (note.user.toString() !== user._id) {
        throw { status: 500, message: "post does not belong to user" };
      }
      await Notes.findByIdAndDelete({ Success: "Note has been deleted", noteId });
      res.status(200).send("Note deleted successfully");
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).send(err.message || "something went wrong");
    }
  },
  deleteAllUsers: async (req, res) => {
    try {
      await Notes.deleteMany();
      res.status(200).json("All notes has been deleted");
    } catch (err) {
      console.log(err.message);
      return res.status(err.status || 500).send(err.message || "Something went wrong");
    }
  },
};
