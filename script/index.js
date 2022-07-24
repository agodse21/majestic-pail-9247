import nav from "../component/nav.js"

document.getElementById("navbar").innerHTML = nav()


function getdata(e) {

    e.preventDefault()

    let form_data = document.getElementById("data")

    let name = form_data.name.value

    let last = form_data.Last.value

    let email = form_data.email.value

    let company = form_data.company.value

    let job = form_data.job.value

    let phn = form_data.phn.value

    let india = form_data.india.value


    // console.log(name, last, email, company, job, phn, india)
    alert("Your enter successfully !")
}