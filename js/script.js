const app = new Vue({
    el : '#app',
    data : {
        contacts: [
            {
                name: 'franco',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2021 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2021 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
                lastSeen: '',
                lastMsg: ''
            },
            {
                name: 'andrea',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
                lastSeen: '',
                lastMsg: ''

            },
            {
                name: 'Daniele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'ciao',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'ciao',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'come va?',
                        status: 'sent'
                    }
                ],
                lastSeen: '',
                lastMsg: ''
            },
            {
                name: 'Stefano',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'Ciao Gino, come va la vita?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'Si può fare',
                        status: 'sent'
                    }
                ],
                lastSeen: '',
                lastMsg: ''
            },
            {
                name: 'anna',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '20/03/2021 16:30:00',
                        text: 'ei',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2021 16:30:55',
                        text: 'ei',
                        status: 'received'
                    },
                    {
                        date: '20/03/2021 16:35:00',
                        text: 'tutto ok?',
                        status: 'sent'
                    }
                ],
                lastSeen: '',
                lastMsg: ''
            },
            
        ],
        // Varibile per tracciare il numero dell'utente selezionato
        selUser : 0,
        // filtro per lista utenti
        userFilter : '',
        // testo del messaggio
        userMessage : ''
    },
    methods: {
        // funzione che mi seleziona l'utente 
        selectUser : function(index) {
            this.selUser = index;
        },

        // funzione che filtra la lista di utenti input
        filterUser : function(){
            this.contacts.forEach(element => {
                const userListSrc = element.name.toLowerCase();
                const filter = this.userFilter.toLowerCase();
                const found = userListSrc.indexOf(filter);
                element.visible = (found == -1) ? false : true;
            });
        },

        // funzione che mi inserisce il messaggio scritto SOLO SE c'è del testo all'interno dell'input
        insertMsg : function() {
            let msg = this.userMessage;
            let arrayMsg = this.contacts[this.selUser].messages;

            if (msg != '') {
                arrayMsg.push({
                    date: this.actualDT(),
                    text: msg,
                    status: 'sent'
                });
        // dopo aver inviato il messaggio, questa funzione si occupa di salvarlo all'interno dell'array e restituire una risposta dopo 1 secondo
                if(msg == ''){
                    arrayMsg.push({
                        date: app.actualDT(),
                        text: 'ei',
                        status: 'received'
                    });
                } else {
                    setTimeout(function(){ 
                        arrayMsg.push({
                            date: app.actualDT(),
                            text: 'ok',
                            status: 'received'
                        });
    
                        app.updateLastSeen();
                    }, 1000);
                }

                msg = '';
                this.userMessage = msg;
            }

            this.updateLastSeen();
        },       

     },
    
});

  