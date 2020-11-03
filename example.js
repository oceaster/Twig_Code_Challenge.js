import { divideArray } from './solution.js';

const example_list = [0,1,2,3,4,5,6,7,8,9];

if(process.argv.length == 2){
    for(let i=1;i<11;i++){
        console.log('\n', i,
            divideArray(example_list, i)
        );
    }
} else {
    const example_sets = parseInt(process.argv[2]);
    console.log(
        '\n',
        example_sets,
        divideArray(
            example_list,
            example_sets
        ),
        '\n'
    );
}
