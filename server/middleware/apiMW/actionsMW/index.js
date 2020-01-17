const validateActionReq = (req, res, next) =>
  JSON.stringify(req.body) !== '{}'
    ? req.body.project_id
      ? req.method === 'POST'
        ? req.body.description
          ? req.body.description.length <= 128
            ? req.body.notes
              ? next()
              : res
                  .status(400)
                  .json({ message: 'missing required notes field' })
            : res.status(400).json({
                message: 'description must be 128 characters or fewer',
              })
          : res
              .status(400)
              .json({ message: 'missing required description field' })
        : req.body.description || req.body.notes || req.body.completed
        ? req.body.description
          ? req.body.description.length <= 128
            ? next()
            : res.status(400).json({
                message: 'description must be 128 characters or fewer',
              })
          : next()
        : res.status(400).json({
            message:
              'Must include at least one of the following fields: description, notes',
          })
      : res.status(400).json({ message: 'missing required project_id field' })
    : res.status(400).json({ message: 'missing project data' })

module.exports = { validateActionReq }
