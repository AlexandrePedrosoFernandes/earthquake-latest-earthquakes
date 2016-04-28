'use strict';

var GenericCollectionView = require('core/GenericCollectionView'),
    Util = require('util/Util');

var _DEFAULTS = {

};

var ModesView = function (options) {
  var _this,
      _initialize;

  options = Util.extend({}, _DEFAULTS, options);
  _this = GenericCollectionView(options);

  _initialize = function () {
    _this.el.classList.add('modes-view');
  };

  /**
   * Destroy all the things.
   */
  _this.destroy = Util.compose(function () {
   _initialize = null;
   _this = null;
  }, _this.destroy);

  /**
   * Creates content for view.
   * @param obj {Object}
   *    Configuration object
   */
  _this.createCollectionItemContent = function (obj) {
    var icon;

    icon = document.createElement('i');
    icon.classList.add('material-icons');
    icon.setAttribute('title', obj.name);
    icon.innerHTML = obj.icon;

    return icon;
  };

  /**
   * addes selected class to icons when selectec
   * @param obj {Object}
   *    Configuration option that was clicked
   */
  _this.setSelected = function (objs) {
    var el,
        id;

    if (!objs) {
      return;
    }

    objs.forEach(function (obj) {
      id = obj.id;
      el = _this.content.querySelector('[data-id="' + id + '"]');

      if (el) {
        el.classList.add('selected');
      }
    });
  };

  /**
   * Update model based on newly clicked item in the options view. If
   * the clicked item was previously set as a value on the `watchProperty` for
   * `_this.model` then that item is removed from the `watchProperty` value;
   * otherwise the item is added to the `watchProperty` value.
   *
   * This method is called by onContentClick.
   *
   * @param obj {Object}
   *     Configuration option that was clicked
   */
  _this.updateModel = function (obj) {
    var i,
        index,
        items,
        properties,
        toSet;

    toSet = {};
    properties = _this.model.get(_this.watchProperty);

    if (properties) {
      toSet[_this.watchProperty] = properties.slice(0);
    } else {
      toSet[_this.watchProperty] = [];
    }

    index = -1;
    items = toSet[_this.watchProperty];
    // check if model already contains selected object
    for (i = 0; i < items.length; i++) {
      if (obj.id === items[i].id) {
        index = i;
      }
    }

    if (index === -1) {
      // does not contain object, add it
      toSet[_this.watchProperty].push(obj);
    } else {
      // contains object, remove it
      toSet[_this.watchProperty].splice(index, 1);
    }

    _this.model.set(toSet);
  };

  _initialize(options);
  options = null;
  return _this;
};

module.exports = ModesView;
