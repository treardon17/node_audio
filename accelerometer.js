var mpu = require('mpu6050-dmp')

class Accelerometer {
  constructor(callback, timing) {
    this.callback = callback
    this.timing = timing
    this.listen()
  }

  listen() {
    if (mpu.initialize()) {
      if (typeof this.callback === 'function') {
        this.interval = setInterval(() => {
          const rotationRoll = parseInt(mpu.getRotation().roll)
          const rotationPitch = parseInt(mpu.getRotation().pitch)
          const rotationYaw = parseInt(mpu.getRotation().yaw)
          const attitudeRoll = parseInt(mpu.getAttitude().roll)
          const attitudePitch = parseInt(mpu.getAttitude().pitch)
          const attitudeYaw = parseInt(mpu.getAttitude().yaw)
          this.callback({ rotationRoll, rotationPitch, rotationYaw, attitudeRoll, attitudePitch, attitudeYaw })
        }, this.timing || 100)
      }
    }
  }
}

module.exports = Accelerometer