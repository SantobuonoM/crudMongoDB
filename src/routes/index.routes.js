import { Router } from "express";
import app from "../app";
import Task from "../models/Task";

import indexRouter from "./index.routes";
const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/tasks/add", async (req, res) => {
  try {
    const task = new Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/edit/:id",  async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean()
    res.render("edit", {task})
    
    
  } catch (error) {
    console.log(error)
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  
  await Task.findByIdAndUpdate(id, req.body);
    
  console.log(req.body);
  res.redirect("/");
  
});

export default router;
