import express from "express";
import dotenv from "dotenv";
import { prisma } from "./db/prisma.js";

import healthRoutes from "./routes/health.routes.js"

const app = express();
dotenv.config();
app.use(express.json());

app.use(healthRoutes);

const port = Number(process.env.PORT);
<<<<<<< HEAD
// criar usuarios

app.post("/users", async (req, res)=>{
    try{
        const {name, email} = req.body;

        if (!name || !email){
            return res.status(400).json({error: "name e email são obrigatórios"});
        }
        const user = await prisma.user.create({
            data: {name, email},
        });

        return res.status(201).json(user);
    }catch (err){
        return res.status(400).json({error: "não foi possível criar o usuário", 
            details: String(err.message || err)});
    }

})
app.get("/users", async (req, res) =>{
    const users = await prisma.user.findMany({
        orderBy: {id: "desc"}
    });
    res.json(users)
})
app.get("/users/:id", async (req, res) =>{
    const id = Number (req.params.id);
    const user = await prisma.user.findFirst({
        where: {id},
    })
    if (!user){
        return res.status(400).json({error: "usuário não encontrado"});
    }
    res.json(user)
})
app.put("/users/:id", async (req, res)=>{
    try{
        const id = Number (req.params.id);
        const {name, email} = req.body;

        if (!name || !email){
            return res.status(400).json({error: "informe um name ou email para atualizar"});
        }
        const user = await prisma.user.update({
            where: {id},
            data: {name, email},
        });

        return res.status(200).json(user);
    }catch (err){
        return res.status(400).json({error: "não foi possível atualizar o usuário", 
            details: String(err.message || err)});
    }

})
=======
//LINHAGEM DE CÓDIGO FEITA HOJE 21/02 -- ESTUDAR!!!
app.post("/users", async (req, res)=>{
    try{
        const {name, email} = req.body;
>>>>>>> 11aa0ac (atualizações no server.js)


        if (!name || !email){
            return res.status(400).json({error: "name e email são obrigatórios"});
    }
        const user = await prisma.user.create({
            data: {name, email},
    });

        return res.status(201).json(user);
    }catch (err){
        return res.status(400).json({error: "não foi possível criar o usuário",
            details: String(err.message || err)});
    }
})
app.get("/users", async (req,res) =>{

    const user = await prisma.user.findMany({
            orderBy: {id: "desc"},
        });
        res.json(user)
})
app.get("/users/:id", async (req,res) =>{
        const id = Number (req.params.id);

        const user = await prisma.user.findFirst({
            where: {id},
        })
        if (!user){
            return res.status(400).json({error: "usuário não encontrado"});
        }
        res.json(user)
})

// ultima coisa do arquivo por enquanto
app.listen (port, ()=> {
    console.log (`Server rodando em http://localhost:${port}`)
});

process.on ("SIGINT", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});
process.on ("SIGTERM", async ()=>{
    await prisma.$disconnect();
    process.exit(0);
});