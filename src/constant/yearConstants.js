export let START_YEAR = 2023

export let END_YEAR = new Date().getFullYear()

const setYearDDOpt = () => {
    let b = []
    while(START_YEAR <= END_YEAR){
        const a = {
            label:`${START_YEAR}`,
            value:`${START_YEAR}`
        }
        b.push(a)
        START_YEAR = START_YEAR + 1
    }
    console.log(b)
    return b
}

export const yearDDOpt = setYearDDOpt()