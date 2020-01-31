import { Router } from 'express';

const routes = new Router();

const projects = [];

// MIDDLEWARES

function checkProject(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found!' });
  }

  return next();
}

function logRequests(req, res, next) {
  console.count('Número de requisições');

  return next();
}

routes.use(logRequests);

// PROJECTS

routes.get('/', (req, res) => {
  return res.json({
    message: 'Bem-Vindo ao Desafio #01 by Guilherme Jeronimo',
  });
});

routes.get('/projects', (req, res) => {
  return res.json(projects);
});

routes.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: [],
  };

  projects.push(project);

  return res.json(projects);
});

routes.put('/projects/:id', checkProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

routes.delete('/projects/:id', checkProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.json({ message: 'Projeto excluído com sucesso!' });
});

// TASKS

routes.post('/projects/:id/tasks', checkProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});

routes.put('/projects/:id/tasks/:task', checkProject, (req, res) => {
  const { id } = req.params;
  const { task } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks[task] = title;

  return res.json(project);
});

routes.delete('/projects/:id/tasks/:task', checkProject, (req, res) => {
  const { id } = req.params;
  const { task } = req.params;

  const project = projects.find(p => p.id == id);

  project.tasks.splice(task, 1);

  return res.json({ message: 'Tarefa excluída com sucesso!' });
});

export default routes;
