new Vue({
    el: '#app',
    data: {
        interest_rate:0,
        price:2088000,
        years:1

    },
    methods: {
        replace_rate_0: function(){
            this.interest_rate = 0;
        },

        replace_rate_4: function(){
            this.interest_rate = 4;
        },

        replace_rate_8: function(){
            this.interest_rate = 8;
        },

        replace_years_1: function(){
            this.years = 1;
        },

        replace_years_2: function(){
            this.years = 2;
        },

        replace_years_3: function(){
            this.years = 3;
        },

        replace_years_4: function(){
            this.years = 4;
        },

        replace_years_5: function(){
            this.years = 5;
        },

        replace_years_6: function(){
            this.years = 6;
        },

        calculate_PIM: function(){
            return this.years*12;
        },
        
        calculate_IPY: function(){
            return this.interest_rate * this.price * 0.01;
        },

        calculate_IPM: function(){
            return (this.interest_rate * this.price * 0.01 / 12).toFixed(2);
        },

        calculate_TIDM: function(){
            return (this.interest_rate * this.price * 0.01 / 12) * (this.years*12);
        },

        calculate_TP: function(){
            return (this.interest_rate * this.price * 0.01 / 12) * (this.years*12) + this.price;
        },

        calculate_TPM: function(){
            return (((this.interest_rate * this.price * 0.01 / 12) * (this.years*12) + this.price) / (this.years * 12)).toFixed(2);
        },
    }


})