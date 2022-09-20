import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SearchBar} from './SearchBar';

export const ResturentDetail = () => {
  return (
    <>
      <SafeAreaView style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={'#f3f3f3'} barStyle={'dark-content'} />
        <SearchBar placeholder="🔍 Cosa stai cercando?" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          style={{height: '100%', flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              width: '100%',
              flex: 1,
            }}>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
            <View style={styles.listMain}>
              <Image
                style={styles.imageSet}
                source={require('../src/img/place.png')}
              />
              <View style={{flex: 1}}>
                <View style={styles.resturentName}>
                  <Text style={{fontWeight: 'bold'}}>Birrenia</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text style={{textAlign: 'center'}}>Visualizza</Text>
                    <MaterialIcons name="chevron-right" size={20} />
                  </View>
                </View>
                <Text>Via Indipendenza 1, Milano (MI)</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  listMain: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  resturentName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageSet: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    marginRight: 12,
  },
});
