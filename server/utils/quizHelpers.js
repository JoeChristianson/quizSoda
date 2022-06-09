const shuffleOptions = (options)=>{
    const order = [];
    for (let i = 0;i<options.length;i++){
        order.push({index:Math.random(),option:options[i]})
    }
    order.sort((a,b)=>{
        return a.index - b.index
    })
    const result = order.map(el=>{
        return el.option
    })
    console.log(result)
    return result
}

module.exports = {shuffleOptions}