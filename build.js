const fs = require('fs');
const pdc = require('pdc');
const path = require('path')
const dest = 'dest';

const build_md = () => {
    const target = 'content';
    const args = ["-c", "github.css", "-c", "user.css", "--template=" + __dirname + "/include/template.html", "-B", __dirname + "/include/before.html", "-A", __dirname + "/include/footer.html", "--mathjax", "-T", "C言語講座"];
    // TODO: もうちょっときれいにかけない？
    fs.readdir(path.join(__dirname, target), (e, files) => {
        files.forEach(element => {
            fs.readFile(path.join(__dirname, target, element), (e, content) => {
                pdc(content, "markdown", "html", args, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const md = element.replace(path.extname(element), ".html");
                        fs.writeFile(path.join(__dirname, dest, md), result, (err) => {
                            if (err) console.log(err)
                        })
                    }
                });
            })
        });
    });
}

const build_static = () => {
    const css = 'css';
    fs.readdir(path.join(__dirname, css), (e, files) => {
        files.forEach(element => {
            fs.readFile(path.join(__dirname, css, element), (e, content) => {
                fs.writeFile(path.join(__dirname, dest, element), content, (err) => {
                    if (err) {
                        console.log(err)
                    }
                });
            })
        });
    })
}


build_static();
build_md()