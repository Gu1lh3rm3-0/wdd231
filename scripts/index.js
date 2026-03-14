document.getElementById("lastModified").innerHTML = document.lastModified;

const courses = [
    { name: "WDD 130", category: "wdd", credit: 2 },
    { name: "WDD 131", category: "wdd", credit: 2 },
    { name: "WDD 231", category: "wdd", credit: 2 },
    { name: "CSE 210", category: "cse", credit: 2 },
    { name: "CSE 212", category: "cse", credit: 2 }
];

function filter(category) {
    let filteredCourses;

    if (category === "all") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === category);
    }

    showCourses(filteredCourses);
}

function showCourses(courseList) {
    let html = "";
    let totalCredits = 0;

    courseList.forEach(course => {
        html += `<div class="item">${course.name}</div>`;
        totalCredits += course.credit;
    });
    document.querySelector(".course-list").innerHTML = html;
    document.querySelector(".course-credit").innerHTML = `The total credits listed for the course listed above is: ${totalCredits}`;
}