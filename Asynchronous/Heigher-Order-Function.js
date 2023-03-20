const names = ["Herry", "Adam", "Lita", "Budi"];

const arrayMap = (arr, action)=>{
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }
  return loopTrough(arr, action);
}

const newName = arrayMap(names, (name) => `${name}!`);
console.log({ names, newName });