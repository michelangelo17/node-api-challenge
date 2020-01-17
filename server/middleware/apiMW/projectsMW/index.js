const validateNewProject = (req, res, next) =>
  JSON.stringify(req.body) !== '{}'
    ? req.body.name
      ? req.body.description
        ? next()
        : res
            .status(400)
            .json({ message: 'missing required description field' })
      : res.status(400).json({ message: 'missing required name field' })
    : res.status(400).json({ message: 'missing project data' })

module.exports = { validateNewProject }
