import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Tasks } from "../entity/Tasks";

export const getTasks = async (req: Request, res: Response) => {
	const tasks = await getRepository(Tasks).find();
	return res.status(200).json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
	const { id } = req.params;
	const task = await getRepository(Tasks).findOne(id);

	if (!task) {
		res.status(404).json({ message: `Tarefa com ID: ${id} não encontrada` });
	}

	return res.status(200).json(task);
};

export const saveTask = async (req: Request, res: Response) => {
	const { title, description } = req.body;
	const newTask = getRepository(Tasks).create({ title, description });
	const task = await getRepository(Tasks).save(newTask);
	return res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { title, description } = req.body;
	const createTask = getRepository(Tasks).create({ title, description });
	const task = await getRepository(Tasks).update(id, createTask);

	if (task.affected === 0) {
		return res
			.status(404)
			.json({ message: `Tarefa com ID: ${id} não encontrada` });
	}

	const updatedTask = await getRepository(Tasks).findOne(id);
	return res.status(200).json(updatedTask);
};

export const finishedTask = async (req: Request, res: Response) => {
	const { id } = req.params;
	let finished = (await getRepository(Tasks).findOne(id)).finished;
	finished = !finished;

	const createTask = getRepository(Tasks).create({ finished });
	const task = await getRepository(Tasks).update(id, createTask);

	if (task.affected === 0) {
		return res
			.status(404)
			.json({ message: `Tarefa com ID: ${id} não encontrada` });
	}

	return res.status(200).json({ message: `Tarefa com ID: ${id} finalizada` });
};

export const removeTask = async (req: Request, res: Response) => {
	const { id } = req.params;
	const result = await getRepository(Tasks).delete(id);

	if (result.affected === 0) {
		return res
			.status(404)
			.json({ message: `Tarefa com ID: ${id} não encontrada` });
	}

	return res.status(200).json({ message: `Tarefa com ID ${id} foi removida` });
};
