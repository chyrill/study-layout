import {connect, ConnectedProps} from 'react-redux';
import {addTodo, ITodo} from '../../store/actions/todo.action';
import {RootState} from '../../store/reducers';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import TodoDetailsModal from './todo.details.modal';

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const TodoScreen: React.FC<Props> = ({todos, addTodo}) => {
  const [todoItems, setTodoItems] = useState<ITodo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onSelectTodo = (id: string) => {
    const todo = todoItems.find(x => x.id === id);
    if (todo) {
      setSelectedTodo(todo);
      setShowModal(true);
    }
  };

  useEffect(() => {
    const _todos = todos as ITodo[];
    setTodoItems(todos as ITodo[]);
    if (selectedTodo) {
      setSelectedTodo(_todos.find(x => x.id === selectedTodo.id) || null);
    }
  }, [selectedTodo, todos]);

  const todoItem = (item: ITodo) => (
    <View style={todoScreenStyles.todoItemContainer}>
      <View style={todoScreenStyles.todoItemMarkAsDoneContainer}>
        <Text style={{paddingBottom: 20}}>Mark as done</Text>
        <View style={todoScreenStyles.circleButtonDone}>
          {item.isCompleted ? (
            <FAIcon name="check" size={50} color="green" />
          ) : null}
        </View>
      </View>
      <View style={{flex: 1, margin: 40}}>
        <View style={{flexDirection: 'row', paddingBottom: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>DUE</Text>
          <Text style={{color: 'green', fontSize: 16}}>
            {' '}
            {moment(item.dueDate).format('ddd DD MMM')}
          </Text>
        </View>
        <Text style={{fontSize: 24, fontWeight: 500, paddingBottom: 10}}>
          {item.title}
        </Text>
        <Text
          style={{fontSize: 16, paddingBottom: 10}}
          ellipsizeMode="tail"
          numberOfLines={4}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => onSelectTodo(item.id)}
        style={{
          width: 10,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 20,
        }}>
        <FAIcon name="chevron-right" color="orange" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={todoScreenStyles.container}>
      <TopNavigation todos={todos as ITodo[]} />
      <View style={todoScreenStyles.flatListContainer}>
        <FlatList
          data={todos as ITodo[]}
          renderItem={({item}) => todoItem(item)}
          keyExtractor={(item: ITodo) => item.id}
          key={1}
          style={todoScreenStyles.flatListStyle}
        />
      </View>
      <TodoDetailsModal
        show={showModal}
        onHandleClose={() => setShowModal(false)}
        todo={selectedTodo!}
      />
    </View>
  );
};

export default connector(TodoScreen);

const todoScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  flatListStyle: {
    width: 800,
  },
  todoItemContainer: {
    backgroundColor: 'white',
    height: 200,
    marginVertical: 20,
    flexDirection: 'row',
  },
  todoItemMarkAsDoneContainer: {
    width: 200,
    height: '100%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonDone: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* region for top Navigation */
interface ITopNavigationProps {
  todos: ITodo[];
}
const TopNavigation = (props: ITopNavigationProps) => {
  const {todos} = props;
  return (
    <View style={topNavigationStyles.container}>
      <View style={topNavigationStyles.innerContainer}>
        <View style={topNavigationStyles.buttonContainer}>
          <FAIcon
            name="search"
            size={20}
            color="white"
            style={topNavigationStyles.buttonStyle}
          />
          <FAIcon
            name="refresh"
            size={20}
            color="white"
            style={topNavigationStyles.buttonStyle}
          />
        </View>
        <Text style={topNavigationStyles.countText}>
          {todos.filter(x => !x.isCompleted).length} {' items left to do'}
        </Text>
      </View>
    </View>
  );
};

const topNavigationStyles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  innerContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  countText: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
  buttonStyle: {
    marginHorizontal: 10,
  },
});
