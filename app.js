// === imports == //
express = require('express')
bodyParser = require('body-parser')


// === initialisation == //
app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// === store == //
const todoItems = [];
todoItems.push({ value: 'learn react', done: false });
todoItems.push({ value: 'Go shopping', done: true });
todoItems.push({ value: 'buy flowers', done: true });


// === endpoints == //
// index endpoint
app.get('/', (req, res) => res.send('Hello World!'))

// get all tasks
app.get('/task', (req, res) => {
    return res.json({ data: todoItems })
})

// create a task
app.post('/task', (req, res) => {
    todoItems.push({
        value: req.body.value,
        done: false,
    })
    return res.json({ data: todoItems })
})

// delete a task
app.delete('/task/:id', (req, res) => {
    todoItems.splice(req.params.id, 1)
    return res.json({ data: todoItems })
})

// update a task
app.put('/task/:id', (req, res) => {
    todoItems.at(req.params.id).done = req.body.done
    return res.json({ data: todoItems })
})

// === run app == //
app.listen(3000, () => console.log('Example app running!'))