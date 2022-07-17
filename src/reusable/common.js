export const imageUploadCallBack = (file) =>
  new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let img = new Image();
    // let url = ''
    reader.onload = function (e) {
      img.src = this.result;
      resolve({
        data: {
          link: img.src,
        },
      });
    };
  });

  export const innerText = (data) => {
    const div = document.createElement("div");
    div.innerHTML = data;
    return div.innerText;
  };