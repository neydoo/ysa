'use strict'

const User = use('App/Models/User')
const Staff = use('App/Models/Staff')

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
        }catch(e){
            return response.json(e)
        }
    }

}

module.exports = AuthController
