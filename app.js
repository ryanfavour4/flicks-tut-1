let values = ''
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
   console.log(res);
  }).catch(err => {
   console.log(err);
  })

 // axios.get("https://emis-server.onrender.com/contact-lists")
 //  .then(res => {
 //   console.log(res);
 //   data.push(res.data);
 //  }).catch(err => {
 //   console.log(err);
 //  })
}



