const params = new URLSearchParams(window.location.search);

const thankYouMessage = document.querySelector("#thankYou").innerHTML = `
<p>Thank you for joining the chamber, ${params.get("firstName")} ${params.get("lastName")} from ${params.get("companyName")}! We look forward to working with you and supporting your business growth.</p>
`;