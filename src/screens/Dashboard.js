import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Device from 'expo-device';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function Dashboard() {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const deviceRoot = async () => {
    const res = await Device.isRootedExperimentalAsync();
    const emulatorDevice = Device.isDevice;
    console.log('Current result', res);
    console.log('Is Real Device', emulatorDevice);
    if (res) {
      console.log('Device is rooted !');
      setAlertMessage('Device is Rooted !');
    } else {
      console.log('Device is not rooted !');
      setAlertMessage('Device is not Rooted !');
    }
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: 15, fontSize: 20, fontWeight: '600' }}>
        Home
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={deviceRoot}
      >
        <Text style={styles.buttonText}>Check Root</Text>
      </Pressable>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isAlertVisible}
        onRequestClose={closeAlert}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              {alertMessage}
            </Text>
            <TouchableOpacity onPress={closeAlert} style={styles.closeButton}>
              <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#0056b3',
    padding: 10,
    borderRadius: 7,
  },
});
