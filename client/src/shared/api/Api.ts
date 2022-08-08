const sendHttpRequest = (method: string, addon: string, dataPost?: Object) => {
    const baseUrl: string = "http://localhost:3001";
  const promise = new Promise((resolve, reject) => {
    let url: string = baseUrl + addon;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";

    if (dataPost) {
      xhr.setRequestHeader("Content-Type", "application/json");
    }

    xhr.onload = () => {
      resolve(xhr.response);
    };

    //Pass error object here
    xhr.onerror = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
      resolve(xhr.response);
    };

    xhr.send(JSON.stringify(dataPost));
  });
  return promise;
};

const getRequest = (addon: string) => {
  sendHttpRequest("GET", addon)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postRequest = (addon: string, dataPost: Object) => {
  sendHttpRequest("POST", addon, dataPost)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateRequest = (addon: string, dataPost: Object) => {
  sendHttpRequest("PUT", addon, dataPost)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteRequest = (addon: string, dataPost: Object) => {
  sendHttpRequest("PUT", addon, dataPost)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {deleteRequest, updateRequest, postRequest, getRequest};
