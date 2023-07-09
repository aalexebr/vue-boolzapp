
Vue.createApp({
    data(){
        return{
            themes : [
                {
                    themeFlag: false,
                    themeIcon: `<i class="fa-solid fa-palette"></i>`
                },
                {
                    themeFlag: false,
                    themeIcon: `<i class="fa-regular fa-moon"></i>`
                }
            ],
            themeFlag: false,
            tempRecievedMessArr : [],
            messageIndex : null,
            flag: false,
            currentTimeandDate : '',
            newChat : '',
            responseMess :'ok',
            indexContacts: 0,
            searchChat : '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                            }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                            {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
            ]
            
        }
    },
    methods:{
        changeChat(i){
            console.log('couner', this.indexContacts)
            this.indexContacts = i
            this.tempRecievedMessArr = []
            this.createRecievedMessArr()
        },
        sendMessage(){
            this.getDate()
            if(this.newChat.trim() != ''){
            const newMess = {
                    date: this.currentTimeandDate,
                    message: this.newChat,
                    status: 'sent'
            }
            this.contacts[this.indexContacts].messages.push(newMess)
            this.newChat = ''
            }
        },
        responseMessage(){
            setTimeout(()=>{
                this.getDate()
                const newMess = {
                    date: this.currentTimeandDate,
                    message: this.responseMess,
                    status: 'received'
                } 
                this.indexContacts
                this.contacts[this.indexContacts].messages.push(newMess)
                this.tempRecievedMessArr = []
                this.createRecievedMessArr()
            }, 1000)
        },
        searchFunction(){
            
            for(let i=0; i<this.contacts.length; i++){
                this.contacts[i].name.includes(this.searchChat)
                if(!this.contacts[i].name.toLowerCase().includes(this.searchChat.toLowerCase())){
                    this.contacts[i].visible = false
                }
                else{
                    this.contacts[i].visible = true
                }
            }
            
        },
        getDate(){
            const newDate = Date()
            const objectDate = new Date();
            let year = objectDate.getFullYear().toString()
            let month = objectDate.getMonth().toString()
            let day = objectDate.getDate().toString()
            let hour = objectDate.getHours().toString()
            let min = objectDate.getMinutes().toString()
            let sec = objectDate.getSeconds().toString()
            if(min.length==1){
                min = `0${min}`
                this.currentTimeandDate = `${day}/${month}/${year} ${hour}:${min}:${sec}`
            }
            if(hour.length==1){
                hour = `0${hour}`
                this.currentTimeandDate = `${day}/${month}/${year} ${hour}:${min}:${sec}`
            }
            if(day.length==1){
                day = `0${day}`
                this.currentTimeandDate = `${day}/${month}/${year} ${hour}:${min}:${sec}`
            }
            if(month.length==1){
                month = `0${month}`
                this.currentTimeandDate = `${day}/${month}/${year} ${hour}:${min}:${sec}`
            }
            if(sec.length==1){
                sec= `0${sec}`
            }
            else{
               this.currentTimeandDate = `${day}/${month}/${year} ${hour}:${min}:${sec}` 
            }
            
        },
        openMessageOptions(i){
            // console.log(this.flag)
            this.flag = !this.flag
            // console.log(this.flag)
            this.messageIndex = i
            console.log(this.messageIndex)
        },
        deleteMessage(){
            this.contacts[this.indexContacts].messages.splice(this.messageIndex,1)
            this.flag = !this.flag
            if(this.tempRecievedMessArr.length == 0){

            }
        },
        createRecievedMessArr(){
            for(i = 0; i < this.contacts[this.indexContacts].messages.length; i++){
                // let singleMessage = this.contacts[this.indexContacts].messages[i]
                if(this.contacts[this.indexContacts].messages[i].status== 'received'){
                    this.tempRecievedMessArr.push(this.contacts[this.indexContacts].messages[i]) 
                } 
            }
                
            // console.log(this.tempRecievedMessArr)
        },
        openThemeOpt(){
            this.themeFlag = !this.themeFlag
            console.log(this.themeFlag,'click')
        },
        changeTheme(i){
            console.log('clikc', i)
            this.themes[i].themeFlag = true
            for(j=0; j<this.themes.length;j++){
                console.log(this.themes[j])
                if(this.themes[j]!=this.themes[i]){
                    this.themes[j].themeFlag = false
                }
            }
        }

        // lastRecivedMessDate(){
        //     let mess = null
        //     for(i = 0; i < this.contacts[0].messages.length; i++){
        //         // let singleMess = this.contacts[0].messages
        //         // console.log(singleMess)
        //         if(this.contacts[0].messages[i].status == 'received'){
        //             mess = this.contacts[0].messages[i]
                   
        //         }
        //     }
        //     console.log(mess) 
            
        // }

    },
    created(){
        this.createRecievedMessArr()
        // this.lastRecivedMessDate()
    }
}).mount('#app');

