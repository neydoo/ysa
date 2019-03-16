import React, { Component } from 'react'
// import axios from '../axios-request'
 import { connect } from "react-redux";
 import { setAccess } from "../action";
 import { setUser } from "../action";
import { setStaff } from "../action";
import { bindActionCreators } from 'redux';
 
class RegisterStaff extends Component{
    state = {
        lga: ['...Select LGA...'],
        formError: null,
        passwordMatch: true,
        name: '',
        username: '',
        password: '',
        dob: '',
        email: '',
        nok: '',
        relationship: '',
        soo: '',
        chosenlga:'',
        address: '',
        sex: '',
        tel: '',
        role: '',
        branchId: 1,
        submitError: null,
        loader: false,
        disabled: false,
        registered:false,
        userDetails:null
    }

    passwordOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           password : e.target.value
        })
    }
    
    usernameOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           username : e.target.value
        })
    }
    emailOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }
    dobOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            dob: e.target.value
        })
    }
    nameOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           name : e.target.value
        })
    }
    nokOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            nok: e.target.value
        })
    }
    sooOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           soo : e.target.value
        })
    }
    sexOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            sex: e.target.value
        })
    }
    telOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            tel: e.target.value
        })
    }
    roleOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            role: e.target.value
        })
    }
    addressOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            address: e.target.value
        })
    }
    relationshipOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           relationship : e.target.value
        })
    }

    lgaOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           chosenlga : e.target.value
        })
    }

    checkPasswords = (e) => {
        e.preventDefault();
        if(this.state.password !== e.target.value){
            this.setState({passwordMatch: false })
        }else{
            this.setState({passwordMatch: true })
        }
    }
    handleState = (e) => {
        e.preventDefault();
        this.setState({
            selectState: e.target.value,
            soo: e.target.value,
        })
        
            let states = e.target.value
            console.log(e.target.value)
            switch (states) {
                case "Abia":
                    this.setState({
                        lga: ['...Select LGA...', 'Aba North', 'Aba South', 'Arochukwu', 'Bende', 'Ikwuano', 'Isiala Ngwa North', 'Isiala Ngwa South', 'Isuikwuato', 'Obi Ngwa', 'Ohafia', 'Osisioma', 'Ugwunagbo', 'Ukwa East', 'Ukwa West', 'Umuahia North', 'muahia South', 'Umu Nneochi']
                    })
                    break;
           
                case "Adamawa":
                    this.setState({
                        lga: ['...Select LGA...', 'Demsa', 'Fufure', 'Ganye', 'Gayuk', 'Gombi', 'Grie', 'Hong', 'Jada', 'Larmurde', 'Madagali', 'Maiha', 'Mayo Belwa', 'Michika', 'Mubi North', 'Mubi South', 'Numan', 'Shelleng', 'Song', 'Toungo', 'Yola North', 'Yola South']
                    })
                    break;
             
                case "AkwaIbom":
                    this.setState({
                        lga: ['...Select LGA...', 'Abak', 'Eastern Obolo', 'Eket', 'Esit Eket', 'Essien Udim', 'Etim Ekpo', 'Etinan', 'Ibeno', 'Ibesikpo Asutan', 'Ibiono-Ibom', 'Ika', 'Ikono', 'Ikot Abasi', 'Ikot Ekpene', 'Ini', 'Itu', 'Mbo', 'Mkpat-Enin', 'Nsit-Atai', 'Nsit-Ibom', 'Nsit-Ubium', 'Obot Akara', 'Okobo', 'Onna', 'Oron', 'Oruk Anam', 'Udung-Uko', 'Ukanafun', 'Uruan', 'Urue-Offong Oruko', 'Uyo']
                    })
                    break;

                case "Anambra":
                    this.setState({
                        lga: ['...Select LGA...', 'Aguata', 'Anambra East', 'Anambra West', 'Anaocha', 'Awka North', 'Awka South', 'Ayamelum', 'Dunukofia', 'Ekwusigo', 'Idemili North', 'Idemili South', 'Ihiala', 'Njikoka', 'Nnewi North', 'Nnewi South', 'Ogbaru', 'Onitsha North', 'Onitsha South', 'Orumba North', 'Orumba South', 'Oyi']
                    })
                    break;
             
                case "Bauchi":
                    this.setState({
                        lga: ['...Select LGA...', 'Alkaleri', 'Bauchi', 'Bogoro', 'Damban', 'Darazo', 'Dass', 'Gamawa', 'Ganjuwa', 'Giade', 'Itas-Gadau', 'Jama are', 'Katagum', 'Kirfi', 'Misau', 'Ningi', 'Shira', 'Tafawa Balewa', ' Toro', ' Warji', ' Zaki']
                    })
                    break;
             
                case "Bayelsa":
                    this.setState({
                        lga: ['...Select LGA...', 'Brass', 'Ekeremor', 'Kolokuma Opokuma', 'Nembe', 'Ogbia', 'Sagbama', 'Southern Ijaw', 'Yenagoa']
                    })
                    break;
            
                case "Benue":
                    this.setState({
                        lga: ['...Select LGA...', 'Agatu', 'Apa', 'Ado', 'Buruku', 'Gboko', 'Guma', 'Gwer East', 'Gwer West', 'Katsina-Ala', 'Konshisha', 'Kwande', 'Logo', 'Makurdi', 'Obi', 'Ogbadibo', 'Ohimini', 'Oju', 'Okpokwu', 'Oturkpo', 'Tarka', 'Ukum', 'Ushongo', 'Vandeikya']
                    })
                    break;
            
                case "Borno":
                    this.setState({
                        lga: ['...Select LGA...', 'Abadam', 'Askira-Uba', 'Bama', 'Bayo', 'Biu', 'Chibok', 'Damboa', 'Dikwa', 'Gubio', 'Guzamala', 'Gwoza', 'Hawul', 'Jere', 'Kaga', 'Kala-Balge', 'Konduga', 'Kukawa', 'Kwaya Kusar', 'Mafa', 'Magumeri', 'Maiduguri', 'Marte', 'Mobbar', 'Monguno', 'Ngala', 'Nganzai', 'Shani']
                    })
                    break;
            
                case "Cross River":
                    this.setState({
                        lga: ['...Select LGA...', 'Abi', 'Akamkpa', 'Akpabuyo', 'Bakassi', 'Bekwarra', 'Biase', 'Boki', 'Calabar Municipal', 'Calabar South', 'Etung', 'Ikom', 'Obanliku', 'Obubra', 'Obudu', 'Odukpani', 'Ogoja', 'Yakuur', 'Yala']
                    })
                    break;
            
                case "Delta":
                    this.setState({
                        lga: ['...Select LGA...', 'Aniocha North', 'Aniocha South', 'Bomadi', 'Burutu', 'Ethiope East', 'Ethiope West', 'Ika North East', 'Ika South', 'Isoko North', 'Isoko South', 'Ndokwa East', 'Ndokwa West', 'Okpe', 'Oshimili North', 'Oshimili South', 'Patani', 'Sapele', 'Udu', 'Ughelli North', 'Ughelli South', 'Ukwuani', 'Uvwie', 'Warri North', 'Warri South', 'Warri South West']
                    })
                    break;
         
                case "Ebonyi":
                    this.setState({
                        lga: ['...Select LGA...', 'Abakaliki', 'Afikpo North', 'Afikpo South', 'Ebonyi', 'Ezza North', 'Ezza South', 'Ikwo', 'Ishielu', 'Ivo', 'Izzi', 'Ohaozara', 'Ohaukwu', 'Onicha']
                    })
                    break;
             
                case "Edo":
                    this.setState({
                        lga: ['...Select LGA...', 'Akoko-Edo', 'Egor', 'Esan Central', 'Esan North-East', 'Esan South-East', 'Esan West', 'Etsako Central', 'Etsako East', 'Etsako West', 'Igueben', 'Ikpoba Okha', 'Orhionmwon', 'Oredo', 'Ovia North-East', 'Ovia South-West', 'Owan East', 'Owan West', 'Uhunmwonde']
                    })
                    break;
           
                case "Ekiti":
                    this.setState({
                        lga: ['...Select LGA...', 'Ado Ekiti', 'Efon', 'Ekiti East', 'Ekiti South-West', 'Ekiti West', 'Emure', 'Gbonyin', 'Ido Osi', 'Ijero', 'Ikere', 'Ikole', 'Ilejemeje', 'Irepodun-Ifelodun', 'Ise-Orun', 'Moba', 'Oye']
                    })
                    break;
             
                case "Rivers":
                    this.setState({
                        lga: ['...Select LGA...', 'Port Harcourt', 'Obio-Akpor', 'Okrika', 'Ogu–Bolo', 'Eleme', 'Tai', 'Gokana', 'Khana', 'Oyigbo', 'Opobo–Nkoro', 'Andoni', 'Bonny', 'Degema', 'Asari-Toru', 'Akuku-Toru', 'Abua–Odual', 'Ahoada West', 'Ahoada East', 'Ogba–Egbema–Ndoni', 'Emohua', 'Ikwerre', 'Etche', 'Omuma']
                    })
                    break;
            
                case "Enugu":
                    this.setState({
                        lga: ['...Select LGA...', 'Aninri', 'Awgu', 'Enugu East', 'Enugu North', 'Enugu South', 'Ezeagu', 'Igbo Etiti', 'Igbo Eze North', 'Igbo Eze South', 'Isi Uzo', 'Nkanu East', 'Nkanu West', 'Nsukka', 'Oji River', 'Udenu', 'Udi', 'Uzo Uwani']
                    })
                    break;
            
                case "FCT":
                    this.setState({
                        lga: ['...Select LGA...', 'Abaji', 'Bwari', 'Gwagwalada', 'Kuje', 'Kwali', 'Municipal Area Council']
                    })
                    break;
                case "Gombe":
                    this.setState({
                        lga: ['...Select LGA...', 'Akko', 'Balanga', 'Billiri', 'Dukku', 'Funakaye', 'Gombe', 'Kaltungo', 'Kwami', 'Nafada', 'Shongom', 'Yamaltu-Deba']
                    })
                    break;
            
                case "Imo":
                    this.setState({
                        lga: ['...Select LGA...', 'Aboh Mbaise', 'Ahiazu Mbaise', 'Ehime Mbano', 'Ezinihitte', 'Ideato North', 'Ideato South', 'Ihitte-Uboma', 'Ikeduru', 'Isiala Mbano', 'Isu', 'Mbaitoli', 'Ngor Okpala', 'Njaba', 'Nkwerre', 'Nwangele', 'Obowo', 'Oguta', 'Ohaji-Egbema', 'Okigwe', 'Orlu', 'Orsu', 'Oru East', 'Oru West', 'Owerri Municipal', 'Owerri North', 'Owerri West', 'Unuimo']
                    })
                    break;

                case "Jigawa":
                    this.setState({
                        lga: ['...Select LGA...', 'Auyo', 'Babura', 'Biriniwa', 'Birnin Kudu', 'Buji', 'Dutse', 'Gagarawa', 'Garki', 'Gumel', 'Guri', 'Gwaram', 'Gwiwa', 'Hadejia', 'Jahun', 'Kafin Hausa', 'Kazaure', 'Kiri Kasama', 'Kiyawa', 'Kaugama', 'Maigatari', 'Malam Madori', 'Miga', 'Ringim', 'Roni', 'Sule Tankarkar', 'Taura', 'Yankwashi']
                    })
                    break;
            
                case "Kaduna":
                    this.setState({
                        lga: ['...Select LGA...', 'Birnin Gwari', 'Chikun', 'Giwa', 'Igabi', 'Ikara', 'Jaba', 'Jema a', 'Kachia', 'Kaduna North', 'Kaduna South', 'Kagarko', 'Kajuru', 'Kaura', 'Kauru', 'Kubau', 'Kudan', 'Lere', 'Makarfi', 'Sabon Gari', 'Sanga', 'Soba', 'Zangon Kataf', 'Zaria']
                    })
                    break;
            
                case "Kano":
                    this.setState({
                        lga: ['...Select LGA...', 'Ajingi', 'Albasu', 'Bagwai', 'Bebeji', 'Bichi', 'Bunkure', 'Dala', 'Dambatta', 'Dawakin Kudu', 'Dawakin Tofa', 'Doguwa', 'Fagge', 'Gabasawa', 'Garko', 'Garun Mallam', 'Gaya', 'Gezawa', 'Gwale', 'Gwarzo', 'Kabo', 'Kano Municipal', 'Karaye', 'Kibiya', 'Kiru', 'Kumbotso', 'Kunchi', 'Kura', 'Madobi', 'Makoda', 'Minjibir', 'Nasarawa', 'Rano', 'Rimin Gado', 'Rogo', 'Shanono', 'Sumaila', 'Takai', 'Tarauni', 'Tofa', 'Tsanyawa', 'Tudun Wada', 'Ungogo', 'Warawa', 'Wudil']
                    })
                    break;
            
                case "Katsina":
                    this.setState({
                        lga: ['...Select LGA...', 'Bakori', 'Batagarawa', 'Batsari', 'Baure', 'Bindawa', 'Charanchi', 'Dandume', 'Danja', 'Dan Musa', 'Daura', 'Dutsi', 'Dutsin Ma', 'Faskari', 'Funtua', 'Ingawa', 'Jibia', 'Kafur', 'Kaita', 'Kankara', 'Kankia', 'Katsina', 'Kurfi', 'Kusada', 'Mai Adua', 'Malumfashi', 'Mani', 'Mashi', 'Matazu', 'Musawa', 'Rimi', 'Sabuwa', 'Safana', 'Sandamu', 'Zango']
                    })
                    break;

                case "Kebbi":
                    this.setState({
                        lga: ['...Select LGA...', 'Aleiro', 'Arewa Dandi', 'Argungu', 'Augie', 'Bagudo', 'Birnin Kebbi', 'Bunza', 'Dandi', 'Fakai', 'Gwandu', 'Jega', 'Kalgo', 'Koko Besse', 'Maiyama', 'Ngaski', 'Sakaba', 'Shanga', 'Suru', 'Wasagu Danko', 'Yauri', 'Zuru']
                    })
                    break;
            
                case "Kogi":
                    this.setState({
                        lga: ['...Select LGA...', 'Adavi', 'Ajaokuta', 'Ankpa', 'Bassa', 'Dekina', 'Ibaji', 'Idah', 'Igalamela Odolu', 'Ijumu', 'Kabba Bunu', 'Kogi', 'Lokoja', 'Mopa Muro', 'Ofu', 'Ogori Magongo', 'Okehi', 'Okene', 'Olamaboro', 'Omala', 'Yagba East', 'Yagba West']
                    })
                    break;
            
                case "Kwara":
                    this.setState({
                        lga: ['...Select LGA...', 'Asa', 'Baruten', 'Edu', 'Ekiti', 'Ifelodun', 'Ilorin East', 'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Kaiama', 'Moro', 'Offa', 'Oke Ero', 'Oyun', 'Pategi']
                    })
                    break;

                case "Lagos":
                    this.setState({
                        lga: ['...Select LGA...', 'Agege', 'Ajeromi-Ifelodun', 'Alimosho', 'Amuwo-Odofin', 'Apapa', 'Badagry', 'Epe', 'Eti Osa', 'Ibeju-Lekki', 'Ifako-Ijaiye', 'Ikeja', 'Ikorodu', 'Kosofe', 'Lagos Island', 'Lagos Mainland', 'Mushin', 'Ojo', 'Oshodi-Isolo', 'Shomolu', 'Surulere']
                    })
                    break;

                case "Nasarawa":
                    this.setState({
                        lga: ['...Select LGA...', 'Akwanga', 'Awe', 'Doma', 'Karu', 'Keana', 'Keffi', 'Kokona', 'Lafia', 'Nasarawa', 'Nasarawa Egon', 'Obi', 'Toto', 'Wamba']
                    })
                    break;

                case "Niger":
                    this.setState({
                        lga: ['...Select LGA...', 'Agaie', 'Agwara', 'Bida', 'Borgu', 'Bosso', 'Chanchaga', 'Edati', 'Gbako', 'Gurara', 'Katcha', 'Kontagora', 'Lapai', 'Lavun', 'Magama', 'Mariga', 'Mashegu', 'Mokwa', 'Moya', 'Paikoro', 'Rafi', 'Rijau', 'Shiroro', 'Suleja', 'Tafa', 'Wushishi']
                    })
                    break;

                case "Ogun":
                    this.setState({
                        lga: ['...Select LGA...', 'Abeokuta North', 'Abeokuta South', 'Ado-Odo Ota', 'Egbado North', 'Egbado South', 'Ewekoro', 'Ifo', 'Ijebu East', 'Ijebu North', 'Ijebu North East', 'Ijebu Ode', 'Ikenne', 'Imeko Afon', 'Ipokia', 'Obafemi Owode', 'Odeda', 'Odogbolu', 'Ogun Waterside', 'Remo North', 'Shagamu']
                    })
                    break;
            
                case "Ondo":
                    this.setState({
                        lga: ['...Select LGA...', 'Akoko North-East', 'Akoko North-West', 'Akoko South-West', 'Akoko South-East', 'Akure North', 'Akure South', 'Ese Odo', 'Idanre', 'Ifedore', 'Ilaje', 'Ile Oluji-Okeigbo', 'Irele', 'Odigbo', 'Okitipupa', 'Ondo East', 'Ondo West', 'Ose', 'Owo']
                    })
                    break;

                case "Osun":
                    this.setState({
                        lga: ['...Select LGA...', 'Atakunmosa East', 'Atakunmosa West', 'Aiyedaade', 'Aiyedire', 'Boluwaduro', 'Boripe', 'Ede North', 'Ede South', 'Ife Central', 'Ife East', 'Ife North', 'Ife South', 'Egbedore', 'Ejigbo', 'Ifedayo', 'Ifelodun', 'Ila', 'Ilesa East', 'Ilesa West', 'Irepodun', 'Irewole', 'Isokan', 'Iwo', 'Obokun', 'Odo Otin', 'Ola Oluwa', 'Olorunda', 'Oriade', 'Orolu', 'Osogbo']
                    })
                    break;

                case "Oyo":
                    this.setState({
                        lga: ['...Select LGA...', 'Afijio', 'Akinyele', 'Atiba', 'Atisbo', 'Egbeda', 'Ibadan North', 'Ibadan North-East', 'Ibadan North-West', 'Ibadan South-East', 'Ibadan South-West', 'Ibarapa Central', 'Ibarapa East', 'Ibarapa North', 'Ido', 'Irepo', 'Iseyin', 'Itesiwaju', 'Iwajowa', 'Kajola', 'Lagelu', 'Ogbomosho North', 'Ogbomosho South', 'Ogo Oluwa', 'Olorunsogo', 'Oluyole', 'Ona Ara', 'Orelope', 'Ori Ire', 'Oyo', 'Oyo East', 'Saki East', 'Saki West', 'Surulere']
                    })
                    break;
            
                case "Plateau":
                    this.setState({
                        lga: ['...Select LGA...', 'Bokkos', 'Barkin Ladi', 'Bassa', 'Jos East', 'Jos North', 'Jos South', 'Kanam', 'Kanke', 'Langtang South', 'Langtang North', 'Mangu', 'Mikang', 'Pankshin', 'Qua an Pan', 'Riyom', 'Shendam', 'Wase']
                    })
                    break;
            
                case "Sokoto":
                    this.setState({
                        lga: ['...Select LGA...', 'Binji', 'Bodinga', 'Dange Shuni', 'Gada', 'Goronyo', 'Gudu', 'Gwadabawa', 'Illela', 'Isa', 'Kebbe', 'Kware', 'Rabah', 'Sabon Birni', 'Shagari', 'Silame', 'Sokoto North', 'Sokoto South', 'Tambuwal', 'Tangaza', 'Tureta', 'Wamako', 'Wurno', 'Yabo']
                    })
                    break;
            
                case "Taraba":
                    this.setState({
                        lga: ['...Select LGA...', 'Ardo Kola', 'Bali', 'Donga', 'Gashaka', 'Gassol', 'Ibi', 'Jalingo', 'Karim Lamido', 'Kumi', 'Lau', 'Sardauna', 'Takum', 'Ussa', 'Wukari', 'Yorro', 'Zing']
                    })
                    break;
            
                case "Yobe":
                    this.setState({
                        lga: ['...Select LGA...', 'Bade', 'Bursari', 'Damaturu', 'Fika', 'Fune', 'Geidam', 'Gujba', 'Gulani', 'Jakusko', 'Karasuwa', 'Machina', 'Nangere', 'Nguru', 'Potiskum', 'Tarmuwa', 'Yunusari', 'Yusufari']
                    })
                    break;
            
                case "Zamfara":
                    this.setState({
                        lga: ['...Select LGA...', 'Anka', 'Bakura', 'Birnin Magaji Kiyaw', 'Bukkuyum', 'Bungudu', 'Gummi', 'Gusau', 'Kaura Namoda', 'Maradun', 'Maru', 'Shinkafi', 'Talata Mafara', 'Chafe', 'Zurmi']
                    })
                    break;
            
                default:
                this.setState({
                    lga: ['...Select LGA...']
                })
            }
        
        
    }
         states = [
            '...Select State...', 'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Enugu',
             'Edo','Ekiti','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger',
             'Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara','FCT'
        ]
       
    handleSubmit = (e) =>{
        e.preventDefault()
        const url = '/api/auth/register'
        const data = new FormData()
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailBool = pattern.test(this.state.email)
        if (this.state.name === '' || this.state.email === '' || !emailBool || this.state.role === '...Select Position...' || this.state.address === '' || this.state.sex === '...Select Sex...' || isNaN(this.state.tel) || this.state.tel === '' || !this.state.passwordMatch || this.state.relationship === '' || this.state.username === '' || this.state.password === '' || this.state.soo === '...Select State...' || this.state.dob === '' || this.state.nok === '' || this.state.chosenlga === '') {
            this.setState({
                formError: true
            })
            alert('Please check that all fields are filled correctly')
        }else{
            this.setState({
                formError: false,
                loader: true,
                disabled: true,
            })

            data.append('name',this.state.name)
            data.append('email',this.state.email)
            data.append('tel',this.state.tel)
            data.append('address', this.state.address)
            data.append('username', this.state.username)
            data.append('dob', this.state.dob)
            data.append('sog', this.state.soo)
            data.append('lga', this.state.chosenlga)
            data.append('nok', this.state.nok)
            data.append('sex', this.state.sex)
            data.append('relationship', this.state.relationship)
            data.append('role', this.state.role)
            data.append('branch_id', this.state.branch_id)
            data.append('password', this.state.password)

            fetch(url,{
                method:'POST',
                body: data
            })
              .then(res => {
                    console.log('res',res)
                    this.setState({
                        loader: false,
                        disabled: false,
                    })

                    if(res.status === 409){
                        res.json()
                            .then(err => {
                                const message = err.message[0].message
                                this.setState({ submitError: message })
                                alert(this.state.submitError)
                                return err
                        })
                    }else{
                        res.json()
                            .then(response => {
                            this.setState({
                                userDetails: response.user.username,
                                registered: true
                            })
                            this.props.setUser(response.user)
                            this.props.setAccess(response.accessToken)
                            this.props.setStaff(response.staff)
                            alert(`${this.state.userDetails} has been succesfully registered`)
                            document.getElementById("reg").reset()
                            this.setState({
                                lga: ['...Select LGA...'],
                                name: '',
                                username: '',
                                password: '',
                                dob: '',
                                email: '',
                                nok: '',
                                relationship: '',
                                soo: '',
                                chosenlga:'',
                                address: '',
                                sex: '',
                                tel: '',
                                role: '',
                            })
                        })
                    }
              })
                .catch(e => {
                    this.setState({
                        loader: false,
                        disabled: false,
                        submitError:e
                    })
                    console.log(e)
                })
        }
    }



    render() {
        return (
                <div>
                         { this.state.formError ?  <p className="error">Please check that all fields have been correctly filled</p> : null}
                <form id='reg' onSubmit={this.handleSubmit} >
                    <div className="row regform">
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input required disabled={this.state.disabled} onChange={this.nameOnChangeHandler} type="text" placeholder="Full Name" name="fullName" value={this.state.fullName} />
                                </div>
                                
                                <div className="form-group">
                                    <label>Email</label>
                                    <input required disabled={this.state.disabled} onChange={this.emailOnChangeHandler} type="text" placeholder="Email" name="email" value={this.state.email} />
                                </div>

                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input required disabled={this.state.disabled} onChange={this.telOnChangeHandler} type="tel" placeholder="Phone Number" name="tel" value={this.state.tel} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input required minLength='6' disabled={this.state.disabled} onChange={this.passwordOnChangeHandler} type="password" placeholder="Password" name="password" value={this.state.password} />
                                </div>

                                <div className="form-group">
                                    <label>Repeat Password</label>
                                    <input disabled={this.state.disabled} onBlur={this.checkPasswords} type="password" placeholder="Repeat Password" name="repeatPassword" value={this.state.repeatPassword} />
                                    {this.state.passwordMatch ? null: <p className="error">Passwords do not match!!</p>}
                                </div>

                                <div className="form-group">
                                    <label>State of Origin</label>
                                    <select disabled={this.state.disabled} onChange={this.handleState} name="State">
                                    {this.states.map(element=>{
                                        return <option key={element} value={element}>{element}</option>
                                    })}
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label>Local Government Area</label>
                                    <select disabled={this.state.disabled} onChange={this.lgaOnChangeHandler} name="LGA">
                                            {this.state.lga.map(element => {
                                                return <option key={element} value={element}>{element}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                                
                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label>Username</label>
                                    <input required disabled={this.state.disabled} onChange={this.usernameOnChangeHandler} type="text" placeholder="Username" name="username" value={this.state.username} />
                                </div>
                            
                                <div className="form-group">
                                    <label>Sex</label>
                                    <select disabled={this.state.disabled} onChange={this.sexOnChangeHandler} id="sex" name="sex">
                                        <option value="">...Select Sex...</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </select>
                                </div>
                            
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input required disabled={this.state.disabled} onChange={this.dobOnChangeHandler} type="date" placeholder="Date of Birth" name="dob" value={this.state.dob} />
                                </div>

                                <div className="form-group">
                                    <label>Position</label>
                                    <select disabled={this.state.disabled} onChange={this.roleOnChangeHandler} id="position" name="position">
                                        <option value="">...Select Position...</option>
                                        <option value="Sales clerk">Sales clerk</option>
                                        <option value="Manager">Manager</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label> Residential Address</label>
                                    <textarea required disabled={this.state.disabled} onChange={this.addressOnChangeHandler}  placeholder="Address" name="address" value={this.state.address} />
                                </div>

                                <div className="form-group">
                                    <label>Next of Kin</label>
                                    <input required disabled={this.state.disabled} onChange={this.nokOnChangeHandler} type="text" placeholder="Next of Kin" name="nok" value={this.state.nok} />
                                </div>

                                <div className="form-group">
                                    <label>Relationship</label>
                                    <input required disabled={this.state.disabled} onChange={this.relationshipOnChangeHandler} type="text" placeholder="Relationship" name="nok" value={this.state.relationship} />
                                </div>

                            </div>
                        </div>
                        { !this.state.loader  ?
                        <div className="submit">
                                <button className="submitButton">Register</button>
                        </div>   :
                        <div className="submit">
                            <button className="submitted" disabled={this.state.disabled}>
                                <span>
                                    <div className="gooey">
                                        <span className="dot"></span>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </span>
                            </button>
                        </div>}
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        token: state.access,
        staff: state.staff
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUser,setAccess,setStaff},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterStaff)