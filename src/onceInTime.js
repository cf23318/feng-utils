import lodash from 'lodash';
import localforage from 'localforage';


const onceInTimeStorege = localforage.createInstance({
  name: 'timestamps',
  storeName: 'onceInTime',
})

/**
 * 传入唯一名称和时间，判断是否可进行调用。
 *
 * @since 0.0.1
 * @param {String} name 不重复的名称，用来判断时间是否允许调用
 * @param {String} time 间隔时间  1d、24h、60m、60s
 * @param {Function} cb 回调函数
 * @returns {Undefined}
 * @example
 *
 * onceInTime({
 *   name: 'test',
 *   time: '1m',
 *   cb: function (onOff) {
 *     if (onOff) {
 *       // 可执行代码
 *     } else {
 *       // 不可执行代码，防错处理
 *     }
 *   }
 * })
 */
function onceInTime ({name, time, cb}) {
  if (!lodash.isString(name)) throw new Error('name is not a string!');
  if (!lodash.isString(time)) throw new Error('time is not a string!');
  if (!lodash.isFunction(cb)) throw new Error('cb is not a function!');

  const dayReg = /^(\d+)d$/;
  const hourReg = /^(\d+)h$/;
  const minuteReg = /^(\d+)m$/;
  const secondReg = /^(\d+)s$/;

  if (dayReg.test(time)) {
    time = parseFloat(time.match(dayReg)[1]) * 24 * 60 * 60 * 1000;
  } else if (hourReg.test(time)) {
    time = parseFloat(time.match(hourReg)[1]) * 60 * 60 * 1000;
  } else if (minuteReg.test(time)) {
    time = parseFloat(time.match(minuteReg)[1]) * 60 * 1000;
  } else if (secondReg.test(time)) {
    time = parseFloat(time.match(secondReg)[1]) * 1000;
  } else {
    throw new Error('time value does not meet the specification!');
  }

  // 在storege中设置时间戳，下次调用时进行判断。
  function setCache() {
    onceInTimeStorege.setItem(name, lodash.now(), function (err, val) {
      if (err) console.error(err);
    })
  }

  onceInTimeStorege.getItem(name, function (err, val) {
    let onOff = false;

    if (err) {
      console.error(err);
    } else {
      val = parseInt(val);

      if (val) {
        if (val < lodash.now() - time) {
          onOff = true;
          setCache()
        }
      } else {
        onOff = true;
        setCache()
      }
    }

    cb(onOff);
  })
}

export default onceInTime;
