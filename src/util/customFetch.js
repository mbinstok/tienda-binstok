let ok = true;

export const customFetch = (products,timeout) => {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(ok){
                resolve(products)
            }else{
                reject('Error')
            }
        },timeout);
    })
}