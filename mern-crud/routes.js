const express = require('express')
const Student = require('./models/Student')
const router = express.Router()

router.get('/students', async (req, res) => {
  const students = await Student.find()
  res.send(students)
})

router.post('/students', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    id: req.body.id
  })
  await student.save()
  res.send(student)
})

router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id })
    res.send(student)
  } catch {
    res.status(404)
    res.send({ error: "Student doesn't exist!" })
  }
})

router.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id })

    if (req.body.name) {
      student.title = req.body.title
    }

    if (req.body.content) {
      student.content = req.body.content
    }

    await student.save()
    res.send(student)
  } catch {
    res.status(404)
    res.send({ error: "Student doesn't exist!" })
  }
})

router.delete('/students/:id', async (req, res) => {
  try {
    await Student.deleteOne({ _id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Student doesn't exist!" })
  }
})

module.exports = router
