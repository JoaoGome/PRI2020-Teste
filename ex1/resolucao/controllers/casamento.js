var Casamento = require('../models/casamento')

// alinea 1
module.exports.listar = () => {
    return Casamento
        .find()
        .select('date title _id')
        .exec()
}

// alinea 2
module.exports.consultar = (id) => {
    return Casamento
        .findOne({_id: id})
        .exec()
}

// alinea 3
module.exports.consultarNome = nome => {
    return Casamento
        .find({title: { "$regex":nome }})
        .exec()
}

// alinea 4
module.exports.consultarAno = ano => {
    return Casamento
        .find({date: { "$regex":ano }})
        .exec()
}

//alinea 5
module.exports.consultarByAno = () => {
    return Pub
        .aggregate([
            {$group: {
                _id: "$date",
                casamentos: { $push: { title: "$title", id: "$_id" } }
                }}
        ])
}
