import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase"; // Ensure correct import

const ImageUpload = ({ onUploadSuccess }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewURL(URL.createObjectURL(file)); // Create a temporary preview URL
    }
  };

  const handleImageUpload = async () => {
    if (!profileImage) {
      console.log("No image selected");
      return;
    }

    setIsLoading(true);

    // Create a storage reference
    const storageRef = ref(storage, `profilePictures/${Date.now()}_${profileImage.name}`);

    // Upload the file
    const uploadTask = uploadBytesResumable(storageRef, profileImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optional: Track progress here
      },
      (error) => {
        console.error("Error uploading image: ", error);
        setIsLoading(false);
      },
      async () => {
        // On successful upload, get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref());
        console.log("File available at", downloadURL);
        setIsLoading(false);
        // Pass the URL back to the parent component
        onUploadSuccess(downloadURL);
      }
    );
  };

  return (
    <div className="image-upload">
      {isLoading ? (
        <div>Loading...</div> // Show loading state here
      ) : (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field-signup"
          />
          {/* Show Image Preview */}
          {previewURL && (
            <div className="image-preview">
              <img src={previewURL} alt="Profile Preview" className="profile-preview-img" />
            </div>
          )}
          <button type="button" className="button-signup" onClick={handleImageUpload}>
            Upload Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
