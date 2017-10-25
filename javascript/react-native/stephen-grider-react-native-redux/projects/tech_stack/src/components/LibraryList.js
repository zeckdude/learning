import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// Create a connection between the redux store and the component
  // Take the global state and map specific state as props to pass to the component
  const mapStateToProps = state => {
    return { libraries: state.libraries };
  };

  // The connect() helper method makes the properties in the returned
  // object (from the mapStateToProps function) available in the render method as props
  export default connect(mapStateToProps)(LibraryList);

/*


 */

/*
Steps to implement redux
  1. When app boots up, redux creates a new store (a collection of state properties)
    - Relevant code example:
        createStore(reducers)
  2. The store looks at the reducers that are defined in step 1 and creates initial state properties based on the reducers specified
  3. The store is passed to the <Provider> component as a prop (the Provider component aids in communication between React and Redux).
     The provider needs to be the outermost component element in the app so it can pass the various state properties to descendant components.
     - Relevant code example:
       const App = () => {
         return (
           <Provider store={createStore(reducers)}>
             <View>
               <Header headerText="Tech Stack" />
               <LibraryList />
             </View>
           </Provider>
         );
       };
  4. The App is rendered to the screen including any descendant components within it
  5. Any components that need access to the store uses the connect() method to pass the specified state property to the component.
     The connect() method has access to the store within the <Provider> component and can request specific state properties to pass to another component as props.
    - Relevant code example:
        class LibraryList extends Component {
          render() {
            console.log(this.props);
          }
        }

        const mapStateToProps = state => {
          return { libraries: state.libraries };
        };

        export default connect(mapStateToProps)(LibraryList);
*/
