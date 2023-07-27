function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["JavaScript", "HTML", "CSS"],
        salary: 4000
    };
    for (var i = 0; i < member.skills.length; i++) {
        console.log(member.skills[i]);
    }
}
