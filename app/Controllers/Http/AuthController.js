'use strict'

const User = use('App/Models/User')
const Staff = use('App/Models/Staff')
const Mail = use('Mail')
const Crypto = use('crypto')
const {validate} = use('Validator')

class AuthController {
    async register({session,auth,request,response}){

        const rules ={
            email: 'required|email|unique:users,email',
            username: 'required|unique:users,username',
            tel: 'required|unique:staff,tel',
            password: 'required|min:6',
        }

        const messages = {
            'username.unique' : 'This username is already taken',
            'email.unique' : 'Email already exists',
            'tel.unique' : 'Telephone already exists',
            'password.min' : 'Password length should be at least 6',
        }

        const validation = await validate(request.all(), rules, messages)

    if (validation.fails()) {
      
        // console.log(validation.messages())
      return response.status(409).json({message: validation.messages()})
    }

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
        const branch_id = 1
        const relationship = request.body.relationship
        
            try {
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
                    staff.relationship = relationship
                    staff.sex = sex
                    staff.address = address
                    staff.branch_id = branch_id
                    staff.tel = tel
                    staff.role = role
                    staff.user_id = user.id
                
                    await staff.save()
                    return response.json({ user, staff, accessToken })
                
            } catch (e) {
                console.log('err', e)
                return response.status(409).json({message: e})
            }
        
        
            }   
   
    
    async login({auth, request,response}){
        const email = request.body.email
        const password = request.body.password
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailBool = pattern.test(email)
       
        try {
            if(emailBool){
                let user = await User.query().where('email', email)
                .with('staff').fetch()
                const token = await auth.attempt(email, password)
                return response.json({ token, user, })
            } else {
                let username = request.body.email
                let user = await User.query().where('username', username).with('staff').fetch()
                const token = await auth.authenticator('userjwt').withRefreshToken().attempt(username, password)
                // const token = await auth.attempt(email, password)
                return response.json({ token, user })
                // console.log(email)
            }
            
            } catch (e) {
                return response.status(400).json({'message': e, 'error':"error"})
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
                .where('user.id','=',user.id).fetch()
                user.password_token = passwordToken
                user.reset_password_expires = Date.now() + 7200000
                await Mail.send('forgot',staff.toJSON(),user.toJSON(),(message)=>{
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
            .where('user.id','=',user.id).fetch()
            return response.json({staff,user,accessToken})
        }

      }else{
          return response.status(400).send({message:"Password reset token is invalid or has expired."})
      }
    }

}

module.exports = AuthController
