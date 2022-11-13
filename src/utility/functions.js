export function SplitArrayModules(array, valueClasses) {
    let indexStart = 0;
    let indexEnd = valueClasses;
    const newArray = []
    for (let index = 0; index < array.length; index + valueClasses) {
        newArray.push(array.slice(indexStart, indexEnd));
        indexStart += valueClasses
        indexEnd += valueClasses
        if (indexStart >= array.length - valueClasses) {
            newArray.push(array.slice(indexStart))
            break;
        }
    }
    return newArray
}
export function calculateProgress(array) {
    let classesAll = array.length
    let classesCompleted = array.filter((classe) => {
        return classe.status.toLowerCase() === "concluido"
    })
    let progress = (100 / classesAll) * classesCompleted.length
    return progress
}