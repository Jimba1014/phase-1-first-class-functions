const receivesAFunction = spy => {
    spy();
}

const returnsANamedFunction = () => {
    let aNamedFunction = () =>{

    };
    return aNamedFunction;
}
const returnsAnAnonymousFunction = () => {
    return () =>{
return 'Butts'
    };
   

}