import * as ImagePicker from 'react-native-image-picker';
import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native/types';

const ProfilePictureUploader = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = async () => {
    const { status } = await requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission is required to upload a profile picture.');
      return;
    }

    const result = await launchCamera({
      mediaTypes: 'photo',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.profileImage} />
      ) : (
        <View style={styles.placeholder} />
      )}

      <Button title="Take Photo" onPress={openCamera} style={{ backgroundColor: '#880808' }}></Button>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  placeholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#CCCCCC',
    // border:'#880808',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#880808',

  }
});
export default ProfilePictureUploader

// import React, { useState } from 'react';
// import { View, Image, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import {launchCamera,launchImageLibrary } from 'react-native-image-picker';

// const ProfilePictureUploader = () => {



//   // const openCamera = () => {
//   //   const options = {
//   //     mediaType: 'photo',
//   //     quality: 1,
//   //     allowsEditing: true,
//   //     aspect: [1, 1],
//   //   };

//   //   ImagePicker.launchCamera(options, (response) => {
//   //     if (response.didCancel) {
//   //       console.log('User cancelled image picker');
//   //     } else if (response.error) {
//   //       console.log('ImagePicker Error: ', response.error);
//   //     } else if (response.uri) {
//   //       setImageUri(response.uri);
//   //     }
//   //   });
//   // };

//   const [state, setState] = useState({
//     photo: '',
    

//   });

//   const option = {
//     mediaType: 'photo',
//     quality:1,
//     saveToPhoto:true,
//   }

//   const openCamera = () => {

//     launchCamera(option,(res)=>{
//       console.log(res)
//     })
//   }

//   return (
//     <View style={styles.container}>

//       {state.photo == "" ?
//         (<Text>No Image</Text>
//         ) : (<image source={{ uri: state.photo }} />
//         )}

//       <View>
//         <TouchableOpacity onPress={openCamera}>
//           <Text>Open Camera</Text>
//         </TouchableOpacity>
//       </View>
//       {/* {imageUri ? (
//         <Image source={{ uri: imageUri }} style={styles.profileImage} />
//       ) : (
//         <View style={styles.placeholder} />
//       )}
//       <Button title="Take Photo" onPress={openCamera} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 10,
//   },
//   placeholder: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#CCCCCC',
//     marginBottom: 10,
//   },
// });

// export default ProfilePictureUploader;



// import React, { Component } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { CameraKitCamera } from 'react-native-camera-kit';

// class ImageCapture extends Component {
//   constructor(props) {
//     super(props);
//     this.camera = null;
//     this.state = {
//       imageUri: null
//     };
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = {
//         quality: 0.5,
//         base64: true,
//         detectFaces: true // Enable face detection
//       };

//       const data = await this.camera.capture(options);
//       this.setState({ imageUri: data.uri });
//     }
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <CameraKitCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={{ flex: 1 }}
//           cameraOptions={{
//             flashMode: 'auto', // Set flash mode
//             focusMode: 'on' // Set focus mode
//           }}
//         />
//         <TouchableOpacity onPress={this.takePicture} style={{ alignSelf: 'center', margin: 20 }}>
//           <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Capture Image</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default ImageCapture;


// import React, { Component } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import { CameraKitCameraView } from 'react-native-camera-kit';

// class ProfilePictureUploader extends Component {
//   constructor(props) {
//     super(props);
//     this.camera = null;
//     this.state = {
//       imageUri: null
//     };
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = {
//         quality: 0.5,
//         base64: true,
//         detectFaces: true // Enable face detection
//       };

//       const data = await this.camera.capture(options);
//       this.setState({ imageUri: data.uri });
//     }
//   };

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <CameraKitCameraView
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={{ flex: 1 }}
//           cameraOptions={{
//             flashMode: 'auto', // Set flash mode
//             focusMode: 'on' // Set focus mode
//           }}
//         />
//         <TouchableOpacity onPress={this.takePicture} style={{ alignSelf: 'center', margin: 20 }}>
//           <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Capture Image</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default ProfilePictureUploader;
