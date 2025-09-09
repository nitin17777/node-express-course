const express = require('express')
const router = express.Router();

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../contorllers/people')

// router.get('/',getPeople)

// router.post('/', createPerson)

// router.post('/postman', createPerson)

// router.put('/:id',updatePerson)

// router.delete('/:id',deletePerson)

//same fucntionality as above
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router


