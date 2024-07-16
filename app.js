let values = '' // useState
const data = [];


function getKeyStrokes(e) {
    const inputBox = document.querySelector("#inputbox");
    values = inputBox.value;
};


function submitEvent() {
    console.log(values);
    // post to an api with axios
    //! axios.post : create a new data
    //! axios.put | axios.patch : update or edit data
    //! axios.delete : to delete a data
    //! axios.get : get or fetch data from the api

    const objectPayload = {
        firstName: values,
        lastName: values,
        phoneNumber: "+23400000000",
        email: `${values}@gmail.com`,
        message: values
    }

    axios.post("https://emis-server.onrender.com/contact-lists", objectPayload)
        .then(res => {
            getDataAndDisplay()
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
}

document.addEventListener("DOMContentLoaded", getDataAndDisplay) // useEffect


function getDataAndDisplay() {
    axios.get("https://emis-server.onrender.com/contact-lists")
        .then(res => {
            console.log(res);
            const data = res.data;
            displayData(data);
        }).catch(err => {
            console.log(err);
        })

    function displayData(data) {
        let dataList = document.getElementById("data-list");
        dataList.innerHTML = "";
        data.forEach((item) => {
            let listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `Name: ${item.firstName} ${item.lastName}, Phone: ${item.phoneNumber}, Email: ${item.email}, Message: ${item.message}`;
            dataList.appendChild(listItem);
        });
    }
}