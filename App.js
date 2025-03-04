import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre obligatorio')
    .min(3, 'Nombre muy corto'),
  apellido: Yup.string()
    .required('Apellido obligatorio')
    .min(3, 'Apellido muy corto'),
  numero: Yup.string()
    .required('Número obligatorio')
    .min(8, 'Número muy corto'),
});

const BasicForm = () => (
  <Formik
    initialValues={{ name: '', apellido: '', numero: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
        {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Apellido"
          onChangeText={handleChange('apellido')}
          onBlur={handleBlur('apellido')}
          value={values.apellido}
        />
        {touched.apellido && errors.apellido && <Text style={styles.errorText}>{errors.apellido}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Número"
          keyboardType="numeric"
          onChangeText={handleChange('numero')}
          onBlur={handleBlur('numero')}
          value={values.numero}
        />
        {touched.numero && errors.numero && <Text style={styles.errorText}>{errors.numero}</Text>}

        <Button onPress={handleSubmit} title="Enviar" />
      </View>
    )}
  </Formik>
);

export default function App() {
  return (
    <View style={styles.container}>
      <BasicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
