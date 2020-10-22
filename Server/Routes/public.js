const router = require('express').Router()
//const tickets = require('../helpers/data')
const objCreate = require('../helpers/objCreation')
const getTableData = require('../helpers/tableData')
const getCustomerData = require('../helpers/customerNum')


router.get('/', async (req, res) => {
    try {
        let tickets = await getTableData();
        let keys = Object.keys(tickets)
        res.render('pages/index', { tickets, keys });
    } catch (error) {
        res.status(500).send("sorry we can't help you ")

    }
})

router.get('/about', (req, res) => {
    console.log(req.path)
    res.render('pages/about');
})


router.post('/test', async (req, res) => {
    try {
        const { documents } = req.body

        let docs = tickets.filter((ticket, index) => {
            return documents.includes(index.toString())
        })

        let bill = docs[0]
        const customer = await getCustomerData(bill)
            //  let result  = objCreate(docs)    
            res.json(customer)
    } catch (error) {
        res.status(500).send("sorry we can't find customer data  ")
    }






})

module.exports = router 