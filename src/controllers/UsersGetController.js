module.exports = async (req, res) =>{
    let users = await req.psql.users.findAll({
      attributes: ["id","name"]
    })
    users = await users.map(user => user.dataValues
    )
    console.log(users)
    res.status(200).json({
      ok: true, 
      data: users 
    })
  }