// contacts: [
//     {
//         name: 'Michele',
//         avatar: './img/avatar_1.png',
//         visible: true,
//         messages: [
//                 {
//                 date: '10/01/2020 15:30:55',
//                 message: 'Hai portato a spasso il cane?',
//                 status: 'sent'
//                 },
//                 {
//                 date: '10/01/2020 15:50:00',
//                 message: 'Ricordati di stendere i panni',
//                 status: 'sent'
//                 },
//                 {
//                 date: '10/01/2020 16:15:22',
//                 message: 'Tutto fatto!',
//                 status: 'received'
//                 }
//         ],
//     },
//     {
//         name: 'Fabio',
//         avatar: './img/avatar_2.png',
//         visible: true,
//         messages: [
//                 {
//                 date: '20/03/2020 16:30:00',
//                 message: 'Ciao come stai?',
//                 status: 'sent'
//                 },
//                 {
//                 date: '20/03/2020 16:30:55',
//                 message: 'Bene grazie! Stasera ci vediamo?',
//                 status: 'received'
//                 },
//                 {
//                 date: '20/03/2020 16:35:00',
//                 message: 'Mi piacerebbe ma devo andare a fare la spesa.',
//                 status: 'sent'
//                 }
//         ],
//     },
//     {
//         name: 'Samuele',
//         avatar: './img/avatar_3.png',
//         visible: true,
//         messages: [
//             {
//             date: '28/03/2020 10:10:40',
//             message: 'La Marianna va in campagna',
//             status: 'received'
//             },
//             {
//             date: '28/03/2020 10:20:10',
//             message: 'Sicuro di non aver sbagliato chat?',
//             status: 'sent'
//             },
//             {
//             date: '28/03/2020 16:15:22',
//             message: 'Ah scusa!',
//             status: 'received'
//             }
//         ],
//     },
//     {
//         name: 'Alessandro B.',
//         avatar: './img/avatar_4.png',
//         visible: true,
//         messages: [
//             {
//             date: '10/01/2020 15:30:55',
//             message: 'Lo sai che ha aperto una nuova pizzeria?',
//             status: 'sent'
//             },
//             {
//             date: '10/01/2020 15:50:00',
//             message: 'Si, ma preferirei andare al cinema',
//             status: 'received'
//             }
//         ],
//     },
//     {
//         name: 'Alessandro L.',
//         avatar: './img/avatar_5.png',
//         visible: true,
//         messages: [
//             {
//             date: '10/01/2020 15:30:55',
//             message: 'Ricordati di chiamare la nonna',
//             status: 'sent'
//             },
//             {
//             date: '10/01/2020 15:50:00',
//             message: 'Va bene, stasera la sento',
//             status: 'received'
//             }
//         ],
//     },
//     {
//         name: 'Claudia',
//         avatar: './img/avatar_5.png',
//         visible: true,
//         messages: [
//             {
//             date: '10/01/2020 15:30:55',
//             message: 'Ciao Claudia, hai novità?',
//             status: 'sent'
//             },
//             {
//             date: '10/01/2020 15:50:00',
//             message: 'Non ancora',
//             status: 'received'
//             },
//             {
//             date: '10/01/2020 15:51:00',
//             message: 'Nessuna nuova, buona nuova',
//             status: 'sent'
//             }
//         ],
//     },
//     {
//         name: 'Federico',
//         avatar: './img/avatar_7.png',
//         visible: true,
//         messages: [
//             {
//             date: '10/01/2020 15:30:55',
//             message: 'Fai gli auguri a Martina che è il suo compleanno!',
//             status: 'sent'
//             },
//             {
//             date: '10/01/2020 15:50:00',
//             message: 'Grazie per avermelo ricordato, le scrivo subito!',
//             status: 'received'
//             }
//         ],
//     },
//     {
//         name: 'Davide',
//         avatar: './img/avatar_8.png',
//         visible: true,
//         messages: [
//             {
//             date: '10/01/2020 15:30:55',
//             message: 'Ciao, andiamo a mangiare la pizza stasera?',
//             status: 'received'
//             },
//             {
//             date: '10/01/2020 15:50:00',
//             message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
//             status: 'sent'
//             },
//             {
//             date: '10/01/2020 15:51:00',
//             message: 'OK!!',
//             status: 'received'
//             }
//         ],
//     }
// ]