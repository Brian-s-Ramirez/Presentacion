const express = require('express')
const router = express.Router()
const alumnosController = require('../controllers/alumnos.controller')

router.get('/', alumnosController.getAllAlumnos)
router.get('/:dni', alumnosController.getAlumnoByDni)
router.delete('/:dni', alumnosController.deleteAlumnoByDni)
router.post('/', alumnosController.crateAlumno)
router.put('/:dni', alumnosController.updateAlumno )

module.exports = { router}