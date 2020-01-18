const validateProjectReq = (req, res, next) =>
  JSON.stringify(req.body) !== '{}'
    ? req.method === 'POST'
      ? req.body.name
        ? req.body.description
          ? next()
          : res
              .status(400)
              .json({ message: 'missing required description field' })
        : res.status(400).json({ message: 'missing required name field' })
      : req.body.name || req.body.description || req.body.completed
      ? next()
      : res.status(400).json({
          message:
            'Must include at least one of the following fields: name, description, completed',
        })
    : res.status(400).json({ message: 'missing project data' })

module.exports = { validateProjectReq }
