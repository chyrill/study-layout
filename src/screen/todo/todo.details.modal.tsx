import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ISubtask, ITodo, markAsComplete} from '../../store/actions/todo.action';
import React from 'react';
import moment from 'moment';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {subTaskTypeIcon} from '../../helpers/task.generator';
import {useDispatch} from 'react-redux';

interface TodoDetailsModalProps {
  show: boolean;
  onHandleClose: () => void;
  todo: ITodo | null;
}

const SubtaskItem = (item: ISubtask) => {
  return (
    <View style={todoDetailsModalStyles.subtaskItemContainer}>
      <FAIcon name={subTaskTypeIcon[item.type]} size={40} color="green" />
      <Text style={todoDetailsModalStyles.subtaskNameText}>{item.name}</Text>
    </View>
  );
};

const TodoDetailsModal = ({
  show,
  onHandleClose,
  todo,
}: TodoDetailsModalProps) => {
  const dispatch = useDispatch();

  const onPressMarkAsDone = (id: string) => {
    //@ts-ignore
    dispatch(markAsComplete(id));
  };

  return (
    <Modal
      visible={show}
      animationType="slide"
      onRequestClose={onHandleClose}
      transparent={true}>
      <View style={todoDetailsModalStyles.container}>
        <View style={todoDetailsModalStyles.innerContainer}>
          <View style={todoDetailsModalStyles.topBar}>
            <TouchableOpacity
              style={todoDetailsModalStyles.topBarCloseContainer}
              onPress={onHandleClose}>
              <Text style={todoDetailsModalStyles.topBarTextClose}>Close</Text>
            </TouchableOpacity>
            <Text style={todoDetailsModalStyles.topBarText}>
              Task Information
            </Text>
          </View>
          <View style={todoDetailsModalStyles.mainContainer}>
            <View style={todoDetailsModalStyles.taskDescriptionContainer}>
              <View
                style={todoDetailsModalStyles.taskDescriptionInnerContainer}>
                <Text
                  style={todoDetailsModalStyles.taskTitleText}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {todo?.title}
                </Text>
                <View style={todoDetailsModalStyles.taskDueDateContainer}>
                  <Text style={todoDetailsModalStyles.taskDueText}>Due:</Text>
                  <Text style={todoDetailsModalStyles.taskDueDateText}>
                    {' '}
                    {moment(todo?.dueDate).format('ddd DD MMM')}
                  </Text>
                </View>
                <View style={todoDetailsModalStyles.taskDescriptionDivider} />
                <ScrollView>
                  <Text>{todo?.description}</Text>
                </ScrollView>
              </View>
            </View>
            <View style={todoDetailsModalStyles.subtaskContainer}>
              <View style={todoDetailsModalStyles.markAsDoneContainer}>
                <TouchableOpacity
                  style={todoDetailsModalStyles.circleButton}
                  onPress={() => onPressMarkAsDone(todo?.id)}>
                  {todo?.isCompleted ? (
                    <FAIcon name="check" size={20} color={'green'} />
                  ) : null}
                </TouchableOpacity>
                <Text style={todoDetailsModalStyles.markAsDoneText}>
                  Mark as Done
                </Text>
              </View>
              <View style={todoDetailsModalStyles.nextStepsContainer}>
                <Text style={todoDetailsModalStyles.nextStepText}>
                  Next steps
                </Text>
                <FlatList
                  data={todo?.subtasks}
                  renderItem={({item}) => SubtaskItem(item)}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const todoDetailsModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '80%',
    height: 900,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  topBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topBarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  topBarCloseContainer: {
    position: 'absolute',
    left: 20,
  },
  topBarTextClose: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  taskDescriptionContainer: {
    borderRightColor: '#d1d1d1',
    borderRightWidth: 1,
    width: '70%',
    flex: 1,
  },
  taskDescriptionInnerContainer: {
    margin: 50,
    flex: 1,
  },
  taskTitleText: {
    fontSize: 20,
    fontWeight: '700',
  },
  taskDueDateContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  taskDueText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
  },
  taskDueDateText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'green',
  },
  subtaskContainer: {
    width: '30%',
    flex: 1,
  },
  taskDescriptionDivider: {
    width: '100%',
    height: 2,
    backgroundColor: 'green',
    marginVertical: 40,
  },
  markAsDoneContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
  circleButton: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  markAsDoneText: {
    fontSize: 20,
  },
  nextStepsContainer: {
    flex: 1,
    margin: 20,
  },
  nextStepText: {
    fontSize: 18,
    fontWeight: '700',
  },
  subtaskItemContainer: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
  },
  subtaskNameText: {
    paddingLeft: 20,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default TodoDetailsModal;
