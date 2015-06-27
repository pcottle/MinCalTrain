var React = require('react-native');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var Colors = require('../constants/Colors');
var Routes = require('../constants/Routes');
var Stations = require('../constants/Stations');
var TimeTables = require('../time_tables/TimeTables');
var ListRowView = require('../views/ListRowView');
var BorderedScrollView = require('../views/BorderedScrollView');

var StationSelectView = React.createClass({

  propTypes: {
    onStationSelect: React.PropTypes.func.isRequired,
    omitStation: React.PropTypes.string,
  },

  render: function() {
    var todayStations = TimeTables.getStationsForDay(
      new Date()
    );
    return (
      <BorderedScrollView 
        style={styles.container}>
        <View style={styles.stationContainer}>
          {todayStations.map(
            (station) => this.renderStationSelector(station),
          )}
        </View>
      </BorderedScrollView>
    );
  },

  renderStationSelector: function(station) {
    var stationView = (
      <ListRowView>
        {station.name}
      </ListRowView>
    );

    if (this.props.omitStation &&
        station.id === this.props.omitStation) {
      return (
        <View 
          key={station.id}
          style={styles.omitStation}>
          {stationView}
        </View>
      );
    }

    return (
      <TouchableHighlight
        key={station.id}
        onPress={this.props.onStationSelect.bind(this, station.id)}
        underlayColor={Colors.LIOHUA}>
        <View>
          {stationView}
        </View>
      </TouchableHighlight>
    );
  },

});

var styles = StyleSheet.create({
  omitStation: {
    opacity: 0.5,
    backgroundColor: '#111'
  },
  stationContainer: {
    flex: 1,
  },
  callToAction: {
    backgroundColor: Colors.DEEPER,
    padding: 12,
  },
  callToActionText: {
    color: '#111'
  },
  textContainer: {
    padding: 16,
  },
  container: {
    backgroundColor: Colors.GREY,
    flex: 1,
  },
});

module.exports = StationSelectView;
