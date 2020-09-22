var express = require("express");
var router = express.Router();

const ws = require("../wslib");
const messagePersistence = require("../persistence/messagePersistence");
const messageLogic = require("../logic/messageLogic");

router.get("/", function (req, res, next) {
  messagePersistence.getMessages().then((result) => {
    res.send(result);
  });
});

router.get("/:id", (req, res) => {
  messagePersistence.getMessageByTS(req.params.id).then((response) => {
    if (response.length === 0)
      return res
        .status(404)
        .send("The message with the given ts was not found.");
    res.send(response);
  });
});

router.post("/", function (req, res, next) {
  const { error } = messageLogic.validateMessage(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  messagePersistence
    .createMessage(req.body.message, req.body.author)
    .then((result) => {
      ws.sendMessages();
      res.send(result);
    });
});

router.put("/:id", (req, res) => {
  const { error } = messageLogic.validateMessage(req.body);

  if (error) {
    return res.status(400).send(error);
  }

  messagePersistence.updateMessage(req.body, req.params.id).then((response) => {
    if (response[0] !== 0) {
      ws.sendMessages();
      res.send({ message: "Message updated" });
    } else {
      res.status(404).send("Message was not found");
    }
  });
});

router.delete("/:id", (req, res) => {
  messagePersistence.deleteMessage(req.params.id).then((response) => {
    if (response === 1) {
      ws.sendMessages();
      res.status(204).send();
    } else {
      res.status(404).send("Message was not found");
    }
  });
});

module.exports = router;
