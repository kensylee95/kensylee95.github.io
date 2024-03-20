//Function called to load the module & return instance of WASM
async function loadAndInstantiateWasm(url) {
    try {
        const importOBj = {

        };
        let response = await fetch(url);
        let { instance } = await WebAssembly.instantiateStreaming(response, importOBj);
        return instance;
    }
    catch (e) {
        console.log(`Could not load module:${e}`);
    }
}

async function calcFactorialOfNumber() {
    try {
        const number = parseInt(document.getElementById("inputNumber").value);
        //instantiate WASM
        const wasmInstance = await loadAndInstantiateWasm(`${location.href}assets/factorial.wasm`);
        // Get and use the getJoke function from module
        let factorial = wasmInstance.exports.factorial;
        const result = factorial(number);

        // Display the result
        document.getElementById('result').innerText = result;
    } catch (error) {
        console.log(`error occurred: ${error}`);
    }
}