
export const divideArray = (list, sets) => {
    const size = parseInt(list.length / sets);
    const out = [[], ];
    let curr = 0;

    for(let i=0;i<list.length;i++){
        if(curr >= size && out.length < sets){
            curr = 0;
            out.push([]);
        }
        out[out.length - 1].push(list[i]);
        curr++;
    }

    return out;
};
