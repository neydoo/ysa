'use strict'

const User = use('App/Models/User')
const Staff = use('App/Models/Staff')
const Mail = use('Mail')
const Crypto = use('Crypto')

class AuthController {
    async register({request,response}){
        const username = request.body.username 
        const password = request.body.password 
        const email = request.body.email
        const name = request.body.name
        const dob = request.body.dob
        const nok = request.body.nok
        const sog = request.body.sog
        const lga = request.body.lga
        const sex = request.body.sex
        const address = request.body.address
        const tel = request.body.tel
        const role = request.body.role
        const branch_id = request.body.branch_id

        const user = new User()

        user.username = username
        user.email = email
        user.password = password

        await user.save()
        let accessToken = await auth.generate(user)

        const staff = new Staff()
        staff.name = name
        staff.lga = lga
        staff.nok = nok
        staff.dob = dob
        staff.sog = sog
        staff.sex = sex
        staff.address = address
        staff.branch_id = branch_id
        staff.tel = tel
        staff.role = role
        staff.user_id = user_id
        
        await staff.save()
        return response.json({user,staff,accessToken}) 
    }
    
    async login({request,response}){
        const email = request.body.email
        const password = request.body.password

        try{
            if(await auth.attempt(email,password)){
                let user = await User.findBy(email)
                let accessToken = await auth.generate(user)

                let staff = await Staff.query()
                .where('user.id','=',user.id)
                return response.json({staff,user,accessToken})
            }
        } catch(e){
            return response.json(e)
        }
    }

    async forgotPassword({request,response}){
        const email = request.body.email
        const passwordToken = Crypto.randomBytes(20, (err, buffer) => {
            const token = buffer.toString('hex');
            return token
          })

        try{
            if( await User.findBy(email)){
                let user = await User.findBy(email)
                let staff = await Staff.query()
                .where('user.id','=',user.id)
                user.password_token = passwordToken
                user.reset_password_expires = Date.now() + 7200000
                await Mail.raw('',(message)=>{
                    message
                    .to(user.email)
                    .from('password-reset@ysa.com')
                    .subject('Password Reset')
                })
            }
        } catch(e){
            return response.json(e) 
        }
       
    }

    async resetPassword({request,response}){
        
       const resetToken = request.body.token
       const password = request.body.password
       const user = await  User.find({resetToken,reset_password_expires: {
        $gt: Date.now()
      }})
      if(!err && user){
        user.password = password
        user.save()
        const email = user.email
        
        if(await auth.attempt(email,password)){
            let user = await User.findBy(email)
            let accessToken = await auth.generate(user)

            let staff = await Staff.query()
            .where('user.id','=',user.id)
            return response.json({staff,user,accessToken})
        }

      }
    }

}

module.exports = AuthController
