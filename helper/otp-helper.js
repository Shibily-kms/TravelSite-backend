const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const serviceSid = process.env.TWILIO_SERVICE_ID




const dosms = (mobile) => {
    return new Promise(async (resolve, reject) => {
        await client.verify.services(serviceSid).verifications.create({
            to: `+91${mobile}`,
            channel: 'sms'
        }).then((response) => {
            response.valid = true
            resolve(response)
        }).catch((err) => {
            reject(err)
        })

    })
}
const otpVerify = (otp, mobile) => {
    return new Promise(async (resolve, reject) => {
        await client.verify.services(serviceSid).verificationChecks.create({
            to: `+91${mobile}`,
            code: otp
        }).then((verification) => {
            resolve(verification.valid)
        }).catch((err) => {
            reject(err)
        })
    })
}

module.exports = { dosms, otpVerify }