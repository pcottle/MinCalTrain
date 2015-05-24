var assign = require('object-assign');
var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var Colors = require('../constants/Colors');
var Routes = require('../constants/Routes');
var Stations = require('../constants/Stations');

var StationSelectView = React.createClass({

  propTypes: {
    onStationSelect: React.PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.stationContainer}>
          {Stations.map(
            (station) => this.renderStationSelector(station),
          )}
        </View>
      </ScrollView>
    );
  },

  renderStationSelector: function(station) {
    return (
      <TouchableHighlight
        key={station.id}
        onPress={this.props.onStationSelect}
        underlayColor={Colors.LIOHUA}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.stationName}>
              {station.name}
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
      </TouchableHighlight>
    );
  },

});

var styles = StyleSheet.create({
  callToAction: {
    backgroundColor: Colors.DEEPER,
    padding: 12,
  },
  callToActionText: {
    color: '#111'
  },
  divider: {
    height: 1,
    backgroundColor: Colors.DEEPER,
  },
  textContainer: {
    padding: 16,
  },
  stationName: {
    color: '#EEE'
  },
  container: {
    backgroundColor: Colors.GREY,
  },
  headerSpacer: {
    backgroundColor: Colors.SHE_DRESSED_ME,
    height: 22,
  },
  scrollSpacer: {
    height: 184,
    flex: 1
  },
});

module.exports = StationSelectView;