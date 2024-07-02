import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {IPeople} from '.';
import CircleAvatar from '../Avatar';
import {useEffect} from 'react';

interface IModalPeopleInfoProps {
  show: boolean;
  handleShowInfo: () => void;
  people: IPeople;
}

const ModalPeopleInfo = (data: IModalPeopleInfoProps) => {
  const {show, handleShowInfo, people} = data;

  if (!people) {
    return null;
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={show}
      onRequestClose={handleShowInfo}>
      <View style={styles.modalPeopleMainContainer}>
        <View style={styles.modalPeopleMainCard}>
          <TouchableOpacity
            onPress={handleShowInfo}
            style={styles.modalPeopleMainCardCloseButton}>
            <Text style={styles.modalPeopleMainCardCloseButtonText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.modalPeopleMainCardTopContent}>
            <View style={styles.modalPeopleMainCardTopContentLeftSection}>
              <Text style={styles.modalPeopleMainCardTopContentLeftSectionText}>
                {people.firstName}
              </Text>
              <Text
                style={{
                  ...styles.modalPeopleMainCardTopContentLeftSectionText,
                  textTransform: 'uppercase',
                }}>
                {people.lastName}
              </Text>
            </View>
            <View style={styles.modalPeopleMainCardTopContentCenterSection}>
              <CircleAvatar size={200} source={people.avatar} borderWidth={5} />
            </View>
            <View style={styles.modalPeopleMainCardTopContentRightSection}>
              <Text
                style={styles.modalPeopleMainCardTopContentRightSectionText}>
                {people.nationality}
              </Text>
            </View>
          </View>
          <View style={styles.modalPeopleMainCardBottomContent}>
            <View style={styles.modalPeopleMainCardBottomInnerContent}>
              <Text
                style={styles.modalPeopleMainCardBottomInnerContentJobTitle}>
                {people.jobTitle}
              </Text>
              <View style={styles.modalPeopleMainCardBottomContentDetails}>
                <View style={{width: '45%'}}>
                  <Text
                    style={styles.modalPeopleMainCardBottomContentDetailsTitle}>
                    Biography
                  </Text>
                  <ScrollView
                    contentContainerStyle={
                      styles.modalPeopleMainCardBioContent
                    }>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#525252',
                        textAlign: 'auto',
                      }}>
                      {people.bio}
                    </Text>
                  </ScrollView>
                </View>
                <View style={{width: '45%'}}>
                  <Text
                    style={styles.modalPeopleMainCardBottomContentDetailsTitle}>
                    Contact Details
                  </Text>
                  <ScrollView
                    contentContainerStyle={
                      styles.modalPeopleMainCardContactContent
                    }>
                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 20,
                      }}>
                      <Text style={{color: 'orange', fontSize: 18}}>
                        Add to Contacts
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 1,
                        backgroundColor: '#5252522e',
                        marginVertical: 10,
                      }}
                    />
                    <View style={{paddingHorizontal: 20, paddingTop: 20}}>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentTitleText
                        }>
                        Phone
                      </Text>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentValueText
                        }>
                        {people.phone}
                      </Text>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentTitleText
                        }>
                        Company
                      </Text>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentValueText
                        }>
                        {people.company}
                      </Text>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentTitleText
                        }>
                        Work Country
                      </Text>
                      <Text
                        style={
                          styles.modalPeopleMainCardContactContentValueText
                        }>
                        {people.country}
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPeopleInfo;
