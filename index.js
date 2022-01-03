// setting note from localStorage on document load
const note = document.getElementById("note");
const noteValue = localStorage.getItem("note");
note.value = noteValue;

note.addEventListener("keydown", function () {
    localStorage.setItem("note", note.value);
});

note.addEventListener("focusout", function () {
    localStorage.setItem("note", note.value);
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", function () {
    note.value = "";
    localStorage.setItem("note", "");
});

const downloadBtn = document.getElementById("download");
downloadBtn.addEventListener("click", function () {
    if (note.value === "") window.alert("Please enter something in notes!");
    else {
        const text = note.value;
        const downloadLink = document.createElement("a");
        downloadLink.download = "note.txt";
        const t = new Blob([text], {
            type: "text/plain",
        });
        downloadLink.href = window.URL.createObjectURL(t);
        downloadLink.click();
    }
});
