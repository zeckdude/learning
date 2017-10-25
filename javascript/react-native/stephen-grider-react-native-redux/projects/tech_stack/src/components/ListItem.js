import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';

// Import everything that was exported in the specified file
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    // Animate any elements in component that changes
    LayoutAnimation.easeInEaseOut();
    //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{paddingLeft: 15}}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// By passing in this callback function as the 1st parameter to the connect() helper method,
// our function gets access to all state in the store and we simply need to specify which
// state we want available on this component as a prop that we make up
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

// By passing in `actions` as the 2nd parameter to the connect() helper method,
// it passes the action creator methods to the component as props
export default connect(mapStateToProps, actions)(ListItem);
