import onceInTime from '../src/utils/onceInTime';

test('onceInTime 初始化，返回 true', (done) => {
  onceInTime({
    name: 'test-onceInTime',
    time: '3s',
    cb: function (onOff) {
      expect(onOff).toBeTruthy()

      done();
    }
  })
})

test('onceInTime 未超时时 读取第二次，返回 false', (done) => {
  onceInTime({
    name: 'test-onceInTime',
    time: '3s',
    cb: function (onOff) {
      expect(onOff).toBeFalsy()

      done();
    }
  })
})

test('onceInTime 超时时 读取第三次，返回 true', (done) => {
  setTimeout(() => {
    onceInTime({
      name: 'test-onceInTime',
      time: '3s',
      cb: function (onOff) {
        expect(onOff).toBeTruthy()

        done();
      }
    })
  }, 3000);
})
