
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid, Linking, Pressable } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import CustomInput from '../custominput/CustomInput';
import CustomButton from '../customButton/CustomButton';
import { useForm } from 'react-hook-form';



// Function to get permission for location
const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};


const FindLocation = () => {

    const { control,
        handleSubmit,
        formState: { errors }
    } = useForm()
    // state to hold location
    const [location, setLocation] = useState(false);
    // function to check permissions and get Location
    const getLocation = (value) => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
        // console.log(location);
        setInputValue(inputValue + value);
    };
    // Function to Send Location to twitter
    const sendLocation = () => {
        try {
            if (location) {
                const map = `latitude is ${location.coords.latitude} and longitude is ${location.coords.longitude}`;
                const url = `https://www.google.com/maps/@?api=1&map_action=map&parameters?text=${tweet}`;
                Linking.openURL(url);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const [text, settext] = useState("")

    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <CustomInput
                control={control}
                name='location'
                placeholder="Location"
                // value={location ? `${location.coords.latitude}, ${location.coords.longitude}` : ''}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
            // rules={{
            //   required: 'Provide Valide Name',
            // }}
            />

            {/* <Text style={styles.text} >Latitude: {location ? location.coords.latitude : null}</Text>
            <Text style={styles.text}>Longitude: {location ? location.coords.longitude : null}</Text> */}
            <View >
                {/* style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}> */}
                {/* <Button style={styles.btn} title="Get Location" onPress={getLocation} /> */}
                <View style={styles.btn1}>
                    <CustomButton
                        text="Get Location"
                        // onPress={getLocation}
                        onPress={() => getLocation(location?location.coords.latitude:null)}

                    // location={location?location.coords.latitude:null}
                    />
                </View>

            </View>



            {/* <View style={styles.btn}> */}
            {/* style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}> */}
            <View style={styles.btn1}>
                <CustomButton
                    text="Send Location"
                    onPress={sendLocation}
                />

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        // padding: 20,
        // marginVertical: 5,
        // borderRadius: 9,
    },
    btn1: {
        alignSelf: 'stretch',
        // alignItems: 'center',
        // width: '100%',
        // // backgroundColor: '#3B71F3',
        // padding: 15,
        // marginVertical: 5,
        // borderRadius: 10,
        width: '40%',
        // backgroundColor:'black'
        // backgrounColor:'yellow'
        // height: 50,
        // borderRadius: 10,
        // backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginBottom: 20,
    },
    text: {
        fontWeight: 'bold',

        // color: 'black',
        // width: '30%',
        // height: 50,
        marginBottom: 20,
        // marginTop: 20,
    }
});


export default FindLocation;


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, PermissionsAndroid, Linking } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import CustomInput from '../custominput/CustomInput';
// import CustomButton from '../customButton/CustomButton';
// import { useForm } from 'react-hook-form';

// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Geolocation Permission',
//         message: 'Can we access your location?',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     console.log('granted', granted);
//     if (granted === 'granted') {
//       console.log('You can use Geolocation');
//       return true;
//     } else {
//       console.log('You cannot use Geolocation');
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };

// const FindLocation = () => {
//   const { control, handleSubmit } = useForm();

//   const [location, setLocation] = useState(null);

//   const getLocation = () => {
//     const result = requestLocationPermission();
//     result.then(res => {
//       console.log('res is:', res);
//       if (res) {
//         Geolocation.getCurrentPosition(
//           position => {
//             console.log(position);
//             setLocation(position);
//           },
//           error => {
//             console.log(error.code, error.message);
//             setLocation(null);
//           },
//           { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//         );
//       }
//     });
//   };

//   const sendLocation = () => {
//     try {
//       if (location) {
//         const map = `latitude is ${location.coords.latitude} and longitude is ${location.coords.longitude}`;
//         const url = `https://www.google.com/maps/@?api=1&map_action=map&parameters?text=${map}`;
//         Linking.openURL(url);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <CustomInput
//         control={control}
//         name='location'
//         placeholder="Location"
//         value={location ? `${location.coords.latitude}, ${location.coords.longitude}` : ''}
//       />

//       <View style={styles.btn1}>
//         <CustomButton
//           text="Get Location"
//           onPress={getLocation}
//         />
//       </View>

//       <View style={styles.btn1}>
//         <CustomButton
//           text="Send Location"
//           onPress={sendLocation}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   btn1: {
//     alignSelf: 'stretch',
//     width: '40%',
//   },
// });

// export default FindLocation;


// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// const App = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     const watchId = Geolocation.watchPosition(
//       position => {
//         setLocation(position.coords);
//       },
//       error => {
//         console.log(error);
//       },
//       { enableHighAccuracy: true, distanceFilter: 10 }
//     );

//     return () => {
//       Geolocation.clearWatch(watchId);
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={location ? `${location.latitude}, ${location.longitude}` : ''}
//         placeholder="Location"
//         editable={false}
//       />

//       <Button title="Stop Updating Location" onPress={() => Geolocation.stopObserving()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default App;


// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ToastAndroid } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// const App = () => {
//   const [location, setLocation] = useState(null);

//   useEffect(() => {
//     const watchId = Geolocation.watchPosition(
//       position => {
//         setLocation(position.coords);
//       },
//       error => {
//         console.log(error);
//       },
//       { enableHighAccuracy: true, distanceFilter: 10 }
//     );

//     return () => {
//       Geolocation.clearWatch(watchId);
//     };
//   }, []);

//   const handleSearchLocation = () => {
//     // Add your logic for searching the location here
//     console.log('Search Location');
//   };

//   const handleCopyLocation = () => {
//     if (location) {
//       const locationString = `${location.latitude}, ${location.longitude}`;
//       ToastAndroid.show('Location copied!', ToastAndroid.SHORT);
//       console.log('Location copied:', locationString);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={location ? `${location.latitude}, ${location.longitude}` : ''}
//         placeholder="Location"
//         editable={false}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSearchLocation}>
//         <Text style={styles.buttonText}>Search Location</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleCopyLocation}>
//         <Text style={styles.buttonText}>Copy Location</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderWidth: 1,
//     borderColor: 'gray',
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#3B71F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default App;
