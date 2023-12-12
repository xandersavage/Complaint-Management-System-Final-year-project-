const express = require('express')
const Complaint = require('../model/complaint')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')
const router = new express.Router()

//CREATE NEW COMPLAINT
router.post('/complaints/submit', auth, async (req, res) => {
    const complaint = new Complaint({
        ...req.body,
        author: req.user._id
    })

    try {
        await complaint.save()
        res.status(201).send(complaint)
    } catch (e) {
        res.status(400).send(e)
    }
})

//GET MY COMPLAINTS
router.get("/complaints", auth, async (req, res) => {
    const match = {};
    const sort = {};
  
    if (req.query.status) {
      match.status = req.query.status
    }
    if (req.query.sortBy) {
      const parts = req.query.sortBy.split(":");
      sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
    }
    try {
      await req.user.populate({
        path: "complaints",
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      });
  
      res.send(req.user.complaints);
    } catch (e) {
      res.status(500).send();
    }
  });

//GET ALL COMPLAINTS(ADMIN)
router.get('/admin/complaints', auth, adminAuth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.status) {
    match.status = req.query.status;
  }
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }

  try {
    const complaints = await Complaint.find(match).sort(sort).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip));

    res.send(complaints);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});
//GET A COMPLAINT
router.get("/complaints/:id", auth, async (req, res) => {
    const _id = req.params.id;
    try {
      const complaint = await Complaint.findOne({ _id, author: req.user._id.toHexString() });
      //console.log(_id, req.user._id.toHexString(), task);
      if (!complaint) {
        return res.status(404).send();
      }
      res.send(complaint); 
    } catch (e) {
      res.status(500).send();
    }
  });

//UPDATE MY COMPLAINT
router.patch("/complaints/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["title", "description", "type", "priority"];
    const isValidOperation = updates.every(update =>
      allowedUpdates.includes(update)
    );
  
    if (!isValidOperation)
      return res.status(400).send({ error: "invalid updates!" });
  
    try {
      const complaint = await Complaint.findOne({
        _id: req.params.id,
        author: req.user._id
      });
  
      if (!complaint) return res.status(404).send();
      if(complaint.status == 'Resolved') return res.status(400).send('Cant update resolved complaints')
      updates.forEach(update => {
        complaint[update] = req.body[update];
      });
      await complaint.save();
      res.send(complaint);
    } catch (e) {
      res.status(400).send(e);
    }
  });

//MARK COMPLAINT AS RESOLVED(ADMIN)
router.patch('/admin/complaints/:id', auth, adminAuth, async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id)

    if (!complaint) return res.status(404).send();

    complaint.status = 'Resolved'
    await complaint.save()
    res.send(complaint);

  } catch (e) {
    res.status(400).send(e);
  }

})

//DELETE MY COMPLAINT
router.delete("/complaints/:id", auth, async (req, res) => {
    try {
      const complaint = await Complaint.findOneAndDelete({
        _id: req.params.id,
        author: req.user._id
      });
  
      if (!complaint) return res.status(404).send();
      if(complaint.status == 'Resolved') return res.status(400).send('Cant delete resolved complaints')
      res.send(complaint);
    } catch (e) {
      res.status(500).send(e);
    }
  });




module.exports = router