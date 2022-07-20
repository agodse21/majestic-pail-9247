function getdata(e) {

    e.preventDefault()

    let form = document.getElementById("form")

    let name = form.name.value

    let last = form.Last.value

    let email = form.email.value

    let company = form.company.value

    let job = form.job.value

    let phn = form.phn.value

    let india = form.india.value


    console.log(name, last, email, company, job, phn, india)
}