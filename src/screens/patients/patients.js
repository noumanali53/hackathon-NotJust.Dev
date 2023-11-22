// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const BloodDonationApp = () => {
//   const [selectedModule, setSelectedModule] = useState('');

//   const handleModuleSelection = (moduleName) => {
//     setSelectedModule(moduleName);
//   };

//   const renderModuleOptions = () => {
//     return (
//       <View style={styles.moduleContainer}>
//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Thalesima' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Thalesima')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Thalesima' && styles.selectedModuleButtonText]}>
//             Thalesima
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Anemia' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Anemia')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Anemia' && styles.selectedModuleButtonText]}>Anemia</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Dialysis' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Dialysis')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Dialysis' && styles.selectedModuleButtonText]}>
//             Dialysis
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Transplant' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Transplant')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Transplant' && styles.selectedModuleButtonText]}>
//             Transplant
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderSelectedModuleContent = () => {
//     switch (selectedModule) {
//       case 'Thalesima':
//         return (
//           <View style={styles.moduleContentContainer}>
//             {/* Thalesima Module Content */}
//             <Text>Thalesima Module Content</Text>
//           </View>
//         );
//       case 'Anemia':
//         return (
//           <View style={styles.moduleContentContainer}>
//             {/* Anemia Module Content */}
//             <Text>Anemia Module Content</Text>
//           </View>
//         );
//       case 'Dialysis':
//         return (
//           <View style={styles.moduleContentContainer}>
//             {/* Dialysis Module Content */}
//             <Text>Dialysis Module Content</Text>
//           </View>
//         );
//       case 'Transplant':
//         return (
//           <View style={styles.moduleContentContainer}>
//             {/* Transplant Module Content */}
//             <Text>Transplant Module Content</Text>
//           </View>
//         );
//       default:
//         return (
//           <View style={styles.moduleContentContainer}>
//             {/* Default Module Content */}
//             <Text>Please select a module</Text>
//           </View>
//         );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Needy Patients</Text>
//       {renderModuleOptions()}
//       {renderSelectedModuleContent()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   moduleContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   moduleButton: {
//     marginRight: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: '#333333',
//     borderRadius: 5,
//   },
//   moduleButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   selectedModuleButton: {
//     backgroundColor: '#333333',
//   },
//   selectedModuleButtonText: {
//     color: '#FFFFFF',
//   },
//   moduleContentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default BloodDonationApp;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import CustomInput from '../../compnents/custominput/CustomInput';

// const BloodDonationApp = () => {

//   const [selectedModule, setSelectedModule] = useState('');

//   const handleModuleSelection = (moduleName) => {
//     setSelectedModule(moduleName);
//   };

//   const renderModuleOptions = () => {
//     return (
//       <View style={styles.Container}>
//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Thalesima' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Thalesima')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Thalesima' && styles.selectedModuleButtonText]}>
//             Thalesima
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Anemia' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Anemia')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Anemia' && styles.selectedModuleButtonText]}>Anemia</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Dialysis' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Dialysis')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Dialysis' && styles.selectedModuleButtonText]}>
//             Dialysis
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.moduleButton, selectedModule === 'Transplant' && styles.selectedModuleButton]}
//           onPress={() => handleModuleSelection('Transplant')}
//         >
//           <Text style={[styles.moduleButtonText, selectedModule === 'Transplant' && styles.selectedModuleButtonText]}>
//             Transplant
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderSelectedModuleContent = () => {
//     switch (selectedModule) {
//       case 'Thalesima':
//         return (
//           <View style={styles.moduleContentContainer}>
//             <Text style={styles.moduleContentText}>
//               Thalesima Disease Content and Requirements:
//               - Requirement 1 for Thalesima
//               - Requirement 2 for Thalesima
//               - Requirement 3 for Thalesima
//               ...
//             </Text>
//           </View>
//         );
//       case 'Anemia':
//         return (
//           <View style={styles.moduleContentContainer}>
//             <Text style={styles.moduleContentText}>
//               Anemia Disease Content and Requirements:
//               - Requirement 1 for Anemia
//               - Requirement 2 for Anemia
//               - Requirement 3 for Anemia
//               ...
//             </Text>
//           </View>
//         );
//       case 'Dialysis':
//         return (
//           <View style={styles.moduleContentContainer}>
//             <Text style={styles.moduleContentText}>
//               Dialysis Disease Content and Requirements:
//               - Requirement 1 for Dialysis
//               - Requirement 2 for Dialysis
//               - Requirement 3 for Dialysis
//               ...
//             </Text>
//           </View>
//         );
//       case 'Transplant':
//         return (
//           <View style={styles.moduleContentContainer}>
//             <Text style={styles.moduleContentText}>
//               Transplant Disease Content and Requirements:
//               - Requirement 1 for Transplant
//               - Requirement 2 for Transplant
//               - Requirement 3 for Transplant
//               ...

//             </Text>
//             {/* <CustomInput/> */}
//           </View>
//         );
//       default:
//         return (
//           <View style={styles.moduleContentContainer}>
//             <Text>Please select a Disease </Text>
//           </View>
//         );
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Needy Patients </Text>

//       {renderModuleOptions()}

//       {renderSelectedModuleContent()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // paddingHorizontal: 20,
//     // flexWrap: 'wrap',
//     // flexDirection: 'row',
//     alignItems: 'center',
//     // width: '100%',
//     // backgroundColor: '#3B71F3',
//     // padding: 15,
//     // marginVertical: 5,
//     // borderRadius: 10,
//     alignItems: 'center',
//     padding: 20

//     // justifyContent: 'center',
//     // flexDirection: 'row',
//     // flexWrap: 'wrap',
//     // paddingHorizontal: 20,
//     // paddingVertical: 40,
//     // justifyContent: 'space-between',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   Container: {
//     flexDirection: 'row',
//     marginBottom: 20,
//     flexWrap: 'wrap',

//     // justifyContent: 'center',
//     // paddingVertical: 40,


//   },
//   moduleButton: {
//     // margin: 20,
//     // padding: 15,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     marginBottom: 20,
//     borderColor: '#880808',
//     borderRadius: 10,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // flexDirection: 'row',
//     // flexWrap: 'wrap',


//   },
//   moduleButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   selectedModuleButton: {
//     backgroundColor: '#880808',
//   },
//   selectedModuleButtonText: {
//     color: '#FFFFFF',
//   },
//   moduleContentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   moduleContentText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
// });

// export default BloodDonationApp;



import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../compnents/customButton/CustomButton';
import CustomInput from '../../compnents/custominput/CustomInput';
import { TextInput } from 'react-native/types';
import AddRequest from '../add request/AddRequest';




const patients = () => {

  const navigation = useNavigation();
  const { control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [selectedModule, setSelectedModule] = useState('');

  const handleModuleSelection = (moduleName) => {
    setSelectedModule(moduleName);
  };

  const renderModuleOptions = () => {
    return (
      <View style={styles.root2}>
        <CustomButton
          control={control}
          text="Thalesim"
          style={[styles.moduleButton, selectedModule === 'Thalesima' && styles.selectedModuleButton]}
          onPress={() => handleModuleSelection(<AddRequest/>)}
        >
          <Text style={[ selectedModule === 'Thalesima' && styles.selectedModuleButtonText]}>
          </Text>
        </CustomButton>

        <CustomButton
          text="Transplant"
          style={[styles.moduleButton, selectedModule === 'Transplant' && styles.selectedModuleButton]}
          onPress={() => handleModuleSelection(<AddRequest/>)}
        >
          <Text style={[styles.moduleButtonText, selectedModule === 'Transplant' && styles.selectedModuleButtonText]}>
          </Text>
        </CustomButton>
        <CustomButton
          text="Animia"
          style={[styles.moduleButton, selectedModule === 'Animia' && styles.selectedModuleButton]}
          onPress={() => handleModuleSelection(<AddRequest/>)}
        >
          <Text style={[styles.moduleButtonText, selectedModule === 'Animia' && styles.selectedModuleButtonText]}>
          </Text>
        </CustomButton>
      </View>
    )
  }



  const renderSelectedModuleContent = () => {

    switch (selectedModule) {
      case 'Thalesima':
        return (
          <View>
            <Text>Thalesima </Text>
            
          </View>
        )
        case 'Transplant':
        return (
          <View>
            <Text>Thalesima </Text>
            
          </View>
        )


        case 'Animia':
        return (
          <View>
            <Text>Thalesima </Text>
            
          </View>
        )

      default:
        return (
          <View style={styles.moduleContentContainer}>
            <Text>Please select a Disease </Text>
          </View>
        );
    }

  }

  return (

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Text style={styles.title}>Patients</Text>


        {renderModuleOptions()}
        {renderSelectedModuleContent()}
        {/* <Text>patients</Text> */}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  root2: {
    flexDirection: 'row',
    // marginBottom: 20,
    flexWrap: 'wrap',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#880808',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  // moduleButtonText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#333333',
  // },

  // selectedModuleButtonText: {
  //   color: '#FFFFFF',
  // },

  // selectedModuleButton: {
  //       backgroundColor: '#880808',
  //     },
  //     selectedModuleButtonText: {
  //       color: '#FFFFFF',
  //     },

})

export default patients


