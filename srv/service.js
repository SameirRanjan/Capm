module.exports = (say) => {
    say.on ('fhello', req => `${req.data.input1} world `)
    say.on ('hellof', req => `${req.data.input1} Champ !`)
}