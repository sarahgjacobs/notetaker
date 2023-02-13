const router = require('express').Router()
const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const getNotes = () => {
    return readFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes)))
}

const writeNotes = (notes) => {
    return writeFile('db/db.json', JSON.stringify(notes)).then(() => console.log('ok'))
}

router.get('/', (req, res) => {
    getNotes().then(notes => res.json(notes));
})
router.post('/', ({ body }, res) => {
    getNotes().then(oldNotes => {
        const newNotes = [...oldNotes, { title: body.title, text: body.text, id: 1 }]
        writeNotes(newNotes).then(() => res.json({
            message: "okay"
        }))
    })
})
router.delete('/:id', (req, res) => { })

module.exports = router;