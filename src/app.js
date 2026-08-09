import express from 'express'

const app = express()
app.use(express.json())
const notes =[]

app.post("/createNotes",(req,res)=>{
    const note = req.body
    notes.push(note)
    res.status(201).json({
        message:"notes created",
        notes:notes
    })
})

app.get("/allNotes",(req,res)=>{
    res.status(200 ).json({
        message:"fetched all notes",
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
const index = req.params.index
delete notes[index]
res.status(200).json({
    message:"note deleted"
})
})

app.patch("/notes/:index", (req,res)=>{
    const index = req.params.index
    const content = req.body.content

    notes[index].content = content

    res.status(201).json({
        message:"upated",
        note:notes[index]
    })
})

export default app