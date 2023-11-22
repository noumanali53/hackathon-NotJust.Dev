import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../../compnents/custominput/CustomInput';
import CustomButton from '../../../compnents/customButton/CustomButton';
// import CustomSocialButton from '../../compnents/customsocialbutton/CustomSocialButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  // const pwd=watch('password')

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    navigation.navigate('ConfirmInformation');
  };

  const onForgettPasswordPressed = data => {
    navigation.navigate('ForgetPassword');
  };

  const onSignUpPress = data => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* login page py logo show krwany ky liya */}
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        {/* user sy UserName input krwany ky liya */}
        <CustomInput
          name="Phone Number "
          placeholder="03XXXXXXXXX"
          control={control}
          keyboard="number-pad"
          rules={{
            required: 'Phone Number is Required',
            minLength: {
              value: 11,
            },
          }}
        />

        {/* For Password user Input */}
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{
            // validate:value=>value.length<5?true:'password do not match',
            // validate:value=>value.length<5||'password do not match',
            // validate: value => value === pwd || 'password do not match',

            required: 'Password is Required',
            minLength: {
              value: 4,
              message: 'Password should be minimum 4 character long',
            },
            maxLength: {
              value: 16,
            },
          }}
        />
        <CustomButton text="Log In" onPress={handleSubmit(onSignInPressed)} />
        {/* Sign In Button */}

        {/* TERTIANARY Button  */}
        <CustomButton
          text="Forget Password"
          onPress={onForgettPasswordPressed}
          type="TERTIARY"
        />

        {/* <CustomSocialButton /> */}
        <CustomButton
          text="Don't have an account? Create one "
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
  },
});

export default SignInScreen;
