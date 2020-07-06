import * as firebase from 'firebase/app';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyCAh-qpq22gmZ__SmxI-VYeTdizSahVWJU",
    authDomain: "photography-bd132.firebaseapp.com",
    databaseURL: "https://photography-bd132.firebaseio.com",
    projectId: "photography-bd132",
    storageBucket: "photography-bd132.appspot.com",
    messagingSenderId: "1004088657969",
    appId: "1:1004088657969:web:27b8d2e6ad243c32fb2d10",
    measurementId: "G-RRGVHZFERP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var storage = firebase.storage();
var storageRef = firebase.storage().ref();

//upload images to firebase storage returns promise list of urls.
export const uploadImages = async (files, userId) => {
    // const promises = [];
    let urlList=[];
    await files.forEach(file => {

        const uploadTask = storageRef.child(`images/${userId}/` + file.name).put(file);
            // promises.push(uploadTask)
        // Listen for state changes, errors, and completion of the upload.
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                }
            }, 
            function(error) {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                    case 'storage/canceled':
                    // User canceled the upload
                    break;

                    case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
            },  function() {
            // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                  urlList.push(downloadUrl); 
                })
            });            
    });

    return urlList;
    //include all requests in single promise
//    return Promise.all(promises)
//         .then(() => {
//             // url List
//             return urlList;
//         })
//         .catch(err => console.log(err.code));
 }

// save those urls in database
// display images into edit page.
// allow the user to replace the images to a new set of images
//                        or
// display images into upload images widget
// user can add, delete and replace one or multiple images
// user once the user clicks uplod it first uploades and deletes the unwanted images and returns the new url.
// that list of url is saved in the database.
// to edit ads we need to retrive storage path from the url

//Function to delete Image
export const deleteImage = (imageUrl) => {
    // create reference
    var httpsReference = storage.refFromURL(`${imageUrl}`)
    console.log(httpsReference)

        return httpsReference.delete().then((res)=>{
            console.log(res)
            return res
       }).catch(err => {
            console.log(err)
           return err
       })
}