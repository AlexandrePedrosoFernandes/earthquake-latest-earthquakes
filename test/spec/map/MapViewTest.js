/* global chai, describe, it, L */
'use strict';

var MapView = require('map/MapView'),
    Model = require('mvc/Model');

var expect = chai.expect;

var model = Model({
  'event': {
    'geometry': {
      'coordinates': [
        -89.426,
        36.285,
        6.684
      ]
    }
  },
  'viewModes': [
    {
      'id': 'list'
    },
    {
      'id': 'map'
    }
  ]
});

// This model is need to show different outcomes for diffent properties on the
// model.
var model2 = Model({
  'event': {
    'geometry': {
      'coordinates': [
        -89.426,
        36.285,
        6.684
      ]
    }
  },
  'viewModes': [
    {
      'id': 'list'
    },
    {
      'id': 'settings'
    }
  ]
});

describe('map/Mapview', function () {
  describe('constructor', function () {
    it('Can be required', function () {
      /* jshint -W030 */
      expect(MapView).to.not.be.null;
      /* jshint +W030 */
    });

    it('can be destroyed', function () {
      var view;

      view = MapView();
      expect(view.destroy).to.not.throw(Error);
    });
  });

  describe('getBounds', function () {
    it('gets bounds around given point', function () {
      var bounds,
          view;

      bounds = new L.LatLngBounds([25,45],[35,55]);

      view = MapView();

      expect(view.getBounds(30, 50)).to.deep.equal(bounds);
    });
  });

  describe('getEventLocation', function () {
    it('gets latitude and longitude of an event', function () {
      var view;

      view = MapView({
        model: model
      });

      expect(view.getEventLocation()).to.deep.equal([36.285, -89.426]);

      view.destroy();
    });
  });

  describe('isEnabled', function () {
    it('returns true if map is found', function () {
      var view;

      view = MapView({
        model: model
      });

      expect(view.isEnabled()).to.equal(true);

      view.destroy();
    });

    it('returns false if map is not found', function () {
      var view;

      view = MapView({
        model: model2
      });

      expect(view.isEnabled()).to.equal(false);

      view.destroy();
    });
  });

  describe('onClick', function () {
    it('deselects event', function () {
      var view;

      view = MapView({
        model: model
      });

      view.onClick();

      expect(model.get('event')).to.equal(null);

      view.destroy();
    });
  });
});
