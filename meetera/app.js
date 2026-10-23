import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Serve the React build
app.use(express.static(path.join(__dirname, "dist")));

// Serve React for other frontend routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/new", (req,res)=>{
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


app.get("/join",(req,res)=>{
    res.sendFile(path.join(__dirname, "dist", "index.html"));
})

app.listen(8080, () => {
    console.log("Server is listening at port 8080");
});