const getJson = () => {
    const savedData = localStorage.getItem('teeth')
    if (savedData) {
        const output = JSON.parse(savedData)
        return output
    }
    return []
}

const saveJson = (recordJson) => {
    localStorage.setItem('teeth', JSON.stringify(recordJson))
}

const Saved = {
    getJson,
    saveJson,
}

export default Saved