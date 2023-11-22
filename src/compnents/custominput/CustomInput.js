import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  multiline,
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
  icon,
  keyboard,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      multiline={multiline}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8e8'},
            ]}>
            <TouchableOpacity>
              <TextInput
                // autoFocus
                spellCheck
                returnKeyType="done"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={keyboard}
                placeholder={placeholder}
                style={[styles.input, {}]}
                secureTextEntry={secureTextEntry}
              />
            </TouchableOpacity>
          </View>

          <View>
            {error && (
              // <Text style={{color:'red', alignSelf:'stretch'}}>{error.message ||'Error'}</Text>
              <Text style={{color: 'red', alignSelf: 'stretch'}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8e8',
    // borderColor:'#880808',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    // borderColor:
  },
  input: {},
});

export default CustomInput;
