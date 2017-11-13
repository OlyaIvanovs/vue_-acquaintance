var hangman = new Vue({
    el: '#hangman',
    data: {
        letter: '',
        guesses_list: [],
        correct_guesses_list: [],
        msg: "Please enter a letter",
        msgPlayer1: "Player 1, give me a word, please!",
        word: '',
        start: true,
        finish: false
    },
    methods: {
        enterLetter: function() {
            // check if player entered only 1 symbol
            if (this.letter.length > 1) {
                this.msg = "Please enter only one symbol!";
                this.letter = '';
                return;
            }
            // check if player entered a letter
            if (!/^[a-z]+$/i.test(this.letter)) {
                this.msg = "Invalid input!! Try Again";
                this.letter = '';
                return;
            }
            // check if player entered a letter that he entered already
            if (this.guesses_list.includes(this.letter)) {
                this.msg = "You tried this already. Guess another letter";
                this.letter = '';
                return;
            }

            this.guesses_list.push(this.letter);
            var letterPos = this.word.indexOf(this.letter);
            if (letterPos < 0) {
                this.msg = "Sorry! You are wrong;( Try again.";
            } else {
                this.msg = "Yaa! Your are right! Try the next letter!";
                this.correct_guesses_list.push(letterPos);
                var len = this.word.length;
                for(var i = letterPos+1; i < len; i++) {
                    if (this.word[i] === this.letter) {
                        this.correct_guesses_list.push(i);
                    }
                }
            }

            if (this.correct_guesses_list.length == this.word.length) {
                this.msg = "Congratulations! You win!!";
                this.finish = true;
            }
            this.letter = '';

        },
        enterWord: function() {
            // check if player entered more than 1 symbol
            if (this.word.length <= 1) {
                this.msgPlayer1 = "Please enter more than one symbol!";
                this.word = '';
                return;
            }

            // check if player entered only letters
            if (!/^[a-z]+$/i.test(this.word)) {
                this.msgPlayer1 = "Invalid input!! Try Again";
                this.word = '';
                return;
            }

            this.msgPlayer1 = "Cool!! Thank you!";
            setTimeout(function() {
                hangman.start = false;
            }, 700);    
        },
        inGuessesList: function(index) {
            var pos = this.correct_guesses_list.indexOf(index);
            if (pos > -1) {
                return true;
            }
            return false;
        },
        startGame: function() {
            this.msgPlayer1 = "Player 1, give me a word, please!";
            this.msg = "Please enter a letter";
            this.word = '';
            this.start = true;
            this.finish = false;
            this.letter = '';
            this.guesses_list = [];
            this.correct_guesses_list = [];
        }
    },
    computed: {

    }
}) 