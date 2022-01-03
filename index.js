// setting note from localStorage on document load
const note = document.getElementById("note");
const noteValue = localStorage.getItem("note");
note.value = noteValue;

note.addEventListener("keydown", function () {
    console.log("keydown saved");
    localStorage.setItem("note", note.value);
    localStorage.setItem("fileName", fileName.value);
});

note.addEventListener("focusout", function () {
    console.log("focusout saved");
    localStorage.setItem("note", note.value);
    localStorage.setItem("fileName", fileName.value);
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
    console.log("clear clicked");
    note.value = "";
    fileName.value = "";
    localStorage.setItem("note", "");
    localStorage.setItem("fileName", "");
});

const downloadBtn = document.getElementById("download");
downloadBtn.addEventListener("click", function () {
    console.log("download clicked");
    downloadFile();
});

function downloadFile() {
    if (note.value === "") window.alert("Content is empty lol :)");
    else {
        const e = note.value;
        const c = document.createElement("a");
        c.download = "note.txt";
        const t = new Blob([e], {
            type: "text/plain",
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
    }
}
