import express from 'express'

const app = express()
app.use(express.json())
const notes =[]

app.post("/createNotes",(req,res)=>{
    const note = req.body
    console.log("9999 req",req.body)
    console.log("9999",note)
    notes.push(note)
    res.status(201).json({
        message:"notes created",
        notes:notes
    })
})

app.get("/allNotes",(req,res)=>{
    console.log("all notes:",notes)
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


export default app