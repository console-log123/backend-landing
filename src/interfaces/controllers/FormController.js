async createForm(req, res) {
  const { nombre, email, comentario } = req.body;
  await CreateFormUseCase.execute({ nombre, email, comentario });
  res.status(201).json({ message: 'Formulario guardado' });
}