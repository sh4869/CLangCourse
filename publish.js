const gh_pages = require("gh-pages");
const path = require("path");
const GH_TOKEN = process.env.GH_TOKEN;
gh_pages.publish(path.join(__dirname,'dest'),{
    repo: "https://github.com/sh4869/ClangCourse",
    user: {
        name: "sh4869",
        email: "nobuk4869@gmail.com"
    },
    message: "[ci skip] UPDATE WEBPAGE",
    branch: "gh-pages"
},(err) => {
    if(err){
        console.log(err);
        process.exit(1);
    } else {
        console.log("Update Webpage")
    }
})