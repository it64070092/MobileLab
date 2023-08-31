import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, TextInput, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';

export default function App() {
  const courses = [
    { id: 1, name: 'Artificial Intelligence Technology', imagepath: require('./assets/course-bach-ait.jpg') },
    { id: 2, name: 'Business Information Technology (International Program)', imagepath: require('./assets/course-bach-bit.jpg') },
    { id: 3, name: 'Data Science and Business Analytics', imagepath: require('./assets/course-bach-dsba.jpg') },
    { id: 4, name: 'Information Technology', imagepath: require('./assets/course-bach-it.jpg') }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.stickyBar}>
        <Image source={require('./assets/IT_Logo.png')} style={styles.Logo} />
        <Text style={styles.textIcon}>Programs</Text>
      </View>
      <FlatList
        style={styles.content}
        data={courses}
        keyExtractor={(course) => course.id.toString()}
        renderItem={({ item }) => (

            <View style={styles.container}>
              <Image style={styles.course} source={item.imagepath} />
              <TouchableOpacity>
                <Text style={styles.textCourse}>{item.name}</Text>
              </TouchableOpacity>
            </View>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 100,
    backgroundColor: 'lightgrey',
  },
  stickyBar: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: '12%',
    backgroundColor: 'lightblue',
  },
  textIcon: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 40,
    marginLeft: 60,
  },
  textCourse: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  Logo: {
    width: '20%',
    height: '50%',
    marginTop: 30,
    marginLeft: 20,
    resizeMode: 'contain',
  },
  // itemContainer: {
  //   marginBottom: 20,
  // },
  course: {
    width: '100%',
    resizeMode: 'stretch',
  },
});

// export default function Example01() {
//   const [text, setText] = useState("");
//   const [textarr, setTextArr] = useState([]);

//   const getText = () => {
//     setTextArr([...textarr, { id: textarr.length + 1, name: text }]);
//     console.log(textarr)
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 18 }}>สมุดบันทึก</Text>
//       <TextInput
//         placeholder="Write something here..."
//         style={styles.input}
//         value={text}
//         onChangeText={(input) => {
//           setText(input);
//         }}
//       />
//       <View style={styles.btncontainer}>
//         <Button onPress={getText} title="บันทึก">
//         </Button>
//       </View>

//       <ScrollView contentContainerStyle={styles.outputcontainer}>
//         {textarr.map((item) => {
//           return (
//             <View key={item.id} style={styles.child}>
//               <Text style={styles.outputtext}>{item.name}</Text>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 40,
//     flex: 1,
//     alignItems: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#000",
//     padding: 10,
//     width: "70%",
//     marginVertical: 10,
//   },
//   outputtext: {
//     fontSize: 20,
//     padding: 30
//   },
//   btntext: {
//     padding: 10,
//     textAlign: 'center',
//     color: 'white'
//   },
//   btncontainer: {
//     backgroundColor: "#2196F3",
//     width: "70%",
//   },
//   outputcontainer: {
//     // backgroundColor: "#2196F3",
//     marginVertical: 30,
//   },
// });
