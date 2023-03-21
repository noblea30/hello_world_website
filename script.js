
const uploadBtn = document.getElementById("upload-btn");
const fileInput = document.createElement("input");
fileInput.type = "file";
fileInput.style.display = "none";
document.body.appendChild(fileInput);

uploadBtn.addEventListener("click", function() {
  fileInput.click();
});

fileInput.addEventListener("change", function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function() {
    const fileContent = reader.result;
    const blob = new Blob([fileContent], { type: "image/jpeg" });
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  });

  reader.readAsArrayBuffer(file);
});
