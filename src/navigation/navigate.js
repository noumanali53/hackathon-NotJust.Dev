import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/auth/signInScreen/SignInScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import SignUpScreen from '../screens//singupscreen/SignUpScreen';
import ConfirmInformation from '../screens//confirmation/ConfirmInfromation';
import ForgetPasswordScreen from '../screens/auth/forgetpasswordscreen/ForgetPasswordScreen';
import NewPasswordScreen from '../screens/auth/newpasswordscreen/NewPasswordScreen';
import ConfirmEmailScreen from '../screens/auth/confirmEmailScreen/ConfirmEmailScreen';
// import TermsConditions from '../screens/auth/terms&Conditions/TermsConditions'
import PrivacyPolicy from '../screens/auth/privacypolicy/PrivacyPolicy';
// import UseTogglePassword from '../compnents/usetogglepasswordvisibility/UseTogglePassword'
import patients from '../screens/patients/patients';
import AddRequest from '../screens/add request/AddRequest';
import DonorProfile from '../screens/donor profile/DonorProfile';
import AddVolunteer from '../screens/volunteers/Volunteer';
import SetReminder from '../screens/setreminder/SetReminder';
import Scheduler from '../screens/scheduler/Scheduler';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* All navigation screen work to one screen to another screen */}
        {/* <Stack.Screen name='new' component={UseTogglePassword}/> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="ConfirmInformation"
          component={ConfirmInformation}
        />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen name='TermsConditions' component={Terms&Conditions} /> */}
        {/* <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} /> */}
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        {/* <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} /> */}
        <Stack.Screen name="patients" component={patients} />
        <Stack.Screen name="AddRequest" component={AddRequest} />
        <Stack.Screen name="DonorProfile" component={DonorProfile} />
        <Stack.Screen name="AddVolunteer" component={AddVolunteer} />
        <Stack.Screen name="SetReminder" component={SetReminder} />
        <Stack.Screen name="Scheduler" component={Scheduler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DiseaseSelectionScreen from '../screens/test/DiseaseSelectionScreen';
import PatientInformationScreen from '../screens/test/PatientInformationScreen';
import SubmissionScreen from '../screens/test/SubmissionScreen';
import ConfirmationScreen from '../screens/test/ConfirmationScreen';

// const Stack = createNativeStackNavigator();

// // const Stack = createStackNativeNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="DiseaseSelection">
//         <Stack.Screen name="DiseaseSelection" component={DiseaseSelectionScreen} />
//         {/* <Stack.Screen name="PatientInformation" component={PatientInformationScreen} />
//         <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
//         <Stack.Screen name="Submission" component={SubmissionScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
